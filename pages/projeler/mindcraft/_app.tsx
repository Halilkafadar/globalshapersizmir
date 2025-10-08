import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize any global scripts or analytics here
    console.log('Mindcraft initialized')
  }, [])

  return <Component {...pageProps} />
}
