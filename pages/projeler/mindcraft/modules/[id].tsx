import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import ModuleContent from '@/components/mindcraft/modules/ModuleContent'
import { modulesData } from '@/utils/mindcraft/modulesData'

export default function ModuleDetailPage() {
  const router = useRouter()
  const { id } = router.query
  
  const module = modulesData.find(m => m.id === id)
  
  if (!module) {
    return (
      <>
        <Head>
          <title>Module Not Found - Mindcraft</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Module Not Found</h1>
            <button onClick={() => router.push('/modules')} className="btn-primary">
              Back to Modules
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{module.title} - Mindcraft</title>
        <meta name="description" content={module.description} />
      </Head>
      
      <div className="min-h-screen">
        <Navbar />
        <ModuleContent module={module} />
        <Footer />
      </div>
    </>
  )
}
