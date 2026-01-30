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

export type VideoCategory = "Hindi" | "Marathi" | "Kannada" | "Tamil" | "Telugu";

// ------------------
// Sample Data
// ------------------
export const tvVideosByCategory: Record<VideoCategory, Video[]> = {
  Hindi: [
    {
      id: 1,
      title: "Bollywood Gossip & Updates",
      views: "1.8K",
      time: "4 hours ago",
      duration: "09:50",
      thumbnail:
        "https://images.unsplash.com/photo-1517602302552-471fe67acf66?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 2,
      title: "Hindi Drama TV Shows Highlights",
      views: "980",
      time: "5 hours ago",
      duration: "12:15",
      thumbnail:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 3,
      title: "Music Videos: Top Hits in Hindi",
      views: "2.2K",
      time: "6 hours ago",
      duration: "10:05",
      thumbnail:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 4,
      title: "Cooking Shows: Delicious Recipes",
      views: "1.1K",
      time: "1 day ago",
      duration: "14:18",
      thumbnail:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 5,
      title: "Comedy Shows: Laugh Out Loud",
      views: "850",
      time: "1 day ago",
      duration: "08:50",
      thumbnail:
        "https://images.unsplash.com/photo-1543589077-47d81606c1bf?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 6,
      title: "Reality TV: Behind The Scenes",
      views: "3K",
      time: "2 days ago",
      duration: "11:20",
      thumbnail:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?fit=crop&w=900&h=500&q=80"
    },
  ],

  Marathi: [
    {
      id: 1,
      title: "Marathi News Headlines",
      views: "1.1K",
      time: "3 hours ago",
      duration: "12:50",
      thumbnail:
        "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 2,
      title: "Marathi TV Serial Update",
      views: "980",
      time: "4 hours ago",
      duration: "10:35",
      thumbnail:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 3,
      title: "Marathi Music Videos",
      views: "1.8K",
      time: "5 hours ago",
      duration: "08:45",
      thumbnail:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 4,
      title: "Marathi Comedy Shows",
      views: "1.2K",
      time: "1 day ago",
      duration: "13:20",
      thumbnail:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 5,
      title: "Marathi Reality TV",
      views: "950",
      time: "1 day ago",
      duration: "09:50",
      thumbnail:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 6,
      title: "Marathi Cooking Shows",
      views: "1.4K",
      time: "2 days ago",
      duration: "11:10",
      thumbnail:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?fit=crop&w=900&h=500&q=80"
    },
  ],

  Kannada: [
    {
      id: 1,
      title: "Kannada Movie Trailers",
      views: "1.5K",
      time: "3 hours ago",
      duration: "10:50",
      thumbnail:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 2,
      title: "Kannada TV Drama Updates",
      views: "1.2K",
      time: "5 hours ago",
      duration: "12:30",
      thumbnail:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 3,
      title: "Kannada Music Videos",
      views: "2K",
      time: "6 hours ago",
      duration: "11:15",
      thumbnail:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 4,
      title: "Kannada Comedy Shows",
      views: "980",
      time: "1 day ago",
      duration: "09:50",
      thumbnail:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 5,
      title: "Reality TV Kannada Edition",
      views: "1.3K",
      time: "2 days ago",
      duration: "12:05",
      thumbnail:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 6,
      title: "Cooking Show Kannada Recipes",
      views: "1.1K",
      time: "3 days ago",
      duration: "10:40",
      thumbnail:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?fit=crop&w=900&h=500&q=80"
    },
  ],

  Tamil: [
    {
      id: 1,
      title: "Tamil Cinema Updates",
      views: "1.8K",
      time: "4 hours ago",
      duration: "11:20",
      thumbnail:
        "https://images.unsplash.com/photo-1517602302552-471fe67acf66?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 2,
      title: "Tamil TV Serials Highlights",
      views: "1.5K",
      time: "5 hours ago",
      duration: "10:50",
      thumbnail:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 3,
      title: "Tamil Music Videos",
      views: "2.3K",
      time: "6 hours ago",
      duration: "12:15",
      thumbnail:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 4,
      title: "Comedy Shows in Tamil",
      views: "1.1K",
      time: "1 day ago",
      duration: "09:40",
      thumbnail:
        "https://images.unsplash.com/photo-1543589077-47d81606c1bf?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 5,
      title: "Reality TV Tamil Edition",
      views: "1.4K",
      time: "2 days ago",
      duration: "11:20",
      thumbnail:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 6,
      title: "Cooking Show Tamil Recipes",
      views: "1.2K",
      time: "3 days ago",
      duration: "10:50",
      thumbnail:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?fit=crop&w=900&h=500&q=80"
    },
  ],

  Telugu: [
    {
      id: 1,
      title: "Telugu Movie Trailers",
      views: "1.7K",
      time: "3 hours ago",
      duration: "11:05",
      thumbnail:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 2,
      title: "Telugu TV Serials Updates",
      views: "1.3K",
      time: "4 hours ago",
      duration: "12:00",
      thumbnail:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 3,
      title: "Telugu Music Videos",
      views: "2K",
      time: "5 hours ago",
      duration: "10:50",
      thumbnail:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 4,
      title: "Comedy Shows Telugu Edition",
      views: "1.2K",
      time: "1 day ago",
      duration: "09:45",
      thumbnail:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 5,
      title: "Reality TV Telugu Edition",
      views: "1.5K",
      time: "2 days ago",
      duration: "11:10",
      thumbnail:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?fit=crop&w=900&h=500&q=80"
    },
    {
      id: 6,
      title: "Cooking Show Telugu Recipes",
      views: "1.1K",
      time: "3 days ago",
      duration: "10:40",
      thumbnail:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?fit=crop&w=900&h=500&q=80"
    },
  ],
};


// ------------------
// Regional Video Page Component
// ------------------
export default function RegionalVideoPage() {
  const [activeTab, setActiveTab] = useState<VideoCategory>("Hindi");
  const videos = tvVideosByCategory[activeTab];
  const tabs = Object.keys(tvVideosByCategory) as VideoCategory[];

  return (
    <section className="max-w-[980px] mx-auto mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-[18px] font-semibold">Regional Videos</h2>
          <div className="w-px bg-gray-300 h-6" />
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
        <Link href="#" className="text-red-600 text-sm font-medium hover:underline">
          See All
        </Link>
      </div>

      {/* Videos Grid */}
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
