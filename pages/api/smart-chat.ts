import type { NextApiRequest, NextApiResponse } from 'next'

type ChatResponse = {
  response?: string
  provider?: string
  error?: string
  meta?: any
}

type AIProvider = 'gemini' | 'openrouter' | 'auto'

// Provider selection logic
function selectProvider(userPreference?: AIProvider): 'gemini' | 'openrouter' {
  const preference = userPreference || (process.env.AI_PROVIDER as AIProvider) || 'auto'
  
  if (preference === 'gemini') return 'gemini'
  if (preference === 'openrouter') return 'openrouter'
  
  // Auto mode: Load balancing based on time
  const hour = new Date().getHours()
  return hour % 2 === 0 ? 'gemini' : 'openrouter'
}

// Gemini API call
async function callGemini(message: string): Promise<string> {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY

  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured')
  }

  // UYGULAMA GÜNCELLEMESİ: Hata veren v1beta2 yerine güncel v1 API ve generateContent kullanılıyor.
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash' // Güncel, hızlı model
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`

  const body = {
    // v1 generateContent için uygun format
    contents: [{
      parts: [{
        text: message
      }]
    }],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 512,
    }
  }

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!resp.ok) {
    const txt = await resp.text().catch(() => '<non-text upstream body>')
    console.error('Gemini API error:', resp.status, txt)
    // Hata mesajına detay ekleniyor
    throw new Error(`Gemini API error ${resp.status}: ${txt}`)
  }

  const data = await resp.json()
  // v1 generateContent formatından yanıtı alma
  return data.candidates?.[0]?.content?.parts?.[0]?.text || data?.candidates?.[0]?.content || data?.output || JSON.stringify(data)
}

// OpenRouter API call
async function callOpenRouter(message: string): Promise<string> {
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY
  
  if (!OPENROUTER_API_KEY) {
    throw new Error('OpenRouter API key not configured')
  }

  const response = await fetch(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://mindcraft.app',
        'X-Title': 'Mindcraft AI',
      },
      body: JSON.stringify({
  model: 'meta-llama/llama-3-8b-instruct', // updated model name
        messages: [{
          role: 'user',
          content: message
        }]
      })
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error('OpenRouter API error:', response.status, errorText)
    throw new Error(`OpenRouter API error: ${response.status}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || 'No response generated'
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, provider } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    // Simplified flow: always try Gemini first, then fallback to OpenRouter
    try {
      let aiResponse: string
      const primaryProvider: 'gemini' = 'gemini'

      try {
        console.log(`Using primary provider: ${primaryProvider}`)
        aiResponse = await callGemini(message)

        return res.status(200).json({
          response: aiResponse,
          provider: primaryProvider,
        })
      } catch (primaryError) {
        console.error(`Primary provider (gemini) failed:`, primaryError)

        const fallbackProvider: 'openrouter' = 'openrouter'
        console.log(`Falling back to: ${fallbackProvider}`)

        try {
          aiResponse = await callOpenRouter(message)

          return res.status(200).json({
            response: aiResponse,
            provider: `${fallbackProvider} (fallback)`,
          })
        } catch (fallbackError) {
          console.error(`Fallback provider (openrouter) also failed:`, fallbackError)
          throw new Error('All AI providers failed')
        }
      }
    } catch (err) {
      // Let the outer catch handle the final wrapping and fallback message
      throw err
    }

  } catch (error) {
    // GÜNCELLEME: Tüm sağlayıcılar başarısız olursa, UI'ın çökmesini önlemek için
    // 200 OK ile okunabilir bir hata mesajı döndürülüyor.
    console.error('Smart Chat Error:', error)
    const errMsg = error instanceof Error ? error.message : String(error)
    console.error('Smart Chat full error:', errMsg)

    // Kullanıcıya UI'da gösterilecek safe fallback mesajı
    const fallback = `Sorry — ShapeBot is temporarily unavailable (error: ${errMsg.slice(0, 50)}...). Please try again later. (See Vercel logs for full error.)`
    
    return res.status(200).json({
      response: fallback,
      provider: 'none',
      error: 'All AI providers failed',
      meta: {
        providersChecked: ['gemini', 'openrouter']
      }
    })
  }
}