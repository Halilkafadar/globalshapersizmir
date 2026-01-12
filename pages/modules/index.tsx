import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ModulesIndexRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to mindcraft hub
    router.replace('/projects/mindcraft')
  }, [router])

  // Show loading while redirecting
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Redirecting to Mindcraft Hub...</p>
      </div>
    </div>
  )
}