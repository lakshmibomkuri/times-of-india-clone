"use client"

import Image from "next/image"
import Link from "next/link"

const puzzles = [
  {
    icon: "grid",
    name: "Connect",
    description: "The Perfect Trace",
    color: "bg-purple-100"
  },
  {
    icon: "loop",
    name: "Loop the Loop",
    description: "Puzzle Circuit",
    color: "bg-blue-100"
  },
  {
    icon: "location",
    name: "Location Guesser",
    description: "Guess the Spot",
    color: "bg-green-100"
  }
]

const featuredVideos = [
  {
    title: "PM Modi Signals Generational Shift As Nitin Nabin Becomes New BJP President, Calls Him His Boss",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=250&fit=crop",
    duration: "13:53",
    badge: "TOI"
  },
  {
    title: "Op Sindoor On Kartavya Path: IAF To Showcase How India Fights Modern Wars",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=250&fit=crop",
    duration: "05:05",
    badge: null
  }
]

export function RightSidebar() {
  return (
    <aside className="space-y-4 sm:space-y-5 w-full" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Ad placeholder - Dreame - Responsive */}
      <div className="text-center">
        <p className="text-[8px] sm:text-[9px] text-gray-400 mb-1">Advertisement</p>
        <div className="bg-white border border-gray-200 p-3 sm:p-4 min-h-[200px] sm:min-h-[250px]">
          <div className="text-center">
            <div className="text-[14px] sm:text-[16px] font-bold text-gray-700 tracking-widest">DREAME</div>
            <div className="mt-2">
              <span className="text-[12px] sm:text-[14px] text-gray-600">L10 Prime</span>
              <div className="text-[16px] sm:text-[18px] font-bold text-gray-900">Robot Vacuum</div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-gray-600 mt-2">Deep cleans your home,<br/>self cleans itself.</p>
            <div className="mt-3 sm:mt-4 inline-flex items-center bg-[#ff9900] text-white text-[11px] sm:text-[12px] px-3 sm:px-4 py-1.5 rounded font-medium">
              <span className="mr-1">a</span> SHOP NOW
            </div>
            <div className="text-[16px] sm:text-[18px] font-bold text-gray-800 mt-2">₹29,999/-</div>
          </div>
        </div>
      </div>

      {/* Daily Puzzles - Responsive */}
      <div className="bg-white">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-[14px] sm:text-[16px] font-bold text-[#333]">Daily Puzzles</h3>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="space-y-1 sm:space-y-2">
          {puzzles.map((puzzle, index) => (
            <Link key={index} href="/games" className="flex items-center gap-2 sm:gap-3 group p-1.5 sm:p-2 hover:bg-gray-50 rounded -mx-1.5 sm:-mx-2">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 ${puzzle.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                {puzzle.icon === "grid" && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                )}
                {puzzle.icon === "loop" && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3c4.97 0 9 4.03 9 9M12 21c-4.97 0-9-4.03-9-9" strokeLinecap="round"/>
                    <path d="M21 12h-3M6 12H3" strokeLinecap="round"/>
                  </svg>
                )}
                {puzzle.icon === "location" && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[13px] sm:text-[14px] text-[#333] group-hover:text-[#e53935] truncate">{puzzle.name}</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">{puzzle.description}</p>
              </div>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
        <button className="w-full mt-2 sm:mt-3 border border-gray-300 text-[#333] py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-medium rounded hover:bg-gray-50">
          Explore More Puzzles
        </button>
      </div>

      {/* Featured Videos - Responsive */}
      <div className="bg-white">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-[14px] sm:text-[16px] font-bold text-[#333]">Featured Videos</h3>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {featuredVideos.map((video, index) => (
            <Link key={index} href="/videos/1" className="group block">
              <div className="relative w-full aspect-video overflow-hidden rounded mb-2">
                <Image
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {video.badge && (
                  <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 bg-[#e53935] text-white text-[7px] sm:text-[8px] px-1 sm:px-1.5 py-0.5 sm:py-1 rounded font-bold leading-none">
                    <div>TOI</div>
                    <div className="text-[6px] sm:text-[7px]">भारत</div>
                  </div>
                )}
                <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 bg-black/80 text-white text-[10px] sm:text-[11px] px-1 sm:px-1.5 py-0.5 rounded flex items-center gap-1">
                  <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#e53935]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {video.duration}
                </div>
              </div>
              <h4 className="text-[12px] sm:text-[13px] font-semibold text-[#333] group-hover:text-[#e53935] leading-[1.3] line-clamp-3">
                {video.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>

      {/* Kotak Ad - Responsive */}
      <div className="bg-black text-white p-3 sm:p-4 rounded relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[9px] sm:text-[10px] font-bold">K</span>
            </div>
            <span className="text-[9px] sm:text-[10px] truncate">Kotak Mahindra Bank</span>
          </div>
          <h3 className="text-[14px] sm:text-[16px] font-bold leading-tight">
            Financial<br/>Backing<br/>for the<br/>Bold.
          </h3>
          <p className="text-[9px] sm:text-[10px] text-gray-400 mt-2">
            Get a Kotak<br/>Credit Card today.
          </p>
          <p className="text-[10px] sm:text-[11px] text-red-400 italic mt-2">
            Hausla hai toh<br/><span className="text-red-500 font-semibold not-italic">ho jayega.</span>
          </p>
          <button className="mt-2 sm:mt-3 bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium rounded">
            Apply Now
          </button>
        </div>
      </div>
    </aside>
  )
}
