import { motion } from 'framer-motion'
import { BookOpen, Lightbulb, Users, Globe, Heart, Zap } from 'lucide-react'

export default function CurriculumPreview() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'AI Fundamentals & Ethics',
      description: 'Understand how AI works, recognize biases, and design with conscience.',
      modules: ['AI & Ethics', 'Algorithmic Literacy'],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-400/30'
    },
    {
      icon: Lightbulb,
      title: 'Critical Thinking',
      description: 'Develop judgment to evaluate AI outputs and spot manipulation.',
      modules: ['Scientific Methods', 'Data Analysis'],
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-400/30'
    },
    {
      icon: Users,
      title: 'Human-Centric Design',
      description: 'Learn to build technology that serves people, not exploits them.',
      modules: ['Prompt Engineering', 'AI for Good'],
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-400/30'
    },
    {
      icon: Heart,
      title: 'Ethical Leadership',
      description: 'Lead by example with integrity, empathy, and purpose.',
      modules: ['Ethics in Action', 'Global Impact'],
      color: 'from-pink-500 to-red-500',
      borderColor: 'border-pink-400/30'
    },
    {
      icon: Zap,
      title: 'Creative Innovation',
      description: 'Use AI tools responsibly to create, invent, and solve problems.',
      modules: ['AI Art', 'Coding & Automation'],
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: Globe,
      title: 'Global Multiplier Effect',
      description: 'Become a hub leader and scale impact across your network.',
      modules: ['Network Leadership', 'Mentorship'],
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-400/30'
    },
  ]

  return (
    <section id="curriculum" className="relative py-24 bg-mindcraft-dark overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-yellow-400/5 via-transparent to-blue-400/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            The <span className="text-yellow-400">5 Pillars</span> of Mindcraft
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive curriculum spanning 6 interactive modules across 5 critical pillars. Each pillar builds cognitive sovereignty and ethical leadership.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${pillar.color} bg-opacity-5 border ${pillar.borderColor} rounded-2xl p-8 hover:bg-opacity-10 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`inline-block p-3 bg-gradient-to-br ${pillar.color} rounded-lg mb-6 group-hover:scale-110 transition-transform`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-300 mb-6">{pillar.description}</p>

              {/* Related Modules */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-400">Related Modules:</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.modules.map((module, idx) => (
                    <span key={idx} className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400/10 via-transparent to-blue-400/10 border border-yellow-400/30 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Curriculum Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6</div>
              <p className="text-gray-300">Interactive Modules</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20-30h</div>
              <p className="text-gray-300">Total Learning Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">9-17</div>
              <p className="text-gray-300">Age Range</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">+70%</div>
              <p className="text-gray-300">Critical Judgment Gain</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
