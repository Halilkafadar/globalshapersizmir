"""
Quick Test Script for ShapeBot
Tests all three models with sample queries
"""
import asyncio
import httpx
import json

BASE_URL = "http://localhost:8000"

async def test_chat(message: str, mode: str = "auto", session_id: str = "test_001"):
    """Send a test message to ShapeBot"""
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                f"{BASE_URL}/api/v1/chat",
                json={
                    "session_id": session_id,
                    "message": message,
                    "lang": "tr",
                    "mode": mode
                },
                timeout=30.0
            )
            
            if response.status_code == 200:
                data = response.json()
                print(f"\n✅ Model: {data['meta']['model_used']}")
                print(f"⏱️  Latency: {data['meta']['latency_ms']}ms")
                print(f"🎯 Category: {data['meta']['routing_category']}")
                print(f"💬 Reply:\n{data['reply'][:300]}...")
                print("-" * 60)
                return data
            else:
                print(f"❌ Error {response.status_code}: {response.text}")
                
        except Exception as e:
            print(f"❌ Request failed: {str(e)}")

async def main():
    print("🤖 ShapeBot Test Suite")
    print("=" * 60)
    
    # Test 1: Technical query (should route to Groq)
    print("\n📝 Test 1: Technical Query")
    await test_chat(
        "Python ile basit bir hesap makinesi nasıl yaparım?",
        mode="auto"
    )
    
    await asyncio.sleep(1)
    
    # Test 2: Creative query (should route to DeepInfra)
    print("\n🎨 Test 2: Creative Query")
    await test_chat(
        "Yapay zeka hakkında kısa bir hikaye yaz",
        mode="auto"
    )
    
    await asyncio.sleep(1)
    
    # Test 3: Short query (should route to HF Falcon)
    print("\n⚡ Test 3: Short Query")
    await test_chat(
        "Merhaba!",
        mode="auto"
    )
    
    await asyncio.sleep(1)
    
    # Test 4: Force Groq
    print("\n🎯 Test 4: Force Groq Model")
    await test_chat(
        "Global Shapers nedir?",
        mode="force_groq"
    )
    
    print("\n✅ All tests completed!")

if __name__ == "__main__":
    asyncio.run(main())
