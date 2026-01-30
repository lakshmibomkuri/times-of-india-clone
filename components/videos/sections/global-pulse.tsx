"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const mainVideo = {
    title:
        "500 Protesters Dead, Khamenei Under Fire, Will Trump Invade Iran?",
    description:
        "500 Killed, 10,000 Held: Iran On Edge Amid Loud Calls For Khamenei’s Ouster, Will Trump Intervene?",
    sub:
        "Are Ayatollah Ali Khamenei’s days as the Supreme Leader of Iran numbered?",
    views: "64 views",
    time: "9 days ago",
    duration: "23:26",
    thumbnail: "https://picsum.photos/seed/globalmain/900/500",
};

const sideVideos = [
    {
        title: "Venezuela To Greenland: Is Trump Writing Dangerous...",
        views: "51 views",
        time: "16 days ago",
        duration: "13:48",
        thumbnail: "https://picsum.photos/seed/global1/300/170",
    },
    {
        title: "After Venezuela Capture, Trump Threatens More...",
        views: "403 views",
        time: "16 days ago",
        duration: "27:45",
        thumbnail: "https://picsum.photos/seed/global2/300/170",
    },
    {
        title: "‘Start Making Money’: Was Trump’s Venezuela Attack War...",
        views: "184 views",
        time: "16 days ago",
        duration: "05:49",
        thumbnail: "https://picsum.photos/seed/global3/300/170",
    },
    {
        title: "‘Can Raise Tariffs Very Quickly’: Trump Threatens India Again",
        views: "615 views",
        time: "17 days ago",
        duration: "10:24",
        thumbnail: "https://picsum.photos/seed/global4/300/170",
    },
    {
        title: "Inside Belgian Envoy’s Christmas Bash: Carols, Gala...",
        views: "53 views",
        time: "28 days ago",
        duration: "13:56",
        thumbnail: "https://picsum.photos/seed/global5/300/170",
    },
    {
        title: "Trump’s H-1B Visa Chaos: Jobs At Risk, Families Traumatised",
        views: "76.6K views",
        time: "1 month ago",
        duration: "05:57",
        thumbnail: "https://picsum.photos/seed/global6/300/170",
    },
];

export default function GlobalPulsePage() {
    return (
        <main className="max-w-[980px] mx-auto mt-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-[20px] font-semibold">Global-Pulse</h1>
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
