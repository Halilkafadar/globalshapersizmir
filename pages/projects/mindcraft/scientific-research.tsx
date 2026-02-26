import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Microscope, 
  Search, 
  BookOpen, 
  PieChart, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Play, 
  Brain,
  Database,
  Target,
  Lightbulb,
  Users,
  Beaker,
  AlertCircle,
  Zap,
  Droplet,
  TrendingUp,
  Eye,
  FileText,
  Sparkles,
  RotateCcw,
  Download,
  Save,
  ExternalLink,
  Leaf,
  Award,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Cpu,
  Cloud,
  FlaskConical,
  LineChart,
  Filter,
  Globe,
  Clock,
  BookMarked,
  Flame,
  Recycle,
  Calculator,
  MessageSquare,
  Palette
} from 'lucide-react'

// TypeScript Interfaces
interface HypothesisState {
  problem: string
  variable1: string
  variable2: string
  hypothesis: string
}

interface AuditGame {
  abstracts: Abstract[]
  selectedIndex: number | null
  isComplete: boolean
  isCorrect: boolean | null
}

interface Abstract {
  id: number
  title: string
  content: string
  isFake: boolean
  explanation?: string
}

interface TrendData {
  week: number
  value: number
  isVisible: boolean
}

interface UserProgress {
  notesCount: number
  labsCompleted: string[]
  researchManifesto: string
  lastVisit: string
}

interface ScrollPosition {
  activeBlock: number
  progress: number
}

