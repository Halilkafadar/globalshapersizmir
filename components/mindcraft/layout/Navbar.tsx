import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Sparkles, ArrowLeft } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mindcraft ana sayfasında mıyız yoksa modül sayfasında mı kontrol et
  const isOnMindcraftHomePage = router.pathname === '/projects/mindcraft'
  const mindcraftBasePath = '/projects/mindcraft'

  const navLinks = [
    { name: 'Home', href: isOnMindcraftHomePage ? '#hero' : `${mindcraftBasePath}#hero` },
    { name: 'About', href: isOnMindcraftHomePage ? '#about' : `${mindcraftBasePath}#about` },
    { name: 'Modules', href: isOnMindcraftHomePage ? '#modules' : `${mindcraftBasePath}#modules` },
    { name: 'Impact', href: isOnMindcraftHomePage ? '#impact' : `${mindcraftBasePath}#impact` },
    { name: 'Hubs', href: isOnMindcraftHomePage ? '#partners' : `${mindcraftBasePath}#partners` },
    { name: 'Partners', href: isOnMindcraftHomePage ? '#partners' : `${mindcraftBasePath}#partners` },
    { name: 'Contact', href: isOnMindcraftHomePage ? '#partners' : `${mindcraftBasePath}#partners` },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mindcraft-dark/95 backdrop-blur-lg shadow-lg border-b border-yellow-400/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Back to Hub Button */}
          <a 
            href="/" 
            className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Hub</span>
          </a>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-yellow-400/20 blur-xl group-hover:bg-yellow-400/40 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-white">Mindcraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 font-medium px-3 py-2 rounded-md transition-colors duration-200 relative group text-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </a>
            ))}
            <a 
              href={isOnMindcraftHomePage ? '#modules' : `${mindcraftBasePath}#modules`}
              className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-mindcraft-dark font-bold px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Get Started
            </a>
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
            <a 
              href={isOnMindcraftHomePage ? '#modules' : `${mindcraftBasePath}#modules`}
              className="w-full btn-primary block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Learning
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
