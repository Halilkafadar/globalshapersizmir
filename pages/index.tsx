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
        {/* Hero Section - Modern Mindcraft Style */}
  <section className="relative min-h-[70vh] flex justify-center overflow-hidden pt-12">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100"></div>
            <div className="absolute top-20 -right-40 w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 -left-40 w-[600px] h-[600px] bg-blue-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Badge removed per request: Global Shapers İzmir Hub */}

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-normal antialiased subpixel-antialiased">
                <span className="block text-gray-900 mb-4 antialiased">Shaping the</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 antialiased">
                  Future Together
                </span>
              </h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                A community of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">young leaders</span> aged 20-30 creating lasting social impact through innovative projects
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link href="/projeler" className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link href="/hakkimizda" className="group px-10 py-5 bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:border-purple-600 hover:text-purple-600 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3">
                  <span>About Us</span>
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats - Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                    8+
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Years Active</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                    15+
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                    7K+
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Volunteers</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-6 h-6 rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision - Modern Cards */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              {/* Our Foundation badge removed for cleaner heading */}
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Drives Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Bringing together <span className="font-semibold text-gray-900">young leaders aged 20-30</span> to create innovative solutions to local and global challenges.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full hover:-translate-y-2">
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-100 rounded-3xl"></div>
                  
                  <div className="relative">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8 border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6">
                      Our Vision
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      Building a more <span className="font-semibold">sustainable, inclusive and equitable</span> future by unlocking the potential of young people.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Global Network Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all">
                    Global Network
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Part of the <span className="font-semibold text-gray-900">World Economic Forum</span> community with <span className="font-semibold text-blue-600">450+ hubs</span> and <span className="font-semibold text-blue-600">15,000+ leaders</span> in <span className="font-semibold text-blue-600">150+ countries</span>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Modern Design */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-96 h-96 bg-gs-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gs-purple/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gs-navy mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative initiatives creating lasting social impact in our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => {
                const isFirst = index === 0
                const Icon = isFirst ? '🤖' : '💰'
                const gradientFrom = isFirst ? 'from-blue-500' : 'from-purple-500'
                const gradientVia = isFirst ? 'via-purple-500' : 'via-orange-500'
                const gradientTo = isFirst ? 'to-orange-500' : 'to-pink-500'
                
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Link href={isFirst ? '/projeler/mindcraft' : `/projeler/${project.slug}`}>
                      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        {/* Gradient Header with Icon */}
                        <div className={`relative h-80 bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} overflow-hidden`}>
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
                          </div>
                          
                          {/* Status Badge */}
                          <div className="absolute top-6 right-6 z-10">
                            <div className="px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-md bg-green-500/90 text-white shadow-lg flex items-center gap-2">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              Active Project
                            </div>
                          </div>

                          {/* Icon - Large and Centered */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-9xl transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl">
                              {Icon}
                            </div>
                          </div>

                          {/* Category Badge - Bottom */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/15 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/20">
                              <span className="text-sm font-bold text-white tracking-wide uppercase">
                                {project.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-10">
                          <h3 className="text-3xl font-bold text-gs-navy mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gs-blue group-hover:to-gs-purple transition-all duration-300">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-2">
                            {project.shortDescription}
                          </p>

                          {/* Impact Metrics */}
                          {project.impact && (
                            <div className="mb-8">
                              <div className="grid grid-cols-2 gap-4">
                                {project.impact.participants && (
                                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 border border-blue-100/50 group-hover:shadow-lg transition-shadow">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                                    <div className="relative">
                                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {project.impact.participants}
                                      </div>
                                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                        {isFirst ? 'Students' : 'Participants'}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {project.impact.reach && (
                                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-orange-50 p-6 border border-purple-100/50 group-hover:shadow-lg transition-shadow">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                                    <div className="relative">
                                      <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
                                        {project.impact.reach}
                                      </div>
                                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                        {isFirst ? 'Countries' : 'Reach'}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* CTA Button */}
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3 text-gs-blue font-bold text-lg group-hover:gap-4 transition-all">
                              Learn More
                              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                            </div>
                            
                            {/* Link indicators */}
                            {project.links && (
                              <div className="flex items-center gap-2">
                                {project.links.website && (
                                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                                    🌐
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gs-blue/0 via-gs-purple/0 to-gs-orange/0 group-hover:from-gs-blue/5 group-hover:via-gs-purple/5 group-hover:to-gs-orange/5 transition-all duration-500 pointer-events-none"></div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link href="/projeler" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gs-blue to-gs-purple text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                View All Projects
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gs-navy mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600">
                Young leaders creating change in Izmir
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {members.slice(0, 4).map((member, index) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/uyeler/${member.slug}`}>
                    <div className="group text-center">
                      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-gs-blue to-gs-purple p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <Users className="w-16 h-16 text-gs-blue" />
                        </div>
                      </div>
                      <h3 className="font-bold text-gs-navy group-hover:text-gs-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/uyeler" className="inline-flex items-center gap-2 px-8 py-4 bg-gs-navy text-white rounded-lg font-semibold hover:bg-gs-blue transition-colors">
                View Full Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-gs-blue to-gs-purple">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Contact us to learn more about our projects or explore collaboration opportunities.
              </p>
              <Link href="/iletisim" className="inline-block px-8 py-4 bg-white text-gs-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
