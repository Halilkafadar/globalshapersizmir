import Link from 'next/link'
import { Mail, Linkedin, Globe, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-mindcraft-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">Mindcraft</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The Meeting Point of Intelligence and Conscience. 
              Empowering the next generation with AI literacy, ethics, and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:izmirglobalshapers@gmail.com" 
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.globalshapers.org" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/modules" className="text-gray-300 hover:text-white transition-colors">Education Modules</Link></li>
              <li><Link href="/playground" className="text-gray-300 hover:text-white transition-colors">AI Playground</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Partners</h4>
            <ul className="space-y-2 text-gray-300">
              <li>UNDP</li>
              <li>UNESCO</li>
              <li>OECD</li>
              <li>Global Shapers Izmir</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Global Shapers Izmir Hub
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Mindcraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
