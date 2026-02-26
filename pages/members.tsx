import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import Image from 'next/image'
import { ArrowLeft, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { members, Member } from '@/data/members'

export default function MembersPage() {
  // Ensure members render in the desired hierarchical order.
  // Roles are prioritized; ties fall back to alphabetical by surname.
  const rolePriority: Record<string, number> = {
    'Founder Curator': 1,
    'Curator': 2,
    'Vice Curator': 3,
    'Impact Officer': 4,
    'Ex Curator': 5,
    'Ex Vice Curator': 6,
    'Ex Impact Officer': 7,
    'Shaper': 8,
  }
  // Manual priority order for specific named members. Members listed here
  // will be shown in this exact order regardless of role. Any member not
  // present in this array falls back to role-based ordering and then
  // alphabetical by surname.
  const PRIORITY_ORDER = [
    'Devrim Savlı',
    'Serdar Çarlı',
    'Halil Kafadar',
    'Ceylin Ersöz',
    'Sude Kızıltaş',
    'Rümeysa Şirin',
    'Oğuzhan Akbaş',
    'Erce Bilgen',
  'Anıl Daloğlu',
    'Taşkın Akalın',
    // add others here as needed to enforce an exact ordering
  ]

  const sortedMembers = members.slice().sort((a: Member, b: Member) => {
    // 1) If one or both members appear in the explicit priority list, respect that order.
    const ia = PRIORITY_ORDER.indexOf(a.name)
    const ib = PRIORITY_ORDER.indexOf(b.name)
    if (ia !== -1 || ib !== -1) {
      if (ia === -1) return 1 // b has explicit priority
      if (ib === -1) return -1 // a has explicit priority
      return ia - ib
    }

    // 2) Fall back to role priority defined above.
    const pa = rolePriority[a.role] ?? 99
    const pb = rolePriority[b.role] ?? 99
    if (pa !== pb) return pa - pb

    // 3) Same role: sort by surname (last word of the name), fallback to full name.
    const aSurname = (a.name || '').trim().split(/\s+/).pop() || ''
    const bSurname = (b.name || '').trim().split(/\s+/).pop() || ''
    const cmp = aSurname.localeCompare(bSurname, undefined, { sensitivity: 'base' })
    if (cmp !== 0) return cmp

    return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  })
  return (
    <>
      <Head>
  <title>Our Members - Global Shapers Izmir Hub</title>
  <meta name="description" content="Meet the Global Shapers Izmir Hub team" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gs-purple to-gs-blue py-24">
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
                Our Members
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                Passionate young leaders coming together to create social change in Izmir
              </p>
            </motion.div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedMembers.map((member: Member, index: number) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={`/members/${member.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Member Photo */}
                      <div className="relative h-80 bg-gradient-to-br from-gs-blue via-gs-purple to-gs-orange overflow-hidden">
                        {member.image || member.photo ? (
                          <div className="absolute inset-0">
                            <Image
                              src={member.image || member.photo}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            {/* fallback icon */}
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                          <h3 className="text-2xl font-bold text-white group-hover:text-gs-orange transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-white/90 font-medium">{member.role}</p>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="p-6">
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {member.shortBio}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          {member.social.email && (
                            <div className="p-2 bg-gray-50 rounded-lg hover:bg-gs-blue/10 transition-colors">
                              <Mail className="w-5 h-5 text-gs-blue" />
                            </div>
                          )}
                          {member.social.linkedin && (
                            <div className="p-2 bg-gray-50 rounded-lg hover:bg-gs-blue/10 transition-colors">
                              <Linkedin className="w-5 h-5 text-gs-blue" />
                            </div>
                          )}
                          {member.social.twitter && (
                            <div className="p-2 bg-gray-50 rounded-lg hover:bg-gs-blue/10 transition-colors">
                              <Twitter className="w-5 h-5 text-gs-blue" />
                            </div>
                          )}
                          {member.social.website && (
                            <div className="p-2 bg-gray-50 rounded-lg hover:bg-gs-blue/10 transition-colors">
                              <ExternalLink className="w-5 h-5 text-gs-blue" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gs-navy mb-6">
              Want to Join Us?
            </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get in touch to become a member of Global Shapers Izmir Hub or volunteer for our projects.
              </p>
            <a href="https://weforum.eu.qualtrics.com/jfe/form/SV_6F4bAg3fL2x1eXb" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
