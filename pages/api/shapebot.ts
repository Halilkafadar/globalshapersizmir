import type { NextApiRequest, NextApiResponse } from 'next'

type ChatResponse = {
  response?: string  // Frontend expects this
  reply?: string     // Backend compatibility
  meta?: any
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, session_id } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    // Call ShapeBot backend (uses environment variable for flexibility)
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000'
    
    const response = await fetch(`${backendUrl}/api/v1/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session_id: session_id || `guest_${Date.now()}`,
        message: message,
        lang: 'tr',
        mode: 'auto',
        conversation_history: []
      }),
    })

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`)
    }

    const data = await response.json()
    
    // Return the response (use 'response' key for frontend compatibility)
    return res.status(200).json({
      response: data.reply,  // Frontend expects 'response'
      reply: data.reply,      // Keep for backward compatibility
      meta: data.meta
    })

  } catch (error) {
    console.error('ShapeBot API Error:', error)
    return res.status(503).json({ 
      error: 'ShapeBot is currently unavailable. Please try again later.',
      meta: { error_details: error instanceof Error ? error.message : 'Unknown error' }
    })
  }
}
