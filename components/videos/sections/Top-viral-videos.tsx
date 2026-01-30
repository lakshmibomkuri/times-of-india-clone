"use client";

import Image from "next/image";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
const viralPages = [
  {
    featured: {
      thumbnail:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=450&fit=crop",
      duration: "05:34",
      title:
        "‘What The Hell Macron’: Trump Mocks French President’s Aviators At Global Summit",
      description:
        "Former U.S. President Donald Trump injected mockery into global diplomacy during a high-profile summit, drawing reactions across Europe.",
      views: "2.8K views",
      time: "1 day ago",
    },
    side: [
      {
        thumbnail:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=225&fit=crop",
        duration: "04:58",
        title: "Glenn Phillips Addresses Media After High-Pressure Chase",
        views: "617 views",
        time: "1 day ago",
      },
      {
        thumbnail:
          "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=225&fit=crop",
        duration: "03:03",
        title: "Gurgaon Headlines Today: Traffic, Weather & Alerts",
        views: "876 views",
        time: "9 hours ago",
      },
      {
        thumbnail:
          "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=225&fit=crop",
        duration: "08:18",
        title: "Unbelievable Epstein Link Emerges In Court Filings",
        views: "1.3K views",
        time: "13 hours ago",
      },
      {
        thumbnail:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=225&fit=crop",
        duration: "03:15",
        title: "Ahmedabad Morning Brief: Top Local Developments",
        views: "8.9K views",
        time: "9 hours ago",
      },
    ],
  },

  {
    featured: {
      thumbnail:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop",
      duration: "06:12",
      title: "Trump, Greenland & Global Shockwaves — What It Means",
      description:
        "Geopolitical tensions resurface as Greenland once again becomes central to global power equations.",
      views: "4.1K views",
      time: "12 hours ago",
    },
    side: [
      {
        thumbnail:
          "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=225&fit=crop",
        duration: "02:45",
        title: "Top News Of The Day In 3 Minutes",
        views: "900 views",
        time: "6 hours ago",
      },
      {
        thumbnail:
          "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=400&h=225&fit=crop",
        duration: "04:20",
        title: "Markets Open With Volatility Amid Global Cues",
        views: "2.2K views",
        time: "3 hours ago",
      },
      {
        thumbnail:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=225&fit=crop",
        duration: "07:10",
        title: "World Leaders React To Sudden Policy Shift",
        views: "5.7K views",
        time: "1 day ago",
      },
      {
        thumbnail:
          "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=400&h=225&fit=crop",
        duration: "03:55",
        title: "Breaking: Emergency Summit Announced",
        views: "3.3K views",
        time: "10 hours ago",
      },
    ],
  },
];



export default function TopViralVideosSection() {
  const [page, setPage] = useState(0);
  const data = viralPages[page];

  const nextPage = () => {
    setPage((prev) => (prev + 1) % viralPages.length);
  };

  return (
    <section className="max-w-[980px] mx-auto">

      {/* Header */}
      <h2 className="text-[18px] font-semibold mb-4">
        Top Viral Videos
      </h2>

      {/* CONTENT */}
      <div className="flex gap-6">

        {/* LEFT FEATURED */}
        <div className="w-[58%] border rounded-xl overflow-hidden bg-white">
          <div className="relative h-[360px]">
            <Image
              src={data.featured.thumbnail}
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
              <Play className="w-3 h-3 fill-white" />
              {data.featured.duration}
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-[16px] font-semibold mb-2">
              {data.featured.title}
            </h3>
            <p className="text-[13px] text-gray-600 mb-2 line-clamp-2">
              {data.featured.description}
            </p>
            <span className="text-[12px] text-gray-500">
              {data.featured.views} | {data.featured.time}
            </span>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="w-[42%] grid grid-cols-2 gap-4">
          {data.side.map((video, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden bg-white"
            >
              <div className="relative h-[150px]">
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  className="object-cover"
                />

                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                  <Play className="w-3 h-3 fill-white" />
                  {video.duration}
                </span>
              </div>

              <div className="p-2">
                <p className="text-[13px] font-medium line-clamp-2 mb-1">
                  {video.title}
                </p>
                <span className="text-[11px] text-gray-500">
                  {video.views} | {video.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION + ARROW */}
      {/* PAGINATION + ARROWS */}
      <div className="flex items-center justify-center gap-6 mt-4 relative">

        {/* Dots */}
        <div className="flex gap-2">
          {viralPages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition ${i === page ? "bg-black" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Arrows on RIGHT */}
        <div className="absolute right-0 flex gap-2">
          <button
            onClick={() =>
              setPage((prev) =>
                prev === 0 ? viralPages.length - 1 : prev - 1
              )
            }
            className="border rounded-full p-1.5 bg-white shadow hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() =>
              setPage((prev) =>
                prev === viralPages.length - 1 ? 0 : prev + 1
              )
            }
            className="border rounded-full p-1.5 bg-white shadow hover:bg-gray-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>


    </section>
  );
}
