import { NextRequest, NextResponse } from 'next/server'
import * as AI from 'ai'
import { google } from '@ai-sdk/google'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Accept either { messages: [...] } (chat history) or { message: 'text' }
    const messages = body.messages || (body.message ? [{ role: 'user', content: body.message }] : [])

    const modelName = process.env.GEMINI_MODEL || process.env.GOOGLE_MODEL || 'gemini-1.5-pro'
    
    const model = google(modelName)

    // Access streamText from the AI module
    const streamTextFn = (AI as any).streamText || (AI as any).default?.streamText
    if (!streamTextFn) {
      return NextResponse.json({ error: 'streamText not available in ai package' }, { status: 500 })
    }

    const result = await streamTextFn({ model, messages })

    // Prefer streaming helpers if provided by the SDK
    if (result && typeof (result as any)?.toAIStreamResponse === 'function') {
      return (result as any).toAIStreamResponse()
    }
    if (result && typeof (result as any)?.toDataStreamResponse === 'function') {
      return (result as any).toDataStreamResponse()
    }

    // Fallback: return JSON text
    const text = (result as any)?.text || (result as any)?.output || JSON.stringify(result)
    return NextResponse.json({ text })
  } catch (err) {
    console.error('app/api/chat error:', err)
    return NextResponse.json({ 
      error: 'Failed to generate text', 
      details: err instanceof Error ? err.message : String(err) 
    }, { status: 500 })
  }
}
