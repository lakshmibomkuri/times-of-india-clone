"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { useState } from "react";

const tabs = ["Top News", "World", "Sports", "Entertainment", "Fitness"];

const videoList = [
  { image: "https://picsum.photos/seed/vid1/160/90", title: "Iran WARNS Trump's Attack On Khamenei Would Trigger JIHAD, Top General Says 'Will Chop Off...'", views: "716 views", time: "3 hours ago", duration: "12:30" },
  { image: "https://picsum.photos/seed/vid2/160/90", title: "Putin SHOCKS Trump On Greenland, Iran & Venezuela Oil; Russia Goes All-Out Against US: 'NO INTEREST'", views: "1.2K views", time: "4 hours ago", duration: "09:32" },
  { image: "https://picsum.photos/seed/vid3/160/90", title: "Israeli Settler Attacks Force Bedouin Families to Flee West Bank Village Near Jericho", views: "196 views", time: "3 hours ago", duration: "03:29" },
  { image: "https://picsum.photos/seed/vid4/160/90", title: "Khamenei Regime Vows War On Trump, Bibi For Fuelling Unrest In Iran; Cuts Off 40k Starlink Terminals...", views: "89 views", time: "2 hours ago", duration: "08:45" }
];

export function VideosSection() {
  const [activeTab, setActiveTab] = useState("Top News");

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1">
            Videos <ChevronRight className="w-5 h-5" />
          </h2>
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs ${activeTab === tab ? 'text-red-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_340px] gap-5">
          {/* Left - Main Video */}
          <Link href="#" className="block group">
            <div className="relative aspect-video rounded overflow-hidden bg-gray-900">
              <Image src="https://picsum.photos/seed/main-vid/640/360" alt="" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-7 h-7 text-gray-900 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <p className="text-white font-medium mb-1">Vaishnaw Rules Out Trade Talks At WEF; Assures India's Engagement With Major Economies On All Fronts</p>
                <p className="text-gray-300 text-xs">551 views | 1 hour ago</p>
              </div>
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                <Play className="w-3 h-3 fill-current" /> 06:23
              </span>
            </div>
          </Link>

          {/* Right - Video List */}
          <div className="space-y-3">
            {videoList.map((video, idx) => (
              <Link key={idx} href="#" className="flex gap-3 group">
                <div className="relative w-[160px] h-[90px] flex-shrink-0 rounded overflow-hidden">
                  <Image src={video.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <Play className="w-2.5 h-2.5 fill-current" /> {video.duration}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-800 font-medium line-clamp-3 group-hover:text-red-600">{video.title}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{video.views} | {video.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
