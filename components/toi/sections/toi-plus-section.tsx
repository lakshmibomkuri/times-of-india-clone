"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const toiPlusArticles = [
  { 
    title: "Tired after just one drink? Why alcohol hits harder as you get older", 
    image: "https://picsum.photos/seed/toiplus1/320/200",
    category: "Health"
  },
  { 
    title: "Why India is deepening UAE ties as an Islamic Nato takes shape", 
    image: "https://picsum.photos/seed/toiplus2/320/200",
    category: "World"
  },
  { 
    title: "Shaksgam Valley: Why is India furious over Chinese activity near Ladakh?", 
    image: "https://picsum.photos/seed/toiplus3/320/200",
    category: "India"
  },
  { 
    title: "The rise of AI in Indian healthcare: Opportunities and challenges ahead", 
    image: "https://picsum.photos/seed/toiplus4/320/200",
    category: "Tech"
  },
  { 
    title: "Budget 2026: What the middle class can expect from FM's proposals", 
    image: "https://picsum.photos/seed/toiplus5/320/200",
    category: "Business"
  },
  { 
    title: "Climate crisis: Why 2026 could be India's hottest year on record", 
    image: "https://picsum.photos/seed/toiplus6/320/200",
    category: "Environment"
  },
]

export function TOIPlusSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(toiPlusArticles.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleArticles = toiPlusArticles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  )

  return (
    <section className="py-6 border-t border-dashed border-gray-300 bg-gray-100 px-4">
      <div className="max-w-[980px] mx-auto px-0">
        <div className="grid grid-cols-[200px_1fr] gap-8">
          {/* Left Side - TOI+ Branding */}
          <div>
            <div className="flex items-center gap-0.5 mb-3">
              <span className="text-[32px] font-bold text-gray-900">TOI</span>
              <span className="text-[32px] font-bold text-red-600">+</span>
            </div>
            <Link href="#" className="text-[13px] text-gray-600 flex items-center gap-1 mb-4 hover:text-gray-900">
              Explore <ChevronRight className="w-4 h-4" />
            </Link>
            <ul className="space-y-2 mb-4">
              <li className="text-[12px] text-gray-700 flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                In-Depth Stories
              </li>
              <li className="text-[12px] text-gray-700 flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                Daily Exclusives
              </li>
              <li className="text-[12px] text-gray-700 flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                Expert Opinions
              </li>
            </ul>
            <button className="bg-red-600 text-white text-[12px] px-6 py-2 rounded hover:bg-red-700 transition-colors font-medium">
              SUBSCRIBE
            </button>
          </div>

          {/* Right Side - Articles */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {visibleArticles.map((article, idx) => (
                <Link key={idx} href="#" className="group">
                  <div className="relative aspect-[16/10] rounded overflow-hidden mb-2">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {/* TOI+ Badge */}
                    <div className="absolute bottom-2 left-2 bg-white/90 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <span className="text-[10px] font-bold text-gray-900">TOI</span>
                      <span className="text-[10px] font-bold text-red-600">+</span>
                    </div>
                  </div>
                  <h3 className="text-[13px] text-gray-900 group-hover:text-red-600 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Dots on Left, Arrows on Right */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentPage ? "bg-gray-800" : "bg-gray-400"
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
        </div>
      </div>
    </section>
  )
}
