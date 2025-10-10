import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Global Shapers Izmir Hub</title>
        <meta name="description" content="About Global Shapers Izmir Hub" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gs-purple to-gs-blue py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About</h1>
              <p className="text-xl text-gray-200 max-w-3xl">Global Shapers Izmir Hub is a community of young leaders committed to social impact.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gs-navy mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">We are a group of passionate young people from Izmir and beyond, working to create measurable social impact through education, collaboration, and community projects.</p>
          </div>
        </section>
        {/* Our Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-gs-navy mb-8 text-center">Our Values</h2>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-md bg-gs-blue/10 flex items-center justify-center mb-4">
                    {/* icon placeholder */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">Bringing together young leaders aged 20-30 to create innovative solutions to local and global challenges.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-md bg-gs-purple/10 flex items-center justify-center mb-4">
                    {/* icon placeholder */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600">Building a more sustainable, inclusive and equitable future by unlocking the potential of young people.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-md bg-gs-green/10 flex items-center justify-center mb-4">
                    {/* icon placeholder */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                  <p className="text-gray-600">Part of the World Economic Forum community with 450+ hubs and 15,000+ leaders in 150+ countries.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-24 bg-gradient-to-br from-gs-purple/5 to-gs-blue/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-3xl font-bold text-gs-navy mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-extrabold text-gs-purple">5,000+</div>
                  <div className="text-gray-600">Students Reached</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-gs-blue">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-gs-green">100+</div>
                  <div className="text-gray-600">Partner Schools</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-gs-orange">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-gs-navy mb-4">Join Us</h2>
              <p className="text-gray-600 mb-8">If you're between 20-30 years old and want to make an impact, join our hub to collaborate on projects and grow as a leader.</p>
              <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">Get in Touch</a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
