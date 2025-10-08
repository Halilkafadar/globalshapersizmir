# ShapeBot AI Chatbot Backend

🤖 **Multi-model AI chatbot with intelligent routing** for the Mindcraft educational platform.

## Features

✅ **3-Model Architecture**: Groq (Llama-3.1-70B), DeepInfra (Mistral-7B), Hugging Face (Falcon-7B)
✅ **Intelligent Routing**: Auto-classify queries → technical/creative/casual
✅ **Automatic Fallback**: Primary → Secondary → Fallback chain
✅ **Age-Appropriate**: Safe, educational responses for 9-17 age group
✅ **Turkish First**: Native Turkish support with multilingual capability
✅ **Production Ready**: Rate limiting, logging, error handling

---

## Quick Start

### 1. Environment Setup

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure API Keys

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your API keys:
# - GROQ_API_KEY
# - DEEPINFRA_API_KEY
# - HF_API_KEY
```

### 4. Run Development Server

```bash
# From backend/ directory
python -m app.main

# Or with uvicorn directly
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Server will start at: **http://localhost:8000**

API Docs: **http://localhost:8000/docs**

---

## API Usage

### POST `/api/v1/chat`

**Request:**
```json
{
  "session_id": "user_123",
  "message": "Yapay zeka nedir?",
  "lang": "tr",
  "mode": "auto",
  "conversation_history": []
}
```

**Response:**
```json
{
  "reply": "Yapay zeka (AI), bilgisayarların insan gibi düşünmesini...",
  "meta": {
    "model_used": "llama-3.1-70b-versatile",
    "latency_ms": 543.21,
    "tokens_used": 156,
    "routing_category": "casual",
    "session_id": "user_123"
  }
}
```

### Modes

- `auto` - Automatic routing (default)
- `force_groq` - Force Groq Llama model
- `force_deepinfra` - Force DeepInfra Mistral
- `force_hf` - Force Hugging Face Falcon

---

## Testing

### cURL Examples

**Basic Query:**
```bash
curl -X POST "http://localhost:8000/api/v1/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_001",
    "message": "Merhaba ShapeBot!",
    "lang": "tr"
  }'
```

**Technical Query (Auto-routes to Groq):**
```bash
curl -X POST "http://localhost:8000/api/v1/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_002",
    "message": "Python ile basit bir hesap makinesi nasıl yaparım?",
    "mode": "auto"
  }'
```

**Creative Query (Auto-routes to DeepInfra):**
```bash
curl -X POST "http://localhost:8000/api/v1/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_003",
    "message": "Yapay zeka hakkında kısa bir hikaye yaz",
    "mode": "auto"
  }'
```

---

## Architecture

```
┌─────────────┐
│   Client    │ (Next.js Frontend)
└──────┬──────┘
       │
       ▼
┌──────────────────────────────────┐
│     FastAPI Router               │
│  /api/v1/chat endpoint           │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│   Query Classification           │
│  technical/creative/casual/short │
└──────┬───────────────────────────┘
       │
       ├──► Primary Model (Groq Llama-3.1-70B)
       │
       ├──► Secondary Model (DeepInfra Mistral-7B)
       │
       └──► Fallback Model (HF Falcon-7B)
```

---

## Project Structure

```
backend/
├── app/
│   ├── main.py                 # FastAPI app
│   ├── config.py               # Settings & env vars
│   ├── routers/
│   │   └── chat.py             # Chat endpoint & routing logic
│   ├── clients/
│   │   ├── groq_client.py      # Groq API wrapper
│   │   ├── deepinfra_client.py # DeepInfra API wrapper
│   │   └── hf_client.py        # Hugging Face API wrapper
│   ├── utils/
│   │   ├── prompting.py        # System prompts & templates
│   │   └── routing.py          # Query classification logic
│   └── middleware/
│       └── rate_limit.py       # Rate limiting (TODO)
├── requirements.txt
├── .env.example
└── README.md
```

---

## Getting API Keys

### 1. Groq (Primary - FREE)
- Visit: https://console.groq.com/keys
- Sign up → Create API key
- Add to `.env`: `GROQ_API_KEY=gsk_xxx...`

### 2. DeepInfra (Secondary - FREE tier available)
- Visit: https://deepinfra.com/dash/api_keys
- Sign up → Generate key
- Add to `.env`: `DEEPINFRA_API_KEY=xxx...`

### 3. Hugging Face (Fallback - FREE)
- Visit: https://huggingface.co/settings/tokens
- Create account → New token
- Add to `.env`: `HF_API_KEY=hf_xxx...`

---

## Next Steps

### Frontend Integration

Add to your Next.js app (`pages/api/shapebot.ts`):

```typescript
export default async function handler(req, res) {
  const response = await fetch('http://localhost:8000/api/v1/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      session_id: req.session.id,
      message: req.body.message,
      lang: 'tr'
    })
  });
  
  const data = await response.json();
  res.json(data);
}
```

### Production Deployment

1. Set `DEBUG=False` in `.env`
2. Use production ASGI server (Gunicorn + Uvicorn workers)
3. Add Redis for rate limiting and session storage
4. Deploy to Railway, Render, or AWS

---

## Support

For API key help or deployment questions, just ask! 🚀
