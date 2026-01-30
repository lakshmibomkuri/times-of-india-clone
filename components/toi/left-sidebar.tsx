"use client"

import Image from "next/image"
import Link from "next/link"

const sidebarNews = [
  {
    category: null,
    title: "'Want to play like him': Hardik Pandya's special message leaves RCB player emotional",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=200&fit=crop",
    hasImage: true
  },
  {
    category: "Jammu",
    categoryColor: "#e53935",
    title: "Maggi packets, 20kg rice, cylinders: JeM's winter bunker unearthed; terrorists stocked up for months",
    hasImage: false
  },
  {
    category: "US",
    categoryColor: "#e53935",
    title: "'200% tariff & he'll join': Trump threatens France over 'Board of Peace' snub; shares Macron's text",
    hasImage: false,
    hasVideo: true
  },
  {
    category: "Education",
    categoryColor: "#e53935",
    title: "Oakridge Bachupally hosts AURA 2026 alumni meet",
    hasImage: false
  },
  {
    category: "India",
    categoryColor: "#e53935",
    title: "Kerala: Row over governor's address in assembly — what happened",
    hasImage: false
  }
]

export function LeftSidebar() {
  return (
    <aside className="space-y-0" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* News Items */}
      <div>
        {sidebarNews.map((item, index) => (
          <div key={index} className="border-b border-gray-200 py-3">
            <Link href="/article/news" className="group block">
              {item.category && (
                <span className="text-[#e53935] text-[11px] font-medium block mb-1">{item.category}</span>
              )}
              <h4 className="text-[13px] text-[#333] group-hover:text-[#e53935] leading-[1.35] font-normal">
                {item.title}
              </h4>
              {item.hasImage && item.image && (
                <div className="relative w-full h-[110px] mt-2 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {item.hasVideo && (
                <span className="inline-flex items-center gap-1 text-[#e53935] text-[11px] mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* TOI ePaper */}
      <div className="bg-white border border-gray-200 p-3 mt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-[14px] text-gray-900">TOI ePaper</h3>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <button className="w-full bg-[#e53935] text-white py-1.5 text-[12px] font-medium rounded mb-3">
          Buy 1 Get 1 Free On TOI+
        </button>
        <div className="relative w-full bg-gray-50 p-2">
          <div className="flex items-start gap-3">
            <div className="border border-gray-300 bg-white p-1.5 shadow-sm w-[80px]">
              <div className="text-[5px] font-serif text-gray-800 border-b border-gray-200 pb-0.5 mb-1 text-center" style={{ fontFamily: '"Times New Roman", serif' }}>
                THE TIMES OF INDIA
              </div>
              <div className="w-full h-12 bg-gray-100 flex items-center justify-center text-[7px] text-gray-400">
                YEDA official gets bail in<br/>₹141.84 crore scam case
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1 bg-[#e53935] text-white text-[9px] px-2 py-1 rounded">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                PDF
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Placeholder - 65% OFF */}
      <div className="bg-white border border-gray-200 p-3 mt-4 text-center">
        <p className="text-[9px] text-gray-400 mb-2">Advertisement</p>
        <div className="bg-gradient-to-b from-gray-50 to-white py-6">
          <div className="text-[40px] font-bold text-gray-800 leading-none">65%</div>
          <div className="text-[16px] text-gray-600 font-medium">OFF</div>
        </div>
      </div>
    </aside>
  )
}
