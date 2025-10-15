import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Mail, Linkedin, Twitter, ExternalLink, Users } from 'lucide-react'
import { members, Member } from '@/data/members'

interface MemberPageProps {
  member: Member
}

export default function MemberPage({ member }: MemberPageProps) {
  return (
    <>
      <Head>
  <title>{member.name} - Global Shapers Izmir Hub</title>
        <meta name="description" content={member.shortBio} />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gs-navy via-gs-blue to-gs-purple py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/members" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                All Members
              </Link>

              <div className="grid md:grid-cols-3 gap-12 items-center">
                {/* Member Photo */}
                <div className="md:col-span-1">
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gs-orange to-gs-green">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover scale-125"
                        style={{ objectPosition: 'center 35%' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-32 h-32 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="md:col-span-2">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    {member.name}
                  </h1>
                  <p className="text-2xl text-gs-orange font-semibold mb-6">
                    {member.role}
                  </p>
                  <p className="text-xl text-gray-200 mb-8">
                    {member.shortBio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gs-navy mb-8">About</h2>
              <div className="prose prose-lg max-w-none">
                {member.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/members" className="inline-flex items-center gap-2 px-8 py-4 bg-gs-navy text-white rounded-lg font-semibold hover:bg-gs-blue transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to All Members
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = members.map((member) => ({
    params: { slug: member.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const member = members.find((m) => m.slug === params?.slug)

  if (!member) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      member,
    },
  }
}
