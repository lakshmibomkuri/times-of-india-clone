"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const mainVideo = {
    title:
        "India’s Middle Class Is Shrinking: Who’s Winning, Who’s Losing?",
    description:
        "Rising inflation, stagnant salaries and soaring EMIs — India’s middle class is under pressure like never before.",
    sub:
        "Is the dream of upward mobility slipping away for millions of Indians?",
    views: "18.4K views",
    time: "3 days ago",
    duration: "21:08",
    thumbnail: "https://picsum.photos/seed/toioriginalmain/900/500",
};

const sideVideos = [
    {
        title: "Why India’s Youth Is Angry, Anxious And Burnt Out",
        views: "9.2K views",
        time: "2 days ago",
        duration: "14:32",
        thumbnail: "https://picsum.photos/seed/toioriginal1/300/170",
    },
    {
        title: "Inside India’s Obsession With Government Jobs",
        views: "12.6K views",
        time: "4 days ago",
        duration: "18:45",
        thumbnail: "https://picsum.photos/seed/toioriginal2/300/170",
    },
    {
        title: "How Coaching Centres Became India’s Shadow Education System",
        views: "7.9K views",
        time: "6 days ago",
        duration: "16:10",
        thumbnail: "https://picsum.photos/seed/toioriginal3/300/170",
    },
    {
        title: "AI vs Humans: Which Indian Jobs Are Most At Risk?",
        views: "22.1K views",
        time: "1 week ago",
        duration: "19:54",
        thumbnail: "https://picsum.photos/seed/toioriginal4/300/170",
    },
    {
        title: "Why India Works More But Earns Less Than the World",
        views: "15.3K views",
        time: "1 week ago",
        duration: "17:26",
        thumbnail: "https://picsum.photos/seed/toioriginal5/300/170",
    },
    {
        title: "The Silent Crisis of India’s Private Sector Employees",
        views: "28.7K views",
        time: "2 weeks ago",
        duration: "20:03",
        thumbnail: "https://picsum.photos/seed/toioriginal6/300/170",
    },
];


export default function ToiOrginalsPage() {
    return (
        <main className="max-w-[980px] mx-auto mt-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-[20px] font-semibold">TOI Orginals</h1>
                <Link href="#" className="text-red-600 text-sm font-medium">
                    See All
                </Link>
            </div>

            <div className="grid grid-cols-[1fr_1.2fr] gap-6">
                {/* LEFT – MAIN FEATURE */}
                <div>
                    <div className="relative rounded-xl overflow-hidden border mb-3">
                        <Image
                            src={mainVideo.thumbnail}
                            alt={mainVideo.title}
                            width={900}
                            height={500}
                            className="object-cover"
                        />

                        {/* Duration */}
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
                                    <span className="text-white text-xs font-semibold">{mainVideo.duration}</span>
                                </div>
                    </div>

                    <h2 className="text-[18px] font-semibold mb-2 leading-snug">
                        {mainVideo.title}
                    </h2>

                    <p className="text-[14px] text-gray-700 mb-2">
                        {mainVideo.description}
                    </p>

                    <p className="text-[13px] text-gray-600 mb-2">
                        {mainVideo.sub}
                    </p>

                    <span className="text-[12px] text-gray-500">
                        {mainVideo.views} | {mainVideo.time}
                    </span>
                </div>

                {/* RIGHT – VIDEO LIST */}
                {/* RIGHT – TWO COLUMN VIDEO GRID */}
                <div className="grid grid-cols-2 gap-2">
                    {sideVideos.map((video, index) => (
                        <div key={index} className="flex gap-3">
                            {/* Thumbnail */}
                            <div className="relative w-[120px] h-[68px] rounded overflow-hidden flex-shrink-0">
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

                            {/* Content */}
                            <div>
                                <p className="text-[13px] leading-snug line-clamp-2 mb-1">
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
        </main>
    );
}
