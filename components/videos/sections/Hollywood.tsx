"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

/* =====================
   DATA FOR HOLLYWOOD
===================== */

export const featuredVideo = {
    title: "Spider-Man: No Way Home Sequel Rumors and Latest Updates",
    views: "250K views",
    time: "5 hours ago",
    duration: "04:12",
    thumbnail: "https://picsum.photos/900/500?random=1",
  };
  
  export const smallVideos = [
    {
      title: "Tom Cruise's New Mission Impossible Stunt Revealed",
      views: "120K views",
      time: "6 hours ago",
      duration: "03:50",
      thumbnail: "https://picsum.photos/400/225?random=2",
    },
    {
      title: "Avengers Reunite: Behind the Scenes Secrets",
      views: "85K views",
      time: "8 hours ago",
      duration: "05:05",
      thumbnail: "https://picsum.photos/400/225?random=3",
    },
    {
      title: "Chris Hemsworth Talks About Thor's Next Chapter",
      views: "98K views",
      time: "10 hours ago",
      duration: "04:30",
      thumbnail: "https://picsum.photos/400/225?random=4",
    },
    {
      title: "Jennifer Lawrence Shares Fun Moments on Set",
      views: "65K views",
      time: "1 day ago",
      duration: "03:25",
      thumbnail: "https://picsum.photos/400/225?random=5",
    },
  ];
  


/* =====================
   COMPONENT
===================== */

export default function HollywoodSection() {
    return (
        <section className="w-full mx-auto pt-5 sm:px-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] sm:text-[18px] font-semibold">Hollywood</h2>
                <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
                    See All
                </Link>
            </div>

            {/* TOP ROW */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-5">
                {/* Featured Video */}
                <div className="flex-1 border rounded-xl overflow-hidden">
                    <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">

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
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                            <p className="text-white text-[13px] sm:text-[15px] font-semibold leading-snug mb-1 line-clamp-2 sm:line-clamp-none">
                                {featuredVideo.title}
                            </p>
                            <span className="text-[11px] sm:text-[12px] text-gray-300">
                                {featuredVideo.views} • {featuredVideo.time}
                            </span>
                        </div>
                        <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 select-none">
      {/* Red circle with white play icon */}
      <div className="bg-red-600 rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
        <svg
          className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Duration text */}
      <span className="text-white text-[10px] sm:text-xs font-semibold">{featuredVideo.duration}</span>
    </div>
                    </div>
                </div>

                {/* Advertisement */}
                <div className="w-full lg:w-[300px] flex-shrink-0">
                    <div className="relative h-[150px] sm:h-[180px] lg:h-[200px] rounded-xl overflow-hidden border">
                        <Image
                            src="https://picsum.photos/seed/bolly-ad/300/360"
                            alt="Ad"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 p-3 sm:p-4 flex flex-col justify-between">
                            <span className="bg-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded w-fit">
                                Advertisement
                            </span>
                            <button className="bg-blue-600 text-white text-[10px] sm:text-xs px-3 py-1 rounded w-fit">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {smallVideos.map((video, idx) => (
                    <div key={idx}>
                        <div className="relative h-[120px] sm:h-[140px] rounded overflow-hidden mb-2">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 select-none">
      {/* Red circle with white play icon */}
      <div className="bg-red-600 rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
        <svg
          className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Duration text */}
      <span className="text-white text-[10px] sm:text-xs font-semibold">{video.duration}</span>
    </div>
                        </div>
                        <p className="text-[12px] sm:text-[13px] leading-snug line-clamp-2 mb-0.5">
                            {video.title}
                        </p>
                        <span className="text-[10px] sm:text-[11px] text-gray-500">
                            {video.views} | {video.time}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
