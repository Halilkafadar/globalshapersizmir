"""
DeepInfra API Client (Secondary - Mistral-7B)
Creative and conversational queries
"""
import time
import httpx
from typing import Dict, Any
from app.config import settings

class DeepInfraClient:
    def __init__(self):
        self.api_key = settings.DEEPINFRA_API_KEY
        self.base_url = "https://api.deepinfra.com/v1/openai"
        self.model = "mistralai/Mistral-7B-Instruct-v0.2"
        self.timeout = settings.SECONDARY_MODEL_TIMEOUT
        
    async def call_deepinfra(
        self,
        prompt: str,
        system_message: str,
        temperature: float = 0.7,
        max_tokens: int = 1024
    ) -> Dict[str, Any]:
        """
        Call DeepInfra API with Mistral-7B
        Optimized for creative and conversational responses
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
                            {"role": "user", "content": f"Creative mode ON: {prompt}"}
                        ],
                        "temperature": temperature,
                        "max_tokens": max_tokens,
                        "top_p": 0.95
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

deepinfra_client = DeepInfraClient()
