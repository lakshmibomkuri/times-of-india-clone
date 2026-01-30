"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const mainVideo = {
  title:
    "Denmark Sends More Troops To Greenland As Trump Pressure Mounts",
  description:
    "Denmark boosts military presence in Greenland amid rising tensions after renewed statements from Donald Trump.",
  sub:
    "The move has reignited debates around NATO commitments and Arctic geopolitics.",
  views: "156K views",
  time: "9 days ago",
  duration: "09:45",
  thumbnail: "https://picsum.photos/seed/international-main/900/500",
};

const sideVideos = [
  {
    title: "Forget Greenland, Now US Military Eyes Mexico?",
    views: "89K views",
    time: "16 days ago",
    duration: "11:20",
    thumbnail: "https://picsum.photos/seed/international1/300/170",
  },
  {
    title: "Qatar May Push Out US Forces From Al Udeid Base",
    views: "67K views",
    time: "14 days ago",
    duration: "08:15",
    thumbnail: "https://picsum.photos/seed/international2/300/170",
  },
  {
    title: "‘Happy Vassal Or Miserable Slave?’ Belgian PM Slams Trump",
    views: "45K views",
    time: "12 days ago",
    duration: "06:30",
    thumbnail: "https://picsum.photos/seed/international3/300/170",
  },
  {
    title: "China Reacts Sharply To US Naval Exercise Near Taiwan",
    views: "132K views",
    time: "10 days ago",
    duration: "10:05",
    thumbnail: "https://picsum.photos/seed/international4/300/170",
  },
  {
    title: "Middle East On Edge As Ceasefire Talks Collapse",
    views: "98K views",
    time: "1 week ago",
    duration: "07:40",
    thumbnail: "https://picsum.photos/seed/international5/300/170",
  },
  {
    title: "Ukraine War Update: Fresh Sanctions Rock Russian Economy",
    views: "211K views",
    time: "5 days ago",
    duration: "12:10",
    thumbnail: "https://picsum.photos/seed/international6/300/170",
  },
];

export default function InternationalNewsPage() {
  return (
    <main className="max-w-[980px] mx-auto mt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[20px] font-semibold">International News</h1>
        <Link href="#" className="text-red-600 text-sm font-medium">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-[1fr_1.2fr] gap-6">
        {/* LEFT – FEATURED VIDEO */}
        <div>
          <div className="relative rounded-xl overflow-hidden border mb-3">
            <Image
              src={mainVideo.thumbnail}
              alt={mainVideo.title}
              width={900}
              height={500}
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

        {/* RIGHT – TWO COLUMN GRID */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
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
