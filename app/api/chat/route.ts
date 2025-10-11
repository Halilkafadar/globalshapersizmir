// We'll dynamically import 'ai' and '@ai-sdk/google' at runtime so builds won't fail
// if these packages are not installed in the environment (Vercel may not provide them).
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Accept either { messages: [...] } (chat history) or { message: 'text' }
    const messages = body.messages || (body.message ? [{ role: 'user', content: body.message }] : [])

    const modelName = process.env.GEMINI_MODEL || process.env.GOOGLE_MODEL || 'gemini-1.5-pro'

    // Try to import the Google SDK factory at runtime. If it's not available, we'll
    // set model to `undefined` and let the AI SDK handle the error or fallback.
    let googleFactory: any = undefined
    try {
      // Use an indirect dynamic import to prevent bundlers (webpack) from trying
      // to resolve the module at build time. This avoids Vercel build errors when
      // the package is optional.
      const googleModule = await new Function('return import("@ai-sdk/google")')()
      googleFactory = googleModule?.google ?? googleModule?.default ?? googleModule
    } catch (e) {
      // Not installed — we'll handle gracefully below
      console.warn('@ai-sdk/google not available, continuing without google factory')
    }

    const model = googleFactory ? googleFactory(modelName) : undefined

    // Dynamically import the 'ai' SDK so we don't hard-fail on different export shapes.
    // Indirect dynamic import so the bundler doesn't attempt to resolve 'ai' at build time.
    const ai = await new Function('return import("ai")')().catch((err: any) => {
      // If import fails, return an empty object; we'll handle absence later
      console.warn('Optional ai SDK not available:', err && err.message ? err.message : err)
      return {}
    })

    // Prefer a streaming API if available, otherwise fall back to a text generator.
    const streamFn = (ai as any).streamText ?? (ai as any).default ?? (ai as any).generateText

    if (!streamFn) {
      console.warn('AI SDK does not expose streamText or generateText')
      return NextResponse.json({ error: 'AI SDK not available' }, { status: 500 })
    }

    const result = await streamFn({ model, messages })

    // If the result exposes toAIStreamResponse, return it directly (streams to client).
    if (result && typeof (result as any)?.toAIStreamResponse === 'function') {
      return (result as any).toAIStreamResponse()
    }

    // Otherwise, attempt to extract text and return JSON (non-streaming fallback).
    const text = (result as any)?.text || (result as any)?.output || JSON.stringify(result)
    return NextResponse.json({ text })
  } catch (err) {
    console.error('app/api/chat error:', err)
    return NextResponse.json({ error: 'Failed to generate text', details: err instanceof Error ? err.message : String(err) }, { status: 500 })
  }
}
