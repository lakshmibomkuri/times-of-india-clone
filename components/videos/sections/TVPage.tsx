"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

// ------------------
// Types
// ------------------
export type Video = {
  id: number;
  title: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
};

export type VideoCategory = "All" | "Hindi" | "English" | "Marathi";

// ------------------
// Tabs
// ------------------
const tabs: VideoCategory[] = ["All", "Hindi", "English", "Marathi"];

// ------------------
// Sample Data
// ------------------
export const tvVideosByCategory: Record<VideoCategory, Video[]> = {
  All: [
    { id: 1, title: "Breaking News: Global Economy Update", views: "1.2K", time: "2 hours ago", duration: "12:34", thumbnail: "https://picsum.photos/seed/tv1/400/225" },
    { id: 2, title: "Live: Political Debate Highlights", views: "980", time: "3 hours ago", duration: "15:22", thumbnail: "https://picsum.photos/seed/tv2/400/225" },
    { id: 3, title: "Top 10 TV Shows You Must Watch", views: "2.3K", time: "5 hours ago", duration: "10:45", thumbnail: "https://picsum.photos/seed/tv3/400/225" },
    { id: 4, title: "Interview: Celebrity Shares Secrets", views: "1.1K", time: "1 day ago", duration: "14:18", thumbnail: "https://picsum.photos/seed/tv4/400/225" },
    { id: 5, title: "Sports Update: Football Highlights", views: "850", time: "1 day ago", duration: "08:50", thumbnail: "https://picsum.photos/seed/tv5/400/225" },
    { id: 6, title: "Trending Now: Viral Videos Compilation", views: "3K", time: "2 days ago", duration: "11:20", thumbnail: "https://picsum.photos/seed/tv6/400/225" },
  ],
  Hindi: [
    { id: 1, title: "Bollywood Gossip & Updates", views: "1.8K", time: "4 hours ago", duration: "09:50", thumbnail: "https://picsum.photos/seed/hindi1/400/225" },
    { id: 2, title: "Hindi Drama TV Shows Highlights", views: "980", time: "5 hours ago", duration: "12:15", thumbnail: "https://picsum.photos/seed/hindi2/400/225" },
    { id: 3, title: "Music Videos: Top Hits in Hindi", views: "2.2K", time: "6 hours ago", duration: "10:05", thumbnail: "https://picsum.photos/seed/hindi3/400/225" },
    { id: 4, title: "Cooking Shows: Delicious Recipes", views: "1.1K", time: "1 day ago", duration: "14:18", thumbnail: "https://picsum.photos/seed/hindi4/400/225" },
    { id: 5, title: "Comedy Shows: Laugh Out Loud", views: "850", time: "1 day ago", duration: "08:50", thumbnail: "https://picsum.photos/seed/hindi5/400/225" },
    { id: 6, title: "Reality TV: Behind The Scenes", views: "3K", time: "2 days ago", duration: "11:20", thumbnail: "https://picsum.photos/seed/hindi6/400/225" },
  ],
  English: [
    { id: 1, title: "English News Channel Update", views: "900", time: "2 hours ago", duration: "10:20", thumbnail: "https://picsum.photos/seed/english1/400/225" },
    { id: 2, title: "Hollywood Movie Trailers", views: "1.5K", time: "3 hours ago", duration: "12:35", thumbnail: "https://picsum.photos/seed/english2/400/225" },
    { id: 3, title: "English TV Series Recap", views: "1.2K", time: "4 hours ago", duration: "14:00", thumbnail: "https://picsum.photos/seed/english3/400/225" },
    { id: 4, title: "Cooking Show English Edition", views: "870", time: "1 day ago", duration: "09:50", thumbnail: "https://picsum.photos/seed/english4/400/225" },
    { id: 5, title: "Science & Discovery TV Clips", views: "1.3K", time: "1 day ago", duration: "11:40", thumbnail: "https://picsum.photos/seed/english5/400/225" },
    { id: 6, title: "Documentary Highlights", views: "1K", time: "2 days ago", duration: "15:20", thumbnail: "https://picsum.photos/seed/english6/400/225" },
  ],
  Marathi: [
    { id: 1, title: "Marathi News Headlines", views: "1.1K", time: "3 hours ago", duration: "12:50", thumbnail: "https://picsum.photos/seed/marathi1/400/225" },
    { id: 2, title: "Marathi TV Serial Update", views: "980", time: "4 hours ago", duration: "10:35", thumbnail: "https://picsum.photos/seed/marathi2/400/225" },
    { id: 3, title: "Marathi Music Videos", views: "1.8K", time: "5 hours ago", duration: "08:45", thumbnail: "https://picsum.photos/seed/marathi3/400/225" },
    { id: 4, title: "Marathi Comedy Shows", views: "1.2K", time: "1 day ago", duration: "13:20", thumbnail: "https://picsum.photos/seed/marathi4/400/225" },
    { id: 5, title: "Marathi Reality TV", views: "950", time: "1 day ago", duration: "09:50", thumbnail: "https://picsum.photos/seed/marathi5/400/225" },
    { id: 6, title: "Marathi Cooking Shows", views: "1.4K", time: "2 days ago", duration: "11:10", thumbnail: "https://picsum.photos/seed/marathi6/400/225" },
  ],
};

// ------------------
// TV Page Component
// ------------------
export default function TVPage() {
  const [activeTab, setActiveTab] = useState<VideoCategory>("All");
  const videos = tvVideosByCategory[activeTab];

  return (
    <section className="max-w-[980px] mx-auto mt-5">
      {/* Header like Entertainment */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-[18px] font-semibold">TV</h2>

          {/* Vertical separator */}
          <div className="w-px bg-gray-300 h-6" />

          {/* Tabs */}
          <nav className="flex items-center gap-4 text-sm font-medium flex-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 ${
                  tab === activeTab
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-red-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* See All Button */}
        <Link
          href="#"
          className="text-red-600 text-sm font-medium hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Videos Grid: 6 videos (3+3) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {videos.slice(0, 3).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
        {videos.slice(3, 6).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

// ------------------
// Video Card Component
// ------------------
function VideoCard({ video }: { video: Video }) {
  return (
    <Link
      href="#"
      className="group block rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
        {/* <span className="absolute bottom-2 right-2 bg-red-500  text-white text-[12px] px-2 py-0.5 rounded flex items-center gap-1">
          <Play className="w-3 h-3 fill-white" />
          {video.duration}
        </span> */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-2 px-3 py-1 select-none">
      {/* Red circle with white play icon */}
          <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
      {/* Duration text */}
      <span className="text-white text-xs font-semibold">{video.duration}</span>
    </div>
      </div>
      <div className="p-2">
        <p className="text-[14px] font-medium line-clamp-2 mb-1">{video.title}</p>
        <span className="text-[12px] text-gray-500">
          {video.views} • {video.time}
        </span>
      </div>
    </Link>
  );
}
