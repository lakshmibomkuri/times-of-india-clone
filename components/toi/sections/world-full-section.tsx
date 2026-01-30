"use client";

import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function WorldFullSection() {
  const [activeTab, setActiveTab] = useState("Featured");
  const tabs = ["Featured", "US", "Pakistan", "UK", "VIDEOS", "Middle East"];

  const headlines = [
    "Prince Harry's friends were 'good source of leaks': ...",
    "Saudi Arabia raises saudization to 60% in marketi...",
    "Over 1 lakh items forgotten in Dubai taxis: You wo...",
    "'No going back': Trump posts image showing Cana...",
    "Love Is Blind, Habibi to Dubai Bling: Netflix drops b..."
  ];

  const sideNews = [
    { title: "\"Completely unfounded\": UAE Ministry of Defence denies Yemen Riyan Airport", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&h=70&fit=crop" },
    { title: "Who is Andrew Callaghan? Nick Shirley accuses YouTuber of changing interview", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=70&fit=crop" },
    { title: "Abu Dhabi crowned World's Safest City for 10th straight year: How the UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=100&h=70&fit=crop" },
    { title: "Saudi second semester schedule revealed: 92 school days with Ramadan", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=100&h=70&fit=crop" },
    { title: "Iran barred from Davos: WEF says it's 'not right' for Tehran to attend; cites", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=100&h=70&fit=crop" }
  ];

  const bottomCards = [
    { title: "UN HQ razed in Jerusalem: Israeli forces move in with...", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=180&h=120&fit=crop" },
    { title: "Dubai ahead of Ramadan 2026: What's changing for...", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=180&h=120&fit=crop" },
    { title: "World's largest purple star sapphire 'Star of Pure Land' unveiled i...", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=180&h=120&fit=crop" },
    { title: "After Greenland, Trump eyes Diego Garcia in Indian...", image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=180&h=120&fit=crop" }
  ];

  const inFocus = ["In Focus", "Pakistan News", "Middle East News", "China News", "US News", "Donald Trump", "Elon Musk"];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">World</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Featured Image */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded overflow-hidden mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
                  alt="Oman auto insurance"
                  fill
                  className="object-cover"
                />
                <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1">
                  <X className="w-3 h-3" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="text-white text-sm font-medium">Oman's new auto insurance rules: Insurers to pay drivers for delayed car repairs</span>
                </div>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              {headlines.map((headline, i) => (
                <p key={i} className="text-sm text-gray-700 hover:text-red-600 cursor-pointer flex items-start gap-2">
                  <span className="text-gray-400">○</span>
                  {headline}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {bottomCards.map((card, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/2] rounded overflow-hidden mb-2">
                  <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                </div>
                <h3 className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          {/* Tabs */}
          <div className="flex gap-4 mb-4 text-sm border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 whitespace-nowrap ${activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600 hover:text-red-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Side News */}
          <div className="space-y-3">
            {sideNews.map((news, i) => (
              <div key={i} className="flex gap-3 group cursor-pointer">
                <div className="relative w-20 h-14 flex-shrink-0 rounded overflow-hidden">
                  <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                </div>
                <h3 className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-3">{news.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* In Focus Tags */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        {inFocus.map((tag, i) => (
          <span
            key={i}
            className={`text-sm px-3 py-1 rounded-full cursor-pointer ${i === 0 ? 'border border-gray-900 font-semibold' : 'border border-gray-300 text-gray-600 hover:bg-gray-100'}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
