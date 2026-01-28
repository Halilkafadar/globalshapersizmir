import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageSquare, 
  Zap, 
  Brain,
  Lightbulb, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Target,
  Users,
  Settings,
  Eye,
  Plus,
  Minus,
  RotateCcw,
  Shuffle,
  Book,
  AlertCircle,
  Info,
  Star,
  Sparkles,
  Cpu,
  Code,
  Search,
  Filter,
  Puzzle,
  Shield,
  Compass,
  Layers,
  Wand2,
  Gamepad2,
  BookOpen
} from 'lucide-react'

// TypeScript interfaces
interface PromptComponent {
  id: string
  category: 'context' | 'task' | 'format' | 'style' | 'constraints'
  label: string
  description: string
  example: string
  icon: any
}

interface HallucinationQuestion {
  id: number
  scenario: string
  prompt: string
  responses: {
    text: string
    isHallucination: boolean
    explanation: string
  }[]
}

interface UserProgress {
  legoPromptsCreated: number
  hallucinationScore: number
  completedChallenges: string[]
}

export default function PromptEngineeringPage() {
  // Lego Prompt Builder state
  const [selectedComponents, setSelectedComponents] = useState<{
    context: PromptComponent[]
    task: PromptComponent[]
    format: PromptComponent[]
    style: PromptComponent[]
    constraints: PromptComponent[]
  }>({
    context: [],
    task: [],
    format: [],
    style: [],
    constraints: []
  })
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [showPromptResult, setShowPromptResult] = useState(false)

  // Hallucination Hunter state
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [userAnswers, setUserAnswers] = useState<boolean[]>([])
  const [gameCompleted, setGameCompleted] = useState(false)
  const [score, setScore] = useState(0)

  // User progress
  const [userProgress, setUserProgress] = useState<UserProgress>({
    legoPromptsCreated: 0,
    hallucinationScore: 0,
    completedChallenges: []
  })

  // Module data
  const module = modulesData.find(m => m.id === 'prompt-engineering')
  
  if (!module) return null

  // Load user progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('mindcraft-prompt-engineering-progress')
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    }
  }, [])

  // Save user progress to localStorage
  useEffect(() => {
    localStorage.setItem('mindcraft-prompt-engineering-progress', JSON.stringify(userProgress))
  }, [userProgress])

  // Learning objectives for the module
  const learningObjectives = [
    "Master the 5 C's framework: Clear, Concise, Complete, Contextual, Constructive prompts",
    "Build effective prompts using the Lego Prompt Builder methodology",
    "Identify and prevent AI hallucinations through critical analysis",
    "Create professional-grade prompts for various AI applications",
    "Develop advanced communication strategies with AI systems",
    "Apply ethical prompt engineering principles in real-world scenarios"
  ]

  // Prompt components for Lego Builder
  const promptComponents: PromptComponent[] = [
    // Context components
    { 
      id: 'professional', 
      category: 'context', 
      label: 'Professional Setting', 
      description: 'Business or workplace environment',
      example: 'As a business consultant...',
      icon: Users 
    },
    { 
      id: 'educational', 
      category: 'context', 
      label: 'Educational Context', 
      description: 'Learning or teaching environment',
      example: 'As a teacher helping students...',
      icon: BookOpen 
    },
    { 
      id: 'creative', 
      category: 'context', 
      label: 'Creative Project', 
      description: 'Artistic or creative context',
      example: 'As a creative writer...',
      icon: Sparkles 
    },
    
    // Task components
    { 
      id: 'analyze', 
      category: 'task', 
      label: 'Analyze', 
      description: 'Break down and examine',
      example: 'analyze the key themes in...',
      icon: Search 
    },
    { 
      id: 'create', 
      category: 'task', 
      label: 'Create', 
      description: 'Generate new content',
      example: 'create a comprehensive plan for...',
      icon: Plus 
    },
    { 
      id: 'explain', 
      category: 'task', 
      label: 'Explain', 
      description: 'Clarify or teach concepts',
      example: 'explain the concept of...',
      icon: Lightbulb 
    },
    
    // Format components
    { 
      id: 'list', 
      category: 'format', 
      label: 'Bullet Points', 
      description: 'Organized list format',
      example: 'in bullet point format',
      icon: Filter 
    },
    { 
      id: 'essay', 
      category: 'format', 
      label: 'Essay Format', 
      description: 'Structured written piece',
      example: 'as a 500-word essay',
      icon: Book 
    },
    { 
      id: 'code', 
      category: 'format', 
      label: 'Code Example', 
      description: 'Programming code format',
      example: 'with working code examples',
      icon: Code 
    },
    
    // Style components
    { 
      id: 'formal', 
      category: 'style', 
      label: 'Formal Tone', 
      description: 'Professional language',
      example: 'using formal, professional language',
      icon: Shield 
    },
    { 
      id: 'casual', 
      category: 'style', 
      label: 'Conversational', 
      description: 'Friendly, approachable tone',
      example: 'in a friendly, conversational tone',
      icon: MessageSquare 
    },
    { 
      id: 'technical', 
      category: 'style', 
      label: 'Technical', 
      description: 'Precise, technical language',
      example: 'with technical precision',
      icon: Cpu 
    },
    
    // Constraints components
    { 
      id: 'length', 
      category: 'constraints', 
      label: 'Length Limit', 
      description: 'Specific word/character count',
      example: 'in exactly 200 words',
      icon: Target 
    },
    { 
      id: 'audience', 
      category: 'constraints', 
      label: 'Target Audience', 
      description: 'Specific audience consideration',
      example: 'suitable for beginners',
      icon: Eye 
    },
    { 
      id: 'timeline', 
      category: 'constraints', 
      label: 'Time Constraint', 
      description: 'Urgency or deadline consideration',
      example: 'for immediate implementation',
      icon: Zap 
    }
  ]

  // Hallucination detection questions
  const hallucinationQuestions: HallucinationQuestion[] = [
    {
      id: 1,
      scenario: "You asked ChatGPT about the weather in Mars",
      prompt: "What's the weather like on Mars today?",
      responses: [
        {
          text: "It's currently -80°C with light dust storms in the northern hemisphere.",
          isHallucination: true,
          explanation: "AI cannot access real-time weather data from Mars. This is a hallucination."
        },
        {
          text: "I don't have access to real-time weather data for Mars. However, Mars typically has very cold temperatures, averaging around -80°C.",
          isHallucination: false,
          explanation: "This response correctly acknowledges limitations and provides general factual information."
        }
      ]
    },
    {
      id: 2,
      scenario: "You asked for a specific scientific paper",
      prompt: "Can you summarize the 2024 Nature paper by Dr. Smith on quantum computing?",
      responses: [
        {
          text: "Dr. Smith's groundbreaking 2024 paper in Nature demonstrates a new quantum algorithm that achieves 99.9% accuracy...",
          isHallucination: true,
          explanation: "The AI is creating specific details about a paper that may not exist."
        },
        {
          text: "I don't have access to specific papers or real-time databases. Could you provide the title or more details about the paper you're referring to?",
          isHallucination: false,
          explanation: "This response honestly acknowledges limitations and asks for clarification."
        }
      ]
    },
    {
      id: 3,
      scenario: "You asked about recent news events",
      prompt: "What happened in the tech industry yesterday?",
      responses: [
        {
          text: "Yesterday, Apple announced a new iPhone model with revolutionary holographic display technology.",
          isHallucination: true,
          explanation: "This creates specific recent news that the AI cannot actually verify."
        },
        {
          text: "I don't have access to real-time news updates. My knowledge has a specific cutoff date and I can't browse the internet for current events.",
          isHallucination: false,
          explanation: "This correctly explains the AI's limitations regarding current information."
        }
      ]
    }
  ]

  // Lego Prompt Builder functions
  const addComponent = (component: PromptComponent) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component.category]: [...prev[component.category], component]
    }))
  }

  const removeComponent = (componentId: string, category: string) => {
    setSelectedComponents(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].filter(comp => comp.id !== componentId)
    }))
  }

  const generatePrompt = () => {
    const { context, task, format, style, constraints } = selectedComponents
    
    let prompt = ""
    
    if (context.length > 0) {
      prompt += `${context.map(c => c.example).join(', ')}, `
    }
    
    if (task.length > 0) {
      prompt += `${task.map(t => t.example).join(' and ')}`
    }
    
    if (format.length > 0) {
      prompt += ` ${format.map(f => f.example).join(', ')}`
    }
    
    if (style.length > 0) {
      prompt += ` ${style.map(s => s.example).join(', ')}`
    }
    
    if (constraints.length > 0) {
      prompt += ` with the following constraints: ${constraints.map(c => c.example).join(', ')}`
    }
    
    setGeneratedPrompt(prompt)
    setShowPromptResult(true)
    
    // Update progress
    setUserProgress(prev => ({
      ...prev,
      legoPromptsCreated: prev.legoPromptsCreated + 1
    }))
  }

  const resetBuilder = () => {
    setSelectedComponents({
      context: [],
      task: [],
      format: [],
      style: [],
      constraints: []
    })
    setGeneratedPrompt('')
    setShowPromptResult(false)
  }

  // Hallucination Hunter functions
  const startGame = () => {
    setGameActive(true)
    setCurrentQuestion(0)
    setUserAnswers([])
    setScore(0)
    setGameCompleted(false)
  }

  const answerQuestion = (isHallucination: boolean) => {
    const question = hallucinationQuestions[currentQuestion]
    const correctResponse = question.responses.find(r => r.isHallucination === isHallucination)
    const isCorrect = correctResponse !== undefined

    setUserAnswers(prev => [...prev, isCorrect])
    
    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    if (currentQuestion < hallucinationQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setGameCompleted(true)
      setGameActive(false)
      setUserProgress(prev => ({
        ...prev,
        hallucinationScore: Math.max(prev.hallucinationScore, score + (isCorrect ? 1 : 0))
      }))
    }
  }

  const resetGame = () => {
    setGameActive(false)
    setCurrentQuestion(0)
    setUserAnswers([])
    setScore(0)
    setGameCompleted(false)
  }

  return (
    <>
      <Head>
        <title>{module.title} - Mindcraft</title>
        <meta name="description" content={module.description} />
      </Head>
      
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full px-6 py-3 mb-6">
                <MessageSquare className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">Prompt Engineering</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Interactive Communication Laboratory
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Master the art and science of AI communication through hands-on experimentation, 
                strategic prompt building, and critical thinking exercises.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Advanced Strategy</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2">
                  <Puzzle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Interactive Learning</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-4 py-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-white">Real-world Application</span>
                </div>
              </div>
            </motion.div>

            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Your Progress</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{userProgress.legoPromptsCreated}</div>
                  <div className="text-gray-300">Prompts Built</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">{userProgress.hallucinationScore}</div>
                  <div className="text-gray-300">Hallucinations Detected</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{userProgress.completedChallenges.length}</div>
                  <div className="text-gray-300">Challenges Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Objectives */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Learning Objectives
                </span>
              </h2>
              <p className="text-xl text-gray-300">What you'll master in this laboratory</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {learningObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{objective}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge Block 1: Communication Fundamentals */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🧠 Knowledge Block 1: Communication Fundamentals
                  </h3>
                  <p className="text-blue-200 text-lg">Core principles of effective AI communication</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-950/30 border border-blue-500/50 rounded-xl p-6">
                  <h4 className="text-blue-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    5 C Methodology
                  </h4>
                  <p className="text-blue-100 text-lg leading-relaxed mb-4">
                    The golden standard for effective prompt writing: <strong>Clear (Unambiguous)</strong>, <strong>Concise (Brief and focused)</strong>, 
                    <strong>Complete (Comprehensive)</strong>, <strong>Contextual (Situational)</strong>, and <strong>Constructive (Productive)</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-5 gap-3">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-blue-400 font-bold mb-1">Clear</div>
                      <div className="text-gray-300 text-sm">No ambiguity</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-cyan-400 font-bold mb-1">Concise</div>
                      <div className="text-gray-300 text-sm">No unnecessary words</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-green-400 font-bold mb-1">Complete</div>
                      <div className="text-gray-300 text-sm">All required info</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-yellow-400 font-bold mb-1">Contextual</div>
                      <div className="text-gray-300 text-sm">Situationally appropriate</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-purple-400 font-bold mb-1">Constructive</div>
                      <div className="text-gray-300 text-sm">Productive approach</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-yellow-400" />
                    <h4 className="text-yellow-300 font-semibold">Communication Paradigm</h4>
                  </div>
                  <p className="text-yellow-100">
                    Talking to AI is like communicating with your future self. The clearer and more constructive you are, 
                    the more valuable responses you'll receive. In this laboratory, you'll master this art.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Component 1: Lego Prompt Builder */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  🧱 Lego Prompt Builder
                </span>
              </h2>
              <p className="text-xl text-gray-300">Build perfect prompts with a modular approach</p>
            </motion.div>

            <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
              {/* Component Categories */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Prompt Components</h3>
                
                {['context', 'task', 'format', 'style', 'constraints'].map((category) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 capitalize">
                      {category === 'context' && '📍 Context'}
                      {category === 'task' && '🎯 Task'}
                      {category === 'format' && '📋 Format'}
                      {category === 'style' && '🎨 Style'}
                      {category === 'constraints' && '⚡ Constraints'}
                    </h4>
                    
                    <div className="grid md:grid-cols-3 gap-3">
                      {promptComponents
                        .filter(comp => comp.category === category)
                        .map((component) => (
                          <motion.button
                            key={component.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => addComponent(component)}
                            className="bg-slate-700/50 hover:bg-slate-600/50 rounded-lg p-4 text-left transition-all border border-slate-600/50"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <component.icon className="w-5 h-5 text-blue-400" />
                              <span className="font-semibold text-white">{component.label}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{component.description}</p>
                            <code className="text-xs text-green-400 bg-slate-800/50 rounded px-2 py-1">
                              {component.example}
                            </code>
                          </motion.button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Components */}
              {Object.values(selectedComponents).some(category => category.length > 0) && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Selected Components</h3>
                  <div className="space-y-4">
                    {Object.entries(selectedComponents).map(([category, components]) => (
                      components.length > 0 && (
                        <div key={category} className="bg-slate-700/30 rounded-lg p-4">
                          <h4 className="font-semibold text-white mb-2 capitalize">{category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {components.map((component) => (
                              <span
                                key={component.id}
                                className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 rounded-full px-3 py-1 text-sm"
                              >
                                {component.label}
                                <button
                                  onClick={() => removeComponent(component.id, category)}
                                  className="text-blue-400 hover:text-red-400 transition-colors"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={generatePrompt}
                  disabled={Object.values(selectedComponents).every(category => category.length === 0)}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2"
                >
                  <Wand2 className="w-5 h-5" />
                  Generate Prompt
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetBuilder}
                  className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </motion.button>
              </div>

              {/* Generated Prompt Result */}
              <AnimatePresence>
                {showPromptResult && generatedPrompt && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-8 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-500/30"
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Star className="w-6 h-6 text-yellow-400" />
                      Generated Prompt
                    </h3>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                      <code className="text-green-300 text-lg">{generatedPrompt}</code>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-semibold">✨ Congratulations! You've created a new prompt!</div>
                      <div className="text-gray-400 text-sm mt-2">You can test this prompt in AI tools</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Knowledge Block 2: Critical Analysis */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🔍 Knowledge Block 2: Critical Analysis
                  </h3>
                  <p className="text-red-200 text-lg">How do you evaluate AI responses?</p>
                </div>
              </div>
              
              <div className="bg-red-950/30 border border-red-500/50 rounded-xl p-6 mb-6">
                <h4 className="text-red-300 font-bold text-xl mb-3 flex items-center gap-2">
                  <Search className="w-6 h-6" />
                  What is Hallucination?
                </h4>
                <p className="text-red-100 text-lg leading-relaxed">
                  AI <strong>hallucination</strong> is when artificial intelligence confidently presents false information. 
                  This can manifest as incorrect references, fabricated statistics, or non-existent events.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-yellow-400 font-semibold mb-2">🚨 Warning Signs</h5>
                  <p className="text-gray-300 text-sm">Very specific details, exact dates, unverifiable references</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-orange-400 font-semibold mb-2">🔍 Verification</h5>
                  <p className="text-gray-300 text-sm">Check multiple sources, look for contradictions</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-cyan-400 font-semibold mb-2">💡 Questioning Mindset</h5>
                  <p className="text-gray-300 text-sm">Constantly ask "How can this be known?"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Component 2: Hallucination Hunter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  🎯 Hallucination Hunter
                </span>
              </h2>
              <p className="text-xl text-gray-300">Develop your AI hallucination detection skills</p>
            </motion.div>

            <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
              {!gameActive && !gameCompleted && (
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gamepad2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Hallucination Hunter</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Analyze AI responses and detect which answers are hallucinations. 
                    Each correct detection increases your score!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startGame}
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center gap-2 mx-auto"
                  >
                    <Play className="w-6 h-6" />
                    Start Game
                  </motion.button>
                </div>
              )}

              {gameActive && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white">
                      <span className="text-lg font-semibold">Question {currentQuestion + 1}</span>
                      <span className="text-gray-400">/{hallucinationQuestions.length}</span>
                    </div>
                    <div className="text-white">
                      <span className="text-lg font-semibold">Score: {score}</span>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-white mb-3">Scenario</h4>
                    <p className="text-gray-300 mb-4">{hallucinationQuestions[currentQuestion].scenario}</p>
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                      <p className="text-cyan-300 font-mono">{hallucinationQuestions[currentQuestion].prompt}</p>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">AI Responses</h4>
                  </div>

                  <div className="space-y-4">
                    {hallucinationQuestions[currentQuestion].responses.map((response, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => answerQuestion(response.isHallucination)}
                        className="w-full bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-6 text-left transition-all border border-slate-600/50"
                      >
                        <p className="text-white text-lg leading-relaxed">{response.text}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Click to evaluate this response</span>
                          <ArrowRight className="w-5 h-5 text-blue-400" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {gameCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Congratulations!</h3>
                  <p className="text-gray-300 mb-6">
                    You answered {score} out of {hallucinationQuestions.length} questions correctly!
                  </p>
                  <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      %{Math.round((score / hallucinationQuestions.length) * 100)}
                    </div>
                    <div className="text-gray-300">Accuracy Rate</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetGame}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2 mx-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Play Again
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Knowledge Block 3: Advanced Prompt Techniques */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🔧 Knowledge Block 3: Advanced Techniques
                  </h3>
                  <p className="text-purple-200 text-lg">Professional prompt engineering techniques</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-950/30 border border-purple-500/50 rounded-xl p-6">
                  <h4 className="text-purple-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    Chain of Thought (CoT) Prompting
                  </h4>
                  <p className="text-purple-100 text-lg leading-relaxed mb-4">
                    A powerful technique that enables AI to think step by step. <strong>"Step by step"</strong> 
                    or <strong>"Think systematically"</strong> phrases make AI's logic chain visible.
                  </p>
                  
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-cyan-400 font-semibold mb-2">Example CoT Prompt:</div>
                    <code className="text-green-300 text-sm">
                      "Analyze a company's marketing strategy. Think step by step: 
                      1) Who is the target audience? 2) Which channels are being used? 3) How is the budget distributed? 
                      4) How are results measured?"
                    </code>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h5 className="text-yellow-400 font-semibold mb-2">🎭 Role Playing</h5>
                    <p className="text-gray-300 text-sm mb-3">Start with "You are an expert economist..."</p>
                    <div className="text-xs text-green-400 bg-slate-900/50 rounded p-2">
                      "You are an experienced UX designer. Evaluate this application's user experience..."
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h5 className="text-orange-400 font-semibold mb-2">📝 Few-Shot Learning</h5>
                    <p className="text-gray-300 text-sm mb-3">Teach by providing example inputs and outputs</p>
                    <div className="text-xs text-green-400 bg-slate-900/50 rounded p-2">
                      "Examples: Input: 'hello' → Output: 'Good morning!' Now you try..."
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h5 className="text-cyan-400 font-semibold mb-2">🔄 Iterative Refinement</h5>
                    <p className="text-gray-300 text-sm mb-3">Develop prompts step by step</p>
                    <div className="text-xs text-green-400 bg-slate-900/50 rounded p-2">
                      "Expand this answer in more detail... Now add examples... Finally..."
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h5 className="text-pink-400 font-semibold mb-2">🎯 Temperature Control</h5>
                    <p className="text-gray-300 text-sm mb-3">Control the creativity level</p>
                    <div className="text-xs text-green-400 bg-slate-900/50 rounded p-2">
                      "Be as creative as possible..." or "Only use proven facts..."
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 4: AI Ethics and Digital Literacy */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🛡️ Knowledge Block 4: Digital Literacy
                  </h3>
                  <p className="text-orange-200 text-lg">Ethics and responsible use in the AI era</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-950/30 border border-orange-500/50 rounded-xl p-6">
                  <h4 className="text-orange-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <Info className="w-6 h-6" />
                    4 Pillars of Digital Literacy
                  </h4>
                  <p className="text-orange-100 text-lg leading-relaxed mb-4">
                    Essential skills needed to work effectively and ethically with AI. 
                    By strengthening these pillars, you become the <strong>master</strong> of technology, not its slave.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        1. Critical Questioning
                      </div>
                      <p className="text-gray-300 text-sm">
                        Question every AI response. Constantly ask "Where does this information come from?" "Is it correct?" 
                        "What are the alternative viewpoints?"
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-green-400 font-bold mb-2 flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        2. Source Verification
                      </div>
                      <p className="text-gray-300 text-sm">
                        Check information provided by AI against other sources. 
                        Cross-verify with reliable sources.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        3. Context Analysis
                      </div>
                      <p className="text-gray-300 text-sm">
                        Understand in what context the AI was trained. Consider 
                        biases and limitations.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        4. Goal-Focused Approach
                      </div>
                      <p className="text-gray-300 text-sm">
                        Use AI for your specific goals. Establish purposeful communication 
                        instead of asking random questions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-950/30 border border-red-500/50 rounded-xl p-6">
                  <h4 className="text-red-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    Avoiding Technology Dependency
                  </h4>
                  <p className="text-red-100 text-lg leading-relaxed">
                    AI tools should be powerful assistants, not masters that take over your decision-making capacity. 
                    Maintain <strong>cognitive sovereignty</strong> and keep control of technology in your hands.
                  </p>
                  
                  <div className="mt-4 grid md:grid-cols-3 gap-3">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-red-400 font-bold mb-1">⚠️ Danger</div>
                      <div className="text-gray-300 text-sm">Accepting without thinking</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-yellow-400 font-bold mb-1">⚖️ Balance</div>
                      <div className="text-gray-300 text-sm">AI + Human intelligence</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <div className="text-green-400 font-bold mb-1">✅ Safe</div>
                      <div className="text-gray-300 text-sm">Use with critical thinking</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 5: Strategic Application */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🎯 Knowledge Block 5: Real-Life Applications
                  </h3>
                  <p className="text-green-200 text-lg">How do you use what you've learned in professional life?</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-950/30 border border-green-500/50 rounded-xl p-6">
                  <h4 className="text-green-300 font-bold text-xl mb-3">Industry Applications</h4>
                  <p className="text-green-100 text-lg leading-relaxed mb-4">
                    Your prompt engineering skills can make a difference in <strong>every sector</strong>. 
                    Learn how to use these skills in business, education, and creative projects.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-blue-400 font-bold mb-2">🏢 Business World</div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• AI assistance in report writing</li>
                        <li>• Creating marketing content</li>
                        <li>• Customer service automation</li>
                        <li>• Data analysis and interpretation</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-purple-400 font-bold mb-2">🎓 Education</div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Personalized learning</li>
                        <li>• Research project assistance</li>
                        <li>• Creative writing support</li>
                        <li>• Concept explanations</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-cyan-400 font-bold mb-2">💡 Creativity</div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Brainstorming sessions</li>
                        <li>• Content creation</li>
                        <li>• Artistic projects</li>
                        <li>• Problem solving</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-yellow-400 font-bold mb-2">🔬 Research</div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Literature review</li>
                        <li>• Hypothesis development</li>
                        <li>• Data analysis support</li>
                        <li>• Article writing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    <h4 className="text-yellow-300 font-semibold">Your Future Professional Life</h4>
                  </div>
                  <p className="text-yellow-100">
                    The skills you learned in this laboratory are designed not only for using AI tools, 
                    but also for developing <strong>clear thinking</strong>, <strong>effective communication</strong> and 
                    <strong>systematic problem solving</strong> skills. 
                    You are now an <em>AI age navigator</em>! 🚀
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Summary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">
                🎓 Laboratory Completed!
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                You are now a <strong>Communication Expert</strong> who can establish effective communication with AI, 
                detect hallucinations, and create professional-quality prompts.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Strategic Thinking</h4>
                  <p className="text-gray-300 text-sm">Clear communication with 5 C methodology</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <Puzzle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Modular Approach</h4>
                  <p className="text-gray-300 text-sm">Systematic prompt creation with Lego Builder</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <Shield className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Critical Analysis</h4>
                  <p className="text-gray-300 text-sm">Hallucination detection and verification</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-purple-950/30 border border-purple-500/50 rounded-xl">
                <p className="text-purple-200 text-lg">
                  <strong>Next step:</strong> Use these skills in real projects and 
                  consistently apply the 5 C principles when working with AI tools. 
                  You are now an <em>AI age navigator</em>! 🚀
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Module Navigation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                <ArrowRight className="w-8 h-8 text-blue-400" />
                Continue Your Learning Journey
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {/* Previous Module */}
                <a
                  href="/projects/mindcraft/ai-ethics"
                  className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">← Previous: AI Ethics</p>
                    <p className="text-blue-300 text-sm">Cognitive Sovereignty</p>
                  </div>
                </a>

                {/* Back to Modules */}
                <a
                  href="/projects/mindcraft#modules"
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">All Modules</p>
                    <p className="text-purple-300 text-sm">Back to Overview</p>
                  </div>
                </a>

                {/* Next Module */}
                <a
                  href="/projects/mindcraft/coding-automation"
                  className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 border border-green-500/30 hover:border-green-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">Next: Coding & Automation</p>
                    <p className="text-green-300 text-sm">Systems Thinking →</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}