import type { NextApiRequest, NextApiResponse } from 'next'

type ChatResponse = {
  response?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY
    
    if (!GEMINI_API_KEY) {
      console.error('Gemini API key not found')
      return res.status(500).json({ error: 'API key not configured' })
    }

    // Use Gemini Pro model
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
    
    // Extract text from Gemini response
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated'

    return res.status(200).json({
      response: aiResponse
    })

  } catch (error) {
    console.error('Gemini Chat Error:', error)
    return res.status(503).json({ 
      error: 'AI service is currently unavailable. Please try again later.'
    })
  }
}
