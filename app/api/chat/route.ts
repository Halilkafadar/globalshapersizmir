import { generateText } from 'ai'
import { google } from '@ai-sdk/google'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Accept either { messages: [...] } (chat history) or { message: 'text' }
    const messages = body.messages || (body.message ? [{ role: 'user', content: body.message }] : [])

    const modelName = process.env.GEMINI_MODEL || process.env.GOOGLE_MODEL || 'gemini-1.5-pro'

    // The `google(...)` factory picks up credentials from env (GEMINI_API_KEY / GOOGLE_API_KEY)
    const model = google(modelName)

    const result = await generateText({ model, messages })

    // generateText may return { text } or other shapes depending on SDK version
    const text = (result as any)?.text || (result as any)?.output || JSON.stringify(result)

    return NextResponse.json({ text })
  } catch (err) {
    console.error('app/api/chat error:', err)
    return NextResponse.json({ error: 'Failed to generate text', details: err instanceof Error ? err.message : String(err) }, { status: 500 })
  }
}
