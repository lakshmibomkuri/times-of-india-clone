"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

const videos = [
  {
    image: "https://picsum.photos/seed/vid1/200/120",
    title: "PM Modi addresses nation on Republic Day",
    duration: "15:30",
  },
  {
    image: "https://picsum.photos/seed/vid2/200/120",
    title: "Budget 2026: Expert analysis and highlights",
    duration: "12:45",
  },
  {
    image: "https://picsum.photos/seed/vid3/200/120",
    title: "Cricket: India vs New Zealand highlights",
    duration: "08:20",
  },
  {
    image: "https://picsum.photos/seed/vid4/200/120",
    title: "Tech review: Latest smartphone launches",
    duration: "10:15",
  },
  {
    image: "https://picsum.photos/seed/vid5/200/120",
    title: "Entertainment: Bollywood box office report",
    duration: "06:30",
  },
  {
    image: "https://picsum.photos/seed/vid6/200/120",
    title: "Health tips: Winter wellness guide",
    duration: "09:45",
  },
];

export function VideosFullSection() {
  return (
    <section className="py-6 bg-[#1a1a1a]">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-1">
          Videos <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-6 gap-4">
          {videos.map((video, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video mb-2 overflow-hidden rounded">
                <Image
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xs leading-tight text-gray-300 group-hover:text-white line-clamp-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
