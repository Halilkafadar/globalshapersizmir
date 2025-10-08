import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

interface ScrollPosition {
  x: number
  y: number
}

interface ScrollPositions {
  [key: string]: ScrollPosition
}

const SCROLL_STORAGE_KEY = 'gs-izmir-scroll-positions'

/**
 * Custom hook to handle scroll position restoration across route changes
 * Stores scroll positions in sessionStorage and restores them when returning to a page
 */
export function useScrollRestoration() {
  const router = useRouter()
  const scrollPositions = useRef<ScrollPositions>({})
  const isRestoringRef = useRef(false)

  useEffect(() => {
    // Set manual scroll restoration to prevent browser default behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Load saved scroll positions from sessionStorage on mount
    const savedPositions = sessionStorage.getItem(SCROLL_STORAGE_KEY)
    if (savedPositions) {
      try {
        scrollPositions.current = JSON.parse(savedPositions)
      } catch (e) {
        console.error('Failed to parse scroll positions:', e)
      }
    }

    const saveScrollPosition = (url: string) => {
      const scrollPos: ScrollPosition = {
        x: window.scrollX,
        y: window.scrollY,
      }
      scrollPositions.current[url] = scrollPos
      sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(scrollPositions.current))
    }

    const restoreScrollPosition = (url: string) => {
      const savedPosition = scrollPositions.current[url]
      if (savedPosition) {
        isRestoringRef.current = true
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo(savedPosition.x, savedPosition.y)
          // Reset flag after a short delay
          setTimeout(() => {
            isRestoringRef.current = false
          }, 100)
        })
      }
    }

    // Save scroll position before route change
    const handleRouteChangeStart = (url: string) => {
      saveScrollPosition(router.asPath)
    }

    // Restore scroll position after route change completes
    const handleRouteChangeComplete = (url: string) => {
      restoreScrollPosition(url)
    }

    // Listen to router events
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // Save scroll position on page unload
    const handleBeforeUnload = () => {
      saveScrollPosition(router.asPath)
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Restore scroll position on initial load (for browser back/forward)
    restoreScrollPosition(router.asPath)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [router])

  return { isRestoring: isRestoringRef.current }
}

/**
 * Hook for individual scrollable containers (e.g., sidebars, modals)
 * Stores and restores scroll position for a specific element
 */
export function useContainerScrollRestoration(containerId: string) {
  const router = useRouter()
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const storageKey = `gs-izmir-container-scroll-${containerId}`
    const containerPositions = useRef<ScrollPositions>({})

    // Load saved positions
    const savedPositions = sessionStorage.getItem(storageKey)
    if (savedPositions) {
      try {
        containerPositions.current = JSON.parse(savedPositions)
      } catch (e) {
        console.error(`Failed to parse container scroll positions for ${containerId}:`, e)
      }
    }

    const saveContainerScroll = (url: string) => {
      if (containerRef.current) {
        const scrollPos: ScrollPosition = {
          x: containerRef.current.scrollLeft,
          y: containerRef.current.scrollTop,
        }
        containerPositions.current[url] = scrollPos
        sessionStorage.setItem(storageKey, JSON.stringify(containerPositions.current))
      }
    }

    const restoreContainerScroll = (url: string) => {
      const savedPosition = containerPositions.current[url]
      if (savedPosition && containerRef.current) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.scrollTo(savedPosition.x, savedPosition.y)
          }
        })
      }
    }

    const handleRouteChangeStart = () => {
      saveContainerScroll(router.asPath)
    }

    const handleRouteChangeComplete = (url: string) => {
      restoreContainerScroll(url)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // Restore on mount
    restoreContainerScroll(router.asPath)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router, containerId])

  return containerRef
}
