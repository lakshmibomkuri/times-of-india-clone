"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

/* =====================
   DATA
===================== */

const featuredVideo = {
    title: "Top 5 Trending Songs of the Week",
    description:
      "Listen to the hottest tracks making waves this week — from pop to hip-hop, all in one playlist.",
    sub: "Your weekly dose of fresh music and trending hits.",
    views: "120K views",
    time: "3 hours ago",
    duration: "20:45",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&h=500&w=900", // music main image
  };
  
  const sideVideos = [
    {
      title: "Chill Lo-Fi Beats for Studying",
      views: "80.4K views",
      time: "1 day ago",
      duration: "10:30",
      thumbnail: "https://images.unsplash.com/photo-1511376777868-611b54f68947?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // lo-fi beats
    },
    {
      title: "Top 10 Pop Hits 2026",
      views: "95.1K views",
      time: "2 days ago",
      duration: "12:15",
      thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // pop music
    },
    {
      title: "Acoustic Covers You’ll Love",
      views: "60.7K views",
      time: "3 days ago",
      duration: "08:50",
      thumbnail: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // acoustic guitar
    },
    {
      title: "EDM Party Mix 2026",
      views: "110K views",
      time: "5 hours ago",
      duration: "15:20",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // EDM / DJ
    },
  ];
  


/* =====================
   COMPONENT
===================== */

export default function MusicSection() {
    return (
        <section className="bg-white rounded-xl border border-gray-200 p-2 mt-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] font-semibold">Music</h2>
                <Link href="#" className="text-red-600 text-sm font-medium">
                    See All
                </Link>
            </div>

            {/* TOP ROW */}
            <div className="flex gap-6 mb-5">
                {/* Featured Video */}
                <div className="flex-1 border rounded-xl overflow-hidden">
                    <div className="relative h-[300px]">

                        {/* Thumbnail / Video */}
                        <Image
                            src={featuredVideo.thumbnail}
                            alt="Bollywood Featured"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* DARK GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* CONTENT OVERLAY (TITLE + META) */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                            <p className="text-white text-[15px] font-semibold leading-snug mb-1">
                                {featuredVideo.title}
                            </p>
                            <span className="text-[12px] text-gray-300">
                                {featuredVideo.views} • {featuredVideo.time}
                            </span>
                        </div>
                        {/* PLAY + DURATION */}
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
      <span className="text-white text-xs font-semibold">{featuredVideo.duration}</span>
    </div>
                    </div>
                </div>


                {/* Advertisement */}
                <div className="w-[300px] flex-shrink-0">
                    <div className="relative h-[200px] rounded-xl overflow-hidden border">
                        <Image
                            src="https://picsum.photos/seed/bolly-ad/300/360"
                            alt="Ad"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 p-4 flex flex-col justify-between">
                            <span className="bg-white text-[10px] px-2 py-0.5 rounded w-fit">
                                Advertisement
                            </span>
                            <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded w-fit">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-4 gap-4">
                {sideVideos.map((video, idx) => (
                    <div key={idx}>
                        <div className="relative h-[140px] rounded overflow-hidden mb-2">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover"
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
                        <p className="text-[13px] leading-snug line-clamp-2 mb-0.5">
                            {video.title}
                        </p>
                        <span className="text-[11px] text-gray-500">
                            {video.views} | {video.time}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
