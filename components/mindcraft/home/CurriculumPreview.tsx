import { motion } from 'framer-motion'
import { Shield, MessageSquare, Settings, Heart, Compass } from 'lucide-react'

export default function CurriculumPreview() {
  const pillars = [
    {
      icon: Shield,
      title: 'Active Ethics',
      description: 'Building a cognitive shield against algorithmic manipulation.',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-400/30'
    },
    {
      icon: MessageSquare,
      title: 'Synergistic Dialogue',
      description: 'The art of conversing with AI not as a \'tool\', but as an \'intellectual partner\'.',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: Settings,
      title: 'Systems Thinking',
      description: 'Transitioning from static coding to dynamic AI architecture and system design vision.',
      color: 'from-green-500 to-emerald-600',
      borderColor: 'border-green-400/30'
    },
    {
      icon: Heart,
      title: 'Human Authenticity',
      description: 'Preserving the \'Human Signature\' and creativity in a machine-produced world.',
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-400/30'
    },
    {
      icon: Compass,
      title: 'Data Wisdom',
      description: 'Navigation to transform data into strategic decisions, without drowning in the information ocean.',
      color: 'from-indigo-500 to-blue-500',
      borderColor: 'border-indigo-400/30'
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
            The <span className="text-yellow-400">5 Pillars</span> of Cognitive Sovereignty
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive curriculum spanning 5 interactive modules. Each pillar builds cognitive sovereignty and human-centric leadership in the age of AI.
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
              <p className="text-gray-300">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 italic max-w-3xl mx-auto">
            "We are not just teaching coding; we are teaching the <span className="text-yellow-400 font-semibold">'Human-Centric' operating system</span> of the future."
          </p>
        </motion.div>

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
              <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
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
