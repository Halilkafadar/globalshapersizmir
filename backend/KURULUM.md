# ShapeBot Backend - Hızlı Kurulum Talimatları

## ✅ Kurulum Tamamlandı!

API Keyleri `.env` dosyasına eklendi:
- ✅ Groq API Key
- ✅ DeepInfra API Key  
- ✅ Hugging Face API Key

---

## 🚀 Backend'i Başlatmak İçin:

### Yöntem 1: PowerShell (Önerilen)

```powershell
# Backend klasörüne git
cd c:\Users\x\Desktop\mindcraft\backend

# Conda environment oluştur (ilk sefer)
conda create -n shapebot python=3.11 -y
conda activate shapebot

# Paketleri yükle
pip install fastapi uvicorn[standard] httpx pydantic pydantic-settings python-dotenv

# Serveri başlat
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Yöntem 2: Batch Script

```cmd
# Backend klasörüne sağ tık
# "start_backend.bat" çift tıkla
```

---

## 🧪 Test Etmek İçin:

Backend başladıktan sonra (http://localhost:8000):

### 1. Browser'da API Docs:
```
http://localhost:8000/docs
```

### 2. Test Script Çalıştır:
```powershell
# Yeni terminal aç
cd c:\Users\x\Desktop\mindcraft\backend
conda activate shapebot
python test_shapebot.py
```

### 3. Manuel cURL Test:
```powershell
curl -X POST "http://localhost:8000/api/v1/chat" `
  -H "Content-Type: application/json" `
  -d '{
    "session_id": "test_001",
    "message": "Merhaba ShapeBot!",
    "lang": "tr"
  }'
```

---

## 📊 Beklenen Çıktı:

```json
{
  "reply": "Merhaba! Ben ShapeBot, Mindcraft eğitim asistanınım...",
  "meta": {
    "model_used": "llama-3.1-70b-versatile",
    "latency_ms": 543.21,
    "tokens_used": 156,
    "routing_category": "casual",
    "session_id": "test_001"
  }
}
```

---

## 🎯 Sonraki Adımlar:

### Frontend Entegrasyonu (Next.js):

1. **API Route Oluştur** (`pages/api/shapebot.ts`):

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const response = await fetch('http://localhost:8000/api/v1/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: req.cookies.session_id || 'guest',
        message: req.body.message,
        lang: 'tr',
        mode: 'auto'
      })
    })

    const data = await response.json()
    res.status(200).json(data)
    
  } catch (error) {
    res.status(500).json({ error: 'Backend unavailable' })
  }
}
```

2. **Chat Component Oluştur** (`components/ShapeBot.tsx`):

```tsx
import { useState } from 'react'

export default function ShapeBot() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    setLoading(true)
    
    const response = await fetch('/api/shapebot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
    
    const data = await response.json()
    setChat([...chat, { user: message, bot: data.reply }])
    setMessage('')
    setLoading(false)
  }

  return (
    <div className="shapebot-container">
      {/* Chat UI buraya */}
    </div>
  )
}
```

---

## 🔧 Troubleshooting:

**Port zaten kullanılıyor:**
```powershell
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

**Module bulunamıyor:**
```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

**API Key hataları:**
```powershell
# .env dosyasını kontrol et
cat .env
```

---

## 📝 Model Routing Örnekleri:

| Sorgu | Model | Neden |
|-------|-------|-------|
| "Python kod örneği" | Groq Llama | Technical keywords |
| "Hikaye yaz" | DeepInfra Mistral | Creative keywords |
| "Merhaba" | HF Falcon | Short query |
| mode=force_groq | Groq | Forced |

---

Hazır! Backend'i başlatın ve test edin! 🚀
