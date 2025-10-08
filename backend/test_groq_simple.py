"""
Simple Groq API Test
"""
import asyncio
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

async def test_groq():
    api_key = os.getenv("GROQ_API_KEY")
    
    if not api_key:
        print("❌ GROQ_API_KEY bulunamadı!")
        return
    
    print(f"✅ API Key bulundu: {api_key[:20]}...")
    
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "llama-3.3-70b-versatile",  # Updated model
        "messages": [
            {
                "role": "system",
                "content": "Sen ShapeBot'sun. Türkçe konuşan bir eğitim asistanısın."
            },
            {
                "role": "user",
                "content": "Merhaba!"
            }
        ],
        "temperature": 0.7,
        "max_tokens": 500
    }
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            print("📡 Groq API'ye bağlanıyor...")
            response = await client.post(url, json=payload, headers=headers)
            
            print(f"📊 Status Code: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                reply = data['choices'][0]['message']['content']
                print(f"\n✅ BAŞARILI!\n\nShapeBot: {reply}\n")
            else:
                print(f"❌ HATA: {response.status_code}")
                print(f"Response: {response.text}")
                
    except Exception as e:
        print(f"❌ İstisnai Hata: {str(e)}")

if __name__ == "__main__":
    asyncio.run(test_groq())
