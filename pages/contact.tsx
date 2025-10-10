import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Global Shapers Izmir Hub</title>
        <meta name="description" content="Get in touch with Global Shapers Izmir Hub" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gs-purple to-gs-blue py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact</h1>
              <p className="text-xl text-gray-200 max-w-3xl">Reach out to collaborate, volunteer, or learn more about our work.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gs-navy mb-4">Contact</h2>
                <p className="text-gray-600 mb-6">Send us a message and we'll get back to you shortly.</p>
                <form className="space-y-4">
                  <input className="w-full p-4 border rounded-lg" placeholder="Your name" />
                  <input className="w-full p-4 border rounded-lg" placeholder="Email" />
                  <textarea className="w-full p-4 border rounded-lg" rows={6} placeholder="Message" />
                  <button className="px-6 py-3 bg-gs-blue text-white rounded-lg">Send</button>
                </form>
              </div>
              <div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <Image src="/images/gs-logo.png" alt="Logo" width={96} height={96} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Global Shapers Izmir Hub</h3>
                      <p className="text-gray-600">Izmir, Türkiye</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gs-blue" />
                      <a href="mailto:info@globalshapersizmir.org" className="text-gs-navy">info@globalshapersizmir.org</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gs-blue" />
                      <span className="text-gray-600">+90 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gs-blue" />
                      <span className="text-gray-600">Izmir, Türkiye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
