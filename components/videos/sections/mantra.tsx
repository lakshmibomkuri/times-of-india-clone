"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const mainVideo = {
  title:
    "Mantra With Pallavi Ghosh: Why India’s Economy Is At A Turning Point",
  description:
    "On Mantra, Pallavi Ghosh breaks down the economic signals that indicate a major shift in India’s growth trajectory.",
  sub:
    "From inflation to global pressure points, here is what the data really says.",
  views: "92K views",
  time: "8 days ago",
  duration: "18:32",
  thumbnail: "https://picsum.photos/seed/mantra-main/900/500",
};

const sideVideos = [
  {
    title: "Mantra: Is Middle Class Really Benefiting From Growth?",
    views: "54K views",
    time: "15 days ago",
    duration: "07:48",
    thumbnail: "https://picsum.photos/seed/mantra1/300/170",
  },
  {
    title: "Mantra Explained: Budget Promises vs Ground Reality",
    views: "61K views",
    time: "12 days ago",
    duration: "09:20",
    thumbnail: "https://picsum.photos/seed/mantra2/300/170",
  },
  {
    title: "Jobs Crisis Or Job Shift? Mantra Decodes The Numbers",
    views: "47K views",
    time: "10 days ago",
    duration: "06:55",
    thumbnail: "https://picsum.photos/seed/mantra3/300/170",
  },
  {
    title: "Is India Ready For The Next Economic Slowdown?",
    views: "83K views",
    time: "1 week ago",
    duration: "11:10",
    thumbnail: "https://picsum.photos/seed/mantra4/300/170",
  },
  {
    title: "Tax Burden Rising? Mantra Explains Who Really Pays",
    views: "39K views",
    time: "6 days ago",
    duration: "08:05",
    thumbnail: "https://picsum.photos/seed/mantra5/300/170",
  },
  {
    title: "Mantra: Why Global Events Hit Indian Markets Hard",
    views: "105K views",
    time: "4 days ago",
    duration: "10:42",
    thumbnail: "https://picsum.photos/seed/mantra6/300/170",
  },
];

export default function MantraPage() {
  return (
    <main className="max-w-[980px] mx-auto mt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[20px] font-semibold">Mantra</h1>
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
