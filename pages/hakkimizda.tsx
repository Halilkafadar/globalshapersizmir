import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Globe, Users, Target, Heart, Award, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Global Shapers Izmir Hub</title>
        <meta name="description" content="Learn about Global Shapers Izmir Hub" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gs-purple via-gs-blue to-gs-navy py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Home
              </Link>

              <div className="flex items-center gap-8">

                {/* Logo: outer circle 144x144, inner filled circle exactly 95.99x95.99 */}

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}

                  className="flex-shrink-0"
                >
                  {/* Make outer container exactly 144x144 and remove inner padding so logo fully fills the circle */}
                  <div style={{ width: 180, height: 180, transform: 'translateX(12px)' }} className="rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/gs-logo-hakkimizda.png"
                      alt="Global Shapers Izmir Hub Logo"
                      width={180}
                      height={180}
                      style={{ width: 180, height: 180, objectFit: 'cover', display: 'block', maxWidth: 'none' }}
                    />
                  </div>

                </motion.div>

                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    About Us
                  </h1>
                  <p className="text-xl text-gray-200 max-w-3xl">
                    Building a better future by unlocking the potential of young people
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gs-navy mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
                <p>
                  The Global Shapers Community was founded by the <strong>World Economic Forum</strong> in 2011
                  as a global network bringing together young leaders aged 18-30. With more than 450 hubs in over
                  150 countries and 15,000+ members worldwide, we work to shape the future.
                </p>
                <p>
                  <strong>Global Shapers Izmir Hub</strong> was established in 2015 as one of Türkiye's most active hubs.
                  Since then, we have reached thousands of people in Izmir and Türkiye by developing various projects in
                  education, technology, sustainability and social entrepreneurship.
                </p>
                <p>
                  Our mission is to unlock the potential of young leaders to create innovative solutions to local and
                  global challenges, and to build a more sustainable, inclusive and equitable future.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gs-navy mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The core principles that guide us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-blue to-gs-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gs-navy mb-4">Impact-Driven</h3>
                <p className="text-gray-600">
                  We work to create measurable and lasting change in society
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-purple to-gs-orange rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gs-navy mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We bring diverse perspectives together to create stronger solutions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-green to-gs-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gs-navy mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We develop creative solutions by challenging traditional methods
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-orange to-gs-green rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gs-navy mb-4">Inclusivity</h3>
                <p className="text-gray-600">
                  We create a society where everyone's voice is heard and included
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-blue to-gs-green rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gs-navy mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We're building a more livable planet for future generations
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-purple to-gs-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gs-navy mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive to uphold the highest standards in every project
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-24 bg-gradient-to-r from-gs-navy to-gs-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-200">
                Global Shapers Izmir Hub by the Numbers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">4</div>
                <div className="text-gray-200">Years Active</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">4</div>
                <div className="text-gray-200">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-200">Participants</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-200">Volunteers</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gs-navy mb-6">
              Join Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If you're between 18-30 years old and want to make an impact, join us!
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Contact
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
