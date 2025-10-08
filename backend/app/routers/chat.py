"""
Chat Router - Main chatbot endpoint
Handles message routing, model fallback, and response normalization
"""
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import Optional, List, Dict
import time
import logging

from app.clients.groq_client import groq_client
from app.clients.deepinfra_client import deepinfra_client
from app.clients.hf_client import hf_client
from app.utils.routing import determine_route, should_use_rag
from app.utils.prompting import get_system_prompt, format_conversation_history

logger = logging.getLogger(__name__)

router = APIRouter()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    session_id: str
    message: str
    lang: str = "tr"
    mode: Optional[str] = None  # auto, force_groq, force_deepinfra, force_hf
    conversation_history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    reply: str
    meta: Dict

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """
    Main chat endpoint with intelligent model routing
    
    Flow:
    1. Determine routing strategy
    2. Try primary model
    3. Fallback to secondary if primary fails
    4. Fallback to tertiary if secondary fails
    5. Return normalized response
    """
    start_time = time.time()
    
    # Extract mode
    forced_mode = None
    if request.mode and request.mode.startswith("force_"):
        forced_mode = request.mode.replace("force_", "")
    
    # Determine routing
    route = determine_route(request.message, forced_mode)
    
    logger.info(f"Session {request.session_id}: Routing to {route['primary']} (category: {route['category']})")
    
    # Get system prompt
    system_prompt = get_system_prompt(route['primary'])
    
    # Add conversation history if available
    if request.conversation_history:
        context = format_conversation_history(request.conversation_history)
        full_prompt = f"{context}\n\n{request.message}"
    else:
        full_prompt = request.message
    
    # Try primary model
    response = await call_model(route['primary'], full_prompt, system_prompt)
    
    # Fallback chain
    if not response['success']:
        logger.warning(f"Primary model {route['primary']} failed: {response['error']}")
        response = await call_model(route['secondary'], full_prompt, system_prompt)
        
        if not response['success']:
            logger.error(f"Secondary model {route['secondary']} failed: {response['error']}")
            response = await call_model(route['fallback'], full_prompt, system_prompt)
    
    # Calculate total latency
    total_latency = (time.time() - start_time) * 1000
    
    # If all models failed
    if not response['success']:
        raise HTTPException(
            status_code=503,
            detail="All models temporarily unavailable. Please try again shortly."
        )
    
    # Return normalized response
    return ChatResponse(
        reply=response['text'] or "Özür dilerim, şu anda yanıt veremiyorum. Lütfen tekrar deneyin.",
        meta={
            "model_used": response['model_version'],
            "latency_ms": round(total_latency, 2),
            "tokens_used": response['tokens_used'],
            "routing_category": route['category'],
            "session_id": request.session_id
        }
    )

async def call_model(model_name: str, prompt: str, system_message: str) -> Dict:
    """Call appropriate model client"""
    try:
        if model_name == "groq":
            return await groq_client.call_groq(prompt, system_message)
        elif model_name == "deepinfra":
            return await deepinfra_client.call_deepinfra(prompt, system_message)
        elif model_name == "hf":
            return await hf_client.call_hf(prompt, system_message)
        else:
            return {"success": False, "error": "unknown_model", "text": "", "tokens_used": 0, "latency_ms": 0, "model_version": "none"}
    except Exception as e:
        logger.error(f"Error calling {model_name}: {str(e)}")
        return {"success": False, "error": str(e), "text": "", "tokens_used": 0, "latency_ms": 0, "model_version": model_name}
