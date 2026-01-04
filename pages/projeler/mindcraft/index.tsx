import Head from 'next/head'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Hero from '@/components/mindcraft/home/Hero'
import AboutSection from '@/components/mindcraft/home/AboutSection'
import CurriculumPreview from '@/components/mindcraft/home/CurriculumPreview'
import ImpactSection from '@/components/mindcraft/home/ImpactSection'
import ModulesPreview from '@/components/mindcraft/home/ModulesPreview'
import PartnersSection from '@/components/mindcraft/home/PartnersSection'
import Footer from '@/components/mindcraft/layout/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mindcraft - Shaping the Intelligence Age | Global Shapers İzmir Hub</title>
        <meta name="description" content="A Global Multiplier Network for Human-Centric AI Leadership. Building cognitive sovereignty and AI literacy for youth ages 9-17. 100+ students, 12 international hubs, human-centric ethics." />
        <meta name="keywords" content="Mindcraft, AI literacy, human-centric leadership, cognitive sovereignty, Global Shapers, ethics in AI, youth education, intelligence age" />
        <meta property="og:title" content="Mindcraft - Shaping the Intelligence Age" />
        <meta property="og:description" content="A Global Multiplier Network for Human-Centric AI Leadership" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <AboutSection />
        <CurriculumPreview />
        <ImpactSection />
        <ModulesPreview />
        <PartnersSection />
        <Footer />
      </div>
    </>
  )
}
