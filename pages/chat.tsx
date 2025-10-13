import { useRef, useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Message = { id: string; role: 'user' | 'assistant'; content: string }

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault()
    if (!input.trim()) return
    const userMsg: Message = { id: String(Date.now()), role: 'user', content: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setIsLoading(true)

    try {
  const res = await fetch('/api/gemini-chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMsg.content }) })
      const data = await res.json()
      const assistantText = data?.text || data?.reply || 'No response.'
      const assistantMsg: Message = { id: String(Date.now() + 1), role: 'assistant', content: assistantText }
      setMessages((m) => [...m, assistantMsg])
    } catch (err) {
      setMessages((m) => [...m, { id: String(Date.now() + 2), role: 'assistant', content: 'Error: failed to fetch response.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>AI Chat - Global Shapers Izmir Hub</title>
        <meta name="description" content="Chat with AI" />
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="flex flex-col h-[calc(100vh-200px)] max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
            <h1 className="text-2xl font-bold">AI Chat</h1>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`p-4 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white ml-auto max-w-[80%]' : 'bg-gray-100 max-w-[80%]'}`}>
                {m.content}
              </div>
            ))}
            {isLoading && <div>Loading...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded-lg"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
