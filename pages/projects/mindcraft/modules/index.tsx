import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ModuleCard from '@/components/mindcraft/modules/ModuleCard'
import { modulesData } from '@/utils/mindcraft/modulesData'

export default function ModulesPage() {
  return (
    <>
      <Head>
        <title>Education Modules - Mindcraft</title>
        <meta name="description" content="Explore our interactive AI learning modules" />
      </Head>

      <div className="min-h-screen">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Education Modules</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Embark on an interactive journey through AI, ethics, creativity, and innovation.
                Each module is designed to spark curiosity and build real-world skills.
              </p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modulesData.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
