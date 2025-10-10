import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { ArrowLeft, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { members, Member } from '@/data/members'

interface MemberPageProps {
  member: Member
}

export default function MemberPage({ member }: MemberPageProps) {
  // Always show social icons. If a link is missing, use '#' as a placeholder
  // and prevent navigation when clicked so the icon still appears as a placeholder.
  const emailHref = member.email || member.social?.email ? `mailto:${member.email || member.social?.email}` : '#'
  const linkedinHref = member.linkedin || member.social?.linkedin ? (member.linkedin || member.social?.linkedin) : '#'

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
                  <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden bg-white/10 backdrop-blur-sm p-1">
                    {/* Placeholder gradient behind the image so if the image fails to load
                        the decorative circle remains and the img alt text won't be visible */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gs-orange to-gs-green" />
                    {member.image || member.photo ? (
                      <Image
                        src={member.image || member.photo}
                        alt={member.name}
                        width={256}
                        height={256}
                        className="rounded-full object-cover relative z-10"
                        onError={(e: any) => {
                          // hide broken img so the gradient placeholder remains visible
                          const img = e?.target as HTMLImageElement | undefined
                          if (img) img.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/10 rounded-full" />
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
                  {/* Social icons shown directly under name/role for visibility */}
                  <div className="flex items-center gap-4 mb-6">
                    <a
                      href={emailHref}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                      target={emailHref !== '#' ? '_blank' : undefined}
                      rel={emailHref !== '#' ? 'noopener noreferrer' : undefined}
                      aria-label="Email"
                      onClick={emailHref === '#' ? ((e: any) => e.preventDefault()) : undefined}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </a>

                    <a
                      href={linkedinHref}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                      target={linkedinHref !== '#' ? '_blank' : undefined}
                      rel={linkedinHref !== '#' ? 'noopener noreferrer' : undefined}
                      aria-label="LinkedIn"
                      onClick={linkedinHref === '#' ? ((e: any) => e.preventDefault()) : undefined}
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  {/* Only show shortBio if it provides different info than the role */}
                  {member.shortBio && member.shortBio.trim() !== member.role?.trim() && (
                    <p className="text-xl text-gray-200 mb-8">
                      {member.shortBio}
                    </p>
                  )}

                  {/* (Duplicate social links removed — icons show above the bio to avoid repetition) */}
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
