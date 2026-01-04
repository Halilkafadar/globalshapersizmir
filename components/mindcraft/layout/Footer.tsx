import Link from 'next/link'
import { Mail, Linkedin, Globe, Heart, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-mindcraft-dark to-blue-900 text-white border-t border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-bold text-yellow-400 mb-4">Mindcraft</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              <strong>Shaping the Intelligence Age</strong><br />
              A Global Multiplier Network for Human-Centric AI Leadership.<br />
              Building cognitive sovereignty and ethical AI literacy for youth worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:izmirglobalshapers@gmail.com" 
                 className="p-3 bg-white/10 rounded-full hover:bg-yellow-400/30 transition-colors border border-white/20 hover:border-yellow-400/50">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/globalshapers" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-yellow-400/30 transition-colors border border-white/20 hover:border-yellow-400/50">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/global-shapers-community" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-yellow-400/30 transition-colors border border-white/20 hover:border-yellow-400/50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.globalshapers.org" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-yellow-400/30 transition-colors border border-white/20 hover:border-yellow-400/50">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/#modules" className="text-gray-300 hover:text-yellow-400 transition-colors">Modules</a></li>
              <li><a href="/#impact" className="text-gray-300 hover:text-yellow-400 transition-colors">Impact</a></li>
              <li><a href="/#hubs" className="text-gray-300 hover:text-yellow-400 transition-colors">Hubs</a></li>
              <li><a href="/#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Partners & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Partners</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> UNDP</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Global Shapers</li>
              <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> San Francisco Hub</li>
              <li><a href="#privacy" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm mt-2 block">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-yellow-400/30 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 mb-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Global Shapers İzmir Hub
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Mindcraft. All rights reserved. | <a href="#privacy" className="text-yellow-400 hover:text-yellow-300">Privacy Policy</a> | <a href="#terms" className="text-yellow-400 hover:text-yellow-300">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
