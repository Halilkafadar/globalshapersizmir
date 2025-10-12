"use client"
import { useRef, useState, useEffect } from 'react'

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
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMsg.content }) })
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
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200'}`}>
            {m.content}
          </div>
        ))}
        {isLoading && <div>Yükleniyor...</div>}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="p-4 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mesajınızı yazın..."
          className="flex-1 p-2 border rounded"
        />
        <button className="px-4 py-2 bg-gs-navy text-white rounded" disabled={isLoading}>Gönder</button>
      </form>
    </div>
  )
}
