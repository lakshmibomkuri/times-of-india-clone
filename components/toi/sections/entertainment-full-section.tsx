"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

const entertainmentHeadlines = [
  "Jodie Foster recalls how a lion almost mauled her...",
  "Ranya' stepfather, Ramachandra Rao accused in o...",
  "Police files case against speeding driver in Akshay...",
  "Star Trek: Starfleet Academy: William Shatner joke...",
  "Palash Muchhal back to directing post split with S...",
  "'Kung Fu Hustle' star Bruce Leung passes away at ...",
  "'My Rs 50 lakh policy ditched me in the darkest h...",
  "Fake Sweet Potato in the market? How to check t...",
  "Upcoming housing projects in Gurugram 2026: De...",
  "Archana's son Aaryamann surprises mother a new...",
];

const featuredNews = [
  {
    image: "https://picsum.photos/seed/ent1/280/200",
    title: "Bollywood pins January hope on Sunny Deol's Border 2",
  },
  {
    image: "https://picsum.photos/seed/ent2/280/200",
    title: "Jana Nayagan: Release date hearing LIVE updates",
    isLive: true,
  },
];

const photostories = [
  { image: "https://picsum.photos/seed/photo1/100/100", title: "How to make Chef Sanjeev...", count: 9 },
  { image: "https://picsum.photos/seed/photo2/100/100", title: "Ancient Devi Mantras...", count: 10 },
  { image: "https://picsum.photos/seed/photo3/100/100", title: "Amitabh Bachchan,...", count: 9 },
  { image: "https://picsum.photos/seed/photo4/100/100", title: "Fake Sweet Potato in the...", count: 10 },
  { image: "https://picsum.photos/seed/photo5/100/100", title: "5 desi gobi dishes among...", count: 6 },
  { image: "https://picsum.photos/seed/photo6/100/100", title: "5 reasons why teens prefer...", count: 6 },
];

export function EntertainmentFullSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="grid grid-cols-[1fr_300px] gap-8">
          {/* Main Entertainment Content */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
              Entertainment <ChevronRight className="w-5 h-5" />
            </h2>

            <div className="grid grid-cols-[280px_1fr] gap-6">
              {/* Featured Video */}
              <div className="relative aspect-[4/3] rounded overflow-hidden group cursor-pointer">
                <Image
                  src="https://picsum.photos/seed/entfeat/280/200"
                  alt="Featured entertainment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">LIVE</span>
                  <h3 className="text-white text-sm font-medium">
                    {"'Dhurandhar' box office day 47 (LIVE)"}
                  </h3>
                </div>
              </div>

              {/* Headlines List */}
              <div className="space-y-2">
                {entertainmentHeadlines.map((headline, idx) => (
                  <div key={idx} className="flex items-start gap-2 group cursor-pointer">
                    <span className="text-gray-400 text-xs mt-1">○</span>
                    <p className="text-sm text-gray-700 group-hover:text-red-600 line-clamp-1">
                      {headline}
                    </p>
                    {idx === 6 && <span className="text-red-500 text-xs">📺</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured News Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {featuredNews.map((news, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {news.isLive && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm text-gray-800 group-hover:text-red-600">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Photostories */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Hyderabad</span>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                Change City <span className="text-red-500">📍</span>
              </button>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
              Photostories <ChevronRight className="w-5 h-5" />
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {photostories.map((story, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-square rounded overflow-hidden mb-1">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded flex items-center gap-1">
                      📷 {story.count}
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">
                    {story.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
