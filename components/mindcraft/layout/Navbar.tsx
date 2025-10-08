import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles, ArrowLeft } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/projeler/mindcraft' },
    { name: 'Modules', href: '/projeler/mindcraft/modules' },
    { name: 'AI Playground', href: '/projeler/mindcraft/playground' },
    { name: 'Gallery', href: '/projeler/mindcraft/gallery' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Back to Hub Button */}
          <a 
            href="/" 
            className="flex items-center space-x-2 text-gray-700 hover:text-mindcraft-purple font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Hub</span>
          </a>

          {/* Logo */}
          <Link href="/projeler/mindcraft" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-mindcraft-purple group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-mindcraft-purple/20 blur-xl group-hover:bg-mindcraft-purple/40 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">Mindcraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-mindcraft-purple font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mindcraft-purple group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/projeler/mindcraft/modules">
              <button className="btn-primary">
                Start Learning
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              link.name === 'Home' ? (
                <a
                  key={link.name}
                  href="/"
                  className="block py-2 text-gray-700 hover:text-mindcraft-purple font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-mindcraft-purple font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button className="w-full btn-primary">
              Start Learning
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
