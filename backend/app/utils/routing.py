"""
Routing Logic - Determine which model to use
Based on query classification and intent detection
"""
import re
from typing import Dict, Tuple

def classify_query(message: str) -> Dict[str, any]:
    """
    Classify user query to determine best model
    
    Returns:
        {
            "category": "technical|creative|casual|short",
            "primary": "groq|deepinfra|hf",
            "confidence": float
        }
    """
    message_lower = message.lower()
    
    # Technical keywords
    technical_keywords = [
        "kod", "code", "program", "hata", "error", "debug", "implement",
        "algoritma", "function", "değişken", "variable", "class", "python",
        "javascript", "html", "css", "api", "database", "sql"
    ]
    
    # Creative keywords
    creative_keywords = [
        "hikaye", "story", "yaratıcı", "creative", "hayal", "imagine",
        "şiir", "poem", "resim", "görsel", "image", "prompt", "sanat",
        "art", "tasarım", "design", "fikir", "idea"
    ]
    
    # Short query indicators
    is_short = len(message.split()) <= 5
    
    # Count matches
    technical_score = sum(1 for kw in technical_keywords if kw in message_lower)
    creative_score = sum(1 for kw in creative_keywords if kw in message_lower)
    
    # Decision logic
    if technical_score > creative_score and technical_score > 0:
        return {
            "category": "technical",
            "primary": "groq",
            "secondary": "deepinfra",
            "fallback": "hf",
            "confidence": min(technical_score / 3.0, 1.0)
        }
    
    elif creative_score > 0:
        return {
            "category": "creative",
            "primary": "deepinfra",
            "secondary": "groq",
            "fallback": "hf",
            "confidence": min(creative_score / 3.0, 1.0)
        }
    
    elif is_short:
        return {
            "category": "short",
            "primary": "hf",
            "secondary": "groq",
            "fallback": "deepinfra",
            "confidence": 0.8
        }
    
    else:
        return {
            "category": "casual",
            "primary": "groq",
            "secondary": "deepinfra",
            "fallback": "hf",
            "confidence": 0.5
        }

def determine_route(message: str, forced_mode: str = None) -> Dict:
    """
    Determine routing strategy
    
    Args:
        message: User query
        forced_mode: Force specific model (groq, deepinfra, hf) or None
        
    Returns:
        Routing configuration dict
    """
    if forced_mode:
        # Forced mode - use specified model
        return {
            "primary": forced_mode,
            "secondary": "groq" if forced_mode != "groq" else "deepinfra",
            "fallback": "hf",
            "category": "forced",
            "confidence": 1.0
        }
    
    # Auto-classification
    return classify_query(message)

def should_use_rag(message: str) -> bool:
    """
    Determine if RAG (Retrieval Augmented Generation) should be used
    """
    rag_keywords = [
        "mindcraft nedir", "global shapers", "proje", "module",
        "eğitim", "kurs", "öğren", "nasıl"
    ]
    
    message_lower = message.lower()
    return any(kw in message_lower for kw in rag_keywords)
