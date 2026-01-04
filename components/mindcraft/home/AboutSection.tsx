import { motion } from 'framer-motion'
import { Brain, Zap, Target, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-blue-900 via-mindcraft-dark to-mindcraft-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

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
            Why <span className="text-yellow-400">Mindcraft</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The defining choice of our generation: Will we shape the Intelligence Age with purpose and conscience, or drift into cognitive blindness?
          </p>
        </motion.div>

        {/* Problem Definition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-yellow-400/30 transition-all"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Crisis: Brainrot</h3>
            <p className="text-gray-300 mb-4">
              We prioritized <strong>internet access</strong> in the 90s—and won. But we forgot about <strong>digital literacy</strong>. The result?
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">→</span>
                <span>Exponential AI capability outpacing human wisdom</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">→</span>
                <span>Attention fragmented by algorithmic manipulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">→</span>
                <span>Critical judgment replaced by reflexive scrolling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">→</span>
                <span>Youth unable to discern AI bias from reality</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-yellow-400/10 backdrop-blur-lg border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">The Answer: Cognitive Shield</h3>
            <p className="text-gray-300 mb-4">
              <strong>Mindcraft</strong> builds a "cognitive shield"—the mental infrastructure to thrive in the Intelligence Age.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Critical judgment: From <strong>15% → 70%</strong> accuracy in AI bias detection (pilot data)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Ethical reasoning: Understand AI's impact before it spreads</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Agency preservation: Learn to shape technology, not be shaped by it</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Global network: 12 hubs, multiplier effect, local-to-global impact</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">🎯 Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Empower 10,000 youth across 12 international hubs to develop cognitive sovereignty, ethical judgment, and creative agency in the Intelligence Age.
            </p>
            <div className="mt-6 pt-6 border-t border-blue-400/20">
              <p className="text-sm text-gray-400">
                <strong>Pilot Achievement:</strong> 100 students in 2025. +70% improvement in critical judgment. 98% satisfaction rate.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 border border-green-400/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-300 mb-4">🌍 Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A global network of "Mindcraft practitioners"—young leaders who shape AI policy, design human-centric technology, and guide their communities through the Intelligence Age with conscience and wisdom.
            </p>
            <div className="mt-6 pt-6 border-t border-green-400/20">
              <p className="text-sm text-gray-400">
                <strong>2026 Milestone:</strong> 10,000 trained youth. 50+ certified instructors. 12 active hubs on 5 continents.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
