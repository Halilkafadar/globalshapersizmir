import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Sparkles, 
  Eye, 
  Heart, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Brain,
  ShieldAlert,
  Zap,
  Lightbulb,
  Download,
  Shuffle,
  HelpCircle,
  Award,
  FileText,
  Droplets,
  Gavel,
  Camera,
  ImageIcon,
  Cpu,
  Copy,
  Check
} from 'lucide-react'

export default function AIArtCreationPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [creativeNotes, setCreativeNotes] = useState('')
  
  // Style Mixer State
  const [selectedSubject, setSelectedSubject] = useState('Forest')
  const [selectedStyle, setSelectedStyle] = useState('Cyberpunk')
  const [selectedLighting, setSelectedLighting] = useState('Golden Hour')
  const [isCopied, setIsCopied] = useState(false)
  
  // Ownership Decision Tree State
  const [currentScenario, setCurrentScenario] = useState(0)
  const [ownershipAnswers, setOwnershipAnswers] = useState<number[]>([])

  // Load saved notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem('mindcraft-art-manifesto')
    if (savedNotes) {
      setCreativeNotes(savedNotes)
    }
  }, [])

  // Save notes to localStorage
  const saveNotes = (notes: string) => {
    setCreativeNotes(notes)
    localStorage.setItem('mindcraft-art-manifesto', notes)
  }

  const module = modulesData.find(m => m.id === 'ai-art-creation')
  
  if (!module) return null

  // Style Mixer Data
  const subjects = ['Forest', 'City', 'Castle', 'Ocean', 'Mountain', 'Desert', 'Space Station', 'Garden']
  const artStyles = ['Cyberpunk', 'Ukiyo-e', 'Art Nouveau', 'Impressionist', 'Digital Art', 'Watercolor', 'Anime', 'Realistic']
  const lightingOptions = ['Golden Hour', 'Neon Lights', 'Candlelight', 'Moonlight', 'Studio Lighting', 'Aurora', 'Sunset', 'Dramatic Shadows']

  // Generate mock prompt based on selections
  const generateMockPrompt = () => {
    return `A beautiful ${selectedSubject.toLowerCase()} scene in ${selectedStyle} style, illuminated by ${selectedLighting.toLowerCase()}, high quality, detailed, artistic composition`
  }

  const handleCopyPrompt = async () => {
    const prompt = generateMockPrompt()
    try {
      await navigator.clipboard.writeText(prompt)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  // Ownership Scenarios
  const ownershipScenarios = [
    {
      id: 1,
      title: 'The Simple Prompt',
      scenario: 'Alex types "a red rose" into an AI art generator and gets a beautiful image.',
      question: 'Who owns this artwork?',
      options: [
        { text: 'Alex (the prompt writer)', legal: 'Partially Correct', reasoning: 'Alex has some claim but the prompt is very simple' },
        { text: 'The AI Company', legal: 'Incorrect', reasoning: 'Companies typically don\'t claim ownership of user-generated content' },
        { text: 'No one (Public Domain)', legal: 'Currently Most Accurate', reasoning: 'Simple AI outputs may not qualify for copyright protection' },
        { text: 'The Original Rose Photographer', legal: 'Incorrect', reasoning: 'AI doesn\'t copy specific images but learns from patterns' }
      ]
    },
    {
      id: 2,
      title: 'The Detailed Artist',
      scenario: 'Maria spends hours crafting a complex prompt: "A melancholic figure in tattered Victorian dress, standing before a crumbling manor house, painted in the style of romantic period art, with stormy skies and dramatic chiaroscuro lighting, conveying themes of loss and memory"',
      question: 'Who has stronger ownership claims?',
      options: [
        { text: 'Maria has strong authorship claims', legal: 'Likely Correct', reasoning: 'Detailed creative input may qualify for copyright protection' },
        { text: 'Victorian artists own the style', legal: 'Incorrect', reasoning: 'Historical art styles are public domain' },
        { text: 'Still public domain', legal: 'Debatable', reasoning: 'Courts are still deciding on AI-assisted creativity' },
        { text: 'The AI training data owners', legal: 'Incorrect', reasoning: 'Training data ownership doesn\'t transfer to outputs' }
      ]
    }
  ]

  // Environmental Impact Data
  const environmentalFacts = [
    'Training a single large AI image model consumes as much water as 2.5 Olympic swimming pools',
    'One AI-generated image uses about 2.9 ml of water for server cooling',
    'High-resolution AI art generation can consume 50x more energy than a simple text search',
    'The carbon footprint of training GPT-3 equivalent of image models: ~284 tonnes of CO2'
  ]

  const learningObjectives = [
    'Understand Diffusion Models and GANs as the backbone of AI art generation',
    'Explore the "Human Signature" concept - how AI amplifies rather than replaces creativity',
    'Analyze copyright complexities and ownership questions in AI-generated art',
    'Investigate environmental costs of AI art production',
    'Build ethical frameworks for responsible AI art creation'
  ]

  const technicalFoundation = [
    {
      title: 'Diffusion Models: From Noise to Art',
      icon: Sparkles,
      concept: 'The Art of Intelligent Denoising',
      explanation: 'Imagine starting with pure visual static and gradually removing noise while guided by your text prompt. Diffusion models work like a sculptor revealing a statue from marble - they start with random noise and systematically remove it to reveal your envisioned artwork.',
      analogy: 'Think of it like developing a photograph in a darkroom, but instead of chemicals, we use mathematics and your creative description as the guide.',
      keyPoints: [
        'Starts with pure random noise (like TV static)',
        'Gradually removes noise in hundreds of small steps',
        'Each step is guided by understanding your text prompt',
        'Final result emerges as noise is completely removed'
      ],
      realWorld: 'This is how DALL-E 2, Midjourney, and Stable Diffusion create their stunning images'
    },
    {
      title: 'GANs: The Creative Competition',
      icon: Brain,
      concept: 'Generator vs. Discriminator Battle',
      explanation: 'GANs work like an art forger competing against an art detective. The Generator creates fake artwork while the Discriminator tries to detect fakes. Through this competition, the Generator becomes incredibly skilled at creating convincing art.',
      analogy: 'Imagine a student artist constantly improving by trying to fool an expert art critic. The better the critic becomes at spotting flaws, the better the artist becomes at creating masterpieces.',
      keyPoints: [
        'Two AI networks compete against each other',
        'Generator creates images, Discriminator judges them',
        'Competition drives both networks to improve',
        'Eventually produces highly realistic results'
      ],
      realWorld: 'This technology powers many portrait generators and style transfer applications'
    },
    {
      title: 'The Human Signature in AI Art',
      icon: Heart,
      concept: 'AI as Intellectual Partner, Not Replacement',
      explanation: 'Your creativity provides the vision, emotion, and intention that AI cannot generate alone. The "Human Signature" is your unique perspective, life experience, and creative choices that guide the AI toward meaningful artistic expression.',
      analogy: 'Think of AI as an incredibly skilled assistant who can paint anything you describe, but cannot dream up what to paint or why it matters.',
      keyPoints: [
        'Humans provide creative vision and intentionality',
        'AI provides technical execution and possibilities',
        'True artistry emerges from human-AI collaboration',
        'Your perspective and choices remain uniquely yours'
      ],
      realWorld: 'Professional artists use AI to expand their capabilities, not replace their creativity'
    }
  ]

  const ethicsAndOwnership = [
    {
      title: 'Copyright Complexity',
      icon: Gavel,
      issue: 'Who owns the prompt? Who owns the pixels?',
      details: 'Current copyright law struggles with AI-generated content. Simple prompts may not qualify for copyright protection, but complex, creative prompts might. Meanwhile, AI companies don\'t claim ownership of user outputs, creating a legal gray area.',
      implications: [
        'Simple prompts (e.g., "a cat") likely not copyrightable',
        'Complex creative prompts may qualify for protection',
        'Training data usage remains legally contested',
        'Commercial use requires careful consideration'
      ]
    },
    {
      title: 'Authenticity and Deepfakes',
      icon: ShieldAlert,
      issue: 'The erosion of visual truth',
      details: 'AI can now create convincing fake photos of historical events, mimic deceased artists\' styles, and generate false evidence. This challenges our ability to distinguish reality from fabrication.',
      implications: [
        'Historical photography may become questionable',
        'Living artists\' styles can be replicated without consent',
        'Legal evidence standards need updating',
        'Media literacy becomes crucial for society'
      ]
    },
    {
      title: 'Environmental Impact',
      icon: Droplets,
      issue: 'The hidden cost of digital creativity',
      details: 'Training AI art models requires enormous computational power, consuming massive amounts of electricity and water for cooling. Each generated image has a carbon footprint.',
      implications: [
        'Water usage for server cooling in data centers',
        'High electricity consumption for training and generation',
        'Carbon emissions comparable to short flights',
        'Need for sustainable AI development practices'
      ]
    }
  ]

  const learningContent = [
    {
      title: "Theoretical Foundation",
      subtitle: "Understanding the Science Behind AI Art",
      description: "Explore the mathematical and computational principles that make AI art possible",
      keyPoints: ["Diffusion Models", "Generative Adversarial Networks", "Neural Network Training"],
      interactive: "Technical Deep Dive",
      icon: Cpu,
      content: "AI art generation relies on sophisticated machine learning architectures that have revolutionized creative possibilities. These systems learn from millions of images to understand patterns, styles, and visual relationships.",
      sections: technicalFoundation
    },
    {
      title: "Ethics & Ownership Laboratory",
      subtitle: "Navigating the Legal and Moral Landscape",
      description: "Examine complex questions about ownership, authenticity, and responsible creation",
      keyPoints: ["Copyright Complexities", "Authenticity Crisis", "Environmental Impact"],
      interactive: "Ethics Decision Tree",
      icon: Gavel,
      content: "The emergence of AI art has created unprecedented legal and ethical challenges that society is still learning to navigate.",
      sections: ethicsAndOwnership
    },
    {
      title: "Interactive Style Laboratory",
      subtitle: "Hands-on Prompt Engineering",
      description: "Master the art of communicating with AI through effective prompt design",
      keyPoints: ["Prompt Structure", "Style Selection", "Creative Direction"],
      interactive: "Style Mixer Sandbox",
      icon: Palette,
      content: "The quality of AI-generated art depends heavily on how effectively you can communicate your creative vision through text prompts."
    }
  ]

  const handleOwnershipAnswer = (answerIndex: number) => {
    const newAnswers = [...ownershipAnswers]
    newAnswers[currentScenario] = answerIndex
    setOwnershipAnswers(newAnswers)
  }

  const nextOwnershipScenario = () => {
    if (currentScenario < ownershipScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
    }
  }

  const exportManifesto = () => {
    const manifestoText = `
# My AI Art Manifesto

Generated on: ${new Date().toLocaleDateString()}

## My Creative Philosophy
${creativeNotes || 'No notes recorded yet'}

## Course Completion Summary
- Technical Understanding: Learned about Diffusion Models and GANs
- Ethics Awareness: Explored copyright and authenticity challenges
- Practical Skills: Mastered prompt engineering techniques
- Creative Practice: Developed responsible human-AI collaboration habits

## Current Prompt Expertise
Subject Focus: ${selectedSubject}
Preferred Style: ${selectedStyle}
Lighting Preference: ${selectedLighting}
Generated Prompt: "${generateMockPrompt()}"

## Scenario Progress
Ownership Scenarios Completed: ${ownershipAnswers.length}/${ownershipScenarios.length}

This manifesto represents my journey in understanding AI art as a collaborative tool that amplifies human creativity rather than replacing it.
`
    
    const blob = new Blob([manifestoText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ai-art-manifesto.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Head>
        <title>AI Art Creation - Mindcraft Educational Laboratory</title>
        <meta name="description" content="Explore the intersection of artificial intelligence and creativity through interactive learning modules on diffusion models, GANs, and ethical AI art creation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating AI Art Icon */}
              <div className="relative inline-block mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center animate-pulse">
                    <Palette className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-2xl blur-xl"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Art Creation
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-4">
                  The Human Signature Laboratory
                </span>
              </h1>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 mb-8">
                <h2 className="text-2xl md:text-3xl text-pink-300 mb-4 font-semibold">
                  The Human-AI Partnership
                </h2>
                <p className="text-xl text-gray-300 italic">
                  "AI doesn't replace human creativity; it amplifies it. Your imagination provides the vision, AI provides the execution. Together, they create something neither could achieve alone."
                </p>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover how AI art generation works, explore the ethical implications of artificial creativity, and learn to collaborate with AI as an intellectual partner in the creative process.
              </p>

              {/* Learning Objectives */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-8">
                <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">Laboratory Learning Objectives</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30">
                <div className="text-3xl font-bold text-pink-400">3</div>
                <div className="text-gray-300">Learning Modules</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">Interactive</div>
                <div className="text-gray-300">Laboratories</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30">
                <div className="text-3xl font-bold text-indigo-400">Hands-on</div>
                <div className="text-gray-300">Experiments</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400">Critical</div>
                <div className="text-gray-300">Analysis</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Module 1: Theoretical Foundation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Module 1: <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Theoretical Foundation</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the Science Behind AI Art Generation
              </p>
            </motion.div>

            <div className="grid gap-8">
              {technicalFoundation.map((concept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <concept.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{concept.title}</h3>
                      <p className="text-cyan-300 font-semibold">{concept.concept}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {concept.explanation}
                  </p>

                  <div className="bg-blue-900/20 rounded-xl p-4 mb-6">
                    <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Simple Analogy
                    </h4>
                    <p className="text-gray-300 italic">{concept.analogy}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Technical Points:</h4>
                      <ul className="space-y-2">
                        {concept.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Real-World Application:</h4>
                      <p className="text-gray-300 text-sm bg-slate-700/30 rounded-lg p-4">
                        {concept.realWorld}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Module 2: Ethics & Ownership */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Module 2: <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Ethics & Ownership Laboratory</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Navigating the Complex Legal and Moral Landscape of AI Art
              </p>
            </motion.div>

            <div className="grid gap-8 mb-12">
              {ethicsAndOwnership.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <issue.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{issue.title}</h3>
                      <p className="text-red-300 font-semibold">{issue.issue}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {issue.details}
                  </p>

                  <div className="bg-red-900/20 rounded-xl p-4">
                    <h4 className="text-red-300 font-semibold mb-3">Current Implications:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {issue.implications.map((implication, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ShieldAlert className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{implication}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Ownership Decision Tree */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Interactive Ownership Decision Tree</h3>
                  <p className="text-red-300">Test your understanding of AI art ownership scenarios</p>
                </div>
              </div>

              {ownershipScenarios[currentScenario] && (
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4">{ownershipScenarios[currentScenario].title}</h4>
                    <p className="text-gray-300 mb-4">{ownershipScenarios[currentScenario].scenario}</p>
                    <p className="text-pink-300 font-semibold">{ownershipScenarios[currentScenario].question}</p>
                  </div>

                  <div className="grid gap-3">
                    {ownershipScenarios[currentScenario].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOwnershipAnswer(i)}
                        className={`text-left p-4 rounded-xl border transition-all ${
                          ownershipAnswers[currentScenario] === i
                            ? 'border-pink-400 bg-pink-900/20'
                            : 'border-slate-600 bg-slate-800/30 hover:border-pink-500/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                            ownershipAnswers[currentScenario] === i
                              ? 'border-pink-400 bg-pink-400'
                              : 'border-gray-400'
                          }`}></div>
                          <div>
                            <p className="text-white font-medium">{option.text}</p>
                            {ownershipAnswers[currentScenario] === i && (
                              <div className="mt-2 p-3 bg-slate-700/50 rounded-lg">
                                <p className="text-sm text-gray-300">
                                  <span className="text-pink-300 font-semibold">{option.legal}:</span> {option.reasoning}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {ownershipAnswers[currentScenario] !== undefined && currentScenario < ownershipScenarios.length - 1 && (
                    <button
                      onClick={nextOwnershipScenario}
                      className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-red-700 transition-all flex items-center gap-2"
                    >
                      Next Scenario <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )}
            </motion.div>

            {/* Environmental Impact Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Environmental Reality Check</h3>
              </div>
              <div className="grid gap-4">
                {environmentalFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{fact}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Module 3: Style Mixer Sandbox */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Module 3: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Interactive Style Laboratory</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the Art of AI Communication Through Prompt Engineering
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Style Mixer Sandbox</h3>
                  <p className="text-purple-300">Experiment with different combinations to understand prompt engineering</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Subject Selection */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Subject
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => setSelectedSubject(subject)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          selectedSubject === subject
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Selection */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Art Style
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {artStyles.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          selectedStyle === style
                            ? 'bg-pink-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lighting Selection */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Lighting
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {lightingOptions.map((lighting) => (
                      <button
                        key={lighting}
                        onClick={() => setSelectedLighting(lighting)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${
                          selectedLighting === lighting
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        }`}
                      >
                        {lighting}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Generated Prompt Display */}
              <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <h4 className="text-white font-semibold">Generated Prompt</h4>
                  <div className="ml-auto flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedSubject(subjects[Math.floor(Math.random() * subjects.length)])
                        setSelectedStyle(artStyles[Math.floor(Math.random() * artStyles.length)])
                        setSelectedLighting(lightingOptions[Math.floor(Math.random() * lightingOptions.length)])
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-2"
                    >
                      <Shuffle className="w-4 h-4" />
                      Randomize
                    </button>
                    <button
                      onClick={handleCopyPrompt}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-2"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                  "{generateMockPrompt()}"
                </p>
              </div>

              {/* AI Playground Navigation Button - Always Visible */}
              <div className="mt-8 text-center">
                <a
                  href="/projects/mindcraft/playground"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                >
                  <Sparkles className="w-6 h-6" />
                  Try Full AI Playground
                  <ArrowRight className="w-6 h-6" />
                </a>
                <p className="text-gray-400 text-sm mt-3">
                  Experiment with advanced AI tools and unleash your creativity
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Creative Journey Notes Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Creative Journey</span>
              </h2>
              <p className="text-xl text-gray-300">
                Document your insights and build your personal AI art manifesto
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Personal Manifesto Builder</h3>
              </div>

              <textarea
                value={creativeNotes}
                onChange={(e) => saveNotes(e.target.value)}
                placeholder="Reflect on your learning journey... How has your understanding of AI art evolved? What ethical principles will guide your creative work? What excites you most about the future of human-AI collaboration in art?"
                className="w-full h-40 bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-gray-300 placeholder-gray-500 resize-none focus:border-yellow-500 focus:outline-none"
              />

              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-gray-400">
                  Your notes are automatically saved locally
                </p>
                <button
                  onClick={exportManifesto}
                  className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Export My Art Manifesto
                </button>
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
                  href="/projects/mindcraft/coding-automation"
                  className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 border border-green-500/30 hover:border-green-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">← Previous: Coding & Automation</p>
                    <p className="text-green-300 text-sm">Systems Thinking</p>
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
                  href="/projects/mindcraft/scientific-research"
                  className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 hover:from-indigo-600/30 hover:to-blue-600/30 border border-indigo-500/30 hover:border-indigo-400/50 rounded-xl p-4 transition-all group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-semibold">Next: Scientific Research</p>
                    <p className="text-indigo-300 text-sm">Data to Wisdom →</p>
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