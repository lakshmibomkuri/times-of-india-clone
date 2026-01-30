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
    thumbnail:
        "https://images.unsplash.com/photo-1606813909832-1b0c3b24a8b2?crop=entropy&cs=tinysrgb&fit=max&h=500&w=900&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BpZGVyLW1hbnxlbnwwfHx8fDE2OTUwNzg2MzI", // Spider-Man themed
};

export const smallVideos = [
    {
        title: "Tom Cruise's New Mission Impossible Stunt Revealed",
        views: "120K views",
        time: "6 hours ago",
        duration: "03:50",
        thumbnail:
            "https://images.unsplash.com/photo-1598554019788-74f918ef36c8?crop=entropy&cs=tinysrgb&fit=max&h=225&w=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlzc2lvbi1pbXBvc3NpYmxlfGVufDB8fHx8MTY5NTA3ODY1NQ", // Action / stunt
    },
    {
        title: "Avengers Reunite: Behind the Scenes Secrets",
        views: "85K views",
        time: "8 hours ago",
        duration: "05:05",
        thumbnail:
            "https://images.unsplash.com/photo-1614238856595-3a7a6b35d8d5?crop=entropy&cs=tinysrgb&fit=max&h=225&w=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZlbmdlcnN8ZW58MHx8fHwxNjk1MDc4Njc5", // Avengers theme
    },
    {
        title: "Chris Hemsworth Talks About Thor's Next Chapter",
        views: "98K views",
        time: "10 hours ago",
        duration: "04:30",
        thumbnail:
            "https://images.unsplash.com/photo-1618328325686-9e7d9e3c5c1f?crop=entropy&cs=tinysrgb&fit=max&h=225&w=400&ixid=MnwxfDB8MXxyYW5kb218MHx8dGhvcnxlbnwwfHx8fDE2OTUwNzg3MDg", // Thor / superhero theme
    },
    {
        title: "Jennifer Lawrence Shares Fun Moments on Set",
        views: "65K views",
        time: "1 day ago",
        duration: "03:25",
        thumbnail:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&h=225&w=400&ixid=MnwxfDB8MXxyYW5kb218MHx8amVuZmlmZXItbGF3cmVuY2V8ZW58MHx8fHwxNjk1MDc4NzI5", // Jennifer Lawrence / actress
    },
];


/* =====================
   COMPONENT
===================== */

export default function HollywoodSection() {
    return (
        <section className="bg-white rounded-xl border border-gray-200 p-2 mt-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] font-semibold">Hollywood</h2>
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
                        {/* <span className="absolute bottom-4 right-3 bg-red-500  text-white text-xs px-2 py-0.5 rounded flex items-center gap-1 z-10">
                            <Play className="w-3 h-3 fill-white" />
                            {featuredVideo.duration}
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
                {smallVideos.map((video, idx) => (
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
