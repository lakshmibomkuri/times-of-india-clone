"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

/* =====================
   DATA
===================== */

const featuredVideo = {
    title:
        "Did Chahal and RJ Mahvash's Rumoured Bond Finally End? Unfollow Sparks Fresh Speculation",
    views: "130 views",
    time: "14 hours ago",
    duration: "03:52",
    thumbnail:
        "https://picsum.photos/seed/bolly-feature/900/500",
};

const smallVideos = [
    {
        title:
            "Sushant Singh Rajput Birth Anniversary: Why His Legacy Still Hits Hard",
        views: "113 views",
        time: "15 hours ago",
        duration: "03:46",
        thumbnail: "https://picsum.photos/seed/bolly1/400/225",
    },
    {
        title:
            "Vicky Kaushal's Double Vihaan Twist Breaks Bollywood",
        views: "340 views",
        time: "16 hours ago",
        duration: "04:23",
        thumbnail: "https://picsum.photos/seed/bolly2/400/225",
    },
    {
        title:
            "Bollywood Rivalry Revealed: Ahan Shetty Responds to Ahaan Panday",
        views: "296 views",
        time: "20 hours ago",
        duration: "03:27",
        thumbnail: "https://picsum.photos/seed/bolly3/400/225",
    },
    {
        title:
            "Varun Dhawan Says Border 2 Results Will Silence Critics",
        views: "619 views",
        time: "1 day ago",
        duration: "03:07",
        thumbnail: "https://picsum.photos/seed/bolly4/400/225",
    },
];

/* =====================
   COMPONENT
===================== */

export default function BollywoodSection() {
    return (
        <section className="bg-white rounded-xl border border-gray-200 sm:p-4 mt-5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] sm:text-[18px] font-semibold">Bollywood</h2>
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
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 z-10">
                            <p className="text-white text-[13px] sm:text-[15px] font-semibold leading-snug mb-1 line-clamp-2">
                                {featuredVideo.title}
                            </p>
                            <span className="text-[11px] sm:text-[12px] text-gray-300">
                                {featuredVideo.views} • {featuredVideo.time}
                            </span>
                        </div>
                        {/* PLAY + DURATION */}
                        <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1">
                            <div className="bg-red-600 rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
                                <svg
                                    className="w-2 sm:w-3 h-2 sm:h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
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
                        <div className="absolute inset-0 bg-black/30 p-2 sm:p-4 flex flex-col justify-between">
                            <span className="bg-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded w-fit">
                                Advertisement
                            </span>
                            <button className="bg-blue-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded w-fit">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                {smallVideos.map((video, idx) => (
                    <div key={idx}>
                        <div className="relative h-[120px] sm:h-[140px] rounded overflow-hidden mb-2">
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 rounded-full flex items-center gap-1 px-1.5 sm:px-2 py-0.5">
                                <div className="bg-red-600 rounded-full w-3 sm:w-4 h-3 sm:h-4 flex items-center justify-center">
                                    <svg
                                        className="w-1.5 sm:w-2 h-1.5 sm:h-2 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="text-white text-[9px] sm:text-[10px] font-semibold">{video.duration}</span>
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