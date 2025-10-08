import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ShapeBot from '@/components/ShapeBot'
import { useScrollRestoration } from '@/hooks/useScrollRestoration'
import ScrollRestorationIndicator from '@/components/ScrollRestorationIndicator'

export default function App({ Component, pageProps }: AppProps) {
  // Enable scroll position persistence across route changes
  const { isRestoring } = useScrollRestoration()

  return (
    <>
      <Component {...pageProps} />
      <ShapeBot />
      {/* Optional: Show visual indicator during scroll restoration (useful for debugging) */}
      {/* Uncomment the line below to see the restoration indicator */}
      {/* <ScrollRestorationIndicator show={isRestoring} position="bottom-right" /> */}
    </>
  )
}
