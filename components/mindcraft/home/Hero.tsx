import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Brain, Heart, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mindcraft-dark via-mindcraft-dark to-blue-900">
      {/* Animated Background - Neural Network Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 215, 0, 0.1) 25%, rgba(255, 215, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 215, 0, 0.1) 75%, rgba(255, 215, 0, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 215, 0, 0.1) 25%, rgba(255, 215, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 215, 0, 0.1) 75%, rgba(255, 215, 0, 0.1) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Radiant gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Neural Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(255, 215, 0, 0.6)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(16, 185, 129, 0.4)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-lg border border-white/20 hover:border-yellow-400/50 transition-all"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-white">
              Global Shapers İzmir Hub
            </span>
          </motion.div>

          {/* Main Heading - PDF Vision */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">Shaping the Intelligence Age</span>
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-yellow-400">Mindcraft</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            Mastering Change with Purpose
          </p>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            <strong>A Global Multiplier Network for Human-Centric AI Leadership</strong>
            <br className="hidden md:block" />
            Building cognitive sovereignty and ethical AI literacy for ages 9-17. Empowering young minds to shape the Intelligence Age with purpose, conscience, and critical judgment.
          </p>

          {/* CTA Buttons - PDF Vision */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#modules">
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-mindcraft-dark font-bold text-lg px-10 py-4 rounded-lg shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Modules
              </motion.button>
            </Link>
            <Link href="#network">
              <motion.button
                className="border-2 border-yellow-400 text-yellow-400 hover:text-mindcraft-dark hover:bg-yellow-400 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Network
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Feature Pills - Mindcraft Pillars */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: Brain, text: 'Cognitive Sovereignty', color: 'yellow' },
            { icon: Heart, text: 'Ethics by Design', color: 'green' },
            { icon: Rocket, text: 'Creative Innovation', color: 'blue' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:border-yellow-400/50 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
            >
              <item.icon className={`w-5 h-5 text-yellow-400`} />
              <span className="font-semibold text-white">{item.text}</span>
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
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
