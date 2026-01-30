"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"

const mainHeadlines = [
  {
    title: "Stock market crash: Nifty50 ends below 25,250; BSE Sensex down over 1,000 points - top reasons",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"
  },
  {
    title: "Trump's plane makes U-turn: US President's flight to Davos left Israel midair — what went wrong?",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=500&fit=crop"
  },
  {
    title: "India beats Australia by 7 wickets in thrilling T20 World Cup semi-final",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop"
  },
]

const newsArticles = [
  {
    title: "'200% tariff & he'll join': Trump threatens France over 'Board of Peace' snub; shares Macron's text",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=400&h=250&fit=crop",
    videoDuration: "07:30"
  },
  {
    title: "Hello, Doctor. India's top doctors here to answer your questions",
    excerpt: "Hello, Doctor — our first-of-its-kind digital clinic for TOI+ subscribers — went live...",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop",
    videoDuration: null,
    hasPlus: true
  },
  {
    title: "Noida techie's death: Builder arrested for criminal negligence",
    excerpt: "Greater Noida police arrested Abhay Kumar, builder of MZ Wiztown, in...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    videoDuration: "07:51"
  },
  {
    title: "Maggi packets, 20kg rice, cylinders: JeM's winter bunker unearthed; terrorists stocked up for months",
    excerpt: "A Pakistan-based Jaish-e-Mohammad terror hideout, stocked for months, was...",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    videoDuration: null
  },
  {
    title: "Stray dogs order: SC criticises Maneka Gandhi's remarks; terms it 'contempt'",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop",
    videoDuration: null
  },
  {
    title: "The importance of 'metabolic health' and how to maintain it",
    excerpt: "How your body uses and stores energy is...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    videoDuration: null
  }
]

export function MainContent() {
  const [newStoriesCount] = useState(22)
  const [currentHeadline, setCurrentHeadline] = useState(0)

  // Auto-slide main headline every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % mainHeadlines.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="space-y-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Main Headline with Auto-slider */}
      <article className="mb-3">
        <Link href="/article/stock-market-crash" className="group block">
          <h1 className="text-[26px] font-bold text-[#333] group-hover:text-[#e53935] leading-[1.2] mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {mainHeadlines[currentHeadline].title}
          </h1>
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={mainHeadlines[currentHeadline].image || "/placeholder.svg"}
              alt={mainHeadlines[currentHeadline].title}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            {/* Slide indicators */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1">
              {mainHeadlines.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.preventDefault(); setCurrentHeadline(idx); }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentHeadline ? 'bg-white w-4' : 'bg-white/50'}`}
                />
              ))}
            </div>
            {/* New Stories Button */}
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1a73e8] text-white text-[13px] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#1557b0] transition-colors shadow-lg">
              {newStoriesCount} New Stories
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </Link>
      </article>

      {/* News Articles */}
      <div className="space-y-0">
        {newsArticles.map((article, index) => (
          <article key={index} className="flex gap-4 py-4 border-b border-gray-200">
            <div className="flex-1 min-w-0">
              <Link href="/article/news" className="group block">
                <h2 className="text-[15px] font-bold text-[#333] group-hover:text-[#e53935] leading-[1.3] mb-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {article.title}
                </h2>
                {article.excerpt && (
                  <p className="text-[13px] text-[#666] leading-[1.4] mt-1">
                    {article.excerpt}
                  </p>
                )}
              </Link>
            </div>
            <div className="flex-shrink-0 w-[170px] h-[105px] relative overflow-hidden">
              <Link href="/article/news" className="block w-full h-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {article.videoDuration && (
                  <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[11px] px-1.5 py-0.5 rounded flex items-center gap-1">
                    <svg className="w-2.5 h-2.5 text-[#e53935]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    {article.videoDuration}
                  </div>
                )}
                {article.hasPlus && (
                  <div className="absolute bottom-1 right-1 bg-[#e53935] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    +
                  </div>
                )}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
