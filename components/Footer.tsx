import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gs-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/gs-logo.png"
                  alt="Global Shapers İzmir Hub"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Global Shapers</div>
                <div className="text-sm text-gs-blue">İzmir Hub</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A community of young leaders from the World Economic Forum. We develop social impact projects in İzmir, 
              leading the way for young people to shape the future.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:izmir@globalshapers.org" 
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/global-shapers-izmir" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/GS_Izmir" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/uyeler" className="text-gray-300 hover:text-white transition-colors">Members</Link></li>
              <li><Link href="/projeler" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/projeler/mindcraft" className="hover:text-white transition-colors">Mindcraft</Link></li>
              <li><Link href="/projeler/financial-literacy" className="hover:text-white transition-colors">Financial Literacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Global Shapers İzmir Hub
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Global Shapers İzmir Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
