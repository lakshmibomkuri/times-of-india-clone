"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const opinions = [
  { 
    title: "World of difference", 
    author: "Jug Suraiya", 
    location: "India",
    excerpt: "Renamed places can make people wonder where they are In a movie I saw recently a teenaged daughter asks her father the name of the capital of Croati...",
    date: "January 21, 2026, 05:00 AM IST",
    image: "https://picsum.photos/seed/jug/64/64" 
  },
  { 
    title: "Aloka & The Monks", 
    author: "TOI Edit", 
    location: "India",
    excerpt: "A walk for peace in America uses conceptual tools that originated in our land, but we have neglected In the din and clatter that engulfs Americans today, m...",
    date: "January 21, 2026, 05:00 AM IST",
    image: "https://picsum.photos/seed/toiedit/64/64" 
  },
  { 
    title: "The economic implications of Budget 2026", 
    author: "Swaminathan Aiyar", 
    location: "India",
    excerpt: "Budget 2026 promises major reforms but the fiscal math remains challenging. With elections approaching, the government faces tough choices...",
    date: "January 21, 2026, 06:00 AM IST",
    image: "https://picsum.photos/seed/swami/64/64" 
  },
  { 
    title: "Cricket: Time to move beyond IPL obsession", 
    author: "Harsha Bhogle", 
    location: "India",
    excerpt: "India's focus on T20 franchise cricket is impacting the longer formats. Test cricket needs attention before it becomes irrelevant...",
    date: "January 21, 2026, 07:00 AM IST",
    image: "https://picsum.photos/seed/harsha/64/64" 
  },
]

const pollOptions = [
  "Winning assembly polls",
  "Managing senior party leaders",
  "Both"
]

export function OpinionsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null)
  const itemsPerPage = 2
  const totalPages = Math.ceil(opinions.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleOpinions = opinions.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  )

  return (
    <section className="py-6 border-t border-dashed border-gray-300" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-bold text-gray-900">Opinions</h2>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Main Opinions Carousel */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {visibleOpinions.map((opinion, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={opinion.image || "/placeholder.svg"}
                      alt={opinion.author}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-medium text-gray-900">{opinion.author}</h4>
                    <span className="text-[11px] text-gray-500">{opinion.location}</span>
                  </div>
                </div>
                <h3 className="text-[15px] font-serif italic text-gray-900 mb-2">
                  {opinion.title}
                </h3>
                <p className="text-[12px] text-gray-600 mb-2 line-clamp-3">
                  {opinion.excerpt}
                  <Link href="#" className="text-red-600 ml-1 hover:underline">Read More</Link>
                </p>
                <span className="text-[10px] text-gray-400">{opinion.date}</span>
              </div>
            ))}
          </div>

          {/* Dots on Left, Arrows on Right */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentPage ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevPage}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPage}
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Poll Widget */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
              Poll
            </span>
          </div>
          <h3 className="text-[14px] font-medium text-gray-900 mb-4">
            What will be the biggest challenge for new BJP president Nitin Nabin this year?
          </h3>
          <div className="space-y-2">
            {pollOptions.map((option, idx) => (
              <label 
                key={idx} 
                className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <input
                  type="radio"
                  name="poll"
                  checked={selectedPoll === idx}
                  onChange={() => setSelectedPoll(idx)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-[13px] text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