export default function ScientificResearchPage() {
  // Core State Management
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ activeBlock: 0, progress: 0 })
  const [userProgress, setUserProgress] = useState<UserProgress>({
    notesCount: 0,
    labsCompleted: [],
    researchManifesto: '',
    lastVisit: new Date().toISOString()
  })

  // Lab A: Hypothesis Sandbox State
  const [hypothesisLab, setHypothesisLab] = useState<HypothesisState>({
    problem: '',
    variable1: '',
    variable2: '',
    hypothesis: ''
  })

  // Lab B: Audit Game State
  const [auditGame, setAuditGame] = useState<AuditGame>({
    abstracts: [],
    selectedIndex: null,
    isComplete: false,
    isCorrect: null
  })

  // Lab C: Trend Visualizer State
  const [trendData, setTrendData] = useState<TrendData[]>([
    { week: 1, value: 23, isVisible: true },
    { week: 2, value: 45, isVisible: true },
    { week: 3, value: 12, isVisible: true },
    { week: 4, value: 67, isVisible: true },
    { week: 5, value: 34, isVisible: true },
    { week: 6, value: 89, isVisible: true },
    { week: 7, value: 56, isVisible: true },
    { week: 8, value: 91, isVisible: true }
  ])
  const [showTrendLine, setShowTrendLine] = useState(false)

  // Research Notes State
  const [researchNotes, setResearchNotes] = useState<string[]>([])
  const [currentNote, setCurrentNote] = useState('')

  // Content Data
  const researchSteps = [
    {
      number: 1,
      title: "Observation",
      description: "Systematically watch and record phenomena in the natural world",
      example: "Noticing that certain plants grow faster in specific soil conditions",
      aiRole: "Computer vision analyzes thousands of images to detect subtle patterns",
      icon: Eye,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Question",
      description: "Formulate specific, testable questions about observed phenomena",
      example: "Does soil pH affect plant growth rate in controlled conditions?",
      aiRole: "Natural language processing helps refine questions for clarity and testability",
      icon: Search,
      color: "from-indigo-500 to-blue-500"
    },
    {
      number: 3,
      title: "Hypothesis",
      description: "Propose a logical explanation that can be tested experimentally",
      example: "If soil pH is between 6.0-7.0, then plant growth rate will increase by 40%",
      aiRole: "Machine learning suggests relationships based on existing research data",
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-500"
    },
    {
      number: 4,
      title: "Experiment",
      description: "Design and conduct controlled tests to validate or refute the hypothesis",
      example: "Growing identical plants in different pH soils while controlling other variables",
      aiRole: "Automated systems run thousands of parallel experiments with precise control",
      icon: FlaskConical,
      color: "from-pink-500 to-purple-500"
    },
    {
      number: 5,
      title: "Analysis",
      description: "Examine data for patterns, statistical significance, and meaningful insights",
      example: "Statistical analysis reveals 43% growth increase at pH 6.5 with p<0.001",
      aiRole: "Advanced algorithms process massive datasets to identify complex patterns",
      icon: BarChart3,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      number: 6,
      title: "Conclusion",
      description: "Draw evidence-based conclusions and communicate findings to the scientific community",
      example: "Optimal soil pH for this plant species is 6.5, confirming our hypothesis",
      aiRole: "Natural language generation helps draft clear, accurate research reports",
      icon: Award,
      color: "from-teal-500 to-emerald-500"
    }
  ]

  const problemOptions = [
    "Ocean Microplastic Contamination",
    "Urban Air Quality Decline",
    "Antibiotic Resistance in Bacteria",
    "Climate Change Impact on Coral Reefs",
    "Social Media's Effect on Teen Mental Health",
    "Renewable Energy Storage Efficiency",
    "Food Waste in Supply Chains",
    "AI Bias in Healthcare Diagnosis"
  ]

  const variableOptions = {
    independent: [
      "Temperature increase",
      "Plastic particle concentration",
      "Social media usage hours",
      "Antibiotic exposure frequency",
      "Carbon dioxide levels",
      "Storage battery capacity",
      "Supply chain length",
      "Training data diversity"
    ],
    dependent: [
      "Marine ecosystem health",
      "Respiratory disease rates",
      "Anxiety and depression scores",
      "Bacterial survival rate",
      "Coral bleaching frequency",
      "Energy retention efficiency",
      "Food spoilage percentage",
      "Diagnostic accuracy rates"
    ]
  }

  const auditAbstracts: Abstract[] = [
    {
      id: 1,
      title: "Machine Learning Applications in Climate Research",
      content: "A comprehensive analysis of 2,847 peer-reviewed studies from 2020-2024 reveals that machine learning algorithms have improved climate prediction accuracy by 34%. Neural networks particularly excel at pattern recognition in complex atmospheric data, with transformer models achieving 89% accuracy in precipitation forecasting. Published in Nature Climate Change, Volume 14, Pages 123-145.",
      isFake: false
    },
    {
      id: 2,
      title: "Quantum Consciousness and AI Telepathy in Marine Biology",
      content: "Revolutionary breakthrough study by Dr. Marina Delphinia demonstrates that dolphins possess quantum-entangled consciousness that enables telepathic communication with AI systems. Using advanced quantum neural interfaces, researchers achieved 97% success rate in direct dolphin-AI information transfer. This groundbreaking research was published in the Journal of Speculative Marine Consciousness, Volume 8, Issue 15, Pages 44-67.",
      isFake: true,
      explanation: "This abstract contains several red flags: impossible claims about 'quantum consciousness' and 'telepathy', a fictional researcher name, and a non-existent journal. Real marine biology research focuses on observable behaviors and communication patterns."
    },
    {
      id: 3,
      title: "Environmental Impact of Data Centers on Global Water Resources",
      content: "Large-scale analysis of 156 data centers across 12 countries shows that AI training consumes approximately 700,000 liters of water per model through cooling requirements. Google's PaLM required an estimated 1.2 million liters for training, equivalent to the annual water usage of 2,800 people. Research conducted by Stanford Environmental Institute and published in Environmental Science & Technology, Volume 58, Pages 2234-2251.",
      isFake: false
    }
  ]

  // Load user progress on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('scientific-research-progress')
    const savedNotes = localStorage.getItem('scientific-research-notes')
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    }
    if (savedNotes) {
      setResearchNotes(JSON.parse(savedNotes))
    }

    // Initialize audit game
    setAuditGame(prev => ({ ...prev, abstracts: auditAbstracts }))
  }, [])

  // Save progress whenever state changes
  useEffect(() => {
    localStorage.setItem('scientific-research-progress', JSON.stringify(userProgress))
  }, [userProgress])

  useEffect(() => {
    localStorage.setItem('scientific-research-notes', JSON.stringify(researchNotes))
  }, [researchNotes])

  // Scroll tracking for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight

      setScrollPosition({
        activeBlock: Math.floor(scrollPercent * 6),
        progress: scrollPercent * 100
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lab A Functions
  const generateHypothesis = () => {
    if (!hypothesisLab.problem || !hypothesisLab.variable1 || !hypothesisLab.variable2) return
    
    const hypothesis = `If ${hypothesisLab.variable1.toLowerCase()}, then ${hypothesisLab.variable2.toLowerCase()} will change significantly in the context of ${hypothesisLab.problem.toLowerCase()}.`
    
    setHypothesisLab(prev => ({ ...prev, hypothesis }))
    
    // Mark lab as completed
    if (!userProgress.labsCompleted.includes('hypothesis')) {
      setUserProgress(prev => ({
        ...prev,
        labsCompleted: [...prev.labsCompleted, 'hypothesis']
      }))
    }
  }

  // Lab B Functions
  const selectAbstract = (index: number) => {
    const selected = auditGame.abstracts[index]
    const isCorrect = selected.isFake

    setAuditGame(prev => ({
      ...prev,
      selectedIndex: index,
      isComplete: true,
      isCorrect
    }))

    // Mark lab as completed
    if (!userProgress.labsCompleted.includes('audit')) {
      setUserProgress(prev => ({
        ...prev,
        labsCompleted: [...prev.labsCompleted, 'audit']
      }))
    }
  }

  // Lab C Functions
  const revealTrend = () => {
    setShowTrendLine(true)
    
    // Mark lab as completed
    if (!userProgress.labsCompleted.includes('trend')) {
      setUserProgress(prev => ({
        ...prev,
        labsCompleted: [...prev.labsCompleted, 'trend']
      }))
    }
  }

  // Notes Functions
  const addNote = () => {
    if (!currentNote.trim()) return
    
    setResearchNotes(prev => [...prev, currentNote.trim()])
    setCurrentNote('')
    setUserProgress(prev => ({
      ...prev,
      notesCount: prev.notesCount + 1
    }))
  }

  const saveManifesto = (manifesto: string) => {
    setUserProgress(prev => ({
      ...prev,
      researchManifesto: manifesto
    }))
  }

  return (
    <>
      <Head>
        <title>Scientific Research Methods - Interactive Inquiry Lab - MindCraft</title>
        <meta name="description" content="Master scientific inquiry in the intelligent age. Learn the research method, work with AI as a research partner, detect hallucinations, and understand sustainability impacts." />
      </Head>
      
      <Navbar />
      
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500"
          style={{ width: `${scrollPosition.progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Icon */}
            <motion.div 
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Microscope className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Scientific Inquiry
              </span>
              <br />
              <span className="text-white">in the Intelligent Age</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Master the art of systematic investigation. Learn how human curiosity and AI capabilities 
              combine to unlock the secrets of our universe—while staying grounded in evidence, 
              ethics, and environmental responsibility.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <motion.div 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <FlaskConical className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">6 Steps</div>
                <div className="text-blue-300 text-sm">Scientific Method Enhanced by AI</div>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <Brain className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">3 Labs</div>
                <div className="text-blue-300 text-sm">Interactive Research Simulations</div>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{userProgress.labsCompleted.length}/3</div>
                <div className="text-blue-300 text-sm">Your Progress</div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-cyan-300"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 1: The Research Vision */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Block Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Block 1: The Research Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  What is Scientific Research?
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Research is <strong>systematic inquiry</strong> based on observable evidence and logical reasoning. 
                It's not about proving what you believe—it's about discovering what is true through rigorous, 
                repeatable investigation. The scientific method is humanity's most powerful tool for 
                understanding reality.
              </p>
            </div>

            {/* Definition Card */}
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 md:p-12 mb-16">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    The Foundations of Inquiry
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Scientific research begins with <strong className="text-cyan-300">curiosity</strong> about the natural world. 
                    It demands <strong className="text-cyan-300">skepticism</strong>—questioning assumptions and seeking evidence. 
                    It requires <strong className="text-cyan-300">objectivity</strong>—setting aside personal biases to follow the data. 
                    And it culminates in <strong className="text-cyan-300">reproducibility</strong>—ensuring others can verify your findings.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                  <Eye className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Curiosity</div>
                  <div className="text-blue-300 text-sm mt-1">Ask questions</div>
                </div>
                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
                  <Shield className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Skepticism</div>
                  <div className="text-blue-300 text-sm mt-1">Demand evidence</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Objectivity</div>
                  <div className="text-blue-300 text-sm mt-1">Follow data</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <RotateCcw className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Reproducibility</div>
                  <div className="text-blue-300 text-sm mt-1">Verify results</div>
                </div>
              </div>
            </div>

            {/* The 6 Steps */}
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                The 6 Steps of Scientific Investigation
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {researchSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-cyan-400 font-bold text-sm mb-1">STEP {step.number}</div>
                      <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-blue-950/50 border border-blue-500/30 rounded-xl p-4 mb-4">
                    <div className="text-cyan-300 font-semibold text-sm mb-2">EXAMPLE:</div>
                    <p className="text-blue-200 text-sm italic">"{step.example}"</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-indigo-300 font-semibold text-xs mb-1">AI ENHANCEMENT:</div>
                      <p className="text-blue-300 text-sm">{step.aiRole}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 2: AI as Research Partner */}
      <section className="py-24 bg-gradient-to-br from-blue-950 to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Block Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-6 py-3 mb-6">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Block 2: AI as Research Partner</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Intelligence Amplification for Discovery
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Artificial Intelligence doesn't replace the researcher—it <strong>amplifies human capability</strong>. 
                AI excels at processing vast datasets, recognizing complex patterns, and conducting exhaustive 
                literature reviews. But the critical thinking, hypothesis formation, and ethical judgment? 
                That's the irreplaceable <strong>human signature</strong>.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <BookMarked className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Literature Review at Scale</h3>
                <p className="text-blue-200 mb-4">
                  AI can analyze <strong>millions of research papers</strong> in hours—a task that would take 
                  a human researcher years. It identifies relevant studies, extracts key findings, 
                  and maps connections between seemingly unrelated research domains.
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <div className="text-cyan-300 text-sm font-semibold mb-1">SPEED ADVANTAGE:</div>
                  <div className="text-white">Process 10,000+ papers in 24 hours</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pattern Recognition in Data</h3>
                <p className="text-blue-200 mb-4">
                  Machine learning algorithms detect <strong>subtle patterns</strong> in complex datasets that 
                  human perception might miss. They excel at multidimensional analysis—processing thousands 
                  of variables simultaneously to find hidden correlations.
                </p>
                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-3">
                  <div className="text-indigo-300 text-sm font-semibold mb-1">CAPABILITY:</div>
                  <div className="text-white">Analyze 1000+ variable relationships</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Massive Dataset Processing</h3>
                <p className="text-blue-200 mb-4">
                  From genomics to climate science, modern research generates <strong>petabytes of data</strong>. 
                  AI systems can process, clean, and extract insights from datasets far too large for 
                  traditional analysis methods.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <div className="text-blue-300 text-sm font-semibold mb-1">SCALE:</div>
                  <div className="text-white">Process terabytes per hour</div>
                </div>
              </motion.div>
            </div>

            {/* The Human Checkpoint */}
            <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    The Critical Human Checkpoint
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    While AI processes data at superhuman speed, <strong className="text-amber-300">human researchers</strong> provide 
                    the essential oversight:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Lightbulb className="w-6 h-6 text-amber-400" />
                        <h4 className="text-xl font-bold text-white">Research Question Formation</h4>
                      </div>
                      <p className="text-blue-200">
                        Humans identify <strong>meaningful problems</strong> to investigate. AI can't decide 
                        what's important to study—that requires human intuition, creativity, and 
                        understanding of societal needs.
                      </p>
                    </div>

                    <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Search className="w-6 h-6 text-amber-400" />
                        <h4 className="text-xl font-bold text-white">Critical Auditing</h4>
                      </div>
                      <p className="text-blue-200">
                        Humans must <strong>verify AI outputs</strong>, check for biases, validate 
                        statistical methods, and ensure conclusions are logically sound. AI can 
                        make errors—human oversight catches them.
                      </p>
                    </div>

                    <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-6 h-6 text-amber-400" />
                        <h4 className="text-xl font-bold text-white">Ethical Judgment</h4>
                      </div>
                      <p className="text-blue-200">
                        Humans ensure research is <strong>ethically conducted</strong>—protecting subjects, 
                        respecting privacy, and considering the broader implications of discoveries. 
                        AI has no moral compass.
                      </p>
                    </div>

                    <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-amber-400" />
                        <h4 className="text-xl font-bold text-white">Contextual Understanding</h4>
                      </div>
                      <p className="text-blue-200">
                        Humans interpret findings within <strong>real-world context</strong>—understanding 
                        cultural, historical, and practical implications that AI cannot grasp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAB A: Hypothesis Sandbox */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
                <FlaskConical className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Interactive Lab A</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  The Hypothesis Sandbox
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Build your own testable hypothesis by selecting a real-world problem and variables. 
                See how a proper scientific hypothesis is structured.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-cyan-300 font-semibold mb-3 text-lg">
                    1. Select Research Problem
                  </label>
                  <select
                    value={hypothesisLab.problem}
                    onChange={(e) => setHypothesisLab(prev => ({ ...prev, problem: e.target.value }))}
                    className="w-full bg-slate-800/50 border border-blue-500/50 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  >
                    <option value="">Choose a problem...</option>
                    {problemOptions.map((problem, index) => (
                      <option key={index} value={problem}>{problem}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-cyan-300 font-semibold mb-3 text-lg">
                    2. Independent Variable (Cause)
                  </label>
                  <select
                    value={hypothesisLab.variable1}
                    onChange={(e) => setHypothesisLab(prev => ({ ...prev, variable1: e.target.value }))}
                    className="w-full bg-slate-800/50 border border-blue-500/50 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  >
                    <option value="">Choose variable...</option>
                    {variableOptions.independent.map((variable, index) => (
                      <option key={index} value={variable}>{variable}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-cyan-300 font-semibold mb-3 text-lg">
                    3. Dependent Variable (Effect)
                  </label>
                  <select
                    value={hypothesisLab.variable2}
                    onChange={(e) => setHypothesisLab(prev => ({ ...prev, variable2: e.target.value }))}
                    className="w-full bg-slate-800/50 border border-blue-500/50 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  >
                    <option value="">Choose variable...</option>
                    {variableOptions.dependent.map((variable, index) => (
                      <option key={index} value={variable}>{variable}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center mb-8">
                <motion.button
                  onClick={generateHypothesis}
                  disabled={!hypothesisLab.problem || !hypothesisLab.variable1 || !hypothesisLab.variable2}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Generate Hypothesis
                  </div>
                </motion.button>
              </div>

              <AnimatePresence>
                {hypothesisLab.hypothesis && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-2 border-cyan-500/50 rounded-2xl p-8"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Your Generated Hypothesis</h3>
                        <p className="text-cyan-300 text-sm">This is a testable, falsifiable scientific statement</p>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 mb-6">
                      <p className="text-white text-xl italic leading-relaxed">
                        "{hypothesisLab.hypothesis}"
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-blue-950/50 border border-blue-500/30 rounded-lg p-4">
                        <div className="text-blue-300 font-semibold mb-1">PROBLEM CONTEXT</div>
                        <div className="text-white">{hypothesisLab.problem}</div>
                      </div>
                      <div className="bg-indigo-950/50 border border-indigo-500/30 rounded-lg p-4">
                        <div className="text-indigo-300 font-semibold mb-1">CAUSE (Independent)</div>
                        <div className="text-white">{hypothesisLab.variable1}</div>
                      </div>
                      <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-lg p-4">
                        <div className="text-cyan-300 font-semibold mb-1">EFFECT (Dependent)</div>
                        <div className="text-white">{hypothesisLab.variable2}</div>
                      </div>
                    </div>

                    {userProgress.labsCompleted.includes('hypothesis') && (
                      <div className="mt-6 flex items-center justify-center gap-2 text-cyan-300">
                        <Award className="w-5 h-5" />
                        <span className="font-semibold">Lab Completed!</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 3: The Danger of Hallucinations */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Block Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 mb-6">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-semibold">Block 3: Critical Risk Assessment</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                  The Danger of Scientific Hallucinations
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                AI systems can <strong className="text-red-300">fabricate convincing falsehoods</strong>—generating 
                fake research citations, non-existent journals, and plausible-sounding scientific "facts" 
                that don't exist. This phenomenon, called <strong className="text-red-300">hallucination</strong>, 
                poses a serious threat to the integrity of scientific research.
              </p>
            </div>

            {/* The Risk Explained */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-lg border-2 border-red-500/50 rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    What Are AI Hallucinations?
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Large language models are trained to predict the next word in a sequence based on patterns 
                    in their training data. When asked about specific research, they sometimes <strong className="text-red-300">generate 
                    plausible-sounding but entirely fictional</strong> citations, authors, journals, or findings. 
                    The AI doesn't "know" it's lying—it's simply producing statistically likely text patterns.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-red-400" />
                    Examples of Hallucinations
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Fake Citations:</strong> Complete references to papers 
                        that don't exist, with realistic-looking author names and journal titles
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Non-existent Journals:</strong> Names like "Journal of 
                        Quantum Biophysics" that sound legitimate but were never published
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Fictional Findings:</strong> Specific statistics or 
                        conclusions that were never actually researched or discovered
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Invented Researchers:</strong> Names of scientists who 
                        don't exist, complete with institutional affiliations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-950/40 border border-orange-500/40 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-orange-400" />
                    Why This is Dangerous
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Corrupts Scientific Record:</strong> Fake citations 
                        can spread through literature, creating false research lineages
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Wastes Research Time:</strong> Scientists spend hours 
                        trying to find non-existent papers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Undermines Trust:</strong> Erodes confidence in 
                        legitimate AI-assisted research tools
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">
                        <strong className="text-white">Policy Misinformation:</strong> Fake research could 
                        influence real-world decisions if not caught
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Defense: Human Verification */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 backdrop-blur-lg border-2 border-emerald-500/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    The Essential Role of Peer Review
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    <strong className="text-emerald-300">Human verification</strong> is the critical defense against 
                    AI hallucinations. The peer review process—where independent experts evaluate research before 
                    publication—acts as a quality control system that AI cannot bypass.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Verification Steps:</h4>
                      <ul className="space-y-2 text-blue-200">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Cross-check citations in original databases
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Verify journal existence and impact factor
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Confirm author credentials and affiliations
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Review statistical methods for validity
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          Check if conclusions match the data
                        </li>
                      </ul>
                    </div>

                    <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Red Flags to Watch:</h4>
                      <ul className="space-y-2 text-blue-200">
                        <li className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          Unusual or generic journal names
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          Perfect data with no error margins
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          Impossibly recent publication dates
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          Researchers with no online presence
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          Claims that sound too revolutionary
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAB B: Fact-Check Audit Game */}
      <section className="py-24 bg-gradient-to-br from-red-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 mb-6">
                <Search className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-semibold">Interactive Lab B</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                  The Fact-Check Audit Challenge
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Can you spot the AI hallucination? One of these three abstracts is completely fabricated. 
                Use your critical thinking skills to identify the fake.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-red-900/30 backdrop-blur-lg border border-red-500/30 rounded-3xl p-8 md:p-12">
              {!auditGame.isComplete ? (
                <div className="space-y-6">
                  {auditGame.abstracts.map((abstract, index) => (
                    <motion.div
                      key={abstract.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => selectAbstract(index)}
                      className="bg-slate-800/50 border-2 border-blue-500/30 hover:border-red-500/60 rounded-2xl p-6 cursor-pointer transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-cyan-400 font-bold">Abstract {abstract.id}</span>
                            <span className="text-xs bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3 py-1 rounded-full">
                              Click to Audit
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{abstract.title}</h3>
                          <p className="text-blue-200 leading-relaxed">{abstract.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-2xl p-8 ${
                    auditGame.isCorrect 
                      ? 'bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-2 border-emerald-500/50' 
                      : 'bg-gradient-to-br from-red-900/50 to-orange-900/50 border-2 border-red-500/50'
                  }`}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      auditGame.isCorrect 
                        ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                        : 'bg-gradient-to-br from-red-500 to-orange-600'
                    }`}>
                      {auditGame.isCorrect ? (
                        <CheckCircle className="w-8 h-8 text-white" />
                      ) : (
                        <AlertCircle className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {auditGame.isCorrect ? 'Excellent Detective Work!' : 'Not Quite Right'}
                      </h3>
                      <p className="text-lg text-blue-200">
                        {auditGame.isCorrect 
                          ? 'You successfully identified the AI hallucination!' 
                          : 'The abstract you selected is actually legitimate research.'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 border border-white/20 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-white mb-3">The Fake Abstract Was:</h4>
                    <p className="text-cyan-300 font-semibold mb-2">
                      {auditGame.abstracts.find(a => a.isFake)?.title}
                    </p>
                    <p className="text-blue-200 mb-4">
                      {auditGame.abstracts.find(a => a.isFake)?.content}
                    </p>
                    <div className="bg-red-950/50 border border-red-500/40 rounded-lg p-4">
                      <h5 className="text-red-300 font-semibold mb-2">Why This is Fake:</h5>
                      <p className="text-blue-200">
                        {auditGame.abstracts.find(a => a.isFake)?.explanation}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setAuditGame(prev => ({ 
                        ...prev, 
                        selectedIndex: null, 
                        isComplete: false, 
                        isCorrect: null 
                      }))}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl"
                    >
                      <div className="flex items-center gap-2">
                        <RotateCcw className="w-5 h-5" />
                        Try Again
                      </div>
                    </motion.button>
                  </div>

                  {userProgress.labsCompleted.includes('audit') && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-emerald-300">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Lab Completed!</span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAB C: Trend vs Noise Visualizer */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-6 py-3 mb-6">
                <LineChart className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 font-semibold">Interactive Lab C</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Trend vs. Noise Visualizer
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Data is often messy and chaotic. Watch AI reveal hidden patterns in seemingly random data points—
                distinguishing meaningful trends from statistical noise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-lg border border-indigo-500/30 rounded-3xl p-8 md:p-12">
              {/* Chart Visualization */}
              <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Weekly Research Output Data
                </h3>
                
                {/* Simple Bar Chart */}
                <div className="relative h-80 flex items-end justify-between gap-4 mb-6">
                  {trendData.map((point, index) => (
                    <div key={point.week} className="flex-1 flex flex-col items-center">
                      <div className="w-full relative" style={{ height: `${(point.value / 100) * 320}px` }}>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: '100%' }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg"
                        />
                        {showTrendLine && index < trendData.length - 1 && (
                          <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
                            <line
                              x1="50%"
                              y1={`${100 - (point.value / 100) * 100}%`}
                              x2={`${(1 / trendData.length) * 100 * (index + 2)}%`}
                              y2={`${100 - (trendData[index + 1].value / 100) * 100}%`}
                              stroke="#f59e0b"
                              strokeWidth="3"
                              className="drop-shadow-lg"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="text-blue-300 text-sm mt-3 font-semibold">W{point.week}</div>
                      <div className="text-cyan-400 text-xs">{point.value}</div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-t from-cyan-500 to-blue-500 rounded"></div>
                    <span className="text-blue-200">Raw Data Points</span>
                  </div>
                  {showTrendLine && (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-1 bg-amber-500 rounded"></div>
                      <span className="text-amber-300">AI-Detected Trend Line</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls */}
              {!showTrendLine ? (
                <div className="text-center">
                  <motion.button
                    onClick={revealTrend}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Filter className="w-6 h-6" />
                      Apply AI Pattern Analysis
                    </div>
                  </motion.button>
                  <p className="text-blue-300 text-sm mt-4">
                    Click to let AI scan for hidden trends in the noisy data
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border-2 border-amber-500/50 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Pattern Analysis Complete
                      </h3>
                      <p className="text-blue-200 leading-relaxed">
                        AI has identified a <strong className="text-amber-300">strong positive correlation</strong> in 
                        the data despite weekly fluctuations. The trend line shows consistent growth averaging 
                        <strong className="text-amber-300"> +8.3% per week</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-4">
                      <div className="text-amber-300 font-semibold text-sm mb-1">CORRELATION</div>
                      <div className="text-white text-2xl font-bold">r = 0.87</div>
                      <div className="text-blue-300 text-xs mt-1">Strong positive relationship</div>
                    </div>
                    <div className="bg-orange-950/40 border border-orange-500/40 rounded-xl p-4">
                      <div className="text-orange-300 font-semibold text-sm mb-1">CONFIDENCE</div>
                      <div className="text-white text-2xl font-bold">91%</div>
                      <div className="text-blue-300 text-xs mt-1">High statistical reliability</div>
                    </div>
                    <div className="bg-yellow-950/40 border border-yellow-500/40 rounded-xl p-4">
                      <div className="text-yellow-300 font-semibold text-sm mb-1">PREDICTION</div>
                      <div className="text-white text-2xl font-bold">Week 9: ~98</div>
                      <div className="text-blue-300 text-xs mt-1">Based on current trajectory</div>
                    </div>
                  </div>

                  {userProgress.labsCompleted.includes('trend') && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-amber-300">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Lab Completed!</span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 4: Environmental Sustainability */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 to-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Block Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Block 4: Environmental Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  The Hidden Cost of Computational Science
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Every AI model trained, every dataset processed, every simulation run comes at an 
                <strong className="text-emerald-300"> environmental cost</strong>. As researchers, we must understand 
                and minimize the energy and water consumption required for computational research.
              </p>
            </div>

            {/* Energy & Water Impact Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Water Consumption</h3>
                    <p className="text-cyan-100 text-lg">
                      Data centers require <strong>massive amounts of water</strong> for cooling high-performance 
                      computing systems during AI training and data processing.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-cyan-950/50 border border-cyan-500/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-300 font-semibold">Training GPT-3:</span>
                      <span className="text-white text-2xl font-bold">700,000L</span>
                    </div>
                    <div className="text-blue-200 text-sm">
                      Equivalent to filling <strong>280 bathtubs</strong> or the annual water usage of 
                      <strong> 3 average families</strong>
                    </div>
                  </div>

                  <div className="bg-blue-950/50 border border-blue-500/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-300 font-semibold">Google's PaLM Model:</span>
                      <span className="text-white text-2xl font-bold">1.2M L</span>
                    </div>
                    <div className="text-blue-200 text-sm">
                      Annual water usage of <strong>2,800 people</strong> consumed for a single model training
                    </div>
                  </div>

                  <div className="bg-indigo-950/50 border border-indigo-500/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-indigo-300 font-semibold">Per ChatGPT conversation:</span>
                      <span className="text-white text-2xl font-bold">~500ml</span>
                    </div>
                    <div className="text-blue-200 text-sm">
                      One standard water bottle per conversation for inference and cooling
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Energy Consumption</h3>
                    <p className="text-amber-100 text-lg">
                      AI model training requires <strong>enormous electrical power</strong>—often equivalent to 
                      the energy usage of entire cities over extended periods.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-amber-950/50 border border-amber-500/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-amber-300 font-semibold">Large Model Training:</span>
                      <span className="text-white text-2xl font-bold">1,000+ MWh</span>
                    </div>
                    <div className="text-blue-200 text-sm">
                      Powers <strong>90 American homes for an entire year</strong> or drives an electric car 
                      <strong> 4 million miles</strong>
                    </div>
                  </div>

                  <div className="bg-orange-950/50 border border-orange-500/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-300 font-semibold">AI Search vs. Regular:</span>
                      <span className="text-white text-2xl font-bold">5x More</span>
                    </div>
                    <div className="text-blue-200 text-sm">
                      Each AI-powered search uses <strong>5 times more energy</strong> than traditional keyword search
                    </div>
                  </div>

                  <div className="bg-red-950/50 border border-red-500/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-300 font-semibold">Carbon Footprint:</span>
                      <span className="text-white text-2xl font-bold">~626,000 lbs CO₂</span>
                    </div>
                    <div className="text-blue-200 text-sm">
                      Training one large AI model emits as much carbon as <strong>5 cars over their entire lifetimes</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sustainable Practices */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg border-2 border-emerald-500/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Sustainable Research Practices
                  </h3>
                  <p className="text-emerald-100 text-lg leading-relaxed">
                    Responsible researchers must balance computational power with environmental stewardship. 
                    Here are evidence-based strategies to reduce the environmental impact of AI-assisted research:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-8 h-8 text-emerald-400" />
                    <h4 className="text-xl font-bold text-white">Model Efficiency</h4>
                  </div>
                  <ul className="space-y-2 text-blue-200 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Use smaller, optimized models when possible instead of maximum-size alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Apply transfer learning—reuse pre-trained models rather than training from scratch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Implement early stopping to avoid unnecessary training iterations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-950/50 border border-teal-500/40 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="w-8 h-8 text-teal-400" />
                    <h4 className="text-xl font-bold text-white">Green Computing</h4>
                  </div>
                  <ul className="space-y-2 text-blue-200 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                      <span>Choose data centers powered by <strong>renewable energy sources</strong> (solar, wind)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                      <span>Schedule intensive computations during off-peak hours when grid is cleaner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                      <span>Utilize carbon-aware computing platforms that optimize for low-emission energy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cyan-950/50 border border-cyan-500/40 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-cyan-400" />
                    <h4 className="text-xl font-bold text-white">Smart Scheduling</h4>
                  </div>
                  <ul className="space-y-2 text-blue-200 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Batch similar experiments to minimize redundant setup and teardown operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Use hyperparameter optimization to reduce trial-and-error training runs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Share computational resources and trained models within research teams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Notes & Manifesto */}
      <section className="py-24 bg-gradient-to-br from-emerald-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
                <BookMarked className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Your Research Journal</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Document Your Learning Journey
                </span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Capture insights, questions, and reflections as you explore scientific research. 
                Build your personal research manifesto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Notes */}
              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  Quick Research Notes
                </h3>
                
                <textarea
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  placeholder="Record observations, questions, or insights from the labs..."
                  className="w-full h-40 bg-slate-800/50 border border-blue-500/50 rounded-xl p-4 text-white placeholder-blue-300/50 resize-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none mb-4"
                />
                
                <motion.button
                  onClick={addNote}
                  disabled={!currentNote.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Save className="w-5 h-5" />
                    Save Note
                  </div>
                </motion.button>

                {researchNotes.length > 0 && (
                  <div className="mt-6">
                    <div className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Saved Notes ({researchNotes.length})
                    </div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {researchNotes.map((note, index) => (
                        <div key={index} className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-3">
                          <p className="text-blue-200 text-sm">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Research Manifesto */}
              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-lg border border-indigo-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-indigo-400" />
                  My Research Manifesto
                </h3>
                
                <p className="text-blue-200 mb-4">
                  Summarize your commitment to ethical, rigorous, and sustainable research:
                </p>

                <textarea
                  value={userProgress.researchManifesto}
                  onChange={(e) => saveManifesto(e.target.value)}
                  placeholder="I commit to conducting research that is evidence-based, peer-reviewed, and environmentally conscious. I will..."
                  className="w-full h-64 bg-slate-800/50 border border-indigo-500/50 rounded-xl p-4 text-white placeholder-indigo-300/50 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none mb-4"
                />

                <div className="bg-indigo-950/50 border border-indigo-500/40 rounded-xl p-4">
                  <div className="text-indigo-300 text-sm font-semibold mb-2">Your Progress:</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${userProgress.labsCompleted.includes('hypothesis') ? 'bg-emerald-400' : 'bg-slate-600'}`}></div>
                      <span className="text-blue-200">Hypothesis Lab</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${userProgress.labsCompleted.includes('audit') ? 'bg-emerald-400' : 'bg-slate-600'}`}></div>
                      <span className="text-blue-200">Audit Challenge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${userProgress.labsCompleted.includes('trend') ? 'bg-emerald-400' : 'bg-slate-600'}`}></div>
                      <span className="text-blue-200">Trend Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${userProgress.notesCount > 0 ? 'bg-emerald-400' : 'bg-slate-600'}`}></div>
                      <span className="text-blue-200">{userProgress.notesCount} Notes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Completion & Navigation */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Completion Badge */}
            <div className="mb-12">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Microscope className="w-16 h-16 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Research Laboratory Complete!
                </span>
              </h2>

              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                You've mastered the foundations of scientific inquiry in the AI age. You understand 
                the research process, can identify AI hallucinations, and recognize the environmental 
                impact of computational research.
              </p>
            </div>

            {/* Achievement Summary */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6">
                <Brain className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">6 Steps Mastered</div>
                <div className="text-blue-300">Scientific Method Enhanced by AI</div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-6">
                <Shield className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">Critical Thinking</div>
                <div className="text-blue-300">Hallucination Detection & Verification</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-6">
                <Leaf className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">Sustainability</div>
                <div className="text-blue-300">Environmental Impact Awareness</div>
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
              {/* Previous Module */}
              <a
                href="/projects/mindcraft/ai-art-creation"
                className="bg-gradient-to-br from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 border border-orange-500/30 hover:border-orange-400/50 rounded-xl p-4 transition-all group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">← Previous: AI Art Creation</p>
                  <p className="text-orange-300 text-sm">Creative Amplifier</p>
                </div>
              </a>

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
                href="/projects/mindcraft/creative-innovation"
                className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:to-orange-600/30 border border-yellow-500/30 hover:border-yellow-400/50 rounded-xl p-4 transition-all group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">Next: Creative Innovation</p>
                  <p className="text-yellow-300 text-sm">Global Impact →</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}