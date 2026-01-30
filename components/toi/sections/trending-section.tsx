"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

export function TrendingSection() {
  const items = [
    { title: "Mark Carney net worth 2026: Truth about Canadian PM's wealth...", image: "https://picsum.photos/seed/trend1/160/100", label: "MARK CARNEY NET WORTH" },
    { title: "Which place is known as the 'Land of Kings' in India? (Hint: It is not...", image: "https://picsum.photos/seed/trend2/160/100" },
    { title: "5 real animals that survive by drinking blood", image: "https://picsum.photos/seed/trend3/160/100", badge: "6" },
    { title: "'Hitting back where it hurts': Greenlanders parody 'American cultur...", image: "https://picsum.photos/seed/trend4/160/100" },
    { title: "Brooklyn vs The Beckhams: Inside the explosive family feud...", image: "https://picsum.photos/seed/trend5/160/100" },
    { title: "Who is Shanzay Ali Rohail? Meet the granddaughter-in-law of...", image: "https://picsum.photos/seed/trend6/160/100" },
  ];

  return (
    <section className="border-t border-dashed border-gray-300 py-4">
      <h2 className="text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
        Trending <ChevronRight className="w-4 h-4" />
      </h2>
      <div className="grid grid-cols-6 gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-[16/10] mb-2 overflow-hidden">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              {item.label && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                  <span className="text-white text-[9px] font-bold uppercase">{item.label}</span>
                </div>
              )}
              {item.badge && (
                <div className="absolute bottom-1 right-1 bg-red-600 text-white text-[9px] px-1.5 py-0.5 flex items-center gap-0.5 rounded-sm">
                  <span className="w-2 h-2 bg-white/30 rounded-sm" /> {item.badge}
                </div>
              )}
            </div>
            <Link href="#" className="text-[11px] text-gray-800 group-hover:text-red-600 leading-tight line-clamp-2 block">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VideosSection() {
  const tabs = ["Top News", "World", "Sports", "Entertainment", "Fitness"];
  const videos = [
    { title: "Pay-To-Play Peace? Canada Rejects Trump's $1B Gaza Plan As Allies Question His Global Grip | Watch", views: "12.7K views", time: "14 minutes ago", duration: "08:59", image: "https://picsum.photos/seed/vid1/200/120" },
    { title: "Meghan Markle's Netflix Show 'Cancelled' As Season 3 Of 'With Love...' Fails to Materialise: Report", views: "209 views", time: "14 hours ago", duration: "06:20", image: "https://picsum.photos/seed/vid2/200/120" },
    { title: "\"I'll Have His A##\": Crew Member Claims Child Actors' Mom Threatened Timothy Busfield", views: "56 views", time: "10 hours ago", duration: "07:31", image: "https://picsum.photos/seed/vid3/200/120" },
    { title: "Iran WARNS Trump's Attack On Khamenei Would Trigger JIHAD, Top General Says 'Will Chop Off...'", views: "1.2K views", time: "5 hours ago", duration: "05:45", image: "https://picsum.photos/seed/vid4/200/120" },
  ];

  return (
    <section className="border-t border-dashed border-gray-300 py-4">
      <h2 className="text-[15px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
        Videos <ChevronRight className="w-4 h-4" />
      </h2>
      <div className="flex gap-4">
        {/* Main Video */}
        <div className="w-[55%]">
          <div className="relative aspect-video bg-gray-900 overflow-hidden group cursor-pointer">
            <Image src="https://picsum.photos/seed/mainvid/600/340" alt="Main video" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-gray-900 fill-gray-900 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h3 className="text-white text-sm font-bold leading-tight">Vaishnaw Rules Out Trade Talks At WEF; Assures India's Engagement With Major Economies On All Fronts</h3>
              <p className="text-white/70 text-[10px] mt-1">551 views | 1 hour ago</p>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5">08:23</div>
          </div>
        </div>
        
        {/* Video List */}
        <div className="w-[45%]">
          <div className="flex gap-2 mb-3 text-[11px]">
            {tabs.map((tab, i) => (
              <button key={tab} className={`${i === 0 ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {videos.map((video, idx) => (
              <div key={idx} className="flex gap-2 group cursor-pointer">
                <div className="relative w-[120px] h-[68px] flex-shrink-0 overflow-hidden">
                  <Image src={video.image || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-0.5 right-0.5 bg-black/80 text-white text-[9px] px-1">{video.duration}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[11px] text-gray-800 group-hover:text-red-600 leading-tight line-clamp-2 mb-1">{video.title}</h4>
                  <p className="text-[9px] text-gray-500">{video.views} | {video.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
