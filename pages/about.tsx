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

              {/* Make outer container exactly 144x144 and remove inner padding so logo fully fills the circle */}
              <div style={{ width: 180, height: 180, transform: 'translateX(12px)' }} className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/gs-logo.png"
                  alt="Global Shapers Logo"
                  width={180}
                  height={180}
                  style={{ width: 180, height: 180, objectFit: 'cover', display: 'block', maxWidth: 'none' }}

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

        {/* Our Story Section (background image) */}
        <section className="py-20" style={{ minHeight: '60vh' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8">
              {/* Left: text box (takes half width on large screens) */}
              <div className="w-full lg:w-1/2 flex items-center">
                <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 lg:p-10 w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-gs-navy mb-6">Our Story</h2>

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
              </div>

              {/* Right: image column (visible on lg+) */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <img src="/images/our-story-bg1.jpg" alt="Our Story" className="w-full max-h-[60vh] object-contain rounded-lg shadow-lg" />
              </div>
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
                <div className="text-4xl md:text-5xl font-extrabold">4</div>
                <div className="text-white/90 text-sm md:text-base mt-2">Years Active</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">4</div>
                <div className="text-white/90 text-sm md:text-base">Projects</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">500+</div>
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
              If you're between <strong>18-30 years old</strong> and want to make an impact, <strong>join us!</strong>
            </p>
            <a 
              href="https://wefglobal.eu.qualtrics.com/jfe/form/SV_6F4bAg3fL2x1eXb?fbclid=PAb21jcANbj6lleHRuA2FlbQIxMQABp29VZnEm_dKVI-bxciOje6xnpan-rzB4tdDGQz0f7RmQK_0qvidAX_UoMjcA_aem_kCQampAlMhl-mvdfAOO20A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
