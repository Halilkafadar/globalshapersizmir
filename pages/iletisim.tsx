import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Mail, MapPin, Phone, Send, Sparkles, MessageCircle, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 1500)
  }

  return (
    <>
      <Head>
        <title>Contact - Global Shapers İzmir Hub</title>
        <meta name="description" content="Get in touch with Global Shapers İzmir Hub" />
      </Head>

      <Navbar />

      <main className="pt-20 bg-gradient-to-b from-purple-50 via-blue-50 to-white">
        {/* Hero - Modern Mindcraft Style */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gs-blue mb-12 transition-colors group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
              </Link>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full border border-purple-200/50 shadow-lg mb-8">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 uppercase tracking-wide">
                    Get in Touch
                  </span>
                </div>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                  Contact Us
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                Let's <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">create impact</span> together
              </p>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
                Reach out for collaborations, memberships, or just to say hello
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info - Modern Design */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - Takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                  {/* Glow effect */}
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  
                  <div className="mb-8">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">
                      Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Message</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-900 mb-1">Message sent successfully!</h4>
                          <p className="text-green-700">We'll get back to you as soon as possible.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-3">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="What is your message about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Write your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 overflow-hidden"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <span className="relative flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-black text-gray-900 mb-3">
                    Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Touch</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We're here to answer any questions you may have about our projects and initiatives.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Email</h3>
                        <a href="mailto:izmir@globalshapers.org" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                          izmir@globalshapers.org
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Location</h3>
                        <p className="text-gray-600 font-medium">
                          İzmir, Turkey
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    <div className="relative flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Phone</h3>
                        <a href="tel:+902321234567" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                          +90 (232) 123 45 67
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Map Visual */}
                <div className="relative mt-8 h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-xl">
                  {/* Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-100"></div>
                  
                  <div className="relative flex flex-col items-center justify-center h-full text-white p-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-4 border border-white/30">
                      <Globe className="w-10 h-10" />
                    </div>
                    <p className="text-2xl font-bold mb-2">İzmir, Turkey</p>
                    <p className="text-white/80">Shaping the Future Together</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ - Modern Accordion Style */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-xl rounded-full border border-purple-200/50 shadow-lg mb-6">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-600 uppercase tracking-wide">FAQ</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about our community and projects
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black text-xl">
                      ?
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                        How can I become a Global Shaper?
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Young people between <span className="font-semibold text-gray-900">20-30 years old</span> who are socially conscious and want to contribute to their local community can apply. The membership process opens once a year, and applications are reviewed by our selection committee.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black text-xl">
                      ?
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                        How can I support your projects?
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        You can contribute to our projects as a <span className="font-semibold text-gray-900">volunteer</span>, <span className="font-semibold text-gray-900">sponsor</span>, or <span className="font-semibold text-gray-900">collaboration partner</span>. Get in touch through our contact form to learn more about the projects you're interested in and how you can make an impact.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black text-xl">
                      ?
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 transition-all">
                        Can we request a custom training program for our organization?
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        <span className="font-semibold text-gray-900">Absolutely!</span> We organize custom training programs for schools and organizations, especially for our <span className="font-semibold text-gray-900">Mindcraft</span> and <span className="font-semibold text-gray-900">Financial Literacy</span> projects. We can prepare a tailored program specifically designed for your needs and goals.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA at bottom of FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-gray-600 text-lg mb-6">Still have questions?</p>
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all cursor-pointer">
                <MessageCircle className="w-6 h-6" />
                <span>Start a Conversation</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
