import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Globe, Award, Heart } from 'lucide-react'

export default function ImpactSection() {
  const metrics = [
    {
      label: 'Critical Judgment Improvement',
      before: '15%',
      after: '70%',
      improvement: '+55%',
      icon: TrendingUp,
      description: 'Ability to detect AI bias and manipulation'
    },
    {
      label: 'Students in Pilot (2025)',
      value: '100',
      progress: 100,
      icon: Users,
      description: 'Engaged youth across Global Shapers Izmir'
    },
    {
      label: 'Student Satisfaction',
      value: '98%',
      progress: 98,
      icon: Heart,
      description: 'Positive feedback on curriculum and engagement'
    },
    {
      label: 'Target Scale (2026)',
      value: '10,000',
      growth: '100x',
      icon: Globe,
      description: 'Youth across 12 international hubs'
    },
    {
      label: 'Learning Efficiency',
      before: 'Traditional: 40h',
      after: 'Mindcraft: 20-30h',
      improvement: '-25%',
      icon: Zap,
      description: 'Time saved through interactive methodology'
    },
    {
      label: 'Instructor Certifications',
      value: '50+',
      target: '500+',
      icon: Award,
      description: 'Trained facilitators by end of 2026'
    },
  ]

  return (
    <section id="impact" className="relative py-24 bg-gradient-to-b from-mindcraft-dark via-blue-900/30 to-mindcraft-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
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
            Measurable <span className="text-yellow-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data-driven results from our pilot program. Real students, real growth, real change in cognitive capabilities and ethical reasoning.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Before/After Metrics */}
          {[metrics[0], metrics[3], metrics[4]].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-yellow-400/30 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">{metric.label}</p>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>
                <div className="p-3 bg-yellow-400/20 rounded-lg">
                  <metric.icon className="w-6 h-6 text-yellow-400" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Before:</span>
                  <span className="text-xl font-bold text-red-400">{metric.before}</span>
                </div>
                <div className="h-1 bg-red-400/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-red-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">After:</span>
                  <span className="text-xl font-bold text-green-400">{metric.after}</span>
                </div>
                <div className="h-1 bg-green-400/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>

                <div className="pt-4 text-center">
                  <span className="text-2xl font-bold text-yellow-400">{metric.improvement}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Progress Metrics */}
          {[metrics[1], metrics[2]].map((metric, index) => (
            <motion.div
              key={`progress-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-blue-400/30 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">{metric.label}</p>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>
                <div className="p-3 bg-blue-400/20 rounded-lg">
                  <metric.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-blue-400">{metric.value}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-gray-400">Progress</span>
                  <span className="text-xs font-bold text-blue-400">{metric.progress}%</span>
                </div>
                <div className="h-2 bg-blue-400/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Target Metrics */}
          {[metrics[5]].map((metric, index) => (
            <motion.div
              key={`target-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-green-400/30 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">{metric.label}</p>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <metric.icon className="w-6 h-6 text-green-400" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-sm mb-2">Current: <span className="text-yellow-400 font-bold">0</span></p>
                  <p className="text-gray-300 text-sm">Target 2026: <span className="text-green-400 font-bold">{metric.target}</span></p>
                </div>
                <div className="text-2xl font-bold text-green-400">Scaling Up</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-yellow-400/20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Student Voices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'I learned how to question AI outputs. Now I don\'t just accept what the algorithm shows me.',
                author: 'Student, Age 15',
                role: 'AI & Ethics Module'
              },
              {
                quote: 'Mindcraft made me realize that technology is made by humans, with human choices. I can shape it.',
                author: 'Student, Age 14',
                role: 'Ethical Leadership Track'
              },
              {
                quote: 'The playground helped me understand that AI art is cool, but understanding its limits is cooler.',
                author: 'Student, Age 13',
                role: 'Creative Innovation Module'
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all"
              >
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-yellow-400">{testimonial.author}</p>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
