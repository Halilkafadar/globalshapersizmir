# 🎨 AI Playground API Setup

## AI Art Generation (Hugging Face)

### 1. Get Your Free Hugging Face API Key

1. Go to [Hugging Face](https://huggingface.co)
2. Create a free account (or sign in)
3. Go to Settings → [Access Tokens](https://huggingface.co/settings/tokens)
4. Click **"New token"**
5. Give it a name (e.g., "Mindcraft")
6. Select **"Read"** permission
7. Click **"Generate token"**
8. Copy your token (starts with `hf_...`)

### 2. Add to Environment Variables

Open `.env.local` and replace:
```bash
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
```

With your actual key:
```bash
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Restart Development Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

## Features Now Working

### ✅ AI Art Generator
- **Model**: Stable Diffusion XL Base 1.0
- **Provider**: Hugging Face Inference API
- **Free Tier**: Yes (with rate limits)
- **Usage**: Text-to-image generation

### ✅ AI Chat
- **Model**: Groq Llama-3.3-70B
- **Provider**: Groq (via backend)
- **Free Tier**: Yes (100 requests/day)
- **Usage**: Natural language conversations

### ✅ Code Assistant
- **Execution**: Python sandbox (backend)
- **Security**: Sandboxed with blacklist filtering
- **Free**: Yes (runs on your server)
- **Usage**: Run Python code safely

## API Limits

### Hugging Face (Free Tier)
- **Rate Limit**: ~1000 requests/month
- **Model Loading**: First request may take 20-30 seconds (cold start)
- **Concurrent Requests**: Limited
- **Image Size**: 1024x1024 pixels

### Groq (Free Tier)
- **Rate Limit**: 100 requests/day
- **Speed**: Very fast (~500 tokens/second)
- **Model**: Llama-3.3-70B

### Python Code Execution
- **No API needed**: Runs on backend
- **Security**: 
  - Blacklisted dangerous modules (os, sys, subprocess)
  - No file I/O
  - No network access
  - Maximum 10,000 characters
- **Allowed**: Basic Python operations, math, data structures

## Troubleshooting

### "Model is loading" Error
- **Cause**: Hugging Face models sleep after inactivity
- **Solution**: Wait 20-30 seconds and try again
- **Tip**: Use popular models for faster response

### "API key not configured"
- **Check**: `.env.local` has correct key
- **Restart**: Stop server and run `npm run dev` again
- **Format**: Key should start with `hf_`

### Backend Not Running
```bash
cd backend
python -m uvicorn app.main:app --reload --port 8000
```

### Code Execution Errors
- **Forbidden keywords**: Don't use `os`, `sys`, `open`, etc.
- **Syntax errors**: Check Python syntax
- **Imports**: Only built-in functions allowed

## Security Notes

⚠️ **Code Execution Safety**:
- Runs in sandboxed environment
- Cannot access files
- Cannot make network requests
- Cannot import dangerous modules
- Suitable for educational purposes

⚠️ **API Keys**:
- Never commit `.env.local` to git
- Keep your API keys private
- Rotate keys if exposed

## Upgrade Options

### For Production:
1. **OpenAI DALL-E 3**: Better quality images
2. **Replicate**: More model choices
3. **Judge0 API**: Full code execution with multiple languages
4. **Custom GPU Server**: No rate limits

### Cost Estimates:
- **OpenAI DALL-E 3**: ~$0.04 per image
- **Replicate Stable Diffusion**: ~$0.0023 per image
- **Judge0 Basic**: Free tier available

## Additional Resources

- [Hugging Face Models](https://huggingface.co/models)
- [Groq Documentation](https://console.groq.com/docs)
- [FastAPI Code Execution](https://fastapi.tiangolo.com/)
