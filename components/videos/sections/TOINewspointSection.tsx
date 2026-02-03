"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// ------------------
// Video Type
// ------------------
type Video = {
  id: number;
  title: string;
  views: string;
  time: string;
  duration: string;
  image: string;
};

// ------------------
// Sample Videos
// ------------------
const topVideos: Video[] = [
  { id: 1, title: "Breaking News: Global Economy Update", views: "1.2K", time: "2 hours ago", duration: "12:34", image: "https://picsum.photos/seed/tv1/400/225" },
  { id: 2, title: "Live: Political Debate Highlights", views: "980", time: "3 hours ago", duration: "15:22", image: "https://picsum.photos/seed/tv2/400/225" },
  { id: 3, title: "Top 10 TV Shows You Must Watch", views: "2.3K", time: "5 hours ago", duration: "10:45", image: "https://picsum.photos/seed/tv3/400/225" },
  { id: 4, title: "Interview: Celebrity Shares Secrets", views: "1.1K", time: "1 day ago", duration: "14:18", image: "https://picsum.photos/seed/tv4/400/225" },
  { id: 5, title: "Sports Update: Football Highlights", views: "850", time: "1 day ago", duration: "08:50", image: "https://picsum.photos/seed/tv5/400/225" },
  { id: 6, title: "Trending Now: Viral Videos Compilation", views: "3K", time: "2 days ago", duration: "11:20", image: "https://picsum.photos/seed/tv6/400/225" },
  { id: 7, title: "Exclusive: Behind The Scenes in Newsrooms", views: "1.5K", time: "2 hours ago", duration: "13:00", image: "https://picsum.photos/seed/tv7/400/225" },
];

// ------------------
// TOI News Section
// ------------------
export default function TOINewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CARD_WIDTH = isMobile ? 280 : 310;
  const VISIBLE_CARDS = isMobile ? 1 : 3;
  const totalPages = Math.ceil(topVideos.length / VISIBLE_CARDS);

  const scrollToPage = (newPage: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: newPage * CARD_WIDTH * VISIBLE_CARDS,
      behavior: "smooth",
    });
    setPage(newPage);
  };

  return (
    <section className="w-full mx-auto pt-5 sm:px-0">
      {/* Header + See All */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#111]">TOI Newspoint</h2>
        <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-2 overflow-hidden scroll-smooth"
        >
          {topVideos.map((video) => (
            <div key={video.id} className="w-[280px] sm:w-[310px] flex-shrink-0">
              <div className="relative h-[160px] sm:h-[180px] rounded-lg overflow-hidden mb-2">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/70 w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-2xl">
                  <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white bg-red-500 p-0.5 sm:p-1 rounded-2xl" />
                </div>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-snug line-clamp-2 mb-0.5">
                {video.title}
              </p>
              <span className="text-[11px] sm:text-[12px] text-gray-500">
                {video.views} | {video.time}
              </span>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scrollToPage(Math.max(page - 1, 0))}
          disabled={page === 0}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 sm:p-2 shadow z-10 disabled:opacity-40"
        >
          <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>

        <button
          onClick={() => scrollToPage(Math.min(page + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 sm:p-2 shadow z-10 disabled:opacity-40"
        >
          <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1 sm:gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${
              idx === page ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
