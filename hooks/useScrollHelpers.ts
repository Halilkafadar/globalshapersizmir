import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

/**
 * Hook to detect when the page is being restored (via back button or navigation)
 * Useful for conditional rendering or animations
 */
export function usePageRestoration() {
  const router = useRouter()
  const [isRestoring, setIsRestoring] = useState(false)

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsRestoring(true)
      setTimeout(() => setIsRestoring(false), 500)
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router])

  return isRestoring
}

/**
 * Hook to track scroll position in real-time
 * Useful for showing scroll indicators or sticky headers
 */
export function useScrollPosition(throttleMs: number = 100) {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        setScrollPosition({
          x: window.scrollX,
          y: window.scrollY,
        })
      }, throttleMs)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [throttleMs])

  return scrollPosition
}

/**
 * Hook to detect scroll direction
 * Useful for showing/hiding navigation on scroll
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < 10) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrollDirection
}
