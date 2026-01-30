"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  [
    { title: "Start Strong: Take the First Step Towards Enamel Care.", image: "https://picsum.photos/seed/slide1/400/250", sponsor: "Pronamel" },
    { title: "Complete coverage of the Union Budget 2026", image: "https://picsum.photos/seed/slide2/400/250", sponsor: "TOI" },
    { title: "Re-access modern parenting through science and mindfulness.", image: "https://picsum.photos/seed/slide3/400/250", sponsor: "Orchids" },
  ],
  [
    { title: "Digital transformation reshaping India's business landscape", image: "https://picsum.photos/seed/slide4/400/250", sponsor: "Tech" },
    { title: "Sustainable living: Small changes with big impact", image: "https://picsum.photos/seed/slide5/400/250", sponsor: "Green" },
    { title: "Health & Wellness: Your guide to better living", image: "https://picsum.photos/seed/slide6/400/250", sponsor: "Health" },
  ],
]

const textLinks = [
  [
    "MapmyIndia's Rakesh Verma On Policy Push For India's Geospatial Growth",
    "UP Transformation Dialogues: From Ambitious Vision to Visible Transformation",
    "Make way for TOI's Power Creator Awards; jury to meet in Mumbai to crown India's best Digital...",
  ],
  [
    "India's Tech Hub: Bangalore leads the digital revolution in Southeast Asia",
    "Sustainable Fashion: Indian designers embracing eco-friendly materials",
    "Financial Planning 2026: Expert tips for smart investments this year",
  ],
]

export function TOISliderSection() {
  const [currentPage, setCurrentPage] = useState(0)

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-6 border-t border-dashed border-gray-300" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Image Slider - No horizontal scroll */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {slides[currentPage].map((slide, idx) => (
          <Link key={idx} href="#" className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-[13px] text-gray-800 mt-2 group-hover:text-red-600 line-clamp-2">
              {slide.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Text Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {textLinks[currentPage].map((link, idx) => (
          <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 line-clamp-2">
            {link}
          </Link>
        ))}
      </div>

      {/* Dots and Arrows */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex gap-1">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`rounded-full transition-all ${currentPage === idx ? 'w-4 h-1 bg-gray-800' : 'w-1 h-1 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-500" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-500 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  )
}
