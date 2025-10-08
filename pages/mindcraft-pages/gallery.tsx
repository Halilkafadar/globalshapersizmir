import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GalleryGrid from '@/components/mindcraft/gallery/GalleryGrid'

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>AI Memory Gallery - Mindcraft</title>
        <meta name="description" content="Explore creations from students around the world" />
      </Head>
      
      <div className="min-h-screen">
        <Navbar />
        <GalleryGrid />
        <Footer />
      </div>
    </>
  )
}
