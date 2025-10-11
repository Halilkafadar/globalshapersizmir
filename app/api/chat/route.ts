import { NextRequest, NextResponse } from 'next/server'
import streamText from 'ai'
import { google } from '@ai-sdk/google'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Accept either { messages: [...] } (chat history) or { message: 'text' }
    const messages = body.messages || (body.message ? [{ role: 'user', content: body.message }] : [])

    const modelName = process.env.GEMINI_MODEL || process.env.GOOGLE_MODEL || 'gemini-1.5-pro'
    
    const model = google(modelName)

    const result = await streamText({ model, messages })

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
