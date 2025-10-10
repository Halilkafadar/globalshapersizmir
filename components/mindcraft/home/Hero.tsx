import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Brain, Heart, Rocket } from 'lucide-react'

export default function Hero() {
  return (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-mindcraft-purple/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          {/* Badge intentionally removed for a cleaner header */}

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-normal antialiased subpixel-antialiased">
            <span className="gradient-text antialiased">Mindcraft</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-mindcraft-dark mb-4">
            The Meeting Point of Intelligence and Conscience
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            An interactive educational journey bridging ethics, creativity, and AI literacy
            for students aged 9-17. Discover, create, and shape the future responsibly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects/mindcraft/modules">
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link href="/projects/mindcraft/playground">
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore AI Playground
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: Brain, text: 'AI Literacy', color: 'blue' },
            { icon: Heart, text: 'Ethics & Values', color: 'purple' },
            { icon: Rocket, text: 'Creative Innovation', color: 'green' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <item.icon className={`w-5 h-5 text-mindcraft-${item.color}`} />
              <span className="font-semibold text-mindcraft-dark">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-mindcraft-purple rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-mindcraft-purple rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
