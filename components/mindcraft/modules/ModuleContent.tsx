import { useState } from 'react'
import { motion } from 'framer-motion'
import { Module } from '@/utils/mindcraft/modulesData'
import { CheckCircle, PlayCircle, BookOpen, Trophy, Lightbulb, Target, Zap, Brain, Users, Clock, Award } from 'lucide-react'
import InteractiveDemo from './InteractiveDemo'
import ModuleQuiz from './ModuleQuiz'

interface ModuleContentProps {
  module: Module
}

const getRecommendedTools = (moduleId: string): string[] => {
  const tools: Record<string, string[]> = {
    'ai-ethics': [
      'AI Fairness 360 Toolkit',
      'What-If Tool by Google',
      'Fairlearn Library',
      'Aequitas Bias Audit'
    ],
    'prompt-engineering': [
      'ChatGPT/GPT-4',
      'Claude AI',
      'Prompt Engineering Guide',
      'PromptPerfect'
    ],
    'coding-automation': [
      'GitHub Copilot',
      'Repl.it',
      'Python.org',
      'VS Code'
    ],
    'ai-art': [
      'Midjourney',
      'DALL-E 2/3',
      'Stable Diffusion',
      'Adobe Firefly'
    ],
    'scientific-research': [
      'Perplexity AI',
      'Semantic Scholar',
      'Elicit Research Assistant',
      'Research Rabbit'
    ],
    'creative-innovation': [
      'Figma',
      'Miro/Mural',
      'Canva',
      'Notion AI'
    ]
  }
  return tools[moduleId] || tools['ai-ethics']
}

const getFurtherReading = (moduleId: string): string[] => {
  const reading: Record<string, string[]> = {
    'ai-ethics': [
      'The Ethical Algorithm by Kearns & Roth',
      'Weapons of Math Destruction by Cathy O\'Neil',
      'Race After Technology by Ruha Benjamin',
      'AI Ethics Guidelines by Partnership on AI'
    ],
    'prompt-engineering': [
      'The Prompt Engineering Guide',
      'OpenAI Best Practices Documentation',
      'Anthropic Constitutional AI Paper',
      'Prompt Engineering for Everyone'
    ],
    'coding-automation': [
      'Automate the Boring Stuff with Python',
      'Python Crash Course by Eric Matthes',
      'Clean Code by Robert Martin',
      'The Pragmatic Programmer'
    ],
    'ai-art': [
      'The AI Art Book by Claire Silver',
      'Digital Art Revolution',
      'Creative AI: On the Democratization',
      'Art in the Age of Machine Intelligence'
    ],
    'scientific-research': [
      'The Structure of Scientific Revolutions',
      'Bad Science by Ben Goldacre',
      'Thinking, Fast and Slow by Kahneman',
      'The Signal and the Noise by Silver'
    ],
    'creative-innovation': [
      'Design Thinking by Tim Brown',
      'The Innovator\'s Dilemma by Christensen',
      'Sprint by Jake Knapp',
      'Creative Confidence by Kelley Brothers'
    ]
  }
  return reading[moduleId] || reading['ai-ethics']
}

const getCommunityProjects = (moduleId: string): string[] => {
  const projects: Record<string, string[]> = {
    'ai-ethics': [
      'Bias Detection in Hiring AI',
      'Privacy-Preserving Health AI',
      'Fairness in Criminal Justice AI',
      'Ethical Social Media Algorithms'
    ],
    'prompt-engineering': [
      'Educational Tutoring Bot',
      'Creative Writing Assistant',
      'Code Review AI Helper',
      'Language Learning Companion'
    ],
    'coding-automation': [
      'School Schedule Optimizer',
      'Energy Usage Tracker',
      'Community Event Organizer',
      'Waste Reduction Calculator'
    ],
    'ai-art': [
      'Cultural Heritage Visualization',
      'Climate Change Art Campaign',
      'Accessibility-Focused Design',
      'Community Story Illustrations'
    ],
    'scientific-research': [
      'Local Air Quality Monitor',
      'School Nutrition Analysis',
      'Community Health Survey',
      'Environmental Impact Study'
    ],
    'creative-innovation': [
      'Sustainable Transportation Ideas',
      'Youth Mental Health Solutions',
      'Education Access Innovations',
      'Community Connection Platforms'
    ]
  }
  return projects[moduleId] || projects['ai-ethics']
}

