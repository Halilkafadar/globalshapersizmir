import { useState } from 'react'
import { motion } from 'framer-motion'
import { Module } from '@/utils/modulesData'
import { CheckCircle, PlayCircle, BookOpen, Trophy } from 'lucide-react'
import InteractiveDemo from './InteractiveDemo'
import ModuleQuiz from './ModuleQuiz'

interface ModuleContentProps {
  module: Module
}

export default function ModuleContent({ module }: ModuleContentProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'quiz'>('overview')

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
          
          <p className="text-xl text-gray-600 max-w-3xl">
            {module.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              {module.duration}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
              Ages {module.ageRange}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold transition-colors relative ${
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
            className={`px-6 py-3 font-semibold transition-colors relative ${
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
            className={`px-6 py-3 font-semibold transition-colors relative ${
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
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
          )}

          {activeTab === 'demo' && (
            <InteractiveDemo moduleId={module.id} />
          )}

          {activeTab === 'quiz' && (
            <ModuleQuiz moduleId={module.id} />
          )}
        </motion.div>
      </div>
    </main>
  )
}
