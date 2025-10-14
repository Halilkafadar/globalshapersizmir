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
        {/* Hero */}
        <section className="bg-gradient-to-br from-gs-navy via-gs-blue to-gs-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="flex items-center gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-28 h-28 rounded-full overflow-hidden bg-white/10 flex items-center justify-center p-3">
                {/* logo */}
                <img src="/images/gs-logo.png" alt="Global Shapers Izmir Hub" className="w-full h-auto" />
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">About Us</h1>
                <p className="text-lg text-white/90">Building a better future by unlocking the potential of young people</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gs-navy mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">The Global Shapers Community was founded by the World Economic Forum in 2011 as a global network bringing together young leaders aged 18-30. With more than 450 hubs in over 150 countries and 15,000+ members worldwide, we work to shape the future.</p>
            <p className="text-gray-600 leading-relaxed">Global Shapers Izmir Hub was established in 2015 as one of Turkey's most active hubs. Since then, we have reached thousands of people in Izmir and Turkey by developing various projects in education, technology, sustainability, and social entrepreneurship.</p>
            <p className="text-gray-600 leading-relaxed mt-4">Our mission is to unlock the potential of young leaders to create innovative solutions to local and global challenges, and to build a more sustainable, inclusive and equitable future.</p>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gs-navy mb-6">Our Values</h2>
            <p className="text-center text-gray-600 mb-10">The core principles that guide us</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-gs-blue/10 flex items-center justify-center mb-4"> </div>
                <h3 className="text-lg font-semibold mb-2">Impact-Driven</h3>
                <p className="text-gray-600 text-sm">We work to create measurable and lasting change in society.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-gs-purple/10 flex items-center justify-center mb-4"> </div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">We bring diverse perspectives together to create stronger solutions.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-gs-green/10 flex items-center justify-center mb-4"> </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">We develop creative solutions by challenging traditional methods.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-gs-orange/10 flex items-center justify-center mb-4"> </div>
                <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600 text-sm">We create a society where everyone's voice is heard and included.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-gs-blue/10 flex items-center justify-center mb-4"> </div>
                <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600 text-sm">We're building a more livable planet for future generations.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-md bg-gs-purple/10 flex items-center justify-center mb-4"> </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">We strive to uphold the highest standards in every project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-12 bg-gradient-to-br from-gs-navy to-gs-blue text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-extrabold">4</div>
                <div className="mt-2 text-sm">Years Active</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold">4</div>
                <div className="mt-2 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold">500+</div>
                <div className="mt-2 text-sm">Participants</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold">50+</div>
                <div className="mt-2 text-sm">Volunteers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gs-navy mb-4">Join Us</h2>
            <p className="text-gray-600 mb-6">If you're between 20-30 years old and want to make an impact, join us!</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-lg font-semibold">Get in Touch</a>
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
                  <p className="text-gray-600">Bringing together young leaders aged 18-30 to create innovative solutions to local and global challenges.</p>
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
