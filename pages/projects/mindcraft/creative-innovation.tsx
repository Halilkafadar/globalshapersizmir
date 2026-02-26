import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Lightbulb, 
  Rocket, 
  Target, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Brain,
  Heart,
  Users,
  Zap,
  TrendingUp,
  Award,
  Download,
  Droplets,
  Leaf,
  Factory,
  Wind,
  Recycle,
  BarChart3,
  Activity,
  AlertTriangle,
  Shield,
  Eye,
  Compass,
  MessageSquare,
  Network,
  FlaskConical,
  Camera,
  Music,
  Palette,
  FileText,
  Stethoscope,
  Wheat,
  GraduationCap,
  Home,
  TreePine,
  Scale,
  ArrowLeft,
  BookOpen,
  Microscope
} from 'lucide-react'

// TypeScript Interfaces for Interactive Labs
interface SDGProject {
  aiTech: string;
  sdgGoal: string;
  projectConcept: string;
  description: string;
  impact: string[];
}

interface ImpactScale {
  socialImpact: number; // 0-100
  waterConsumption: number; // liters
  energyConsumption: number; // kWh
}

interface RadarData {
  pillar: string;
  score: number; // 0-10
  description: string;
}

interface InnovationDraft {
  projectTitle: string;
  selectedAI: string;
  selectedSDG: string;
  impactGoals: string;
  radarScores: RadarData[];
  timestamp: number;
}

interface UserProgress {
  labsCompleted: string[];
  draftSaved: boolean;
  roadmapExported: boolean;
}

