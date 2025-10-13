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
  // Alternate between providers for better distribution
  const hour = new Date().getHours()
  return hour % 2 === 0 ? 'gemini' : 'openrouter'
}

// Gemini API call
async function callGemini(message: string): Promise<string> {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY
  
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured')
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: message
          }]
        }]
      })
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Gemini API error:', response.status, errorText)
    throw new Error(`Gemini API error: ${response.status}`)
  }

  const data = await response.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated'
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
        model: 'meta-llama/llama-3.1-8b-instruct:free', // Free model
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
    // Select AI provider
    const selectedProvider = selectProvider(provider)
    console.log(`Using AI provider: ${selectedProvider}`)

    let aiResponse: string
    
    // Try primary provider
    try {
      if (selectedProvider === 'gemini') {
        aiResponse = await callGemini(message)
      } else {
        aiResponse = await callOpenRouter(message)
      }
      
      return res.status(200).json({
        response: aiResponse,
        provider: selectedProvider
      })
    } catch (primaryError) {
      console.error(`Primary provider (${selectedProvider}) failed:`, primaryError)
      
      // Fallback to alternative provider
      const fallbackProvider = selectedProvider === 'gemini' ? 'openrouter' : 'gemini'
      console.log(`Falling back to: ${fallbackProvider}`)
      
      try {
        if (fallbackProvider === 'gemini') {
          aiResponse = await callGemini(message)
        } else {
          aiResponse = await callOpenRouter(message)
        }
        
        return res.status(200).json({
          response: aiResponse,
          provider: `${fallbackProvider} (fallback)`
        })
      } catch (fallbackError) {
        console.error(`Fallback provider (${fallbackProvider}) also failed:`, fallbackError)
        throw new Error('All AI providers failed')
      }
    }

  } catch (error) {
    console.error('Smart Chat Error:', error)
    // Return a safe fallback reply so the UI doesn't show a generic error.
    const errMsg = error instanceof Error ? error.message : String(error)
    console.error('Smart Chat full error:', errMsg)

    const fallback = `Sorry — ShapeBot is temporarily unavailable (error: ${errMsg.slice(0,200)}). Please try again later.`
    return res.status(200).json({
      response: fallback,
      provider: 'none',
      error: 'All AI providers failed',
      // include limited meta for debugging in logs (not exposing secrets)
      meta: {
        providersChecked: ['gemini','openrouter']
      }
    })
  }
}
