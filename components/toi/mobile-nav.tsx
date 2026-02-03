"use client"

import { useState } from "react"
import { Menu, X, Home, Search, Video, User, Grid3X3 } from "lucide-react"
import Link from "next/link"

const mobileNavItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Video, label: "Videos", href: "/videos" },
  { icon: Grid3X3, label: "Sections", href: "/sections" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Bottom Navigation - Fixed */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex items-center justify-around py-2">
          {mobileNavItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-1 py-2 px-3 text-gray-600 hover:text-[#e53935] transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">News</h3>
                  <div className="space-y-2">
                    <Link href="/city" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">City</Link>
                    <Link href="/india" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">India</Link>
                    <Link href="/world" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">World</Link>
                    <Link href="/business" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Business</Link>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Sports</h3>
                  <div className="space-y-2">
                    <Link href="/cricket" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Cricket</Link>
                    <Link href="/sports" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Sports</Link>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Entertainment</h3>
                  <div className="space-y-2">
                    <Link href="/entertainment" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Movies</Link>
                    <Link href="/tv" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">TV</Link>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">More</h3>
                  <div className="space-y-2">
                    <Link href="/tech" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Technology</Link>
                    <Link href="/education" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Education</Link>
                    <Link href="/astro" className="block py-2 text-sm text-gray-700 hover:text-[#e53935]">Astrology</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}