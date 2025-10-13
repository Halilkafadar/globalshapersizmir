import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Global Shapers Izmir Hub</title>
        <meta name="description" content="Learn about Global Shapers Izmir Hub - Building a better future by unlocking the potential of young people" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
  <section className="bg-gradient-to-br from-gs-navy via-gs-blue to-gs-purple py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/" className="text-white/80 hover:text-white flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
            </div>

            {/* Hero Content */}
            <motion.div 
              className="flex items-center gap-8" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white p-3 flex items-center justify-center flex-shrink-0 shadow-2xl ring-4 ring-white/20">
                <img 
                  src="/images/gs-logo.png" 
                  alt="Global Shapers Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain" 
                />
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">About Us</h1>
                <p className="text-lg md:text-xl text-white/95">
                  Building a better future by unlocking the potential of young people
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gs-navy text-center mb-8">Our Story</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h3 className="text-lg font-semibold">Global Shapers Community</h3>
              <p>
                The Global Shapers Community was founded by the World Economic Forum (WEF) in 2011 as a global network that brings together inspiring young leaders aged 18 to 30.
              </p>

              <p>
                With over 500 local hubs across more than 150 countries and territories, and over 11,000 active Global Shapers worldwide, the Community works to shape the future and drive dialogue, action, and change.
              </p>

              <h3 className="text-lg font-semibold">Global Shapers Izmir Hub</h3>
              <p>
                The Global Shapers Izmir Hub was established in 2022 and has since become one of Türkiye's active hubs. Since its founding, the hub has reached thousands of people in Izmir and Türkiye by developing various projects focused on education, technology, sustainability, and social entrepreneurship.
              </p>

              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p>
                Our mission is to unlock the potential of young leaders to create innovative solutions to local and global challenges, and to build a more sustainable, inclusive, and equitable future.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gs-navy text-center mb-3">Our Values</h2>
            <p className="text-center text-gray-600 mb-12">The core principles that guide us</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Impact Driven */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-md bg-gs-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gs-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gs-navy mb-2">Impact Driven</h3>
                <p className="text-gray-600">We work to create measurable and lasting change in society.</p>
              </motion.div>

              {/* Collaboration */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-md bg-gs-purple/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gs-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gs-navy mb-2">Collaboration</h3>
                <p className="text-gray-600">We bring diverse perspectives together to create stronger solutions.</p>
              </motion.div>

              {/* Innovation */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-md bg-gs-green/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gs-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gs-navy mb-2">Innovation</h3>
                <p className="text-gray-600">We develop creative solutions by challenging traditional methods.</p>
              </motion.div>

              {/* Inclusivity */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-md bg-gs-orange/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gs-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gs-navy mb-2">Inclusivity</h3>
                <p className="text-gray-600">We create a society where everyone's voice is heard and included.</p>
              </motion.div>

              {/* Sustainability */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-md bg-gs-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gs-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.22c.38-1.18.95-2.92 2.11-4.56C10.18 14.56 14 14 14 14s-1.12 2.19-2.12 4c-.37.65-.72 1.24-1.04 1.75-.35.57-.67 1.1-.94 1.59l1.84.67c.25-.5.54-1.05.85-1.65.32-.63.69-1.35 1.13-2.15C14.87 16.12 16 14 16 14s-1.03 2.11-2.03 4c-.37.65-.72 1.24-1.04 1.75-.35.57-.67 1.1-.94 1.59l1.84.67c.25-.5.54-1.05.85-1.65.32-.63.69-1.35 1.13-2.15C16.87 16.12 18 14 18 14s3-5 3-7c0-2.76-2.24-5-5-5-1.24 0-2.37.46-3.24 1.21C11.97 3.76 11 5.27 11 7c0 .34.03.68.08 1z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gs-navy mb-2">Sustainability</h3>
                <p className="text-gray-600">We're building a more livable planet for future generations.</p>
              </motion.div>

              {/* Excellence */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-md bg-gs-purple/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gs-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gs-navy mb-2">Excellence</h3>
                <p className="text-gray-600">We strive to uphold the highest standards in every project.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="py-16 bg-gradient-to-br from-gs-navy to-gs-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">Our Impact</h2>
            <p className="text-center text-white/90 mb-12">Global Shapers Izmir Hub by the Numbers</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-extrabold">8+</div>
                <div className="text-white/90 text-sm md:text-base mt-2">Years Active</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">15+</div>
                <div className="text-white/90 text-sm md:text-base">Projects</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">7,000+</div>
                <div className="text-white/90 text-sm md:text-base">Participants</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">50+</div>
                <div className="text-white/90 text-sm md:text-base">Volunteers</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gs-navy mb-4">Join Us</h2>
            <p className="text-gray-600 text-lg mb-8">
              If you're between <strong>20-30 years old</strong> and want to make an impact, <strong>join us!</strong>
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
