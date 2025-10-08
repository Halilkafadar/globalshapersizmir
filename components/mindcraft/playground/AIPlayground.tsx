import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Palette, MessageSquare, Code, Loader } from 'lucide-react'
import Image from 'next/image'

export default function AIPlaygroundComponent() {
  const [activeTab, setActiveTab] = useState<'art' | 'chat' | 'code'>('art')

  return (
    <main className="pt-24 pb-16 min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">AI Playground</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiment with different AI tools and see what you can create!
          </p>
        </div>

        {/* Tool Selector */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('art')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'art'
                ? 'bg-gradient-to-r from-mindcraft-blue to-mindcraft-purple text-white shadow-lg'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            <Palette className="w-5 h-5" />
            AI Art
          </button>
          
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'chat'
                ? 'bg-gradient-to-r from-mindcraft-blue to-mindcraft-purple text-white shadow-lg'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            AI Chat
          </button>
          
          <button
            onClick={() => setActiveTab('code')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'code'
                ? 'bg-gradient-to-r from-mindcraft-blue to-mindcraft-purple text-white shadow-lg'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            <Code className="w-5 h-5" />
            Code Assistant
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'art' && <ArtGenerator />}
          {activeTab === 'chat' && <ChatInterface />}
          {activeTab === 'code' && <CodeAssistant />}
        </motion.div>
      </div>
    </main>
  )
}

function ArtGenerator() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    setError(null)
    
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      
      if (!response.ok) {
        throw new Error('Failed to generate image')
      }
      
      const data = await response.json()
      setGeneratedImage(data.imageUrl)
    } catch (err) {
      setError('Failed to generate image. Please try again.')
      console.error(err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Palette className="w-6 h-6 text-mindcraft-purple" />
        Text-to-Image AI
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Describe your artwork</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A magical forest with glowing mushrooms and fireflies, fantasy art style..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mindcraft-purple focus:outline-none resize-none"
            rows={4}
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <Loader className="w-5 h-5 animate-spin" />
              Generating...
            </span>
          ) : (
            'Generate Artwork'
          )}
        </button>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
            {error}
          </div>
        )}

        <div className="mt-8 p-8 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300">
          {isGenerating ? (
            <div className="text-center">
              <Loader className="w-12 h-12 animate-spin mx-auto mb-4 text-mindcraft-purple" />
              <p className="text-gray-600">🎨 Creating your artwork...</p>
            </div>
          ) : generatedImage ? (
            <div className="relative w-full h-96">
              <Image 
                src={generatedImage} 
                alt="Generated artwork"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-500">🖼️ Your generated image will appear here</p>
              <p className="text-sm text-gray-400 mt-2">
                Powered by Hugging Face Stable Diffusion
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ChatInterface() {
  const [messages, setMessages] = useState<Array<{role: 'user' | 'ai', content: string, provider?: string}>>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentProvider, setCurrentProvider] = useState<string>('Auto')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage = input.trim()
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setInput('')
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/smart-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage
        })
      })
      
      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }
      
      const data = await response.json()
      
      // Update current provider display
      if (data.provider) {
        setCurrentProvider(data.provider)
      }
      
      // Handle response
      const aiResponse = data.response || 'No response received'
      
      setMessages(prev => [...prev, {
        role: 'ai',
        content: aiResponse,
        provider: data.provider
      }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: 'Sorry, I encountered an error. Please try again.'
      }])
      console.error('AI Chat error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-mindcraft-purple" />
        AI Chat Assistant
      </h2>

      <div className="space-y-4 mb-6 h-96 overflow-y-auto p-4 bg-gray-50 rounded-xl">
        {messages.length === 0 ? (
          <div className="text-center mt-20">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-400">Start a conversation with AI...</p>
            <p className="text-sm text-gray-300 mt-2">Powered by Smart AI Routing</p>
            <p className="text-xs text-gray-400 mt-1">Current: {currentProvider}</p>
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs px-4 py-2 rounded-xl ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-mindcraft-blue to-mindcraft-purple text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-xl">
                  <Loader className="w-5 h-5 animate-spin text-mindcraft-purple" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mindcraft-purple focus:outline-none disabled:opacity-50"
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading || !input.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  )
}

function CodeAssistant() {
  const [code, setCode] = useState('# Write your Python code here\nprint("Hello, Mindcraft!")')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRunCode = async () => {
    setIsRunning(true)
    setError(null)
    setOutput('')
    
    try {
      const response = await fetch('/api/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
      
      if (!response.ok) {
        throw new Error('Failed to execute code')
      }
      
      const data = await response.json()
      
      if (data.error) {
        setError(data.error)
      } else {
        setOutput(data.output || 'Code executed successfully (no output)')
      }
    } catch (err) {
      setError('Failed to execute code. Please try again.')
      console.error(err)
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Code className="w-6 h-6 text-mindcraft-purple" />
        Python Code Playground
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Write your Python code:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-mindcraft-purple focus:outline-none font-mono text-sm resize-none bg-gray-50"
            rows={12}
            placeholder="# Write your Python code here..."
          />
        </div>

        <button 
          onClick={handleRunCode}
          disabled={isRunning || !code.trim()}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? (
            <span className="flex items-center justify-center gap-2">
              <Loader className="w-5 h-5 animate-spin" />
              Running...
            </span>
          ) : (
            'Run Code'
          )}
        </button>

        <div className="p-4 bg-gray-900 text-green-400 rounded-xl font-mono text-sm min-h-32">
          <div className="text-gray-400 mb-2">Output:</div>
          {isRunning ? (
            <div className="flex items-center gap-2">
              <Loader className="w-4 h-4 animate-spin" />
              <span>Executing code...</span>
            </div>
          ) : error ? (
            <div className="text-red-400 whitespace-pre-wrap">{error}</div>
          ) : output ? (
            <div className="whitespace-pre-wrap">{output}</div>
          ) : (
            <div className="text-gray-500 italic">
              Click "Run Code" to see the output
            </div>
          )}
          <div className="text-gray-600 text-xs mt-4 border-t border-gray-700 pt-2">
            Powered by Python sandbox environment
          </div>
        </div>
      </div>
    </div>
  )
}
