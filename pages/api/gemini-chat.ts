import type { NextApiRequest, NextApiResponse } from 'next'

type ChatResponse = {
  response?: string
  error?: string
  meta?: any
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
    // Read API key from a server-side env var. Avoid NEXT_PUBLIC_ because that
    // exposes keys to the browser. If the user mistakenly set NEXT_PUBLIC_...
    // we still support it but warn the operator.
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY ?? process.env.NEXT_PUBLIC_GEMINI_API_KEY
    if (process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      console.warn('Using NEXT_PUBLIC_GEMINI_API_KEY — consider moving the key to a server-only variable (GEMINI_API_KEY)')
    }

    if (!GEMINI_API_KEY) {
      console.error('Gemini API key not found in environment variables')
      // Provide a clear response so client and logs both show the config issue
      return res.status(500).json({ error: 'API key not configured' })
    }

    // Validate message type
    if (typeof message !== 'string') {
      console.error('Invalid message type:', typeof message)
      return res.status(400).json({ error: 'Message must be a string' })
    }

    // Use the Generative Language `generateText` endpoint (v1beta2) which
    // returns candidates[].output for many models. Model name may be overridden
    // by env var GEMINI_MODEL. Default to 'gemini-pro'.
    const model = process.env.GEMINI_MODEL || 'gemini-pro'
    const url = `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generateText?key=${encodeURIComponent(GEMINI_API_KEY)}`

    const body = {
      prompt: { text: message },
      temperature: 0.2,
      maxOutputTokens: 512,
    }

    // Perform upstream request to Gemini. Wrap in timeout/try to get better log visibility.
    let upstreamText = null
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 20000)

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal,
      })

      clearTimeout(timeout)

      if (!response.ok) {
        upstreamText = await response.text().catch(() => '<non-text upstream body>')
        console.error('Gemini API returned error:', response.status, upstreamText)
        return res.status(502).json({ error: 'Upstream AI provider error', meta: { status: response.status, body: upstreamText } })
      }

      const data = await response.json()
      const aiResponse = data?.candidates?.[0]?.output || data?.candidates?.[0]?.content || data?.output || JSON.stringify(data)
      return res.status(200).json({ response: aiResponse })
    } catch (upErr) {
      const msg = upErr instanceof Error ? upErr.message : String(upErr)
      console.error('Error calling Gemini upstream:', msg, { url, body })

      // Fallback: return a safe mock reply so the UI doesn't break while debugging.
      // This makes it obvious in the UI that we're in fallback mode.
      const fallback = `Sorry — temporary fallback reply (upstream error: ${msg.slice(0, 200)})`
      return res.status(200).json({ response: fallback, meta: { fallback: true, upstreamError: msg } })
    }

  } catch (error) {
    console.error('Gemini Chat Error:', error instanceof Error ? error.message : String(error))
    return res.status(503).json({ error: 'AI service is currently unavailable. Please try again later.', meta: { error: error instanceof Error ? error.message : String(error) } })
  }
}
