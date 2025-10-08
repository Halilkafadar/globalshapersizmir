// import removed: global CSS should only be imported in root _app.tsx
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize any global scripts or analytics here
    console.log('Mindcraft initialized')
  }, [])

  return <Component {...pageProps} />
}
