import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Lightbulb, 
  Rocket, 
  Target, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Brain,
  Heart,
  Users,
  Zap,
  TrendingUp,
  Award,
  Share
} from 'lucide-react'

export default function CreativeInnovationPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')
  const [selectedSDG, setSelectedSDG] = useState('')

  const module = modulesData.find(m => m.id === 'creative-innovation')
  
  if (!module) return null

  const learningContent = [
    {
      title: "Introduction to Creative AI",
      description: "Understanding the revolutionary intersection of artificial intelligence and human creativity.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      content: {
        theory: {
          title: "Core Concepts",
          points: [
            "What is creative AI and how it transforms innovation",
            "Historical perspective on creativity and technology evolution",
            "Current landscape of AI creative tools and platforms",
            "Myth-busting: AI as a creative partner, not replacement",
            "The psychology of human-AI collaborative creativity"
          ]
        },
        practice: {
          title: "Hands-on Exploration",
          points: [
            "Interactive demos of leading AI creative tools",
            "Creativity assessment and personal style identification",
            "Collaborative brainstorming with AI assistance",
            "Real-world case studies analysis workshop",
            "Building your first AI-enhanced creative project"
          ]
        },
        tools: [
          "AI creativity assessment framework",
          "Creative tool comparison matrix",
          "Innovation mindset checklist",
          "Collaborative creativity templates"
        ]
      }
    },
    {
      title: "AI-Powered Content Creation",
      description: "Master cutting-edge AI tools for generating compelling content across multiple formats.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      content: {
        theory: {
          title: "Content Generation Mastery",
          points: [
            "Text generation and advanced copywriting techniques",
            "Visual content creation: images, graphics, and videos",
            "Music composition and audio production with AI",
            "Code generation and web development automation",
            "Cross-platform content optimization strategies"
          ]
        },
        practice: {
          title: "Creative Workshops",
          points: [
            "GPT-powered writing enhancement laboratory",
            "AI image generation and editing masterclass",
            "Video creation with AI storytelling tools",
            "Music composition using neural networks",
            "Code-to-prototype rapid development sessions"
          ]
        },
        tools: [
          "Content creation toolkit directory",
          "Quality assessment rubrics",
          "Multi-format publishing templates",
          "AI prompt optimization guides"
        ]
      }
    },
    {
      title: "Design Thinking with AI",
      description: "Integrate artificial intelligence into proven design thinking methodologies for enhanced innovation.",
      icon: Target,
      color: "from-blue-500 to-indigo-500",
      content: {
        theory: {
          title: "Enhanced Design Process",
          points: [
            "AI-enhanced brainstorming and ideation techniques",
            "Rapid prototyping with intelligent design assistance",
            "User experience optimization through data analytics",
            "Data-driven creative decision making frameworks",
            "Iterative design validation with AI feedback"
          ]
        },
        practice: {
          title: "Design Labs",
          points: [
            "Interactive brainstorming canvas with AI suggestions",
            "Prototype development sprint challenges",
            "UX testing with AI-powered user simulation",
            "Design critique sessions with AI analysis",
            "Cross-functional collaboration workshops"
          ]
        },
        tools: [
          "Design thinking AI toolkit",
          "Prototype validation frameworks",
          "User testing automation scripts",
          "Creative collaboration platforms"
        ]
      }
    },
    {
      title: "Innovation Frameworks",
      description: "Apply proven innovation methodologies enhanced with AI capabilities for systematic creative problem-solving.",
      icon: Rocket,
      color: "from-green-500 to-teal-500",
      content: {
        theory: {
          title: "Strategic Innovation",
          points: [
            "SCAMPER methodology enhanced with AI insights",
            "Design thinking process with intelligent automation",
            "Lean startup validation using AI market analysis",
            "Blue ocean strategy with predictive modeling",
            "Systems thinking for complex problem solving"
          ]
        },
        practice: {
          title: "Framework Application",
          points: [
            "SCAMPER workshop with AI-generated alternatives",
            "Lean canvas development with market intelligence",
            "Blue ocean opportunity mapping exercises",
            "Systems modeling for complex challenges",
            "Innovation portfolio optimization"
          ]
        },
        tools: [
          "Innovation framework templates",
          "Market analysis automation tools",
          "Opportunity assessment matrices",
          "Systems thinking visualization"
        ]
      }
    },
    {
      title: "Global Impact & SDG Solutions",
      description: "Channel your creative innovations toward solving the world's most pressing challenges using UN Sustainable Development Goals.",
      icon: Globe,
      color: "from-emerald-500 to-green-600",
      content: {
        theory: {
          title: "Impact-Driven Innovation",
          points: [
            "UN Sustainable Development Goals framework integration",
            "Social impact measurement and evaluation methods",
            "Scalability assessment for global solutions",
            "Partnership development for collective impact",
            "Sustainable innovation business model design"
          ]
        },
        practice: {
          title: "Impact Projects",
          points: [
            "SDG challenge identification and analysis",
            "Solution prototyping for real-world problems",
            "Impact measurement dashboard creation",
            "Stakeholder engagement strategy development",
            "Pitch development for social innovation"
          ]
        },
        tools: [
          "SDG mapping templates",
          "Impact measurement frameworks",
          "Stakeholder analysis tools",
          "Social innovation canvas"
        ]
      }
    },
    {
      title: "Building Your Creative AI Toolkit",
      description: "Develop a personalized ecosystem of AI tools and workflows optimized for your creative goals.",
      icon: Award,
      color: "from-indigo-500 to-purple-600",
      content: {
        theory: {
          title: "Personal Innovation System",
          points: [
            "Essential AI tools for modern creators and innovators",
            "Workflow optimization and automation strategies",
            "Quality assessment and creative excellence standards",
            "Ethical considerations in AI-powered creativity",
            "Future-proofing skills for evolving AI landscape"
          ]
        },
        practice: {
          title: "Toolkit Development",
          points: [
            "Personal AI stack configuration workshop",
            "Workflow automation setup and testing",
            "Quality control system implementation",
            "Ethical guidelines establishment",
            "Continuous learning plan development"
          ]
        },
        tools: [
          "AI tool selection matrix",
          "Workflow optimization templates",
          "Quality assurance checklists",
          "Ethics framework guidelines"
        ]
      }
    }
  ];

  const innovationActivities = [
    {
      title: "Impact Simulator",
      description: "Design solutions for Global Shapers challenges using AI",
      icon: Globe,
      difficulty: "Advanced"
    },
    {
      title: "Creativity Booster",
      description: "AI-powered brainstorming and ideation sessions",
      icon: Lightbulb,
      difficulty: "Beginner"
    },
    {
      title: "Prototype Sprint",
      description: "Rapid solution development with AI assistance",
      icon: Rocket,
      difficulty: "Intermediate"
    },
    {
      title: "Innovation Lab",
      description: "Collaborative innovation challenges and projects",
      icon: Users,
      difficulty: "Intermediate"
    }
  ];

  const sdgGoals = [
    "No Poverty", "Zero Hunger", "Good Health", "Quality Education",
    "Gender Equality", "Clean Water", "Affordable Energy", "Decent Work",
    "Innovation & Infrastructure", "Reduced Inequalities", "Sustainable Cities",
    "Responsible Consumption", "Climate Action", "Life Below Water",
    "Life on Land", "Peace & Justice", "Partnerships"
  ];

  return (
    <>
      <Head>
        <title>Creative Innovation with AI - Mindcraft</title>
        <meta name="description" content="Explore how AI revolutionizes creative processes. Learn to harness AI tools for innovation, design, and global impact solutions." />
        <meta name="keywords" content="creative innovation, AI creativity, design thinking, innovation frameworks, SDG solutions, global impact" />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-lg opacity-30 -z-10 scale-110"></div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text bg-gradient-to-r from-yellow-600 to-orange-600">
                  Creative Innovation
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-700">
                  with Artificial Intelligence
                </span>
              </h1>
              
              {/* Klaus Schwab Quote */}
              <motion.div 
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-200 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-orange-500" />
                  <h2 className="text-xl font-semibold text-gray-800">Klaus Schwab's Vision</h2>
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{module.schwabInsight}"
                </p>
              </motion.div>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/80 px-6 py-3 rounded-full border border-yellow-200 shadow-sm">
                  <span className="text-orange-600 font-medium">{module.duration}</span>
                </div>
                <div className="bg-white/80 px-6 py-3 rounded-full border border-yellow-200 shadow-sm">
                  <span className="text-orange-600 font-medium">{module.ageRange} years</span>
                </div>
                <div className="bg-white/80 px-6 py-3 rounded-full border border-yellow-200 shadow-sm">
                  <span className="text-orange-600 font-medium">6 Core Modules</span>
                </div>
              </div>

              {/* Learning Outcomes */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {module.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-yellow-200 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-3 mx-auto" />
                    <p className="text-gray-700 text-sm font-medium">{outcome}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Learning Content Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Innovation Learning Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master AI-powered creativity through comprehensive modules designed for real-world impact
              </p>
            </div>

            <div className="grid gap-8">
              {learningContent.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                          {section.title}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Theory */}
                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Brain className="w-6 h-6 text-yellow-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {section.content.theory.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.theory.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practice */}
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Rocket className="w-6 h-6 text-orange-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {section.content.practice.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.practice.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Play className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="w-6 h-6 text-amber-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Tools & Resources
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.tools.map((tool, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Activities */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Innovation Laboratory
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hands-on activities to develop your creative innovation skills with AI-powered tools
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {innovationActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                      {activity.difficulty}
                    </span>
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDG Challenge Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-8 lg:p-12 text-white text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mindcraft Global Impact Challenge
              </h2>
              
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                {module.mindcraftChallenge}
              </p>

              {/* SDG Selector */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Choose Your SDG Focus:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {sdgGoals.slice(0, 8).map((goal, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSDG(goal)}
                      className={`p-2 rounded-lg text-sm font-medium transition-all ${
                        selectedSDG === goal 
                          ? 'bg-white text-orange-600' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
              
              <motion.button
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Innovation Challenge
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl border border-yellow-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 gradient-text bg-gradient-to-r from-yellow-600 to-orange-600">
                  Your Innovation Journey
                </h2>
                <p className="text-lg text-gray-600">
                  Reflect on your creative innovation learning and plan your next steps
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    What global challenge excites you most? How will you use AI-powered creativity to make an impact?
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    rows={6}
                    placeholder="Share your vision for using AI to create positive change..."
                  />
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Share My Innovation Vision
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6">
              <motion.a
                href="/projects/mindcraft/scientific-research"
                className="flex-1 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200 transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Previous Module</h3>
                    <p className="text-gray-600 text-sm">Scientific Research Methods</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Review research methodologies and scientific thinking approaches
                </p>
              </motion.a>

              <motion.a
                href="/projects/mindcraft"
                className="flex-1 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-200 transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mindcraft Hub</h3>
                    <p className="text-gray-600 text-sm">Explore All Modules</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Discover other AI learning modules and continue your journey
                </p>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}