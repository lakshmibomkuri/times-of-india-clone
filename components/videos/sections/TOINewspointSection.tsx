"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// ------------------
// Video Type
// ------------------
type Video = {
  id: number;
  title: string;
  views: string;
  time: string;
  duration: string;
  image: string;
};

// ------------------
// Sample Videos
// ------------------
const topVideos: Video[] = [
  { id: 1, title: "Breaking News: Global Economy Update", views: "1.2K", time: "2 hours ago", duration: "12:34", image: "https://picsum.photos/seed/tv1/400/225" },
  { id: 2, title: "Live: Political Debate Highlights", views: "980", time: "3 hours ago", duration: "15:22", image: "https://picsum.photos/seed/tv2/400/225" },
  { id: 3, title: "Top 10 TV Shows You Must Watch", views: "2.3K", time: "5 hours ago", duration: "10:45", image: "https://picsum.photos/seed/tv3/400/225" },
  { id: 4, title: "Interview: Celebrity Shares Secrets", views: "1.1K", time: "1 day ago", duration: "14:18", image: "https://picsum.photos/seed/tv4/400/225" },
  { id: 5, title: "Sports Update: Football Highlights", views: "850", time: "1 day ago", duration: "08:50", image: "https://picsum.photos/seed/tv5/400/225" },
  { id: 6, title: "Trending Now: Viral Videos Compilation", views: "3K", time: "2 days ago", duration: "11:20", image: "https://picsum.photos/seed/tv6/400/225" },
  { id: 7, title: "Exclusive: Behind The Scenes in Newsrooms", views: "1.5K", time: "2 hours ago", duration: "13:00", image: "https://picsum.photos/seed/tv7/400/225" },
];

// ------------------
// TOI News Section
// ------------------
export default function TOINewsSection() {
  const VIDEOS_PER_PAGE = 3;
  const totalPages = Math.ceil(topVideos.length / VIDEOS_PER_PAGE);

  const [page, setPage] = useState(0);

  const currentVideos = topVideos.slice(
    page * VIDEOS_PER_PAGE,
    page * VIDEOS_PER_PAGE + VIDEOS_PER_PAGE
  );

  return (
    <section className="mb-6 max-w-[980px] relative mx-auto">
      {/* Header + See All */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[16px] font-bold text-[#111]">TOI Newspoint</h2>
        <Link href="#" className="text-red-600 text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Video Row with Arrows */}
      <div className="relative">
        {/* Videos */}
        <div className="flex gap-2.5">
          {currentVideos.map((video) => (
            <div key={video.id} className="flex-shrink-0 w-[310px]">
              <div className="relative h-[180px] rounded-lg overflow-hidden mb-2">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 w-12 h-6 flex items-center justify-center rounded-2xl">
                  <Play className="w-4 h-4 text-white fill-white bg-red-500 p-1 rounded-2xl" />
                </div>
              </div>
              <p className="text-[14px] leading-snug line-clamp-2 mb-0.5">
                {video.title}
              </p>
              <span className="text-[12px] text-gray-500">
                {video.views} | {video.time}
              </span>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          disabled={page === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow disabled:opacity-40 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow disabled:opacity-40 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              idx === page ? "w-5 h-2 bg-black" : "w-2 h-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
