import Head from 'next/head'
import Link from 'next/link'
import { useContainerScrollRestoration } from '@/hooks/useScrollRestoration'
import { useScrollPosition, useScrollDirection } from '@/hooks/useScrollHelpers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, ArrowUp } from 'lucide-react'

/**
 * Demo page to showcase scroll restoration features
 * This page demonstrates:
 * 1. Main page scroll restoration
 * 2. Sidebar scroll restoration
 * 3. Scroll position indicator
 * 4. Scroll-to-top button
 */
export default function ScrollDemoPage() {
  // Container scroll restoration for sidebar
  const sidebarRef = useContainerScrollRestoration('demo-sidebar')
  
  // Track scroll position
  const scrollPosition = useScrollPosition()
  
  // Track scroll direction
  const scrollDirection = useScrollDirection()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Scroll Restoration Demo - Global Shapers İzmir Hub</title>
        <meta name="description" content="Demonstration of scroll position persistence feature" />
      </Head>

      <Navbar />

      <main className="pt-20 flex">
        {/* Sidebar with scroll restoration */}
        <aside
          ref={sidebarRef}
          className="hidden md:block w-64 h-screen overflow-y-auto fixed left-0 top-20 bg-gray-50 border-r border-gray-200 p-6"
        >
          <h2 className="text-lg font-bold text-gs-navy mb-4">Navigation</h2>
          <nav className="space-y-2">
            {Array.from({ length: 30 }, (_, i) => (
              <a
                key={i}
                href={`#section-${i + 1}`}
                className="block py-2 px-3 rounded-lg hover:bg-gs-blue/10 text-gray-700 hover:text-gs-blue transition-colors"
              >
                Section {i + 1}
              </a>
            ))}
          </nav>
          
          <div className="mt-8 p-4 bg-gs-blue/5 rounded-lg">
            <p className="text-sm text-gray-600">
              👆 This sidebar preserves its scroll position when you navigate away and return!
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 md:ml-64">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
              href="/"
              className="inline-flex items-center text-gs-blue hover:text-gs-navy mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-gs-navy mb-6">
              Scroll Restoration Demo
            </h1>

            <div className="bg-gradient-to-r from-gs-blue/10 to-gs-purple/10 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-gs-navy mb-3">How to Test:</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Scroll down this page (and the sidebar on desktop)</li>
                <li>Click "Back to Home" or any navigation link</li>
                <li>Return to this page using the browser's back button</li>
                <li>✨ You'll be at the exact same scroll position!</li>
              </ol>
            </div>

            {/* Scroll position indicator */}
            <div className="sticky top-24 z-10 mb-8 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Scroll Position:</p>
                  <p className="text-2xl font-bold text-gs-blue">{Math.round(scrollPosition.y)}px</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Direction:</p>
                  <p className="text-2xl font-bold text-gs-purple">
                    {scrollDirection === 'down' ? '↓' : scrollDirection === 'up' ? '↑' : '—'}
                  </p>
                </div>
              </div>
            </div>

            {/* Demo sections */}
            {Array.from({ length: 30 }, (_, i) => (
              <section
                key={i}
                id={`section-${i + 1}`}
                className="mb-12 p-8 bg-white rounded-xl shadow-md border border-gray-100 scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-gs-navy mb-4">
                  Section {i + 1}
                </h2>
                <p className="text-gray-600 mb-4">
                  This is demo content for section {i + 1}. The scroll position of both this main
                  content and the sidebar (on desktop) will be preserved when you navigate away and
                  return to this page.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-gs-blue/5 to-gs-purple/5 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Feature: Automatic window scroll restoration
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-gs-green/5 to-gs-orange/5 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Feature: Container scroll restoration (sidebar)
                    </p>
                  </div>
                </div>
                
                {i === 10 && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-gs-purple to-gs-blue text-white rounded-xl">
                    <h3 className="text-xl font-bold mb-3">🎯 Try This!</h3>
                    <p className="mb-4">
                      You're halfway through the content. Navigate to another page and come back:
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href="/hakkimizda"
                        className="px-4 py-2 bg-white text-gs-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        About Page
                      </Link>
                      <Link
                        href="/projeler"
                        className="px-4 py-2 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
                      >
                        Projects Page
                      </Link>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Technical details */}
            <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gs-navy mb-4">Technical Details</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gs-blue mb-2">Implementation:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Uses Next.js router events for navigation detection</li>
                    <li>Stores positions in sessionStorage (persists during session)</li>
                    <li>Sets window.history.scrollRestoration = "manual"</li>
                    <li>Uses requestAnimationFrame for smooth restoration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gs-blue mb-2">Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Main page scroll position restoration ✅</li>
                    <li>Individual container scroll restoration ✅</li>
                    <li>Browser back/forward button support ✅</li>
                    <li>TypeScript support ✅</li>
                    <li>Performance optimized with throttling ✅</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to top button */}
      {scrollPosition.y > 500 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gs-blue text-white rounded-full shadow-lg hover:bg-gs-navy transition-all hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </>
  )
}
