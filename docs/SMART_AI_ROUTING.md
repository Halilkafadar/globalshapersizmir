# 🤖 Smart AI Routing System

Esnek ve güvenilir AI chatbot sistemi - Gemini ve OpenRouter arasında otomatik geçiş.

## 🎯 Özellikler

### 1. **Multi-Provider Support**
- ✅ Google Gemini Pro
- ✅ OpenRouter (Llama 3.1 8B - Free)
- ✅ Automatic fallback system

### 2. **Smart Routing Modes**

#### Auto Mode (Varsayılan)
```env
AI_PROVIDER=auto
```
- Saat bazlı load balancing
- Çift saatlerde: Gemini
- Tek saatlerde: OpenRouter
- Eşit dağıtım garantisi

#### Gemini Mode
```env
AI_PROVIDER=gemini
```
- Her zaman Gemini kullanır
- Hata durumunda OpenRouter'a fallback

#### OpenRouter Mode
```env
AI_PROVIDER=openrouter
```
- Her zaman OpenRouter kullanır
- Hata durumunda Gemini'ye fallback

### 3. **Automatic Fallback**
```
Primary Provider Failed → Fallback Provider → Response
```

Her iki provider da başarısız olursa:
```
503 Service Unavailable
```

## 📊 Sistem Mimarisi

```
User Request
    ↓
/api/smart-chat
    ↓
Provider Selection Logic
    ├─→ Auto Mode (hour % 2)
    ├─→ Gemini Mode
    └─→ OpenRouter Mode
    ↓
Try Primary Provider
    ├─→ Success ✅
    └─→ Failure ❌
        ↓
    Try Fallback Provider
        ├─→ Success ✅
        └─→ Failure ❌
            ↓
        Error Response
```

## 🔧 Konfigürasyon

### Environment Variables (.env.local)

```bash
# Google Gemini
GEMINI_API_KEY=your_gemini_key

# OpenRouter
OPENROUTER_API_KEY=your_openrouter_key

# Provider Selection
AI_PROVIDER=auto  # auto, gemini, or openrouter
```

### API Endpoint

**POST** `/api/smart-chat`

Request:
```json
{
  "message": "Hello, AI!",
  "provider": "auto"  // optional: auto, gemini, openrouter
}
```

Response:
```json
{
  "response": "Hello! How can I help you?",
  "provider": "gemini"  // or "openrouter (fallback)"
}
```

## 🎨 Kullanım Örnekleri

### AI Chat Component
```typescript
const response = await fetch('/api/smart-chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage })
})

const data = await response.json()
console.log('Response:', data.response)
console.log('Provider:', data.provider)
```

### ShapeBot Component
```typescript
const response = await fetch('/api/smart-chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    message: userMessage,
    provider: 'gemini'  // Force specific provider
  })
})
```

## 📈 Load Balancing

Auto mode'da yük dağılımı:

| Saat | Provider |
|------|----------|
| 00:00 | Gemini |
| 01:00 | OpenRouter |
| 02:00 | Gemini |
| 03:00 | OpenRouter |
| ... | ... |

## 🔒 Güvenlik

- ✅ API keys server-side only (.env.local)
- ✅ Rate limiting (provider tarafında)
- ✅ Error handling ve fallback
- ✅ Input validation

## 🚀 Performans

| Provider | Avg Response Time | Free Tier |
|----------|------------------|-----------|
| Gemini Pro | ~1-2 seconds | ✅ Yes |
| OpenRouter (Llama 3.1) | ~2-3 seconds | ✅ Yes |

## 📝 API Limits

### Gemini Pro
- **Rate Limit**: 60 requests/minute
- **Daily Quota**: Unlimited (free tier)
- **Max Tokens**: ~2048 output

### OpenRouter (Free Models)
- **Rate Limit**: Varies by model
- **Daily Quota**: Model dependent
- **Max Tokens**: Model dependent

## 🛠️ Troubleshooting

### "All AI providers failed"
1. Check API keys in `.env.local`
2. Verify API keys are valid
3. Check network connection
4. Review console logs

### Provider not switching
1. Check `AI_PROVIDER` in `.env.local`
2. Restart development server
3. Clear browser cache

### Slow responses
1. Check internet connection
2. Try different provider manually
3. Check API status pages

## 📚 Provider Comparison

| Feature | Gemini Pro | OpenRouter |
|---------|-----------|------------|
| Speed | ⚡⚡⚡ Fast | ⚡⚡ Medium |
| Quality | 🌟🌟🌟🌟🌟 Excellent | 🌟🌟🌟🌟 Good |
| Free Tier | ✅ Yes | ✅ Yes (limited) |
| Models | Gemini Pro | Multiple LLMs |
| Setup | Easy | Easy |

## 🎯 Best Practices

1. **Use Auto Mode** for balanced load
2. **Monitor logs** to see which provider is used
3. **Set provider manually** for specific use cases
4. **Test fallback** by temporarily disabling one provider

## 🔄 Future Improvements

- [ ] Add more providers (Anthropic, Cohere)
- [ ] Implement rate limiting per provider
- [ ] Add response caching
- [ ] Provider health monitoring
- [ ] User preference saving
- [ ] A/B testing between providers

## 📖 Documentation

- [Gemini API Docs](https://ai.google.dev/docs)
- [OpenRouter API Docs](https://openrouter.ai/docs)

## 🤝 Contributing

Feel free to add more providers or improve the routing logic!

---

**Current Version**: 1.0.0  
**Last Updated**: October 8, 2025  
**Status**: ✅ Production Ready
