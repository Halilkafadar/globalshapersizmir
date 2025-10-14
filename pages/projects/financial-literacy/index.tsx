import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Download } from 'lucide-react'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'

export default function FinancialLiteracyPage() {
  const project = projects.find(p => p.slug === 'financial-literacy')!

  return (
    <>
      <Head>
        <title>{project.title} - Global Shapers İzmir</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gs-navy to-gs-blue py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                ← Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-lg text-gray-200 max-w-3xl">{project.shortDescription}</p>
              <div className="mt-6 flex gap-3">
                <a href="/files/financial-literacy.pdf" className="inline-flex items-center gap-2 btn-primary" target="_blank" rel="noreferrer">Download PDF <Download className="w-4 h-4"/></a>
                <Link href="/contact" className="inline-flex items-center gap-2 btn-secondary">Contact <ArrowRight className="w-4 h-4"/></Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview + Impact */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gs-navy mb-4">Overview</h2>
              <div className="prose prose-lg text-gray-700">
                <p>The Financial Literacy project aims to equip young people with basic knowledge and skills in money management, saving, investment and financial planning. The program uses workshop-based, hands-on modules and mentorship to provide real-life simulations and practical learning.</p>

                <h3 className="mt-6">Program Content (Example Modules)</h3>
                <ul>
                  <li><strong>Module 1:</strong> Basic Financial Concepts — income-expense management, budget creation, saving habits.</li>
                  <li><strong>Module 2:</strong> Banking and Financial Instruments — bank accounts, credit cards, digital banking.</li>
                  <li><strong>Module 3:</strong> Investment & Entrepreneurship — investment instruments, risk management, business plan preparation.</li>
                  <li><strong>Module 4:</strong> Financial Planning — short- and long-term goals, insurance, tax awareness.</li>
                </ul>

                <h3 className="mt-6">Implementation Method</h3>
                <p>Workshops, mentoring, case studies and online resources support applied learning. Sessions can be held in schools or community spaces.</p>
              </div>
            </div>

            <aside>
              <div className="bg-gradient-to-br from-gs-blue/5 to-gs-purple/5 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Impact</h3>
                {project.impact?.reach && (
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-gs-navy">{project.impact.reach}</div>
                    <div className="text-sm text-gray-600">Participants / Students</div>
                  </div>
                )}
                {project.impact?.schools && (
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-gs-navy">{project.impact.schools}</div>
                    <div className="text-sm text-gray-600">Schools</div>
                  </div>
                )}
                {project.impact?.duration && (
                  <div className="mt-4 text-sm text-gray-600">Duration: {project.impact.duration}</div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Status</h4>
                <div className="text-sm text-gray-600 capitalize">{project.status}</div>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-gs-blue font-semibold">Contact <ArrowRight className="w-4 h-4"/></Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Partners */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold text-gs-navy mb-6">Project Partners</h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {project.partners && project.partners.length > 0 ? (
                project.partners.map((p) => (
                  <a key={p.name} href={p.website} className="w-40 h-12 bg-white rounded-md flex items-center justify-center shadow-sm p-2">
                    <img src={p.logo} alt={p.name} className="max-h-8 object-contain" />
                  </a>
                ))
              ) : (
                <>
                  <div className="w-36 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-700">Local Banks</div>
                  <div className="w-36 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-700">Universities</div>
                  <div className="w-36 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-700">UNDP</div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-gs-navy mb-4">Get Involved</h3>
            <p className="text-gray-600 mb-8">Join workshops, volunteer as a mentor, or help translate and distribute educational materials.</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-gs-blue to-gs-purple text-white rounded-lg font-semibold hover:shadow-lg">Contact</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

