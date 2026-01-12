import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Code, 
  Globe, 
  Zap, 
  Brain, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  MessageSquare,
  Palette
} from 'lucide-react'

export default function CodingAutomationPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'coding-automation')
  
  if (!module) return null

  const learningContent = [
    {
      title: "Programming Foundations",
      subtitle: "The Building Blocks",
      description: "Understanding variables, functions, and control structures - the DNA of all software",
      keyPoints: ["Variables & Data Types", "Functions & Logic", "Problem Decomposition"],
      interactive: "Code Your First Program",
      icon: Code,
      content: "Think of programming like writing recipes for a computer. You give step-by-step instructions using special languages like Python or JavaScript. Every app, website, or game you use started as lines of code - and you can write them too!"
    },
    {
      title: "Web Development Magic",
      subtitle: "Building the Digital World",
      description: "Creating websites and web applications that millions can use",
      keyPoints: ["HTML Structure", "CSS Styling", "JavaScript Interactivity"],
      interactive: "Build Your Portfolio Website",
      icon: Globe,
      content: "Web development is like digital architecture - HTML creates the structure, CSS makes it beautiful, and JavaScript brings it to life. From social media to online games, everything you love on the internet was built with these technologies."
    },
    {
      title: "Automation Superpowers",
      subtitle: "Make Computers Work for You",
      description: "Automate repetitive tasks and create smart workflows",
      keyPoints: ["Script Writing", "Task Automation", "Workflow Design"],
      interactive: "Automate Your Daily Tasks",
      icon: Zap,
      content: "Automation is your digital superpower! Instead of doing the same boring tasks over and over, you can write scripts that do them for you. Organize files, send emails, process data - all while you focus on the creative stuff."
    },
    {
      title: "AI-Powered Development",
      subtitle: "Coding with AI Assistants",
      description: "Using AI tools to accelerate development and solve complex problems",
      keyPoints: ["AI Code Generation", "Debugging Help", "Code Optimization"],
      interactive: "Pair Program with AI",
      icon: Brain,
      content: "AI transforms how we code - it's like having a super-smart coding buddy available 24/7. GitHub Copilot, ChatGPT, and other AI tools can help write code, explain errors, and suggest improvements. The future of programming is human-AI collaboration."
    },
    {
      title: "Project Building",
      subtitle: "From Idea to Reality",
      description: "Turning your creative ideas into functional applications and tools",
      keyPoints: ["Project Planning", "Version Control", "Deployment & Sharing"],
      interactive: "Launch Your First App",
      icon: Rocket,
      content: "Building projects is where the magic happens! Take your idea - maybe a game, a productivity app, or a creative tool - and turn it into something real that others can use. Learn to plan, code, test, and share your creations with the world."
    }
  ]

  const codingChallenges = [
    {
      title: "The Automation Challenge",
      scenario: "You have 1000 photos to rename based on their date. Which approach would be most efficient?",
      options: [
        "Rename each photo manually one by one",
        "Use a basic file manager batch rename",
        "Write a Python script that reads photo metadata and renames automatically",
        "Ask a friend to help rename them"
      ],
      correct: 2,
      explanation: "A Python script can automatically read photo metadata (like date taken) and rename files in seconds, saving hours of manual work. This is the power of automation!"
    },
    {
      title: "The Web Development Dilemma",
      scenario: "You want to create a personal portfolio website. What's the best learning path?",
      options: [
        "Jump straight into advanced frameworks like React",
        "Start with HTML basics, then CSS for styling, then JavaScript for interactivity",
        "Use only website builders like WordPress",
        "Copy someone else's code without understanding it"
      ],
      correct: 1,
      explanation: "Building a strong foundation with HTML, CSS, and JavaScript ensures you understand how websites work. Then you can confidently use any framework or tool."
    }
  ]

  return (
    <>
      <Head>
        <title>Coding & Automation: Creating Digital Solutions | Mindcraft</title>
        <meta name="description" content="Learn programming fundamentals and automation techniques to create powerful digital solutions. Build your computational thinking skills with AI assistance." />
        <meta name="keywords" content="coding, programming, automation, web development, Python, JavaScript, artificial intelligence, computational thinking" />
        <meta property="og:title" content="Coding & Automation: Creating Digital Solutions" />
        <meta property="og:description" content="Master programming and automation to build amazing digital solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              {/* Code Icon */}
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Code className="w-16 h-16 text-blue-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-xl"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Coding & Automation
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mt-4">
                  Creating Digital Solutions
                </span>
              </h1>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-8">
                <h2 className="text-2xl md:text-3xl text-blue-300 mb-4 font-semibold">
                  Klaus Schwab's Vision
                </h2>
                <p className="text-xl text-gray-300 italic">
                  "Programming is the new literacy of the 21st century - combine it with AI for unlimited potential"
                </p>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400">5</div>
                <div className="text-gray-300">Learning Sections</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30">
                <div className="text-3xl font-bold text-indigo-400">All Levels</div>
                <div className="text-gray-300">Progressive Learning</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">Hands-on</div>
                <div className="text-gray-300">Build Real Projects</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Learning Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Your Journey to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Programming Mastery</span>
            </h2>

            <div className="space-y-12">
              {learningContent.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-blue-300">{section.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {section.content}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {section.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                        <Play className="w-5 h-5" />
                        {section.interactive}
                      </button>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 border border-blue-500/30">
                        <div className="text-center">
                          <section.icon className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-white mb-2">Interactive Learning</h4>
                          <p className="text-gray-300">{section.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Coding Laboratory */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Live Coding Laboratory
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Test your programming and automation skills with real-world scenarios
              </p>
            </div>

            <div className="space-y-8">
              {codingChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{challenge.scenario}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {challenge.options.map((option, i) => (
                      <button
                        key={i}
                        className="text-left p-4 bg-slate-700/50 hover:bg-blue-600/30 border border-slate-600 hover:border-blue-500 rounded-xl transition-all"
                      >
                        <span className="text-white">{option}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/50">
                    <h4 className="text-blue-300 font-semibold mb-2">Expert Analysis</h4>
                    <p className="text-gray-300 text-sm">{challenge.explanation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-blue-800/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                My Coding & Automation Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                How has learning to code and automate changed your problem-solving approach?
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before: How I solved problems manually
                  </label>
                  <textarea
                    placeholder="I used to handle repetitive tasks by..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After: How I'll use code and automation to solve challenges
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I understand that coding allows me to..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    rows={3}
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                  Save My Programming Journey Commitment
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Continue Your <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mindcraft Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                You've mastered coding fundamentals! Ready to explore creative applications?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="/projects/mindcraft"
                  className="group bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Next Modules</h3>
                      <p className="text-blue-300">AI Art & More</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Explore more exciting modules in the Mindcraft Hub
                  </p>
                  <ArrowRight className="w-5 h-5 text-blue-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects/mindcraft/prompt-engineering"
                  className="group bg-gradient-to-br from-slate-600/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-8 border border-slate-500/30 hover:border-slate-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Previous Module</h3>
                      <p className="text-slate-300">Prompt Engineering</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Revisit AI communication and prompt optimization
                  </p>
                  <ArrowRight className="w-5 h-5 text-slate-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="mt-8">
                <motion.a
                  href="/projects/mindcraft"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain className="w-5 h-5" />
                  Back to Mindcraft Hub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}