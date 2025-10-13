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

  // Use v1 generateContent with a robust model and enable Google Search grounding
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`

  // Allow overriding the system prompt via env var; default enforces Turkish-only replies
  const systemPrompt = process.env.SHAPEBOT_SYSTEM_PROMPT ||
    "Sen, Global Shapers İzmir Hub'ın resmi yapay zeka asistanı olan ShapeBot'sun. En önemli görevin, kullanıcıya her zaman kibar, profesyonel ve kesinlikle SADECE TÜRKÇE yanıt vermektir. Türkçe yanıtlarının bozuk veya anlamsız olmamasını sağlamak birinci önceliğindir. Kendi kimliğin (kimin yarattığı, hangi model olduğun) hakkında sorulan sorulara her zaman şu metinle cevap ver: 'Ben, Global Shapers İzmir Hub tarafından geliştirilen ve Gemini büyük dil modelini kullanan bir yapay zeka asistanıyım. Amacım, topluluğumuz ve güncel olaylar hakkında bilgi vermektir.' Gerçek zamanlı ve güncel bilgilere (seçimler, haberler vb.) yanıt verirken Google Arama'yı (tools) kullan."

  // v1 generateContent body with system instruction and Google Search grounding
  const body = {
    contents: [
      {
        role: 'system',
        parts: [{ text: systemPrompt }]
      },
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 512,
    },
    // Enable grounding so Gemini can use Google Search for up-to-date info
    tools: [
      {
        googleSearch: {}
      }
    ]
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
  // Log a trimmed copy of the raw response for debugging (avoid huge logs)
  try {
    const dbg = JSON.stringify(data)
    console.debug('Gemini raw response (trimmed):', dbg.length > 2000 ? dbg.slice(0, 2000) + '...[truncated]' : dbg)
  } catch (e) {
    // ignore stringify errors
  }

  // v1 generateContent formatından veya diğer olası şekillerden yanıtı esnekçe al
  const candidate = data?.candidates?.[0]

  // Try multiple common shapes that Gemini may return
  let reply: string | undefined = undefined

  if (candidate) {
    // content.parts[0].text (most common)
    reply = reply || candidate?.content?.parts?.[0]?.text
    // content.text
    reply = reply || candidate?.content?.text
    // content.parts[0] if it's a string
    const part0 = candidate?.content?.parts?.[0]
    if (!reply && typeof part0 === 'string') reply = part0
    // message.content variants
    reply = reply || candidate?.message?.content?.text
    reply = reply || candidate?.message?.content
    // output or other top-level fields
    reply = reply || candidate?.output || data?.output || data?.response || data?.result || data?.text
  } else {
    // Fallback to other top-level shapes
    reply = data?.output || data?.response || data?.result || data?.text
  }

  if (reply) return String(reply)

  // Eğer yukarıdaki alanlar yoksa, API'nin döndürdüğü meta içeriği yerine okunabilir fallback ver
  return 'No AI response was generated (Gemini).'
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
  const content = data?.choices?.[0]?.message?.content
  if (typeof content === 'string') return content
  return 'No AI response was generated (OpenRouter).'
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

  // Local preventive filter: answer identity / model questions locally to avoid
  // persona contradictions and leaking provider info. Returns a stable Turkish
  // reply without calling upstream providers.
  try {
    const msgLower = String(message).toLowerCase()
    const identityRegex = /(who (created|made) you|who (are )?you|which model|hangi modeli|kim (seni|yarattı|yaptı)|kim (sizi) yarattı|kim (sizi) oluşturdu)/i
    if (identityRegex.test(msgLower)) {
      const localAnswer = process.env.SHAPEBOT_IDENTITY_REPLY ||
        "Ben, Global Shapers İzmir Hub tarafından geliştirilen ve Gemini büyük dil modelini kullanan bir yapay zeka asistanıyım. Amacım, topluluğumuz ve güncel olaylar hakkında bilgi vermektir."

      return res.status(200).json({
        response: String(localAnswer),
        provider: 'local',
      })
    }
  } catch (filterErr) {
    // If the filter fails for any reason, continue to normal flow
    console.warn('Identity filter error:', filterErr)
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