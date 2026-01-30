"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const sponsoredCards = [
  {
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=250&fit=crop",
    title: "Start Strong: Take the First Step Towards Enamel Care.",
  },
  {
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop",
    title: "Complete coverage of the Union Budget 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=250&fit=crop",
    title: "Re-access modern parenting through science and mindfulness.",
  }
]

const textPromos = [
  "MapmyIndia's Rakesh Verma On Policy Push For India's Geospatial Growth",
  "UP Transformation Dialogues: From Ambitious Vision to Visible Transformation",
  "Make way for TOI's Power Creator Awards; jury to meet in Mumbai to crown India's..."
]

export function SponsoredCardsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="bg-[#eef2f6] rounded-xl p-6">
        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {sponsoredCards.map((card, index) => (
            <Link key={index} href="#" className="block group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-[160px]">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[14px] text-gray-800 leading-snug group-hover:text-[#e53935] transition-colors line-clamp-2">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Text Promos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-gray-300">
          {textPromos.map((promo, index) => (
            <Link key={index} href="#" className="text-[13px] text-gray-700 hover:text-[#e53935] transition-colors leading-snug line-clamp-2">
              {promo}
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-5 gap-6">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-1.5 bg-gray-800 rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button 
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              onClick={() => setCurrentSlide(currentSlide + 1)}
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
