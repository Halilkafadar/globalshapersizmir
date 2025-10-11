import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Users, Lightbulb, Target, Globe, Sparkles, Brain, Rocket } from 'lucide-react'
import { members } from '@/data/members'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <>
      <Head>
  <title>Global Shapers Izmir Hub - Shaping the Future Together</title>
  <meta name="description" content="A community of young leaders from the World Economic Forum. We develop social impact projects in Izmir." />
      </Head>

      <Navbar />

      <main className="bg-gradient-to-b from-purple-50 via-blue-50 to-white">
        {/* Original index content preserved here as a legacy page */}
        <section className="relative min-h-[70vh] flex justify-center overflow-hidden pt-12">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-4xl font-bold">Legacy Home Page</h1>
            <p className="mt-4 text-gray-600">This is the previous Pages Router home saved under /legacy. The new App Router root is active at /.</p>
            <div className="mt-6">
              <Link href="/" className="text-blue-600 underline">Go to App Router root</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
