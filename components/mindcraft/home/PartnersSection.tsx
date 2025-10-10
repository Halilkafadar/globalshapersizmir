import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PartnersSection() {
  const partners = [
    { name: 'UNDP', logo: '/partners/undp.svg' },
    { name: 'UNESCO', logo: '/partners/unesco.svg' },
    { name: 'OECD', logo: '/partners/oecd.svg' },
    { name: 'Global Shapers', logo: '/partners/gs.svg' },
  ]

  const stats = [
    { value: '5,000+', label: 'Students Reached' },
    { value: '15+', label: 'Countries' },
    { value: '100+', label: 'Partner Schools' },
    { value: '98%', label: 'Satisfaction Rate' },
  ]

  return (
    <section className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Stats */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Our Global Impact</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-mindcraft-dark">
            Proud Partners
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Placeholder - Replace with actual logos */}
                <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-600">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Introduction */}
        <motion.div
          className="mt-20 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Built by Global Shapers Izmir Hub
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            A diverse community of young leaders committed to creating positive change 
            through innovative education and AI literacy initiatives.
          </p>
          <a 
            href="mailto:izmirglobalshapers@gmail.com"
            className="inline-block btn-primary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
