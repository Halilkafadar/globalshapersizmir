import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

interface ScrollRestoreWrapperProps {
  children: ReactNode
  /** Optional callback when scroll is restored */
  onScrollRestore?: () => void
}

/**
 * Wrapper component that ensures smooth scroll restoration
 * Prevents flash of content at wrong scroll position
 */
export default function ScrollRestoreWrapper({ children, onScrollRestore }: ScrollRestoreWrapperProps) {
  const router = useRouter()

  useEffect(() => {
    // Trigger callback after scroll restoration completes
    const timer = setTimeout(() => {
      onScrollRestore?.()
    }, 150)

    return () => clearTimeout(timer)
  }, [router.asPath, onScrollRestore])

  return <>{children}</>
}
