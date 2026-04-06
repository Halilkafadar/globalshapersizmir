import Link from 'next/link'
import { motion } from 'framer-motion'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { ArrowRight } from 'lucide-react'

export default function ModulesPreview() {
  return (
    <section id="modules" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education Modules</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive learning experiences designed to spark curiosity and build essential skills
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modulesData.slice(0, 6).map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/modules/${module.id}`}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100 overflow-hidden">
                  {/* Color Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient}`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-mindcraft-dark group-hover:text-mindcraft-purple transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {module.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1 text-mindcraft-purple font-semibold group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
