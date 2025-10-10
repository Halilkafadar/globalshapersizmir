import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Users, BookOpen, Target, TrendingUp, Award, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'

export default function FinancialLiteracyPage() {
  const project = projects.find(p => p.slug === 'financial-literacy')!

  return (
    <>
      <Head>
  <title>{project.title} - Global Shapers Izmir Hub</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gs-green via-gs-blue to-gs-purple py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-gs-orange rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/projeler" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                All Projects
              </Link>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-gs-green/90 text-white rounded-full text-sm font-semibold mb-6">
                    {project.category}
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {project.shortDescription}
                  </p>

                  {/* Impact Stats */}
                  {project.impact && (
                    <div className="grid grid-cols-2 gap-4">
                      {project.impact.participants && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <div className="text-4xl font-bold text-white mb-2">{project.impact.participants}</div>
                          <div className="text-white/80">Participants</div>
                        </div>
                      )}
                      {project.impact.schools && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <div className="text-4xl font-bold text-white mb-2">{project.impact.schools}</div>
                          <div className="text-white/80">Schools</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-9xl">💰</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Long Description */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }} />
            </motion.div>
          </div>
        </section>

        {/* Curriculum Modules */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gs-navy mb-4">
                Education Modules
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive curriculum covering 4 main modules
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Module 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-blue to-gs-purple rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gs-navy mb-4">
                  1. Basic Financial Concepts
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Budget management and saving habits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Income-expense balance and financial planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Borrowing and credit usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Setting financial goals</span>
                  </li>
                </ul>
              </motion.div>

              {/* Module 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-purple to-gs-orange rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gs-navy mb-4">
                  2. Banking and Fintech
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Bank accounts and financial products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Digital banking and mobile payment systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Fintech applications and innovative solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Financial security and fraud prevention</span>
                  </li>
                </ul>
              </motion.div>

              {/* Module 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-green to-gs-blue rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gs-navy mb-4">
                  3. Investment and Entrepreneurship
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Basic investment instruments (stocks, bonds, funds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Risk management and portfolio diversification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Entrepreneurship fundamentals and business planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Social entrepreneurship and sustainable business models</span>
                  </li>
                </ul>
              </motion.div>

              {/* Module 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gs-orange to-gs-green rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gs-navy mb-4">
                  4. Financial Planning
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Short, medium, and long-term financial goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Retirement planning and private pension systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Insurance and risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gs-green mt-1">✓</span>
                    <span>Tax awareness and legal rights</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gs-navy mb-6">
                  Education Methodology
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gs-blue/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-gs-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gs-navy mb-2">Interactive Workshops</h3>
                      <p className="text-gray-600">
                        Learning through real-life scenarios with active participant engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gs-purple/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-gs-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gs-navy mb-2">Peer Learning</h3>
                      <p className="text-gray-600">
                        Knowledge sharing and collaborative learning through group work and discussions
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gs-green/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-gs-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gs-navy mb-2">Practical Applications</h3>
                      <p className="text-gray-600">
                        Transforming theory into practice through simulations and real case analysis
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gs-green/10 to-gs-blue/10 rounded-2xl p-12 text-center"
              >
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-gs-navy mb-4">
                  Target Audience
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Young people aged 13-25
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-gs-blue">8+</div>
                    <div className="text-sm text-gray-600">Weeks Duration</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-gs-purple">32</div>
                    <div className="text-sm text-gray-600">Hours Training</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners & Impact */}
        {project.partners && (
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gs-navy mb-4">
                  Partnerships
                </h2>
                <p className="text-xl text-gray-600">
                  Organizations bringing this project to life
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {project.partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg"
                  >
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="font-bold text-lg text-gs-navy">{partner.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-gs-green to-gs-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to Join the Project?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                We organize custom training programs for schools and organizations
              </p>
              <Link href="/iletisim" className="inline-block px-8 py-4 bg-white text-gs-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Information
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
