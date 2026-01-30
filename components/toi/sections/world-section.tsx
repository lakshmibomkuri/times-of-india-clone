"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

const tabs = ["Featured", "US", "Pakistan", "UK", "VIDEOS", "Middle East"];

const newsItems = [
  "'He's a T-rex': Global leaders react to Trump's Gre...",
  "End of an era: Sunita Williams retires after 600+ d...",
  "Nick Fuentes and Andrew Tate controversy grows ...",
  "Candace Owens shares new conspiracy theory bl...",
  "Pokimane speaks out on Grok AI controversy, citin..."
];

const sidebarVideos = [
  { image: "https://picsum.photos/seed/world-vid1/80/50", title: "Who is Cece? Twitch streamer at the center of Marvel Rivals Creator Cup" },
  { image: "https://picsum.photos/seed/world-vid2/80/50", title: "Spain tragedy: Train derails in Barcelona days after high-speed rail collision; 1" },
  { image: "https://picsum.photos/seed/world-vid3/80/50", title: "Canada prepares for a hypothetical attack from America for the first time in" },
  { image: "https://picsum.photos/seed/world-vid4/80/50", title: "Greenland PM asks residents to prepare for a possible invasion, says 'can't be" },
  { image: "https://picsum.photos/seed/world-vid5/80/50", title: "Collin, Dallas, not Calcutta, Delhi...: Texas candidate's poll promise is to deport H-" }
];

const bottomNews = [
  { title: "Trump vs Khamenei: US president's 'wipe them off' warning to...", hasVideo: true },
  { title: "Trump's plane makes U-turn: President's flight to Davos retur...", hasVideo: false },
  { title: "'We'll set fire to their world': Iran's big threat to Trump;...", hasVideo: true },
  { title: "'We prefer respect to bullies': Macron hits back at Trump;...", hasVideo: true }
];

const inFocusTags = ["Pakistan News", "Middle East News", "China News", "US News", "Donald Trump", "Elon Musk"];

export function WorldSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
          World <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-[280px_1fr_260px] gap-5">
          {/* Left - Featured */}
          <div>
            <Link href="#" className="block group mb-3">
              <div className="relative aspect-video rounded overflow-hidden">
                <Image src="https://picsum.photos/seed/world-feat/280/160" alt="" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-sm font-medium">Mark Carney net worth 2026: Truth about Canadian PM's wealth that is turning heads</p>
                </div>
              </div>
            </Link>
            <div className="grid grid-cols-4 gap-2">
              {bottomNews.map((item, idx) => (
                <Link key={idx} href="#" className="block group">
                  <p className="text-[10px] text-gray-700 group-hover:text-red-600 line-clamp-3">
                    {item.title}
                    {item.hasVideo && <span className="text-red-500 ml-1">▶</span>}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Center - News List */}
          <div className="space-y-2">
            {newsItems.map((item, idx) => (
              <Link key={idx} href="#" className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600">
                <span className="text-gray-400 mt-0.5">○</span>
                <span className="flex-1">{item}</span>
                {idx % 2 === 0 && <span className="text-red-500 text-[10px]">▶</span>}
              </Link>
            ))}
          </div>

          {/* Right - Tabs + Videos */}
          <div>
            <div className="flex gap-3 mb-3 border-b border-gray-200 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] ${activeTab === tab ? 'text-red-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {sidebarVideos.map((video, idx) => (
                <Link key={idx} href="#" className="flex gap-2 group">
                  <div className="relative w-[80px] h-[50px] flex-shrink-0 rounded overflow-hidden">
                    <Image src={video.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-[8px] p-0.5 rounded">
                      <Play className="w-2 h-2 fill-current" />
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-700 group-hover:text-red-600 line-clamp-3">{video.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* In Focus */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200">
          <span className="text-xs font-bold text-gray-900">In Focus</span>
          <div className="flex flex-wrap gap-2">
            {inFocusTags.map((tag, idx) => (
              <Link key={idx} href="#" className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
