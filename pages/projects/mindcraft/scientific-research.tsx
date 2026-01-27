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
  Leaf
} from 'lucide-react'

// TypeScript Interfaces
interface HypothesisState {
  variable1: string
  variable2: string
  relationship: string
  hypothesis: string
}

interface CitationData {
  text: string
  isHallucination: boolean
  clue?: string
}

interface PatternData {
  x: number
  y: number
  label: string
}

interface ResearchNote {
  id: number
  content: string
  timestamp: string
}

export default function ScientificResearchPage() {
  // State Management
  const [activeSection, setActiveSection] = useState<number>(0)
  const [hypothesisState, setHypothesisState] = useState<HypothesisState>({
    variable1: '',
    variable2: '',
    relationship: '',
    hypothesis: ''
  })
  const [citationGameActive, setCitationGameActive] = useState(false)
  const [citationScore, setCitationScore] = useState(0)
  const [currentCitation, setCurrentCitation] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [gameResult, setGameResult] = useState<'correct' | 'incorrect' | null>(null)
  const [showPattern, setShowPattern] = useState(false)
  const [researchNotes, setResearchNotes] = useState<ResearchNote[]>([])
  const [currentNote, setCurrentNote] = useState('')
  const [reflectionText, setReflectionText] = useState('')

  // Load data from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem('scientific-research-notes')
    const savedReflection = localStorage.getItem('scientific-research-reflection')
    
    if (savedNotes) setResearchNotes(JSON.parse(savedNotes))
    if (savedReflection) setReflectionText(savedReflection)
  }, [])

  // Save to localStorage
  const saveToStorage = () => {
    localStorage.setItem('scientific-research-notes', JSON.stringify(researchNotes))
    localStorage.setItem('scientific-research-reflection', reflectionText)
  }

  // Learning objectives with AI integration
  const learningObjectives = [
    "Master the Scientific Method 2.0 enhanced by AI tools",
    "Understand data patterns and AI-powered analysis",
    "Identify and avoid scientific hallucinations",
    "Apply ethical research principles in the AI age",
    "Calculate environmental costs of AI research",
    "Create reproducible research protocols"
  ]

  // Variables for Hypothesis Sandbox
  const variables = {
    independent: [
      'Amount of sunlight',
      'Temperature',
      'Study time duration',
      'Exercise frequency',
      'Sleep hours',
      'Music volume',
      'Class size',
      'Screen time'
    ],
    dependent: [
      'Plant growth rate',
      'Memory test scores',
      'Athletic performance',
      'Concentration levels',
      'Stress levels',
      'Learning speed',
      'Social interaction',
      'Mood rating'
    ],
    relationships: [
      'increases',
      'decreases',
      'has no effect on',
      'correlates positively with',
      'correlates negatively with',
      'shows a complex relationship with'
    ]
  }

  // Pattern Visualization Data
  const patternData: PatternData[] = [
    { x: 1, y: 12, label: 'Week 1' },
    { x: 2, y: 18, label: 'Week 2' },
    { x: 3, y: 15, label: 'Week 3' },
    { x: 4, y: 22, label: 'Week 4' },
    { x: 5, y: 28, label: 'Week 5' },
    { x: 6, y: 25, label: 'Week 6' },
    { x: 7, y: 35, label: 'Week 7' },
    { x: 8, y: 42, label: 'Week 8' }
  ]

  // Citation Auditor Game Options
  const citationOptions: CitationData[] = [
    {
      text: 'Smith, J. (2023). "Machine Learning in Healthcare: A Comprehensive Review." Journal of Medical Informatics, 45(3), 234-251.',
      isHallucination: false
    },
    {
      text: 'Johnson, M. & Davis, R. (2024). "Revolutionary AI Breakthrough in Quantum Biology." Science Fiction Review, 99(12), 45-67.',
      isHallucination: true,
      clue: 'Check the journal name and impact factor - does "Science Fiction Review" sound like a real academic journal?'
    },
    {
      text: 'Williams, K. et al. (2023). "Environmental Impact of Large Language Models." Nature Sustainability, 12(8), 112-128.',
      isHallucination: false
    }
  ]

  // Hypothesis Generation Function
  const generateHypothesis = () => {
    if (!hypothesisState.variable1 || !hypothesisState.variable2 || !hypothesisState.relationship) {
      return
    }
    
    const hypothesis = `If ${hypothesisState.variable1.toLowerCase()} ${hypothesisState.relationship}, then ${hypothesisState.variable2.toLowerCase()} will also be affected.`
    setHypothesisState(prev => ({ ...prev, hypothesis }))
  }

  // Reset Hypothesis Sandbox
  const resetHypothesis = () => {
    setHypothesisState({
      variable1: '',
      variable2: '',
      relationship: '',
      hypothesis: ''
    })
  }

  // Citation Game Functions
  const checkCitation = (selectedIndex: number) => {
    const selectedCitation = citationOptions[selectedIndex]
    const isCorrect = selectedCitation.isHallucination // The fake one is the correct answer to identify
    
    setGameResult(isCorrect ? 'correct' : 'incorrect')
  }

  const resetGame = () => {
    setGameResult(null)
  }

  // Add Research Note
  const addNote = () => {
    if (!currentNote.trim()) return
    
    const note: ResearchNote = {
      id: Date.now(),
      content: currentNote,
      timestamp: new Date().toLocaleString()
    }
    
    const updatedNotes = [...researchNotes, note]
    setResearchNotes(updatedNotes)
    setCurrentNote('')
    localStorage.setItem('scientific-research-notes', JSON.stringify(updatedNotes))
  }

  // Export Research Protocol
  const exportProtocol = () => {
    const protocol = {
      notes: researchNotes,
      reflection: reflectionText,
      hypothesis: hypothesisState,
      date: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(protocol, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-research-protocol.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Head>
        <title>Scientific Research Methods - Interactive Inquiry Lab - Mindcraft</title>
        <meta name="description" content="Master scientific research methodology in the AI age with interactive tools and real-world applications." />
      </Head>
      
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Scientific Research Methods
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-cyan-200 mb-8 font-medium">
                The Interactive Inquiry Laboratory
              </h2>
              
              <p className="text-xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                Master the Scientific Method 2.0 enhanced by AI tools, understand data patterns, 
                identify scientific hallucinations, and conduct ethical research in the digital age.
              </p>
              
              {/* Learning Objectives */}
              <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Laboratory Objectives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningObjectives.map((objective, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-blue-200 text-left">{objective}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 1: Scientific Method 2.0 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🔬 Knowledge Block 1: The Scientific Method 2.0
                  </h3>
                  <p className="text-blue-200 text-lg">How AI accelerates each step of scientific discovery</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-950/30 border border-blue-500/50 rounded-xl p-6">
                  <h4 className="text-blue-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    The 6 Enhanced Steps
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-cyan-400 font-bold mb-2">1. AI-Powered Observation</div>
                      <div className="text-gray-300 text-sm">Use computer vision and sensors to detect patterns humans might miss</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-blue-400 font-bold mb-2">2. Smart Questioning</div>
                      <div className="text-gray-300 text-sm">AI helps formulate precise, testable research questions</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-indigo-400 font-bold mb-2">3. Hypothesis Generation</div>
                      <div className="text-gray-300 text-sm">Machine learning suggests relationships between variables</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-purple-400 font-bold mb-2">4. Automated Experimentation</div>
                      <div className="text-gray-300 text-sm">Robotic systems run thousands of controlled experiments</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-pink-400 font-bold mb-2">5. Big Data Analysis</div>
                      <div className="text-gray-300 text-sm">AI analyzes massive datasets for statistical significance</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-green-400 font-bold mb-2">6. Collaborative Conclusion</div>
                      <div className="text-gray-300 text-sm">Human oversight ensures ethical and logical interpretation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-cyan-300 font-semibold">AI Speed Advantage</h4>
                  </div>
                  <p className="text-cyan-100">
                    Traditional research might take months or years. AI-enhanced research can process 
                    millions of data points in hours, identify patterns across thousands of studies, 
                    and suggest new hypotheses based on global research trends.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Final Summary & Navigation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                🎓 Laboratory Session Complete
              </h2>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                You've explored the enhanced scientific method, learned to detect AI hallucinations, 
                and understood the environmental impact of AI research.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/30 rounded-xl p-6 border border-indigo-500/30">
                  <h3 className="text-indigo-300 font-bold text-lg mb-2">Skills Gained</h3>
                  <p className="text-gray-300">AI-enhanced research methodology, pattern recognition, citation verification</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-blue-300 font-bold text-lg mb-2">Tools Mastered</h3>
                  <p className="text-gray-300">Hypothesis generation, data visualization, scientific integrity checks</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-cyan-300 font-bold text-lg mb-2">Impact Awareness</h3>
                  <p className="text-gray-300">Environmental consciousness, ethical AI use, sustainable research practices</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/projects/mindcraft">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to MindCraft
                  </motion.span>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Restart Laboratory
                </motion.button>
                
                <Link href="/projects">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Explore More Projects
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}