"use client"
import Link from "next/link"
import { Braces } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-purple-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link className="flex items-center" href="#">
              <Braces className="h-6 w-6 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ArwaaLabs</span>
            </Link>
            <p className="text-sm text-gray-400">
              Building Solutions that drive Impact
            </p>
            <p className="text-sm text-gray-400">
              Pioneering the future of technology at the intersection of Blockchain, AI, and Education.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Services</h3>
            <ul className="space-y-2">
              {["Blockchain Solutions", "AI Integration", "Tech Education", "Full Stack Development"].map((item) => (
                <li key={item}>
                  <Link className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-colors" href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-colors" href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Connect</h3>
            <ul className="space-y-2">
              {["Twitter", "LinkedIn", "GitHub", "Medium"].map((item) => (
                <li key={item}>
                  <Link className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-colors" href="#">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} ArwaaLabs. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}