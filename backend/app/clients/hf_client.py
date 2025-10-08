"""
Hugging Face API Client (Fallback - Falcon-7B)
Fast, lightweight responses for simple queries
"""
import time
import httpx
from typing import Dict, Any
from app.config import settings

class HuggingFaceClient:
    def __init__(self):
        self.api_key = settings.HF_API_KEY
        self.model = "tiiuae/falcon-7b-instruct"
        self.api_url = f"https://api-inference.huggingface.co/models/{self.model}"
        self.timeout = settings.FALLBACK_MODEL_TIMEOUT
        
    async def call_hf(
        self,
        prompt: str,
        system_message: str,
        temperature: float = 0.0,
        max_tokens: int = 512
    ) -> Dict[str, Any]:
        """
        Call Hugging Face Inference API with Falcon-7B
        Optimized for quick, short responses
        """
        start_time = time.time()
        
        # Combine system and user message for Falcon
        full_prompt = f"{system_message}\n\nUser: {prompt}\nAssistant:"
        
        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.post(
                    self.api_url,
                    headers={
                        "Authorization": f"Bearer {self.api_key}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "inputs": full_prompt,
                        "parameters": {
                            "temperature": temperature,
                            "max_new_tokens": max_tokens,
                            "top_p": 0.9,
                            "do_sample": temperature > 0,
                            "return_full_text": False
                        }
                    }
                )
                
                response.raise_for_status()
                data = response.json()
                
                latency_ms = (time.time() - start_time) * 1000
                
                # HF returns array of results
                generated_text = data[0]["generated_text"] if isinstance(data, list) else data.get("generated_text", "")
                
                return {
                    "text": generated_text.strip(),
                    "tokens_used": len(generated_text.split()),  # Approximate
                    "latency_ms": round(latency_ms, 2),
                    "model_version": self.model,
                    "success": True,
                    "error": None
                }
                
        except httpx.TimeoutException:
            return {
                "text": "",
                "tokens_used": 0,
                "latency_ms": (time.time() - start_time) * 1000,
                "model_version": self.model,
                "success": False,
                "error": "timeout"
            }
        except Exception as e:
            return {
                "text": "",
                "tokens_used": 0,
                "latency_ms": (time.time() - start_time) * 1000,
                "model_version": self.model,
                "success": False,
                "error": str(e)
            }

hf_client = HuggingFaceClient()
