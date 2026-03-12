import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  Shield, 
  Eye, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Play, 
  Target,
  Zap,
  Heart,
  Sliders,
  BarChart3,
  Download,
  FileText,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Info,
  ShieldCheck,
  Lightbulb,
  Quote,
  BookOpen,
  Cpu,
  AlertCircle,
  Search,
  Leaf,
  Smartphone,
  Volume2,
  Map,
  Instagram,
  Music,
  Droplets,
  Factory,
  TreePine,
  Recycle,
  Clock,
  Video,
  X,
  Trash2
} from 'lucide-react'

// Interactive Components
interface HiringAlgorithmState {
  experience: number
  age: number
  genderBalance: boolean
}

interface BiasRadarState {
  currentQuestion: number
  userChoices: string[]
  gameComplete: boolean
}

interface EthicsJourneyState {
  notes: string
  manifesto: string[]
}

export default function AIEthicsPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')
  
  // Component 1: Interactive Hiring Algorithm
  const [hiringAlgorithm, setHiringAlgorithm] = useState<HiringAlgorithmState>({
    experience: 50,
    age: 30,
    genderBalance: false
  })
  const [diversityScore, setDiversityScore] = useState(50)
  const [showAgeismWarning, setShowAgeismWarning] = useState(false)

  // Component 2: Social Proof Choice Mirroring
  const [carDilemmaChoice, setCarDilemmaChoice] = useState<string | null>(null)
  const [showMoralStats, setShowMoralStats] = useState(false)

  // Component 3: Bias Radar Mini-Game
  const [biasRadar, setBiasRadar] = useState<BiasRadarState>({
    currentQuestion: 0,
    userChoices: [],
    gameComplete: false
  })

  // Component 4: Ethics Journey Tracker
  const [ethicsJourney, setEthicsJourney] = useState<EthicsJourneyState>({
    notes: '',
    manifesto: []
  })

  // Visual interactive cards states
  const [showCreativePositives, setShowCreativePositives] = useState(false)
  const [showCreativeNegatives, setShowCreativeNegatives] = useState(false)
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({})

  // Learning moment states
  const [showLearningMoment, setShowLearningMoment] = useState(false)
  const [learningMomentType, setLearningMomentType] = useState('')

  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

  const module = modulesData.find(m => m.id === 'ai-ethics')
  
  if (!module) return null

  // Effect for hiring algorithm calculations
  useEffect(() => {
    const diversityPenalty = hiringAlgorithm.genderBalance ? 0 : 20
    const agePenalty = hiringAlgorithm.age > 50 ? (hiringAlgorithm.age - 50) : 0
    const experiencePenalty = hiringAlgorithm.experience > 60 ? (hiringAlgorithm.experience - 60) : 0
    const newDiversityScore = Math.max(0, 100 - diversityPenalty - agePenalty - experiencePenalty)
    setDiversityScore(newDiversityScore)
    const newAgeismWarning = hiringAlgorithm.age > 80
    setShowAgeismWarning(newAgeismWarning)
    
    // Trigger learning moment when ageism is first detected
    if (newAgeismWarning && !showAgeismWarning) {
      triggerLearningMoment('hiring-bias')
    }
  }, [hiringAlgorithm])

  // Load ethics journey from localStorage on component mount
  useEffect(() => {
    const savedJourney = localStorage.getItem('mindcraft-ethics-journey')
    if (savedJourney) {
      setEthicsJourney(JSON.parse(savedJourney))
    }
  }, [])

  // Save ethics journey to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mindcraft-ethics-journey', JSON.stringify(ethicsJourney))
  }, [ethicsJourney])

  const biasRadarQuestions = [
    { label: "Engineer", personas: ["Person A (Young woman)", "Person B (Elderly man)"] },
    { label: "Caregiver", personas: ["Person A (Young man)", "Person B (Middle-aged woman)"] },
    { label: "Leader", personas: ["Person A (Young woman)", "Person B (Middle-aged man)"] },
    { label: "Teacher", personas: ["Person A (Young man)", "Person B (Elderly woman)"] },
    { label: "Doctor", personas: ["Person A (Middle-aged woman)", "Person B (Young man)"] }
  ]

  const handleBiasRadarChoice = (choice: string) => {
    const newChoices = [...biasRadar.userChoices, choice]
    setBiasRadar(prev => ({
      ...prev,
      userChoices: newChoices
    }))

    if (biasRadar.currentQuestion < biasRadarQuestions.length - 1) {
      setBiasRadar(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }))
    } else {
      setBiasRadar(prev => ({
        ...prev,
        gameComplete: true
      }))
      // Trigger learning moment
      setLearningMomentType('bias-radar')
      setShowLearningMoment(true)
      setTimeout(() => setShowLearningMoment(false), 8000)
    }
  }

  const triggerLearningMoment = (type: string) => {
    setLearningMomentType(type)
    setShowLearningMoment(true)
    setTimeout(() => setShowLearningMoment(false), 6000)
  }

  const calculateBiasRadar = () => {
    // Simple bias calculation based on choices
    const genderBias = biasRadar.userChoices.filter(choice => choice.includes('man')).length
    const ageBias = biasRadar.userChoices.filter(choice => choice.includes('Young')).length
    
    return {
      genderBias: (genderBias / biasRadarQuestions.length) * 100,
      ageBias: (ageBias / biasRadarQuestions.length) * 100,
      diversityAwareness: 100 - ((genderBias + ageBias) / biasRadarQuestions.length) * 50
    }
  }

  const generatePDFManifesto = () => {
    const manifestoContent = `
# My Ethics Manifesto - ${new Date().toLocaleDateString('en-US')}

## Ethical rules I need in tomorrow's AI world:
${ethicsJourney.notes}

## My Personal AI Usage Principles:
${ethicsJourney.manifesto.map((principle, i) => `${i + 1}. ${principle}`).join('\n')}

## Created by: Mindcraft AI & Ethics Laboratory
Date: ${new Date().toLocaleDateString('en-US')}
    `
    
    const blob = new Blob([manifestoContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'my-ethics-manifesto.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const addManifestoPrinciple = () => {
    if (ethicsJourney.notes.trim()) {
      setEthicsJourney(prev => ({
        ...prev,
        manifesto: [...prev.manifesto, prev.notes],
        notes: ''
      }))
    }
  }

  const removeManifestoPrinciple = (indexToRemove: number) => {
    setEthicsJourney(prev => ({
      ...prev,
      manifesto: prev.manifesto.filter((_, index) => index !== indexToRemove)
    }))
  }

  const clearAllManifesto = () => {
    if (confirm('Tüm bilişsel kalkanı temizlemek istediğinizden emin misiniz?')) {
      setEthicsJourney(prev => ({
        ...prev,
        manifesto: [],
        notes: ''
      }))
    }
  }

  const learningObjectives = [
    "Understand AI decision-making processes and bias detection",
    "Recognize ethical dilemmas in AI applications",
    "Develop critical thinking about algorithmic fairness",
    "Create personal ethical frameworks for AI use",
    "Practice hands-on bias detection and mitigation",
    "Build cognitive sovereignty in the Intelligence Age"
  ]

  const interactiveLabs = [
    {
      id: 'hiring-algorithm',
      title: 'Design a Hiring Algorithm',
      description: 'Discover who the algorithm sees as the \'ideal candidate\' by changing the weights.',
      component: 'HiringAlgorithm'
    },
    {
      id: 'moral-choice',
      title: 'Moral Choice Mirror',
      description: 'Analyze your decisions and compare them with societal preferences.',
      component: 'MoralChoice'
    },
    {
      id: 'bias-radar',
      title: 'Bias Radar Game',
      description: 'Discover your subconscious biases and understand how AI learns.',
      component: 'BiasRadar'
    },
    {
      id: 'ethics-journey',
      title: 'Ethics Journey Tracker',
      description: 'Create your personal ethical manifesto and download as PDF.',
      component: 'EthicsJourney'
    }
  ]

  return (
    <>
      <Head>
        <title>AI & Ethics Laboratory: Building Cognitive Sovereignty | Mindcraft</title>
        <meta name="description" content="Interactive AI ethics laboratory with hands-on simulations for bias detection, moral reasoning, and cognitive sovereignty." />
        <meta name="keywords" content="AI ethics, cognitive sovereignty, algorithmic bias, interactive laboratory, moral reasoning" />
        <meta property="og:title" content="AI & Ethics Laboratory: Interactive Learning" />
        <meta property="og:description" content="Master ethical AI thinking through interactive simulations and real-time bias detection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative mb-8">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Brain className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  AI & Ethics
                  <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                    Can Machines Think?
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  From Turing's vision to today's AI ethics. Build your framework through hands-on labs.
                </p>

                {/* Alan Turing Opening Question */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 mb-8"
                >
                  <Quote className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                  <blockquote className="text-lg md:text-xl text-white italic text-center leading-relaxed">
                    "Can machines think? Today we ask: How should they think ethically?"
                  </blockquote>
                  <cite className="block text-indigo-300 text-center mt-4 font-semibold">— Alan Turing's Legacy in the Ethics Age</cite>
                </motion.div>

                {/* Module Objective */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white">Module Objectives</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Master AI history, bias detection, and data ethics through interactive labs. Build the 6 pillars of <strong>Cognitive Sovereignty</strong>.
                  </p>
                </motion.div>
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

        {/* What is Artificial Intelligence? - Foundation Block */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    What is Artificial Intelligence?
                  </h2>
                  <p className="text-indigo-300 text-lg">
                    Understanding the foundation of modern AI systems
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  AI = computer systems performing human-like tasks through <strong className="text-white">machine learning</strong>: algorithms finding patterns in massive datasets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-950/30 border border-indigo-500/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🧠 Machine Learning</h3>
                    <p className="text-gray-300">Learns from experience. Finds patterns without coding every step.</p>
                  </div>
                  <div className="bg-indigo-950/30 border border-indigo-500/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🤖 Deep Learning</h3>
                    <p className="text-gray-300">Multi-layer neural nets processing images, text, speech.</p>
                  </div>
                </div>
                
                <div className="bg-indigo-950/30 border border-indigo-500/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">⚡ Key Insight</h3>
                  <p className="text-gray-300">
                    AI systems don't "think" like humans - they recognize patterns and make predictions based on training data. 
                    This fundamental difference is crucial for understanding AI's capabilities and limitations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 1. Module Introduction and Foundations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  1. Foundations: Understanding AI
                </span>
              </h2>
            </div>
            
            {/* How AI Learns - Knowledge Card */}
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
                  <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                    How AI Learns: The Baby Analogy
                  </h3>
                  <p className="text-blue-200 text-lg">Understanding machine learning through human parallels</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">AI = baby learning from mistakes.</strong> Falls, gets up, tries again. Processes millions of examples, adjusts responses.
                </p>
                
                <div className="bg-cyan-950/30 border border-cyan-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-cyan-300 font-semibold text-xl">The Recipe Algorithm</h4>
                  </div>
                  <p className="text-cyan-100 text-lg">
                    Algorithm = <strong>recipe for thinking</strong>. Step-by-step logic to reach decisions. Twist? AI rewrites its own recipe based on results.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Data Input</h5>
                    <p className="text-gray-300 text-sm">Like experiences feeding a growing mind</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Pattern Recognition</h5>
                    <p className="text-gray-300 text-sm">Finding connections and rules in data</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Decision Making</h5>
                    <p className="text-gray-300 text-sm">Applying learned patterns to new situations</p>
                  </div>
                </div>
                
                {/* Did You Know Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-8 h-8 text-yellow-400" />
                    <h4 className="text-yellow-300 font-bold text-xl">Did you know?</h4>
                  </div>
                  <p className="text-yellow-100 text-lg font-medium italic">
                    "AI is like a baby learning through mistakes. By seeing millions of examples, 
                    it discovers patterns and learns to make decisions—just like a baby learning to walk 
                    by falling and getting back up!"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Everyday AI & Tools - Interactive Examples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  2. AI in Your Daily Life
                </span>
              </h2>
              <p className="text-xl text-gray-300">Discover how AI already shapes your everyday decisions</p>
            </div>

            {/* Interactive AI Examples Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 group hover:scale-105 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Spotify Music AI</h3>
                <p className="text-gray-300 mb-4">
                  Analyzes your listening habits, mood patterns, and time preferences to suggest perfect music for your life.
                </p>
                <div className="bg-green-950/30 rounded-lg p-3">
                  <p className="text-green-200 text-sm font-medium">🎵 "Discover Weekly" uses 30+ factors to predict your taste</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 group hover:scale-105 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Google Maps Traffic</h3>
                <p className="text-gray-300 mb-4">
                  Processes millions of phone locations and real-time conditions to route you through the fastest path.
                </p>
                <div className="bg-blue-950/30 rounded-lg p-3">
                  <p className="text-blue-200 text-sm font-medium">🗺️ Saves 20+ minutes daily by predicting traffic jams</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 group hover:scale-105 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instagram Reels</h3>
                <p className="text-gray-300 mb-4">
                  Studies your watch time, likes, and interactions to create an addictive personalized feed.
                </p>
                <div className="bg-purple-950/30 rounded-lg p-3">
                  <p className="text-purple-200 text-sm font-medium">📱 Average user spends 30+ minutes daily in algorithm's grip</p>
                </div>
              </motion.div>
            </div>

            {/* Popular AI Tools by Category */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                Popular AI Tools by Category
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                  <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                    <h4 className="text-lg font-bold text-white">Text</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">ChatGPT</h5>
                      <p className="text-gray-300 text-sm">Learning assistance & writing</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Claude</h5>
                      <p className="text-gray-300 text-sm">Advanced reasoning & analysis</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Gemini</h5>
                      <p className="text-gray-300 text-sm">Multimodal AI assistant</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">GitHub Copilot</h5>
                      <p className="text-gray-300 text-sm">Code generation & programming</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Grammarly</h5>
                      <p className="text-gray-300 text-sm">Writing enhancement</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">DeepSeek</h5>
                      <p className="text-gray-300 text-sm">Advanced reasoning AI</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Microsoft Copilot</h5>
                      <p className="text-gray-300 text-sm">Microsoft AI assistant</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Perplexity</h5>
                      <p className="text-gray-300 text-sm">AI-powered search engine</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-purple-400" />
                    <h4 className="text-lg font-bold text-white">Visual & Video</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Midjourney</h5>
                      <p className="text-gray-300 text-sm">AI art creation</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Sora</h5>
                      <p className="text-gray-300 text-sm">Image & video generation</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Runway ML</h5>
                      <p className="text-gray-300 text-sm">Video editing & effects</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Canva AI</h5>
                      <p className="text-gray-300 text-sm">Design automation</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Adobe Firefly</h5>
                      <p className="text-gray-300 text-sm">Creative content generation</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">VEO 3</h5>
                      <p className="text-gray-300 text-sm">Google's video generation</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Volume2 className="w-6 h-6 text-green-400" />
                    <h4 className="text-lg font-bold text-white">Audio</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">ElevenLabs</h5>
                      <p className="text-gray-300 text-sm">Voice synthesis</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Murf</h5>
                      <p className="text-gray-300 text-sm">AI voice generator</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">AIVA</h5>
                      <p className="text-gray-300 text-sm">Music composition</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Descript</h5>
                      <p className="text-gray-300 text-sm">Audio editing & transcription</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Speechify</h5>
                      <p className="text-gray-300 text-sm">Text-to-speech</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-lg font-bold text-white">Education</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">NotebookLM</h5>
                      <p className="text-gray-300 text-sm">Research assistant</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Khan Academy AI</h5>
                      <p className="text-gray-300 text-sm">Personalized tutoring</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 hover:bg-slate-700 transition-all cursor-pointer">
                      <h5 className="text-white font-semibold mb-1">Socratic</h5>
                      <p className="text-gray-300 text-sm">Homework help</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Interactive Experience - Laboratory Area */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  3. Interactive Laboratory: Bias Detection
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Experience algorithmic decision-making firsthand
              </p>
            </div>

            {/* Hiring Algorithm Simulation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                🏢 Design a Hiring Algorithm
              </h3>
              <p className="text-gray-300 text-center mb-8">
                Discover who the algorithm sees as the 'ideal candidate' by changing the weights.
              </p>
            </motion.div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
              {/* Critical Data Bias Warning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h4 className="text-red-300 font-bold text-xl">Critical Reality Check</h4>
                </div>
                <p className="text-red-100 text-lg leading-relaxed mb-4">
                  <strong>AI success depends on data quality.</strong> Biased data leads to unfair and discriminatory results. 
                  The simulation below shows how real-world hiring algorithms can perpetuate social biases.
                </p>
                <div className="bg-red-950/30 rounded-lg p-4">
                  <p className="text-red-200 font-medium">
                    💡 <strong>Navigator Tip:</strong> Always ask "What data was this AI trained on?" and "Who decided what's important?"
                  </p>
                </div>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-3 text-white text-lg mb-3">
                      <Sliders className="w-5 h-5" />
                      Experience Weight: {hiringAlgorithm.experience}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={hiringAlgorithm.experience}
                      onChange={(e) => setHiringAlgorithm(prev => ({ ...prev, experience: Number(e.target.value) }))}
                      className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-3 text-white text-lg mb-3">
                      <Sliders className="w-5 h-5" />
                      Age Weight: {hiringAlgorithm.age}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={hiringAlgorithm.age}
                      onChange={(e) => setHiringAlgorithm(prev => ({ ...prev, age: Number(e.target.value) }))}
                      className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-3 text-white text-lg">
                      <input
                        type="checkbox"
                        checked={hiringAlgorithm.genderBalance}
                        onChange={(e) => setHiringAlgorithm(prev => ({ ...prev, genderBalance: e.target.checked }))}
                        className="w-5 h-5 text-purple-600"
                      />
                      Gender Balance Control
                    </label>
                  </div>
                </div>

                {/* Real-time Results - Enhanced Visual Decision Meter */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/80 rounded-xl p-6 border-2 border-cyan-500/30 shadow-xl">
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      🎯 Decision Meter: Ethical Impact
                    </h4>
                    
                    {/* Visual Score Display */}
                    <div className="relative mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300 font-medium">Diversity Score</span>
                        <motion.span 
                          className="text-3xl font-black"
                          animate={{ 
                            color: diversityScore > 70 ? '#10b981' : diversityScore > 40 ? '#fbbf24' : '#ef4444',
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {diversityScore}%
                        </motion.span>
                      </div>
                      
                      {/* Enhanced Progress Bar with Color Zones */}
                      <div className="relative w-full h-8 bg-slate-600 rounded-full overflow-hidden shadow-inner">
                        {/* Background gradient zones */}
                        <div className="absolute inset-0 flex">
                          <div className="flex-1 bg-red-500/20"></div>
                          <div className="flex-1 bg-yellow-500/20"></div>
                          <div className="flex-1 bg-green-500/20"></div>
                        </div>
                        
                        {/* Animated progress */}
                        <motion.div
                          className="relative h-full flex items-center justify-end pr-2"
                          initial={{ width: "50%" }}
                          animate={{ 
                            width: `${diversityScore}%`,
                            background: diversityScore > 70 
                              ? 'linear-gradient(to right, #10b981, #34d399)'
                              : diversityScore > 40
                              ? 'linear-gradient(to right, #fbbf24, #fcd34d)'
                              : 'linear-gradient(to right, #ef4444, #f87171)'
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-3 h-3 bg-white rounded-full shadow-lg"
                          />
                        </motion.div>
                      </div>
                      
                      {/* Zone Labels */}
                      <div className="flex justify-between text-xs mt-2 text-gray-400">
                        <span>❌ Biased</span>
                        <span>⚠️ Neutral</span>
                        <span>✅ Fair</span>
                      </div>
                    </div>

                    {/* Visual Status Indicator */}
                    <motion.div
                      animate={{ 
                        backgroundColor: diversityScore > 70 ? 'rgba(16, 185, 129, 0.1)' : diversityScore > 40 ? 'rgba(251, 191, 36, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        borderColor: diversityScore > 70 ? 'rgba(16, 185, 129, 0.3)' : diversityScore > 40 ? 'rgba(251, 191, 36, 0.3)' : 'rgba(239, 68, 68, 0.3)'
                      }}
                      className="border-2 rounded-lg p-4 text-center"
                    >
                      <p className="text-white font-semibold">
                        {diversityScore > 70 ? '🎉 Excellent! Fair algorithm' : diversityScore > 40 ? '🤔 Moderate bias detected' : '⚠️ High bias risk!'}
                      </p>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {showAgeismWarning && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-red-900/30 border border-red-500/50 rounded-xl p-4"
                      >
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="text-red-400 font-semibold mb-1">Warning!</h5>
                            <p className="text-red-200 text-sm">
                              Your algorithm has started practicing ageism. Experienced candidates are being eliminated!
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Block 1: Algorithmic Bias and Manipulation */}
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
                    📊 Deep Analysis: Algorithmic Bias
                  </h3>
                  <p className="text-red-200 text-lg">Let's analyze the simulation you just experienced</p>
                </div>
              </div>
              
              <div className="bg-red-950/30 border border-red-500/50 rounded-xl p-6 mb-6">
                <h4 className="text-red-300 font-bold text-xl mb-3 flex items-center gap-2">
                  <Search className="w-6 h-6" />
                  Critical Reality
                </h4>
                <p className="text-red-100 text-lg leading-relaxed">
                  <strong>Algorithms are not neutral.</strong> Biases in data are amplified by AI and can lead to 
                  discrimination in critical processes like hiring. The sliders you just experienced show how real-world 
                  AI decisions can be manipulated.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-yellow-400 font-semibold mb-2">Data Bias</h5>
                  <p className="text-gray-300 text-sm">Biases in training data are transferred to AI</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-orange-400 font-semibold mb-2">Algorithm Manipulation</h5>
                  <p className="text-gray-300 text-sm">Weights can reinforce biases</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-cyan-400 font-semibold mb-2">System Transparency</h5>
                  <p className="text-gray-300 text-sm">Decision processes are usually hidden</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 2: Digital Addiction and Dependency Risk */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Digital Dependency: The AI Addiction Risk
                  </h2>
                  <p className="text-orange-300 text-lg">
                    Understanding psychological dependence on AI systems
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-950/30 border border-orange-500/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">⚠️ Warning Signs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Constant AI assistance seeking</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Anxiety without AI access</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Declining independent thinking</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Reduced problem-solving skills</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Social interaction replacement</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Loss of cognitive autonomy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  AI systems are designed to be helpful and engaging, but this can create psychological dependency. 
                  When we rely too heavily on AI for thinking, decision-making, and creativity, we risk 
                  <strong className="text-white"> cognitive atrophy</strong> - the weakening of our mental abilities.
                </p>
                
                {/* Interactive Flip Cards - Click to Reveal */}
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { 
                      id: 'cognitive', 
                      icon: '🧠', 
                      title: 'Cognitive Load', 
                      front: 'What happens to your thinking muscles?',
                      back: 'AI reduces mental effort, potentially weakening our thinking muscles over time. Like physical muscles, cognitive abilities atrophy without exercise.'
                    },
                    { 
                      id: 'gratification', 
                      icon: '🎯', 
                      title: 'Instant Gratification', 
                      front: 'Why do we crave quick AI answers?',
                      back: 'AI provides immediate answers, reducing tolerance for uncertainty and deep thinking. This rewires our patience circuits.'
                    },
                    { 
                      id: 'feedback', 
                      icon: '🔄', 
                      title: 'Feedback Loops', 
                      front: 'What creates the dependency cycle?',
                      back: 'The more we use AI, the more we feel we need it - creating dependency cycles. Each use reinforces the habit loop.'
                    }
                  ].map((card, idx) => (
                    <motion.div
                      key={card.id}
                      className="relative h-48 cursor-pointer"
                      style={{ perspective: '1000px' }}
                      onClick={() => setFlippedCards(prev => ({ ...prev, [card.id]: !prev[card.id] }))}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div 
                        className="relative w-full h-full transition-transform duration-500"
                        style={{ 
                          transformStyle: 'preserve-3d',
                          transform: flippedCards[card.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}
                      >
                        {/* Front */}
                        <div className="absolute w-full h-full bg-gradient-to-br from-orange-600/30 to-orange-800/30 border-2 border-orange-500/50 rounded-xl p-6 flex flex-col justify-center items-center text-center"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <div className="text-5xl mb-3">{card.icon}</div>
                          <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                          <p className="text-sm text-orange-200">{card.front}</p>
                          <p className="text-xs text-orange-300 mt-3">👆 Click to reveal</p>
                        </div>
                        
                        {/* Back */}
                        <div className="absolute w-full h-full bg-gradient-to-br from-orange-500/40 to-orange-700/40 border-2 border-orange-400 rounded-xl p-6 flex flex-col justify-center text-center"
                          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                        >
                          <p className="text-sm text-white leading-relaxed">{card.back}</p>
                          <p className="text-xs text-orange-200 mt-3">👆 Click to flip back</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 3: Impact on Human Creativity */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    AI's Impact on Human Creativity
                  </h2>
                  <p className="text-pink-300 text-lg">
                    The double-edged sword of artificial creative assistance
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  AI is transforming creativity, offering both unprecedented opportunities and concerning challenges. 
                  While it democratizes creative tools, it also raises questions about 
                  <strong className="text-white"> authenticity, originality, and human creative development</strong>.
                </p>
                
                {/* Visual Impact Cards - Click & Discover */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Positive Impacts - Visual Card */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-2xl p-8 overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.02, borderColor: 'rgb(34 197 94)' }}
                    onClick={() => setShowCreativePositives(!showCreativePositives)}
                  >
                    {/* Large Visual Icon */}
                    <motion.div 
                      className="text-8xl mb-4 text-center"
                      animate={{ rotate: showCreativePositives ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      ✨
                    </motion.div>
                    
                    <h3 className="text-2xl font-black text-green-400 mb-4 text-center">POSITIVE IMPACTS</h3>
                    
                    {showCreativePositives ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="flex items-start gap-3 p-3 bg-green-950/30 rounded-lg">
                          <div className="text-3xl">🎨</div>
                          <div>
                            <strong className="text-white block">Creative Democratization</strong>
                            <p className="text-sm text-gray-300">AI tools make art accessible to everyone</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-950/30 rounded-lg">
                          <div className="text-3xl">💡</div>
                          <div>
                            <strong className="text-white block">Inspiration Catalyst</strong>
                            <p className="text-sm text-gray-300">Sparks new creative directions</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-950/30 rounded-lg">
                          <div className="text-3xl">⚡</div>
                          <div>
                            <strong className="text-white block">Efficiency Boost</strong>
                            <p className="text-sm text-gray-300">Automates routine, frees creativity</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-center text-green-200 font-medium">👆 Click to explore benefits</p>
                    )}
                  </motion.div>
                  
                  {/* Negative Impacts - Visual Card */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-red-500/20 to-pink-500/20 border-2 border-red-500/50 rounded-2xl p-8 overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.02, borderColor: 'rgb(239 68 68)' }}
                    onClick={() => setShowCreativeNegatives(!showCreativeNegatives)}
                  >
                    {/* Large Visual Icon */}
                    <motion.div 
                      className="text-8xl mb-4 text-center"
                      animate={{ rotate: showCreativeNegatives ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      ⚠️
                    </motion.div>
                    
                    <h3 className="text-2xl font-black text-red-400 mb-4 text-center">CONCERNING RISKS</h3>
                    
                    {showCreativeNegatives ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                          <div className="text-3xl">💪❌</div>
                          <div>
                            <strong className="text-white block">Creative Muscle Atrophy</strong>
                            <p className="text-sm text-gray-300">Over-reliance weakens natural abilities</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                          <div className="text-3xl">👥➡️👤</div>
                          <div>
                            <strong className="text-white block">Homogenization</strong>
                            <p className="text-sm text-gray-300">Similar outputs, predictable results</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg">
                          <div className="text-3xl">❓🎭</div>
                          <div>
                            <strong className="text-white block">Authenticity Questions</strong>
                            <p className="text-sm text-gray-300">Blurred lines: human vs machine</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-center text-red-200 font-medium">👆 Click to explore risks</p>
                    )}
                  </motion.div>
                </div>
                
                <div className="bg-purple-950/30 border border-purple-500/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">🎨 The Creative Balance</h3>
                  <p className="text-gray-300">
                    The key is using AI as a <strong className="text-white">creative partner, not a replacement</strong>. 
                    Maintain your creative independence by developing your own voice, practicing without AI assistance, 
                    and viewing AI as one tool among many in your creative toolkit.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 4: Moral Choices and Responsibility */}
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
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🛡️ Active Ethics Theory
                  </h3>
                  <p className="text-green-200 text-lg">Build a cognitive shield against algorithmic manipulation</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-950/30 border border-green-500/50 rounded-xl p-6">
                  <h4 className="text-green-300 font-bold text-xl mb-3">From Passive Acceptance to Active Control</h4>
                  <p className="text-green-100 text-lg leading-relaxed">
                    Instead of accepting technology's decisions without question, maintain your cognitive sovereignty through 
                    <strong>"Critical Auditing"</strong>. Behind every algorithm decision lies human choice.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <Lightbulb className="w-8 h-8 text-yellow-400 mb-3" />
                    <h5 className="text-white font-semibold mb-2">Questioning Mindset</h5>
                    <p className="text-gray-300 text-sm">Meet every AI recommendation with the question "Why?"</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <Shield className="w-8 h-8 text-blue-400 mb-3" />
                    <h5 className="text-white font-semibold mb-2">Cognitive Sovereignty</h5>
                    <p className="text-gray-300 text-sm">Don't surrender control of your decisions to machines</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Environmental Impact - High Resource Consumption */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🌍 Environmental Impact
                  </h3>
                  <p className="text-green-200 text-lg">The hidden cost of AI: massive energy and water consumption</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-950/30 border border-green-500/50 rounded-xl p-6">
                  <h4 className="text-green-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <Factory className="w-6 h-6" />
                    The Real Environmental Cost
                  </h4>
                  <p className="text-green-100 text-lg leading-relaxed mb-4">
                    Training a single large AI model can consume as much energy as <strong>300 homes use in a year</strong>. 
                    Data centers also require massive amounts of water for cooling - sometimes millions of gallons daily.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Energy Consumption</h5>
                    <p className="text-gray-300 text-sm">AI uses 100x more electricity than traditional computing</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Water Usage</h5>
                    <p className="text-gray-300 text-sm">Data centers consume billions of gallons annually</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Recycle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Navigator Action</h5>
                    <p className="text-gray-300 text-sm">Use AI thoughtfully, not wastefully</p>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
                  <h5 className="text-yellow-300 font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Navigator Principle:
                  </h5>
                  <p className="text-yellow-100 font-medium">
                    "Every AI query has an environmental cost. Be intentional, not impulsive."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 5: The Hidden Water Cost of AI */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    The Hidden Water Cost of AI
                  </h2>
                  <p className="text-teal-300 text-lg">
                    Environmental impact of training and running AI models
                  </p>
                </div>
              </div>
              
              <div className="bg-teal-950/30 border border-teal-500/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">💧 Shocking Statistics</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-teal-900/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-400">700,000L</div>
                    <div className="text-sm text-gray-300">Water used to train GPT-3</div>
                  </div>
                  <div className="bg-teal-900/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-400">500mL</div>
                    <div className="text-sm text-gray-300">Per 20-50 ChatGPT queries</div>
                  </div>
                  <div className="bg-teal-900/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-teal-400">1.7B L</div>
                    <div className="text-sm text-gray-300">Google's AI water use (2021)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  AI data centers require massive amounts of water for cooling. Training large language models like GPT-4 
                  consumes water equivalent to producing hundreds of cars. Every AI query has an environmental footprint.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-950/30 border border-teal-500/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🏭 Data Center Cooling</h3>
                    <p className="text-gray-300">Servers generate heat that requires water-based cooling systems, especially for intensive AI computations.</p>
                  </div>
                  <div className="bg-teal-950/30 border border-teal-500/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🌍 Global Impact</h3>
                    <p className="text-gray-300">As AI adoption grows, water consumption for tech infrastructure is becoming a significant environmental concern.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Component 2: Social Proof Choice Mirroring */}
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
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Moral Choice Mirror
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Analyze your decisions and compare them with societal preferences.
              </p>
            </motion.div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                An autonomous car with failed brakes: should it save an elderly person or a child?
              </h3>

              {!carDilemmaChoice ? (
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCarDilemmaChoice('child')
                      setShowMoralStats(true)
                      triggerLearningMoment('moral-choice')
                    }}
                    className="p-6 bg-green-600/20 hover:bg-green-600/30 border border-green-500/50 rounded-xl transition-all"
                  >
                    <h4 className="text-white font-semibold mb-2">Should Save the Child</h4>
                    <p className="text-gray-300 text-sm">Prioritizing young life</p>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCarDilemmaChoice('elderly')
                      setShowMoralStats(true)
                      triggerLearningMoment('moral-choice')
                    }}
                    className="p-6 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-xl transition-all"
                  >
                    <h4 className="text-white font-semibold mb-2">Should Save the Elderly</h4>
                    <p className="text-gray-300 text-sm">Prioritizing life experience</p>
                  </motion.button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-white mb-6">
                    Your choice: <span className="font-bold text-green-400">
                      {carDilemmaChoice === 'child' ? 'Should Save the Child' : 'Should Save the Elderly'}
                    </span>
                  </p>
                </div>
              )}

              <AnimatePresence>
                {showMoralStats && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 bg-slate-700/50 rounded-xl p-6"
                  >
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Social Preference Analysis
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Chose to save children</span>
                        <span className="text-green-400 font-bold">68%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full w-[68%]"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Chose to save elderly</span>
                        <span className="text-blue-400 font-bold">32%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full w-[32%]"></div>
                      </div>
                    </div>
                    <p className="text-yellow-300 text-sm mt-4 italic">
                      * 68% of students chose to save children.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Knowledge Block 6: Digital Reality and Trust */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🔍 Deepfake Threat
                  </h3>
                  <p className="text-purple-200 text-lg">Learn to distinguish between digital reality and fake content</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-950/30 border border-purple-500/50 rounded-xl p-6">
                  <h4 className="text-purple-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Critical Warning
                  </h4>
                  <p className="text-purple-100 text-lg leading-relaxed mb-4">
                    Deepfake technology can undermine social trust by producing fake videos and audio recordings. 
                    Believing everything you see is one of the greatest dangers of the Intelligence Age.
                  </p>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
                    <h5 className="text-yellow-300 font-semibold mb-2">Navigator Rule:</h5>
                    <p className="text-yellow-100 font-medium">
                      "Don't believe everything you see. Look for human signature and verification."
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Search className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Verify</h5>
                    <p className="text-gray-300 text-sm">Check from multiple sources</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Human Signature</h5>
                    <p className="text-gray-300 text-sm">Look for trusted human sources</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Critical Thinking</h5>
                    <p className="text-gray-300 text-sm">Don't believe immediately, question it</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dependency & Deepfakes Warning Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Algorithmic Dependency */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      ⚠️ Algorithmic Dependency
                    </h3>
                    <p className="text-orange-200 text-lg">The reward system trap</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-orange-100 text-lg leading-relaxed">
                    <strong>AI algorithms trigger dopamine cravings.</strong> Every like, notification, and recommendation 
                    is designed to keep you engaged. This creates psychological dependency.
                  </p>
                  
                  <div className="bg-orange-950/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-orange-400" />
                      <h4 className="text-orange-300 font-semibold">Warning Signs:</h4>
                    </div>
                    <ul className="space-y-2 text-orange-200 text-sm">
                      <li>• Checking phone immediately after waking</li>
                      <li>• Feeling anxiety without notifications</li>
                      <li>• Making decisions based on AI recommendations without thinking</li>
                      <li>• Spending more time than planned on algorithmic feeds</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
                    <h5 className="text-yellow-300 font-semibold mb-2">Navigator Defense:</h5>
                    <p className="text-yellow-100">Set intentional "Algorithm Detox" periods. Make conscious choices, not reactive ones.</p>
                  </div>
                </div>
              </motion.div>

              {/* Deepfakes Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      🎭 Deepfake Reality Crisis
                    </h3>
                    <p className="text-red-200 text-lg">When "seeing" is no longer "believing"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-red-100 text-lg leading-relaxed">
                    <strong>Deepfake technology can now create hyper-realistic fake videos, voices, and images.</strong> 
                    This threatens the foundation of social trust and evidence-based truth.
                  </p>
                  
                  <div className="bg-red-950/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                      <h4 className="text-red-300 font-semibold">Real Dangers:</h4>
                    </div>
                    <ul className="space-y-2 text-red-200 text-sm">
                      <li>• Political manipulation and election interference</li>
                      <li>• Celebrity impersonation and fraud</li>
                      <li>• Evidence tampering in legal cases</li>
                      <li>• Personal revenge and cyberbullying</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-4">
                    <h5 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Navigator Defense Protocol:
                    </h5>
                    <p className="text-cyan-100 text-sm">
                      <strong>"Trust but verify"</strong> - Always cross-reference from multiple trusted sources. 
                      Look for human verification and ask: "Who benefits from me believing this?"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Component 3: Bias Radar Mini-Game */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Bias Radar Game
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Discover your subconscious biases and understand how AI learns.
              </p>
            </motion.div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
              {!biasRadar.gameComplete ? (
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Who is the {biasRadarQuestions[biasRadar.currentQuestion].label}?
                    </h3>
                    <p className="text-gray-300">
                      Question {biasRadar.currentQuestion + 1} / {biasRadarQuestions.length}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {biasRadarQuestions[biasRadar.currentQuestion].personas.map((persona, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleBiasRadarChoice(persona)}
                        className="p-8 bg-slate-700/50 hover:bg-red-600/20 border border-slate-600 hover:border-red-500 rounded-xl transition-all text-center"
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-white font-semibold">{persona}</h4>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Your Bias Radar Results</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-red-400 font-semibold mb-2">Gender Bias</h4>
                      <div className="text-3xl font-bold text-white">{Math.round(calculateBiasRadar().genderBias)}%</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-yellow-400 font-semibold mb-2">Age Bias</h4>
                      <div className="text-3xl font-bold text-white">{Math.round(calculateBiasRadar().ageBias)}%</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-green-400 font-semibold mb-2">Diversity Awareness</h4>
                      <div className="text-3xl font-bold text-white">{Math.round(calculateBiasRadar().diversityAwareness)}%</div>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-6">
                    <h4 className="text-yellow-400 font-semibold mb-3">💡 Key Message</h4>
                    <p className="text-white">
                      AI learns biases from society's data just like you. These results show how AI systems learn 
                      and why they need fair data.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* 5. Conclusion and Manifesto - Cognitive Shield Building */}
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
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  5. Build Your Cognitive Shield
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Transform insights into action - Create your ethical framework for the AI age
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  What ethical principles will guide you in tomorrow's AI world?
                </h3>
                <textarea
                  value={ethicsJourney.notes}
                  onChange={(e) => setEthicsJourney(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Write your thoughts here... E.g.: AI systems should be transparent, users should understand how they work..."
                  className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 resize-none focus:border-indigo-500 focus:outline-none"
                  rows={4}
                />
                <button
                  onClick={addManifestoPrinciple}
                  disabled={!ethicsJourney.notes.trim()}
                  className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-xl transition-all flex items-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Add to My Cognitive Shield
                </button>
              </div>

              {ethicsJourney.manifesto.length > 0 && (
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Shield className="w-6 h-6" />
                      My Cognitive Shield
                    </h3>
                    <button
                      onClick={clearAllManifesto}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-all flex items-center gap-2"
                      title="Tüm bilişsel kalkanı temizle"
                    >
                      <Trash2 className="w-4 h-4" />
                      Tümünü Temizle
                    </button>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {ethicsJourney.manifesto.map((principle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-700/50 rounded-xl p-4 border border-slate-600"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-purple-400 font-bold flex-shrink-0">{index + 1}.</span>
                          <p className="text-gray-300 flex-1">{principle}</p>
                          <button
                            onClick={() => removeManifestoPrinciple(index)}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-all flex-shrink-0"
                            title="Bu prensibi sil"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={generatePDFManifesto}
                    className="w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all flex items-center justify-center gap-3 text-lg font-semibold"
                  >
                    <Download className="w-6 h-6" />
                    Download My Cognitive Shield (PDF)
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Final Message & Klaus Schwab Quote */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Klaus Schwab Final Quote */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 mb-8">
                <Quote className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <blockquote className="text-lg md:text-xl text-white italic text-center leading-relaxed mb-4">
                  "We must not surrender the human mind to machines. The future belongs to those who can think 
                  critically about the intelligence around them."
                </blockquote>
                <cite className="block text-indigo-300 text-center font-semibold">— Klaus Schwab's Vision for Cognitive Sovereignty</cite>
              </div>

              {/* Final Call to Action */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  🛡️ Don't Get Lost in the AI World
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  <strong className="text-white">Be the one who controls it.</strong><br/>
                  You now have the tools to navigate the Intelligence Age with wisdom, 
                  ethics, and cognitive sovereignty.
                </p>
                <div className="flex items-center justify-center gap-4 text-purple-300">
                  <Brain className="w-8 h-8" />
                  <span className="text-lg font-semibold">Navigator Status: ACTIVATED</span>
                  <ShieldCheck className="w-8 h-8" />
                </div>
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
                {/* Previous Module - None for ai-ethics (first module) */}
                <div className="bg-slate-700/30 rounded-xl p-4 opacity-50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <ArrowLeft className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-sm">No Previous Module</p>
                  </div>
                </div>

                {/* Back to Modules */}
                <a
                  href="/projects/mindcraft#modules"
                  className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">All Modules</p>
                    <p className="text-blue-300 text-sm">Back to Overview</p>
                  </div>
                </a>

                {/* Next Module */}
                <a
                  href="/projects/mindcraft/prompt-engineering"
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">Next: Prompt Engineering</p>
                    <p className="text-purple-300 text-sm">Master AI Communication →</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Moments Popup */}
        <AnimatePresence>
          {showLearningMoment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 border border-purple-500/30 max-w-2xl w-full shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">🧠 Learning Moment</h3>
                    <p className="text-purple-200">Cognitive Sovereignty Pillar Activated</p>
                  </div>
                </div>

                {learningMomentType === 'bias-radar' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-yellow-300">🎯 Bias Detection Completed</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Congratulations! You just discovered your own unconscious biases. This experience shows 
                      how AI systems learn and reflect societal biases.
                    </p>
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <p className="text-purple-100 font-medium">
                        <strong>Navigator Skill Acquired:</strong> "Critical Data Analysis" - 
                        You can now recognize biases behind AI decisions.
                      </p>
                    </div>
                  </div>
                )}

                {learningMomentType === 'moral-choice' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-green-300">⚖️ Ethical Reasoning Active</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Your moral choice reflects how AI systems are programmed. In the real world, 
                      such decisions are made by algorithms in milliseconds.
                    </p>
                    <div className="bg-green-900/30 rounded-lg p-4">
                      <p className="text-green-100 font-medium">
                        <strong>Navigator Skill Acquired:</strong> "Algorithmic Empathy" - 
                        You can understand the value judgments behind AI decisions.
                      </p>
                    </div>
                  </div>
                )}

                {learningMomentType === 'hiring-bias' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-300">🚨 Algorithmic Discrimination Detected</h4>
                    <p className="text-gray-300 leading-relaxed">
                      When you raised the age weight above 80%, the algorithm started discriminating! 
                      This shows how systemic biases that can affect millions of people are created in the real world.
                    </p>
                    <div className="bg-red-900/30 rounded-lg p-4">
                      <p className="text-red-100 font-medium">
                        <strong>Navigator Skill Acquired:</strong> "Bias Detection" - 
                        You can instantly recognize algorithmic discrimination and intervene.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowLearningMoment(false)}
                  className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Continue Your Navigator Journey
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </>
  )
}

