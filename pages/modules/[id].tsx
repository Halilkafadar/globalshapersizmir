import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ModulesRedirect() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      // Redirect to the new route structure
      router.replace(`/projects/mindcraft/${id}`)
    } else {
      // Redirect to mindcraft hub
      router.replace('/projects/mindcraft')
    }
  }, [id, router])

  // Show loading while redirecting
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Redirecting...</p>
      </div>
    </div>
  )
}