export default function ModuleContent({ module }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'quiz' | 'resources'>('overview')

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${module.gradient} mb-6`}>
            <module.icon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            {module.title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            {module.description}
          </p>

          {/* Module Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border">
              <Clock className="w-4 h-4 text-mindcraft-purple" />
              <span className="text-sm font-medium">{module.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border">
              <Users className="w-4 h-4 text-mindcraft-blue" />
              <span className="text-sm font-medium">Ages {module.ageRange}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border">
              <Award className="w-4 h-4 text-mindcraft-green" />
              <span className="text-sm font-medium">Certificate Available</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'text-mindcraft-purple' 
                : 'text-gray-600 hover:text-mindcraft-purple'
            }`}
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Overview
            {activeTab === 'overview' && (
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${module.gradient}`}></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
              activeTab === 'demo' 
                ? 'text-mindcraft-purple' 
                : 'text-gray-600 hover:text-mindcraft-purple'
            }`}
          >
            <PlayCircle className="w-5 h-5 inline mr-2" />
            Interactive Demo
            {activeTab === 'demo' && (
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${module.gradient}`}></div>
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
              activeTab === 'quiz' 
                ? 'text-mindcraft-purple' 
                : 'text-gray-600 hover:text-mindcraft-purple'
            }`}
          >
            <Trophy className="w-5 h-5 inline mr-2" />
            Quiz
            {activeTab === 'quiz' && (
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${module.gradient}`}></div>
            )}
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
              activeTab === 'resources' 
                ? 'text-mindcraft-purple' 
                : 'text-gray-600 hover:text-mindcraft-purple'
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            Resources
            {activeTab === 'resources' && (
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${module.gradient}`}></div>
            )}
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Hook */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 gradient-text">
                  <Zap className="w-6 h-6" />
                  The Hook
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">{module.hook}</p>
              </div>

              {/* Schwab Insight */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-amber-600" />
                  The Schwab Insight
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed italic">{module.schwabInsight}</p>
              </div>

              {/* Core Content */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-mindcraft-purple" />
                  Core Content
                </h2>
                <div className="space-y-4">
                  {module.coreContent.map((content, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-mindcraft-green flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed">{content}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Interactive Element */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-emerald-600" />
                    Interactive Element
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{module.interactiveElement}</p>
                </div>

                {/* Mindcraft Challenge */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-rose-600" />
                    The Mindcraft Challenge
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{module.mindcraftChallenge}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Topics */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-mindcraft-purple" />
                    What You'll Learn
                  </h2>
                  <ul className="space-y-3">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mindcraft-green flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Outcomes */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-mindcraft-purple" />
                    Learning Outcomes
                  </h2>
                  <ul className="space-y-3">
                    {module.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-mindcraft-blue flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <InteractiveDemo moduleId={module.id} />
          )}

          {activeTab === 'quiz' && (
            <ModuleQuiz moduleId={module.id} />
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Recommended Tools */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-mindcraft-purple" />
                    Recommended Tools
                  </h3>
                  <ul className="space-y-3">
                    {getRecommendedTools(module.id).map((tool, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-mindcraft-green flex-shrink-0" />
                        <span className="text-gray-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Further Reading */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-mindcraft-blue" />
                    Further Reading
                  </h3>
                  <ul className="space-y-3">
                    {getFurtherReading(module.id).map((resource, index) => (
                      <li key={index} className="text-gray-700 hover:text-mindcraft-purple transition-colors cursor-pointer">
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Community Projects */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-mindcraft-green" />
                    Community Projects
                  </h3>
                  <ul className="space-y-3">
                    {getCommunityProjects(module.id).map((project, index) => (
                      <li key={index} className="text-gray-700 hover:text-mindcraft-purple transition-colors cursor-pointer">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-mindcraft-purple" />
                  Your Progress
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mindcraft-purple">0%</div>
                    <div className="text-sm text-gray-600">Lessons Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mindcraft-blue">0</div>
                    <div className="text-sm text-gray-600">Challenges Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mindcraft-green">0</div>
                    <div className="text-sm text-gray-600">Quiz Score</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn-primary w-full">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
