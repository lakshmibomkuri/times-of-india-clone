"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const articles = [
  { title: "Experience the Magic of Slot Gaming at GambleSpot Casino", image: "https://picsum.photos/seed/media1/300/200", source: "Mediawire" },
  { title: "Discover Premium Real Estate Options in Dubai", image: "https://picsum.photos/seed/media2/300/200", source: "Mediawire" },
  { title: "Invest in Your Future with Gold ETFs", image: "https://picsum.photos/seed/media3/300/200", source: "Mediawire" },
  { title: "Top MBA Colleges in India: Admission 2026", image: "https://picsum.photos/seed/media4/300/200", source: "Mediawire" },
  { title: "Best Hair Transplant Clinics in India", image: "https://picsum.photos/seed/media5/300/200", source: "Mediawire" },
  { title: "Luxury Apartments in Gurgaon Starting 2 Cr", image: "https://picsum.photos/seed/media6/300/200", source: "Mediawire" },
]

export function MediawireSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-bold text-gray-900">Mediawire</h2>
        <ChevronRight className="w-5 h-5 text-gray-400" />
        <span className="text-[11px] text-gray-500 ml-auto">Sponsored</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {articles.map((article, idx) => (
          <Link key={idx} href="#" className="group">
            <div className="relative aspect-[3/2] mb-2 overflow-hidden rounded">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-[12px] text-gray-800 leading-tight group-hover:text-[#e53935] line-clamp-2">
              {article.title}
            </h3>
            <span className="text-[10px] text-gray-500">{article.source}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
