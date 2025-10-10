import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/mindcraft/home/Hero'
import ModulesPreview from '@/components/mindcraft/home/ModulesPreview'
import PartnersSection from '@/components/mindcraft/home/PartnersSection'

export default function MindcraftProject() {
  return (
    <>
      <Head>
        <title>Mindcraft - The Meeting Point of Intelligence and Conscience</title>
        <meta name="description" content="Interactive educational platform for AI literacy, ethics, and creativity for ages 9-17" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ModulesPreview />
        <PartnersSection />
        <Footer />
      </div>
    </>
  )
}
