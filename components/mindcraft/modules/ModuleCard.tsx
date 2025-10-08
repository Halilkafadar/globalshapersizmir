import Link from 'next/link'
import { motion } from 'framer-motion'
import { Module } from '@/utils/modulesData'
import { ArrowRight, Clock, Users } from 'lucide-react'

interface ModuleCardProps {
  module: Module
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link href={`/modules/${module.id}`}>
      <motion.div
        className="group relative bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100 overflow-hidden h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Color Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${module.gradient}`}></div>
        
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <module.icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-mindcraft-dark group-hover:text-mindcraft-purple transition-colors">
          {module.title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {module.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Ages {module.ageRange}</span>
          </div>
        </div>

        {/* Topics Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {module.topics.slice(0, 3).map((topic, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {topic}
            </span>
          ))}
          {module.topics.length > 3 && (
            <span className="text-xs text-gray-500 px-3 py-1">
              +{module.topics.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-mindcraft-purple font-semibold group-hover:gap-3 transition-all">
          Explore Module <ArrowRight className="w-5 h-5" />
        </div>
      </motion.div>
    </Link>
  )
}
