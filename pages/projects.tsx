import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Our Projects - Global Shapers İzmir Hub</title>
        <meta name="description" content="Social impact projects by Global Shapers İzmir Hub" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gs-navy to-gs-blue py-24">
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                Education and social responsibility projects designed to create lasting impact in our community
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {project.slug === 'mindcraft' ? (
                    <Link href="/projects/mindcraft">
                      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Project Image/Gradient */}
                      <div className="relative h-80 bg-gradient-to-br from-gs-blue via-gs-purple to-gs-orange overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl">{index === 0 ? '🤖' : '💰'}</span>
                        </div>
                        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                          project.status === 'active' ? 'bg-gs-green/90 text-white' : 'bg-gray-500/90 text-white'
                        }`}>
                          {project.status === 'active' ? 'Active Project' : 'Completed'}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                            <span className="text-sm font-semibold">{project.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8">
                        <h2 className="text-3xl font-bold text-gs-navy mb-4 group-hover:text-gs-blue transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Impact Metrics */}
                        {project.impact && (
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {project.impact.participants && (
                              <div className="bg-gradient-to-br from-gs-blue/5 to-gs-purple/5 rounded-xl p-5">
                                <div className="text-3xl font-bold bg-gradient-to-r from-gs-blue to-gs-purple bg-clip-text text-transparent">
                                  {project.impact.participants}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Participants</div>
                              </div>
                            )}
                            {project.impact.reach && (
                              <div className="bg-gradient-to-br from-gs-purple/5 to-gs-orange/5 rounded-xl p-5">
                                <div className="text-3xl font-bold bg-gradient-to-r from-gs-purple to-gs-orange bg-clip-text text-transparent">
                                  {project.impact.reach}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Reach</div>
                              </div>
                            )}
                            {project.impact.schools && (
                              <div className="bg-gradient-to-br from-gs-green/5 to-gs-blue/5 rounded-xl p-5">
                                <div className="text-3xl font-bold bg-gradient-to-r from-gs-green to-gs-blue bg-clip-text text-transparent">
                                  {project.impact.schools}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Schools</div>
                              </div>
                            )}
                            {project.impact.countries && (
                              <div className="bg-gradient-to-br from-gs-orange/5 to-gs-green/5 rounded-xl p-5">
                                <div className="text-3xl font-bold bg-gradient-to-r from-gs-orange to-gs-green bg-clip-text text-transparent">
                                  {project.impact.countries}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Countries</div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center text-gs-blue font-semibold group-hover:gap-2 transition-all">
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                          {project.links && (
                            <div className="text-sm text-gray-500">
                              {project.links.website && '🌐'}
                              {project.links.github && '💻'}
                              {project.links.docs && '📄'}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    </Link>
                  ) : (
                  <Link href={`/projects/${project.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Project Image/Gradient */}
                      <div className="relative h-80 bg-gradient-to-br from-gs-blue via-gs-purple to-gs-orange overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl">{index === 0 ? '🤖' : '💰'}</span>
                        </div>
                        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                          project.status === 'active' ? 'bg-gs-green/90 text-white' : 'bg-gray-500/90 text-white'
                        }`}>
                          {project.status === 'active' ? 'Active Project' : 'Completed'}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                            <span className="text-sm font-semibold">{project.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8">
                        <h2 className="text-3xl font-bold text-gs-navy mb-4 group-hover:text-gs-blue transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center text-gs-blue font-semibold group-hover:gap-2 transition-all">
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gs-navy mb-6">
              Want to Contribute to a Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn more about our projects or volunteer opportunities.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-gs-blue to-gs-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Contact
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
