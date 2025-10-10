import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AIPlaygroundComponent from '@/components/mindcraft/playground/AIPlayground'

export default function PlaygroundPage() {
  return (
    <>
      <Head>
        <title>AI Playground - Mindcraft</title>
        <meta name="description" content="Experiment with AI tools and create amazing projects" />
      </Head>

      <div className="min-h-[70vh]">
        <Navbar />
        <AIPlaygroundComponent />
        <Footer />
      </div>
    </>
  )
}
