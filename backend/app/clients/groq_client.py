"""
Groq API Client (Primary - Llama-3.1-70B)
High-performance inference for technical queries
"""
import time
import httpx
from typing import Dict, Any, Optional
from app.config import settings

class GroqClient:
    def __init__(self):
        self.api_key = settings.GROQ_API_KEY
        self.base_url = "https://api.groq.com/openai/v1"
        self.model = "llama-3.3-70b-versatile"  # Updated model
        self.timeout = settings.PRIMARY_MODEL_TIMEOUT
        
    async def call_groq(
        self,
        prompt: str,
        system_message: str,
        temperature: float = 0.1,
        max_tokens: int = 1024,
        stream: bool = False
    ) -> Dict[str, Any]:
        """
        Call Groq API with Llama-3.1-70B
        
        Args:
            prompt: User message
            system_message: System instruction
            temperature: Sampling temperature (0.0-1.0)
            max_tokens: Maximum response length
            stream: Enable streaming response
            
        Returns:
            {
                "text": "model response",
                "tokens_used": int,
                "latency_ms": float,
                "model_version": str,
                "success": bool,
                "error": Optional[str]
            }
        """
        start_time = time.time()
        
        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.post(
                    f"{self.base_url}/chat/completions",
                    headers={
                        "Authorization": f"Bearer {self.api_key}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "model": self.model,
                        "messages": [
                            {"role": "system", "content": system_message},
                            {"role": "user", "content": prompt}
                        ],
                        "temperature": temperature,
                        "max_tokens": max_tokens,
                        "top_p": 0.95,
                        "stream": stream
                    }
                )
                
                response.raise_for_status()
                data = response.json()
                
                latency_ms = (time.time() - start_time) * 1000
                
                return {
                    "text": data["choices"][0]["message"]["content"],
                    "tokens_used": data.get("usage", {}).get("total_tokens", 0),
                    "latency_ms": round(latency_ms, 2),
                    "model_version": self.model,
                    "success": True,
                    "error": None,
                    "finish_reason": data["choices"][0].get("finish_reason")
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
        except httpx.HTTPStatusError as e:
            return {
                "text": "",
                "tokens_used": 0,
                "latency_ms": (time.time() - start_time) * 1000,
                "model_version": self.model,
                "success": False,
                "error": f"http_{e.response.status_code}"
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

# Singleton instance
groq_client = GroqClient()
