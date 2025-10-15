import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { MapPin, Mail, Send, Globe, ArrowLeft, HelpCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Global Shapers Izmir Hub</title>
        <meta name="description" content="Get in touch with Global Shapers Izmir Hub" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50">
        <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Link */}
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header Section */}
          <div className="text-center mt-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium">
                GET IN TOUCH
              </span>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                Let's <span className="text-blue-600">create impact</span> together
              </p>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Reach out for collaborations, memberships, or just to say hello
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-2">
                Send Us a <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Get in <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-gray-600">
                  We're here to help and answer any question you might have.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Mail className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:izmirglobalshapers@gmail.com" className="text-gray-600 hover:text-blue-600">
                    izmirglobalshapers@gmail.com
                  </a>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl">
                  <MapPin className="w-8 h-8 text-pink-600 mb-4" />
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">İzmir, Türkiye</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-xl text-white">
                <div className="w-16 h-16 mb-4">
                  <Image 
                    src="/images/gs-logo.png" 
                    alt="Global Shapers Logo" 
                    width={64} 
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">İzmir, Türkiye</h3>
                <p>Shaping the Future Together</p>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section removed as requested */}
        </div>
      </main>

      <Footer />
    </>
  )
}