export default function CreativeInnovationPage() {
  // Lab A: SDG Project Matchmaker State
  const [selectedAI, setSelectedAI] = useState<string>('')
  const [selectedSDG, setSelectedSDG] = useState<string>('')
  const [generatedProject, setGeneratedProject] = useState<SDGProject | null>(null)

  // Lab B: Impact vs. Resource Slider State
  const [impactScale, setImpactScale] = useState<ImpactScale>({
    socialImpact: 50,
    waterConsumption: 100000,
    energyConsumption: 500
  })

  // Lab C: Innovation Audit Radar State
  const [radarScores, setRadarScores] = useState<RadarData[]>([
    { pillar: 'Active Ethics', score: 5, description: 'Ethical decision-making in AI innovation' },
    { pillar: 'Human Originality', score: 5, description: 'Preserving human creativity and leadership' },
    { pillar: 'Data Wisdom', score: 5, description: 'Responsible data use and interpretation' },
    { pillar: 'Synergistic Dialogue', score: 5, description: 'Human-AI collaboration quality' },
    { pillar: 'System Thinking', score: 5, description: 'Holistic problem-solving approach' }
  ])

  // Innovation Draft State
  const [innovationDraft, setInnovationDraft] = useState<InnovationDraft>({
    projectTitle: '',
    selectedAI: '',
    selectedSDG: '',
    impactGoals: '',
    radarScores: radarScores,
    timestamp: Date.now()
  })

  // User Progress Tracking
  const [userProgress, setUserProgress] = useState<UserProgress>({
    labsCompleted: [],
    draftSaved: false,
    roadmapExported: false
  })

  // Scroll Progress
  const [scrollProgress, setScrollProgress] = useState(0)

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('innovation-progress')
    const savedDraft = localStorage.getItem('innovation-draft')
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    }
    
    if (savedDraft) {
      const draft = JSON.parse(savedDraft)
      setInnovationDraft(draft)
      setRadarScores(draft.radarScores || radarScores)
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // AI Technologies for SDG Matchmaker
  const aiTechnologies = [
    { id: 'computer-vision', name: 'Computer Vision', icon: Camera, description: 'Image and video analysis' },
    { id: 'nlp', name: 'Natural Language Processing', icon: MessageSquare, description: 'Text understanding and generation' },
    { id: 'predictive-analytics', name: 'Predictive Analytics', icon: TrendingUp, description: 'Future trend forecasting' },
    { id: 'robotics', name: 'Robotics & Automation', icon: Rocket, description: 'Autonomous systems' },
    { id: 'generative-ai', name: 'Generative AI', icon: Sparkles, description: 'Creative content generation' },
    { id: 'iot-sensors', name: 'IoT & Sensors', icon: Activity, description: 'Real-time data collection' }
  ]

  // SDG Goals for Matchmaker
  const sdgGoals = [
    { id: 'sdg1', name: 'No Poverty', icon: Home, color: 'text-red-500' },
    { id: 'sdg2', name: 'Zero Hunger', icon: Wheat, color: 'text-amber-600' },
    { id: 'sdg3', name: 'Good Health', icon: Stethoscope, color: 'text-green-600' },
    { id: 'sdg4', name: 'Quality Education', icon: GraduationCap, color: 'text-red-700' },
    { id: 'sdg6', name: 'Clean Water & Sanitation', icon: Droplets, color: 'text-cyan-500' },
    { id: 'sdg7', name: 'Affordable Clean Energy', icon: Zap, color: 'text-yellow-500' },
    { id: 'sdg11', name: 'Sustainable Cities', icon: Globe, color: 'text-orange-500' },
    { id: 'sdg13', name: 'Climate Action', icon: Wind, color: 'text-green-700' },
    { id: 'sdg14', name: 'Life Below Water', icon: Droplets, color: 'text-blue-500' },
    { id: 'sdg15', name: 'Life on Land', icon: TreePine, color: 'text-green-500' }
  ]

  // Project Concepts Database (AI × SDG = Innovation)
  const projectDatabase: Record<string, Record<string, SDGProject>> = {
    'computer-vision': {
      'sdg14': {
        aiTech: 'Computer Vision',
        sdgGoal: 'Life Below Water',
        projectConcept: 'AI-Powered Marine Plastic Detection System',
        description: 'Deploy underwater drones with computer vision to identify and map ocean plastic pollution in real-time, enabling targeted cleanup operations.',
        impact: ['Reduce ocean plastic by 30%', 'Protect 500+ marine species', 'Monitor 10,000 km² of ocean']
      },
      'sdg15': {
        aiTech: 'Computer Vision',
        sdgGoal: 'Life on Land',
        projectConcept: 'Automated Wildlife Conservation Tracker',
        description: 'Use camera traps with AI vision to monitor endangered species populations, detect poaching activities, and analyze habitat health.',
        impact: ['Track 100+ endangered species', 'Prevent illegal hunting', 'Protect biodiversity hotspots']
      },
      'sdg2': {
        aiTech: 'Computer Vision',
        sdgGoal: 'Zero Hunger',
        projectConcept: 'Smart Crop Disease Detection App',
        description: 'Farmers photograph their crops; AI instantly diagnoses diseases and recommends organic treatments, reducing crop loss by 40%.',
        impact: ['Increase crop yields by 25%', 'Support 1M+ smallholder farmers', 'Reduce pesticide use']
      }
    },
    'nlp': {
      'sdg4': {
        aiTech: 'Natural Language Processing',
        sdgGoal: 'Quality Education',
        projectConcept: 'Multilingual AI Tutor for Remote Learning',
        description: 'NLP-powered chatbot provides personalized education in 100+ languages, adapting to each student learning pace and style.',
        impact: ['Reach 10M+ underserved students', 'Bridge language barriers', 'Personalized learning paths']
      },
      'sdg3': {
        aiTech: 'Natural Language Processing',
        sdgGoal: 'Good Health',
        projectConcept: 'Mental Health Support Chatbot',
        description: 'AI companion provides 24/7 emotional support, crisis detection, and therapy resources in conversational interface.',
        impact: ['Support 1M+ mental health conversations', 'Early crisis detection', 'Reduce stigma']
      }
    },
    'predictive-analytics': {
      'sdg13': {
        aiTech: 'Predictive Analytics',
        sdgGoal: 'Climate Action',
        projectConcept: 'Climate Disaster Early Warning System',
        description: 'AI predicts floods, droughts, and extreme weather 7 days in advance using satellite data, saving thousands of lives.',
        impact: ['Protect 50M+ people', '7-day advance warnings', 'Reduce disaster mortality by 60%']
      },
      'sdg6': {
        aiTech: 'Predictive Analytics',
        sdgGoal: 'Clean Water & Sanitation',
        projectConcept: 'Water Scarcity Prediction Platform',
        description: 'Forecast water shortages months ahead, enabling governments to implement conservation measures proactively.',
        impact: ['Predict droughts 6 months ahead', 'Optimize water distribution', 'Serve 20M+ people']
      }
    },
    'robotics': {
      'sdg11': {
        aiTech: 'Robotics & Automation',
        sdgGoal: 'Sustainable Cities',
        projectConcept: 'Autonomous Waste Sorting & Recycling',
        description: 'Robotic arms with AI vision sort recyclables at 95% accuracy, tripling recycling rates in urban centers.',
        impact: ['Increase recycling by 200%', 'Process 1,000 tons/day', 'Create circular economy jobs']
      },
      'sdg7': {
        aiTech: 'Robotics & Automation',
        sdgGoal: 'Affordable Clean Energy',
        projectConcept: 'Solar Panel Maintenance Robots',
        description: 'Autonomous robots clean and inspect solar farms, increasing energy output by 20% while reducing labor costs.',
        impact: ['Boost solar efficiency by 20%', 'Maintain 10,000+ panels', 'Lower renewable energy costs']
      }
    },
    'generative-ai': {
      'sdg4': {
        aiTech: 'Generative AI',
        sdgGoal: 'Quality Education',
        projectConcept: 'AI-Generated Educational Content Creator',
        description: 'Generate customized textbooks, interactive lessons, and assessments for every learning level and cultural context.',
        impact: ['Create 1M+ custom lessons', 'Culturally relevant content', 'Accessible to all learners']
      }
    },
    'iot-sensors': {
      'sdg1': {
        aiTech: 'IoT & Sensors',
        sdgGoal: 'No Poverty',
        projectConcept: 'Smart Agriculture for Smallholder Farmers',
        description: 'Low-cost IoT sensors monitor soil health, weather, and crop needs, sending AI-powered farming tips via SMS.',
        impact: ['Increase farm income by 40%', 'Support 5M+ farmers', 'Reduce water use by 30%']
      }
    }
  }

  // Generate Project from AI × SDG Selection
  const generateProject = () => {
    if (!selectedAI || !selectedSDG) return

    const project = projectDatabase[selectedAI]?.[selectedSDG]
    
    if (project) {
      setGeneratedProject(project)
      
      // Mark lab as completed
      if (!userProgress.labsCompleted.includes('sdg-matchmaker')) {
        const newProgress = {
          ...userProgress,
          labsCompleted: [...userProgress.labsCompleted, 'sdg-matchmaker']
        }
        setUserProgress(newProgress)
        localStorage.setItem('innovation-progress', JSON.stringify(newProgress))
      }
    } else {
      // Fallback generic project
      const aiTech = aiTechnologies.find(tech => tech.id === selectedAI)
      const sdg = sdgGoals.find(goal => goal.id === selectedSDG)
      
      setGeneratedProject({
        aiTech: aiTech?.name || 'Selected AI',
        sdgGoal: sdg?.name || 'Selected SDG',
        projectConcept: `Innovative ${aiTech?.name} Solution for ${sdg?.name}`,
        description: `This project combines the power of ${aiTech?.name} with the mission of ${sdg?.name} to create meaningful global impact.`,
        impact: ['Scalable solution', 'Measurable outcomes', 'Sustainable approach']
      })
    }
  }

  // Update Impact Scale (Lab B)
  const updateImpactScale = (value: number) => {
    // As social impact increases, resource consumption increases exponentially
    const waterBase = 100000 // 100L for small scale
    const energyBase = 500 // 500 kWh for small scale
    
    setImpactScale({
      socialImpact: value,
      waterConsumption: Math.round(waterBase * Math.pow(value / 50, 2)),
      energyConsumption: Math.round(energyBase * Math.pow(value / 50, 2))
    })

    if (value > 80 && !userProgress.labsCompleted.includes('impact-slider')) {
      const newProgress = {
        ...userProgress,
        labsCompleted: [...userProgress.labsCompleted, 'impact-slider']
      }
      setUserProgress(newProgress)
      localStorage.setItem('innovation-progress', JSON.stringify(newProgress))
    }
  }

  // Update Radar Score (Lab C)
  const updateRadarScore = (pillarIndex: number, score: number) => {
    const newScores = [...radarScores]
    newScores[pillarIndex].score = score
    setRadarScores(newScores)

    // Check if all pillars rated
    const allRated = newScores.every(p => p.score !== 5) // 5 is default
    if (allRated && !userProgress.labsCompleted.includes('radar-audit')) {
      const newProgress = {
        ...userProgress,
        labsCompleted: [...userProgress.labsCompleted, 'radar-audit']
      }
      setUserProgress(newProgress)
      localStorage.setItem('innovation-progress', JSON.stringify(newProgress))
    }
  }

  // Save Innovation Draft
  const saveDraft = () => {
    const draft: InnovationDraft = {
      ...innovationDraft,
      selectedAI,
      selectedSDG,
      radarScores,
      timestamp: Date.now()
    }
    setInnovationDraft(draft)
    localStorage.setItem('innovation-draft', JSON.stringify(draft))
    
    const newProgress = { ...userProgress, draftSaved: true }
    setUserProgress(newProgress)
    localStorage.setItem('innovation-progress', JSON.stringify(newProgress))
  }

  // Export Innovation Roadmap
  const exportRoadmap = () => {
    const roadmap = `
=== MY INNOVATION ROADMAP ===
Generated: ${new Date().toLocaleDateString()}

PROJECT TITLE: ${innovationDraft.projectTitle || 'Untitled Innovation'}

AI TECHNOLOGY: ${selectedAI ? aiTechnologies.find(t => t.id === selectedAI)?.name : 'Not selected'}

SDG GOAL: ${selectedSDG ? sdgGoals.find(g => g.id === selectedSDG)?.name : 'Not selected'}

${generatedProject ? `
PROJECT CONCEPT: ${generatedProject.projectConcept}

DESCRIPTION:
${generatedProject.description}

EXPECTED IMPACT:
${generatedProject.impact.map((item, i) => `${i + 1}. ${item}`).join('\n')}
` : ''}

IMPACT GOALS:
${innovationDraft.impactGoals || 'Not defined yet'}

COGNITIVE SOVEREIGNTY AUDIT (5 Pillars):
${radarScores.map(pillar => `- ${pillar.pillar}: ${pillar.score}/10`).join('\n')}

SUSTAINABILITY AWARENESS:
At scale, this innovation would require:
- Water: ${impactScale.waterConsumption.toLocaleString()} liters
- Energy: ${impactScale.energyConsumption.toLocaleString()} kWh

NEXT STEPS:
1. Refine the project concept with stakeholder feedback
2. Build a minimum viable prototype
3. Measure and optimize environmental footprint
4. Scale with sustainable practices
5. Continuously audit against the 5 Pillars

---
Created with Mindcraft Creative Innovation Lab
Powered by Human Creativity + AI Assistance
    `.trim()

    const blob = new Blob([roadmap], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `innovation-roadmap-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    const newProgress = { ...userProgress, roadmapExported: true }
    setUserProgress(newProgress)
    localStorage.setItem('innovation-progress', JSON.stringify(newProgress))
  }

  // SVG Radar Chart Generator
  const generateRadarPath = () => {
    const centerX = 150
    const centerY = 150
    const maxRadius = 120
    
    const points = radarScores.map((pillar, index) => {
      const angle = (Math.PI * 2 * index) / radarScores.length - Math.PI / 2
      const radius = (pillar.score / 10) * maxRadius
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      return `${x},${y}`
    })

    return `M ${points.join(' L ')} Z`
  }

  return (
    <>
      <Head>
        <title>Creative Innovation with AI - Mindcraft Global Impact Lab</title>
        <meta name="description" content="Transform human creativity with AI to solve global challenges. Learn innovation frameworks, design for SDGs, and build sustainable solutions." />
        <meta name="keywords" content="creative innovation, AI for good, SDG solutions, global impact, sustainable innovation, cognitive sovereignty" />
      </Head>
      
      <Navbar />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-orange-200/30 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-400/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-6 h-6 text-amber-300" />
              <span className="text-amber-200 font-semibold text-lg">Global Impact Laboratory</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
                Creative Innovation
              </span>
              <br />
              <span className="text-white">in the Intelligent Age</span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform human creativity with AI to solve the world's most pressing challenges. 
              Learn innovation frameworks, design for UN Sustainable Development Goals, and build solutions that scale.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-orange-800/50 backdrop-blur-sm border border-orange-400/30 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-8 h-8 text-amber-300" />
                  <div className="text-left">
                    <div className="text-sm text-orange-300">Concept</div>
                    <div className="text-lg font-bold text-white">Human-Led Innovation</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-800/50 backdrop-blur-sm border border-orange-400/30 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-amber-300" />
                  <div className="text-left">
                    <div className="text-sm text-orange-300">Impact</div>
                    <div className="text-lg font-bold text-white">17 SDG Goals</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-800/50 backdrop-blur-sm border border-orange-400/30 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-amber-300" />
                  <div className="text-left">
                    <div className="text-sm text-orange-300">Method</div>
                    <div className="text-lg font-bold text-white">AI-Supported Design</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="inline-flex items-center gap-4 bg-slate-900/50 backdrop-blur-lg border border-amber-500/30 rounded-full px-8 py-4">
              <Award className="w-6 h-6 text-amber-400" />
              <div className="text-left">
                <div className="text-xs text-orange-300 mb-1">Your Progress</div>
                <div className="flex gap-2">
                  {['sdg-matchmaker', 'impact-slider', 'radar-audit'].map((labId) => (
                    <div
                      key={labId}
                      className={`w-3 h-3 rounded-full ${
                        userProgress.labsCompleted.includes(labId)
                          ? 'bg-emerald-400'
                          : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-white font-bold">
                {userProgress.labsCompleted.length}/3 Labs Complete
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-6 h-6 text-amber-300 rotate-90" />
        </motion.div>
      </section>

      {/* Block 1: Innovation in the Intelligent Age */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-orange-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
                <Lightbulb className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">The Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Innovation in the Intelligent Age
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                Klaus Schwab, founder of the World Economic Forum, envisions a future where 
                <strong className="text-amber-300"> human creativity leads</strong> and 
                <strong className="text-amber-300"> AI supports</strong>. Innovation is not 
                replaced by machines—it is amplified by human-AI collaboration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Human-Led Innovation</h3>
                    <p className="text-orange-200">The core principle of the intelligent age</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed mb-4">
                  Innovation begins with <strong className="text-amber-300">human imagination, empathy, and vision</strong>. 
                  We ask the questions, define the problems, and set the ethical boundaries. AI is a powerful tool, 
                  but it cannot replace the human spark that drives meaningful change.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-orange-100">Humans define purpose and values</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-orange-100">Empathy drives user-centered design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-orange-100">Ethical judgment guides every decision</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI-Supported Execution</h3>
                    <p className="text-orange-200">Amplifying human capabilities</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed mb-4">
                  AI excels at <strong className="text-amber-300">pattern recognition, rapid prototyping, and data analysis</strong>. 
                  It can generate thousands of design variations, predict outcomes, and automate repetitive tasks—freeing 
                  humans to focus on strategy, creativity, and impact.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-orange-100">Automates data analysis and insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-orange-100">Generates creative alternatives rapidly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-orange-100">Accelerates prototyping and testing</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-amber-400" />
                The Balanced Innovation Formula
              </h3>
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold">
                  <span className="text-amber-300">Human Creativity</span>
                  <span className="text-orange-400">+</span>
                  <span className="text-amber-300">AI Capabilities</span>
                  <span className="text-orange-400">=</span>
                  <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                    Global Impact Solutions
                  </span>
                </div>
              </div>
              <p className="text-orange-100 text-center max-w-3xl mx-auto leading-relaxed">
                This is not about humans <em>versus</em> AI. It's about creating a 
                <strong className="text-amber-300"> synergistic partnership</strong> where each contributes their 
                unique strengths. Together, we can tackle challenges that neither could solve alone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Block 2: The 5 Pillars of Cognitive Sovereignty */}
      <section className="py-24 bg-gradient-to-br from-orange-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold">Cognitive Sovereignty Framework</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  The 5 Pillars of Innovation
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                A framework for evaluating and building innovations that preserve human agency, 
                ethical integrity, and sustainable impact in the age of AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Pillar 1: Active Ethics */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Active Ethics</h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  Every innovation decision must pass through an ethical filter. Ask: 
                  <strong className="text-amber-300"> Who benefits? Who might be harmed? </strong>
                  Active ethics means continuously questioning and auditing your AI systems for bias, 
                  fairness, and human dignity.
                </p>
                <ul className="space-y-2 text-sm text-orange-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Regular bias audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Stakeholder impact assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Transparent decision-making</span>
                  </li>
                </ul>
              </motion.div>

              {/* Pillar 2: Human Originality */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Human Originality</h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  AI can generate variations, but <strong className="text-amber-300">only humans create truly original ideas</strong>. 
                  Preserve the human spark—the unexpected connection, the emotional insight, the values-driven vision 
                  that no algorithm can replicate.
                </p>
                <ul className="space-y-2 text-sm text-orange-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Human-defined problem statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Creative vision ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Emotional intelligence integration</span>
                  </li>
                </ul>
              </motion.div>

              {/* Pillar 3: Data Wisdom */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Data Wisdom</h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  Data is not truth—it's raw material. <strong className="text-amber-300">Wisdom means knowing</strong> 
                  when to trust the data, when to question it, and when to override it with human judgment. 
                  Context, privacy, and responsible interpretation matter.
                </p>
                <ul className="space-y-2 text-sm text-orange-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Critical data interpretation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Privacy-first design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Contextual understanding</span>
                  </li>
                </ul>
              </motion.div>

              {/* Pillar 4: Synergistic Dialogue */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">4. Synergistic Dialogue</h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  The best innovations emerge from <strong className="text-amber-300">continuous conversation</strong> 
                  between human and AI. Treat AI as a collaborator, not a oracle. Iterate, question, refine—build 
                  solutions through dynamic interaction.
                </p>
                <ul className="space-y-2 text-sm text-orange-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Iterative human-AI co-creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Feedback loop optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Collaborative refinement</span>
                  </li>
                </ul>
              </motion.div>

              {/* Pillar 5: System Thinking */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6 md:col-span-2 lg:col-span-1"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">5. System Thinking</h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  Innovations don't exist in isolation. <strong className="text-amber-300">See the whole ecosystem</strong>—social, 
                  environmental, economic. A solution that solves one problem but creates three others is not innovation; 
                  it's short-sightedness.
                </p>
                <ul className="space-y-2 text-sm text-orange-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Holistic impact assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Long-term sustainability planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Interconnected consequence mapping</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Compass className="w-7 h-7 text-amber-400" />
                Why These Pillars Matter
              </h3>
              <p className="text-orange-100 leading-relaxed">
                These five pillars form a <strong className="text-amber-300">cognitive sovereignty framework</strong>—a 
                set of principles that ensure AI amplifies human potential rather than replacing it. Use them as a 
                checklist for every innovation you build. In Lab C, you'll rate your own project against these pillars 
                to identify strengths and blind spots.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab A: SDG Project Matchmaker */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-orange-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3 mb-6">
                <FlaskConical className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Interactive Lab A</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                  The SDG Project Matchmaker
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                Pair an AI Technology with a UN Sustainable Development Goal to generate a 
                real-world innovation project concept. See how AI capabilities align with global challenges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-orange-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* AI Technology Selection */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-amber-400" />
                    Select AI Technology
                  </h3>
                  <div className="grid gap-3">
                    {aiTechnologies.map((tech) => {
                      const Icon = tech.icon
                      return (
                        <motion.button
                          key={tech.id}
                          onClick={() => setSelectedAI(tech.id)}
                          className={`text-left p-4 rounded-xl border-2 transition-all ${
                            selectedAI === tech.id
                              ? 'bg-gradient-to-r from-amber-600 to-orange-600 border-amber-400'
                              : 'bg-slate-800/50 border-orange-500/30 hover:border-amber-500/60'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start gap-3">
                            <Icon className={`w-6 h-6 flex-shrink-0 ${selectedAI === tech.id ? 'text-white' : 'text-amber-400'}`} />
                            <div>
                              <div className={`font-bold mb-1 ${selectedAI === tech.id ? 'text-white' : 'text-orange-100'}`}>
                                {tech.name}
                              </div>
                              <div className={`text-sm ${selectedAI === tech.id ? 'text-amber-100' : 'text-orange-300'}`}>
                                {tech.description}
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* SDG Goal Selection */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-emerald-400" />
                    Select SDG Goal
                  </h3>
                  <div className="grid gap-3">
                    {sdgGoals.map((goal) => {
                      const Icon = goal.icon
                      return (
                        <motion.button
                          key={goal.id}
                          onClick={() => setSelectedSDG(goal.id)}
                          className={`text-left p-4 rounded-xl border-2 transition-all ${
                            selectedSDG === goal.id
                              ? 'bg-gradient-to-r from-emerald-600 to-green-600 border-emerald-400'
                              : 'bg-slate-800/50 border-orange-500/30 hover:border-emerald-500/60'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-6 h-6 flex-shrink-0 ${selectedSDG === goal.id ? 'text-white' : goal.color}`} />
                            <div className={`font-bold ${selectedSDG === goal.id ? 'text-white' : 'text-orange-100'}`}>
                              {goal.name}
                            </div>
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <motion.button
                  onClick={generateProject}
                  disabled={!selectedAI || !selectedSDG}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    selectedAI && selectedSDG
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white'
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                  whileHover={selectedAI && selectedSDG ? { scale: 1.05 } : {}}
                  whileTap={selectedAI && selectedSDG ? { scale: 0.95 } : {}}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Generate Innovation Project
                  </div>
                </motion.button>
              </div>

              {generatedProject && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-2 border-emerald-500/50 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-300 mb-2">
                        {generatedProject.aiTech} × {generatedProject.sdgGoal}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {generatedProject.projectConcept}
                      </h3>
                      <p className="text-lg text-emerald-100 leading-relaxed">
                        {generatedProject.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 border border-emerald-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-emerald-400" />
                      Expected Impact
                    </h4>
                    <ul className="space-y-3">
                      {generatedProject.impact.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-emerald-100">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {userProgress.labsCompleted.includes('sdg-matchmaker') && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-emerald-300">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Lab A Completed!</span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Block 3: AI for Global Goals - Connection Matrix */}
      <section className="py-24 bg-gradient-to-br from-orange-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
                <Globe className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Global Impact Framework</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  AI for Global Goals
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                How AI capabilities directly map to the United Nations Sustainable Development Goals. 
                Understanding these connections is the first step to designing meaningful innovations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Capability: Prediction */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Capability: Prediction</h3>
                    <p className="text-orange-300">Forecasting future trends and outcomes</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed mb-6">
                  AI excels at analyzing historical data to predict future events—from climate patterns to disease outbreaks.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">SDG 13: Climate Action</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      Predict extreme weather events 7 days in advance, enabling proactive disaster preparedness.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">SDG 3: Good Health</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      Forecast disease outbreaks and allocate medical resources before hospitals overflow.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI Capability: Pattern Recognition */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Capability: Pattern Recognition</h3>
                    <p className="text-orange-300">Detecting invisible patterns in data</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed mb-6">
                  Computer vision and machine learning can spot patterns humans miss—from crop diseases to ocean pollution.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wheat className="w-5 h-5 text-purple-400" />
                      <span className="font-bold text-white">SDG 2: Zero Hunger</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      Detect crop diseases 2 weeks before human eyes can see symptoms, saving harvests.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-5 h-5 text-purple-400" />
                      <span className="font-bold text-white">SDG 14: Life Below Water</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      Identify ocean plastic pollution hotspots from satellite imagery, guiding cleanup efforts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI Capability: Automation */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Capability: Automation</h3>
                    <p className="text-orange-300">Scaling solutions without scaling labor</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed mb-6">
                  Robotics and AI can perform repetitive tasks 24/7, making sustainable practices economically viable.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-emerald-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold text-white">SDG 7: Affordable Clean Energy</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      Autonomous robots maintain solar panels, increasing efficiency by 20% at lower cost.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-emerald-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Recycle className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold text-white">SDG 12: Responsible Consumption</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      AI-powered sorting robots achieve 95% recycling accuracy, tripling waste recovery rates.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI Capability: Personalization */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-amber-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Capability: Personalization</h3>
                    <p className="text-orange-300">Tailoring solutions to individual needs</p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed mb-6">
                  AI can customize education, healthcare, and services to each person's context—bridging inequality gaps.
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-amber-400" />
                      <span className="font-bold text-white">SDG 4: Quality Education</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      AI tutors adapt to each student's learning pace, providing 100+ language support.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="w-5 h-5 text-amber-400" />
                      <span className="font-bold text-white">SDG 1: No Poverty</span>
                    </div>
                    <p className="text-sm text-orange-200">
                      Personalized farming tips via SMS increase smallholder farmer income by 40%.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-amber-400" />
                The Innovation Strategy
              </h3>
              <p className="text-orange-100 leading-relaxed">
                Effective global impact innovation starts by matching <strong className="text-amber-300">AI capabilities</strong> 
                (what AI does well) with <strong className="text-amber-300">SDG challenges</strong> (what the world needs). 
                This matrix is your starting point—but remember, the human innovator must always ask: 
                <em className="text-emerald-300"> "Is this solving the right problem for the right people in the right way?"</em>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab B: Impact vs. Resource Slider */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-orange-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-3 mb-6">
                <FlaskConical className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold">Interactive Lab B</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Impact vs. Resource Trade-Off
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                Scale your innovation and watch how social impact grows—but so does environmental cost. 
                This simulator reveals the sustainability challenge at the heart of AI-powered solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-orange-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                  Scale Your Innovation
                </h3>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={impactScale.socialImpact}
                  onChange={(e) => updateImpactScale(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between mt-2 text-sm text-orange-300">
                  <span>Small Pilot (100 users)</span>
                  <span>Global Scale (10M+ users)</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Social Impact */}
                <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-2 border-emerald-500/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Social Impact</h4>
                  </div>
                  <div className="text-4xl font-bold text-emerald-300 mb-2">
                    {impactScale.socialImpact}%
                  </div>
                  <p className="text-sm text-emerald-200">
                    {impactScale.socialImpact < 30 && 'Limited reach - local community'}
                    {impactScale.socialImpact >= 30 && impactScale.socialImpact < 70 && 'Regional impact - thousands served'}
                    {impactScale.socialImpact >= 70 && 'Global scale - millions benefiting'}
                  </p>
                </div>

                {/* Water Consumption */}
                <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-cyan-500/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Water Usage</h4>
                  </div>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">
                    {(impactScale.waterConsumption / 1000).toFixed(0)}K
                  </div>
                  <p className="text-sm text-cyan-200">
                    Liters consumed for AI training & inference
                  </p>
                  <div className="mt-3 text-xs text-cyan-300">
                    ≈ {Math.round(impactScale.waterConsumption / 500)} ChatGPT conversations
                  </div>
                </div>

                {/* Energy Consumption */}
                <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-2 border-orange-500/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Energy Usage</h4>
                  </div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">
                    {impactScale.energyConsumption.toLocaleString()}
                  </div>
                  <p className="text-sm text-orange-200">
                    kWh electricity consumption
                  </p>
                  <div className="mt-3 text-xs text-orange-300">
                    ≈ {Math.round(impactScale.energyConsumption / 30)} homes' monthly use
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900/50 border border-orange-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  The Sustainability Challenge
                </h4>
                <p className="text-orange-100 leading-relaxed mb-4">
                  As you scale your innovation to reach more people, <strong className="text-amber-300">resource consumption grows exponentially</strong>. 
                  This is the hidden cost of AI at scale. A single large language model training session can consume:
                </p>
                <ul className="space-y-2 text-orange-200">
                  <li className="flex items-start gap-2">
                    <Droplets className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span><strong>700,000+ liters</strong> of water (GPT-3 training)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span><strong>1,000+ MWh</strong> of electricity (Large model training)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Factory className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>500+ tons CO₂</strong> emissions (Equivalent to 100 cars/year)</span>
                  </li>
                </ul>
                <p className="text-orange-100 mt-4 leading-relaxed">
                  Responsible innovators must design for <strong className="text-emerald-300">sustainable scale</strong>—using 
                  efficient models, renewable energy, and optimized inference to minimize environmental impact.
                </p>
              </div>

              {userProgress.labsCompleted.includes('impact-slider') && (
                <div className="mt-6 flex items-center justify-center gap-2 text-amber-300">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Lab B Completed!</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab C: Innovation Audit Radar Chart */}
      <section className="py-24 bg-gradient-to-br from-orange-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
                <FlaskConical className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-semibold">Interactive Lab C</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  The Innovation Audit Radar
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                Rate your innovation project against the 5 Pillars of Cognitive Sovereignty. 
                Visualize your strengths and identify blind spots to build more responsible AI solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-orange-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Radar Chart */}
                <div className="flex items-center justify-center">
                  <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                    {/* Background circles */}
                    {[2, 4, 6, 8, 10].map((level) => (
                      <circle
                        key={level}
                        cx="150"
                        cy="150"
                        r={(level / 10) * 120}
                        fill="none"
                        stroke="rgba(251, 191, 36, 0.1)"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Axis lines */}
                    {radarScores.map((_, index) => {
                      const angle = (Math.PI * 2 * index) / radarScores.length - Math.PI / 2
                      const x = 150 + 120 * Math.cos(angle)
                      const y = 150 + 120 * Math.sin(angle)
                      return (
                        <line
                          key={index}
                          x1="150"
                          y1="150"
                          x2={x}
                          y2={y}
                          stroke="rgba(251, 191, 36, 0.2)"
                          strokeWidth="1"
                        />
                      )
                    })}

                    {/* Data polygon */}
                    <path
                      d={generateRadarPath()}
                      fill="rgba(16, 185, 129, 0.3)"
                      stroke="rgba(16, 185, 129, 0.8)"
                      strokeWidth="3"
                    />

                    {/* Data points */}
                    {radarScores.map((pillar, index) => {
                      const angle = (Math.PI * 2 * index) / radarScores.length - Math.PI / 2
                      const radius = (pillar.score / 10) * 120
                      const x = 150 + radius * Math.cos(angle)
                      const y = 150 + radius * Math.sin(angle)
                      return (
                        <circle
                          key={index}
                          cx={x}
                          cy={y}
                          r="6"
                          fill="#10b981"
                          stroke="white"
                          strokeWidth="2"
                        />
                      )
                    })}

                    {/* Labels */}
                    {radarScores.map((pillar, index) => {
                      const angle = (Math.PI * 2 * index) / radarScores.length - Math.PI / 2
                      const x = 150 + 140 * Math.cos(angle)
                      const y = 150 + 140 * Math.sin(angle)
                      return (
                        <text
                          key={index}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          fill="#fbbf24"
                          fontSize="12"
                          fontWeight="bold"
                        >
                          {pillar.pillar.split(' ')[0]}
                        </text>
                      )
                    })}
                  </svg>
                </div>

                {/* Sliders */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6">Rate Your Innovation (0-10)</h3>
                  {radarScores.map((pillar, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-orange-100 font-semibold">{pillar.pillar}</span>
                        <span className="text-amber-300 font-bold">{pillar.score}/10</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={pillar.score}
                        onChange={(e) => updateRadarScore(index, Number(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                      <p className="text-xs text-orange-300 mt-1">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-slate-900/50 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-purple-400" />
                  Audit Insights
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-emerald-300 mb-2">Strengths (7+)</h5>
                    <ul className="space-y-1">
                      {radarScores
                        .filter(p => p.score >= 7)
                        .map((p, i) => (
                          <li key={i} className="text-sm text-orange-100 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            {p.pillar}
                          </li>
                        ))}
                      {radarScores.filter(p => p.score >= 7).length === 0 && (
                        <li className="text-sm text-orange-300 italic">No strong areas yet - keep refining!</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-amber-300 mb-2">Improvement Areas (≤4)</h5>
                    <ul className="space-y-1">
                      {radarScores
                        .filter(p => p.score <= 4)
                        .map((p, i) => (
                          <li key={i} className="text-sm text-orange-100 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            {p.pillar}
                          </li>
                        ))}
                      {radarScores.filter(p => p.score <= 4).length === 0 && (
                        <li className="text-sm text-orange-300 italic">No critical weaknesses - excellent balance!</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {userProgress.labsCompleted.includes('radar-audit') && (
                <div className="mt-6 flex items-center justify-center gap-2 text-purple-300">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Lab C Completed!</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Block 4: Sustainability Audit */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-green-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-6">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">Environmental Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  The Hidden Cost of Innovation
                </span>
              </h2>
              <p className="text-xl text-orange-200 max-w-3xl mx-auto">
                Every AI innovation comes with an environmental footprint. Understanding and minimizing 
                this cost is not optional—it's an ethical imperative for responsible innovators.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Water Consumption */}
              <motion.div
                className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Water Crisis</h3>
                    <p className="text-cyan-300">AI data centers are water-intensive</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">700,000L</div>
                    <p className="text-sm text-cyan-200">Water for GPT-3 training (enough for 700 people's daily needs for a month)</p>
                  </div>
                  <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">500ml</div>
                    <p className="text-sm text-cyan-200">Per ChatGPT conversation (a small bottle of water)</p>
                  </div>
                  <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-cyan-300 mb-2">1.2M L</div>
                    <p className="text-sm text-cyan-200">Google PaLM training (Olympic swimming pool volume)</p>
                  </div>
                </div>
              </motion.div>

              {/* Energy Consumption */}
              <motion.div
                className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Energy Burden</h3>
                    <p className="text-orange-300">Massive electricity consumption</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-orange-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-orange-300 mb-2">1,000+ MWh</div>
                    <p className="text-sm text-orange-200">Large model training (126 U.S. homes' annual use)</p>
                  </div>
                  <div className="bg-slate-900/50 border border-orange-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-orange-300 mb-2">5x More</div>
                    <p className="text-sm text-orange-200">AI-powered search vs. traditional search</p>
                  </div>
                  <div className="bg-slate-900/50 border border-orange-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-orange-300 mb-2">10-20%</div>
                    <p className="text-sm text-orange-200">Global electricity for data centers by 2030</p>
                  </div>
                </div>
              </motion.div>

              {/* Carbon Emissions */}
              <motion.div
                className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-lg border border-gray-500/30 rounded-3xl p-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Carbon Footprint</h3>
                    <p className="text-gray-300">CO₂ emissions from AI</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 border border-gray-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-gray-300 mb-2">626,000 lbs</div>
                    <p className="text-sm text-gray-200">GPT-3 training emissions (5 cars' lifetime emissions)</p>
                  </div>
                  <div className="bg-slate-900/50 border border-gray-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-gray-300 mb-2">300x</div>
                    <p className="text-sm text-gray-200">More emissions from training than using AI models</p>
                  </div>
                  <div className="bg-slate-900/50 border border-gray-500/30 rounded-xl p-4">
                    <div className="text-3xl font-bold text-gray-300 mb-2">2%</div>
                    <p className="text-sm text-gray-200">Global emissions from ICT sector (approaching aviation)</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/30 backdrop-blur-lg border border-emerald-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Leaf className="w-7 h-7 text-emerald-400" />
                Building Sustainable AI Innovations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-emerald-300 mb-3">Sustainable Practices</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-white font-semibold">Use Efficient Models:</span>
                        <span className="text-orange-200"> Smaller, optimized AI models (e.g., DistilBERT) with 97% performance at 40% size</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-white font-semibold">Renewable Energy:</span>
                        <span className="text-orange-200"> Choose cloud providers powered by solar/wind (Google Cloud 100% renewable)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-white font-semibold">Edge Computing:</span>
                        <span className="text-orange-200"> Run AI on devices (phones, IoT) instead of centralized data centers</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-emerald-300 mb-3">Innovation Strategies</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-white font-semibold">Reuse Pre-Trained Models:</span>
                        <span className="text-orange-200"> Fine-tune existing models instead of training from scratch</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-white font-semibold">Carbon-Aware Scheduling:</span>
                        <span className="text-orange-200"> Train models when renewable energy is abundant (daytime solar hours)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-white font-semibold">Measure & Offset:</span>
                        <span className="text-orange-200"> Track emissions with tools like CodeCarbon; invest in carbon credits</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-orange-100 mt-6 leading-relaxed text-center">
                <strong className="text-emerald-300">System Thinking</strong> (Pillar 5) demands that we design innovations 
                with sustainability from Day 1. The most impactful innovation is one that solves problems 
                <em className="text-amber-300"> without creating new environmental crises</em>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Draft & Roadmap Section */}
      <section className="py-24 bg-gradient-to-br from-orange-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-orange-900/30 backdrop-blur-lg border border-orange-500/30 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-3 mb-6">
                <FileText className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold">Your Innovation Blueprint</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Draft Your Innovation Roadmap
                </span>
              </h2>
              <p className="text-orange-200">
                Capture your vision, goals, and strategy. Export your complete innovation plan.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Project Title</label>
                <input
                  type="text"
                  value={innovationDraft.projectTitle}
                  onChange={(e) => setInnovationDraft({...innovationDraft, projectTitle: e.target.value})}
                  placeholder="E.g., AI-Powered Ocean Cleanup Initiative"
                  className="w-full bg-slate-900/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Impact Goals & Vision</label>
                <textarea
                  value={innovationDraft.impactGoals}
                  onChange={(e) => setInnovationDraft({...innovationDraft, impactGoals: e.target.value})}
                  placeholder="Describe what success looks like. Who benefits? How will the world change?"
                  rows={6}
                  className="w-full bg-slate-900/50 border border-orange-500/30 rounded-xl px-4 py-3 text-white placeholder-orange-300/50 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Selected AI Technology</label>
                  <div className="bg-slate-900/50 border border-orange-500/30 rounded-xl px-4 py-3 text-orange-200">
                    {selectedAI ? aiTechnologies.find(t => t.id === selectedAI)?.name : 'Not selected yet'}
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Target SDG Goal</label>
                  <div className="bg-slate-900/50 border border-orange-500/30 rounded-xl px-4 py-3 text-orange-200">
                    {selectedSDG ? sdgGoals.find(g => g.id === selectedSDG)?.name : 'Not selected yet'}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={saveDraft}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {userProgress.draftSaved ? 'Draft Saved ✓' : 'Save Draft'}
                  </div>
                </motion.button>

                <motion.button
                  onClick={exportRoadmap}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Export Roadmap
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Completion & Next Steps */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-orange-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                Innovation Journey Complete!
              </span>
            </h2>

            <p className="text-xl text-orange-200 mb-8">
              You've explored the intersection of human creativity and AI power. 
              You've designed for global impact with cognitive sovereignty at the core.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className={`p-4 rounded-xl border-2 ${userProgress.labsCompleted.includes('sdg-matchmaker') ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800/30 border-slate-500/30'}`}>
                <div className="text-2xl mb-2">
                  {userProgress.labsCompleted.includes('sdg-matchmaker') ? '✅' : '⏸️'}
                </div>
                <div className="font-bold text-white">SDG Matchmaker</div>
              </div>
              <div className={`p-4 rounded-xl border-2 ${userProgress.labsCompleted.includes('impact-slider') ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800/30 border-slate-500/30'}`}>
                <div className="text-2xl mb-2">
                  {userProgress.labsCompleted.includes('impact-slider') ? '✅' : '⏸️'}
                </div>
                <div className="font-bold text-white">Impact Slider</div>
              </div>
              <div className={`p-4 rounded-xl border-2 ${userProgress.labsCompleted.includes('radar-audit') ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-slate-800/30 border-slate-500/30'}`}>
                <div className="text-2xl mb-2">
                  {userProgress.labsCompleted.includes('radar-audit') ? '✅' : '⏸️'}
                </div>
                <div className="font-bold text-white">Radar Audit</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-amber-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Your Innovation Manifesto</h3>
              <p className="text-orange-100 leading-relaxed">
                <strong className="text-amber-300">Human creativity leads. AI supports. Ethics guide. Impact measures. Sustainability endures.</strong>
                <br /><br />
                You are now equipped to build innovations that don't just solve problems—they solve them 
                <em className="text-emerald-300"> responsibly, sustainably, and with human dignity at the center</em>.
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
              <CheckCircle className="w-8 h-8 text-green-400" />
              Complete Your Learning Journey
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Previous Module */}
              <a
                href="/projects/mindcraft/scientific-research"
                className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 hover:from-indigo-600/30 hover:to-blue-600/30 border border-indigo-500/30 hover:border-indigo-400/50 rounded-xl p-4 transition-all group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">← Previous: Scientific Research</p>
                  <p className="text-indigo-300 text-sm">Data to Wisdom</p>
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

              {/* Next Module - None (last module) */}
              <div className="bg-slate-700/30 rounded-xl p-4 opacity-50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm">Journey Complete!</p>
                  <p className="text-gray-400 text-xs">🎉 Navigator Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
