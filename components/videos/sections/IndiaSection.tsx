"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

// ------------------
// Sample Data
// ------------------
const indiaVideos = [
  { id: 1, title: "India News Update", views: "1.2K", time: "2 hours ago", image: "https://picsum.photos/seed/india1/400/225" },
  { id: 2, title: "Top Stories Today", views: "980", time: "3 hours ago", image: "https://picsum.photos/seed/india2/400/225" },
  { id: 3, title: "Politics & Government Updates", views: "2.3K", time: "5 hours ago", image: "https://picsum.photos/seed/india3/400/225" },
  { id: 4, title: "Sports Highlights India", views: "1.1K", time: "1 day ago", image: "https://picsum.photos/seed/india4/400/225" },
  { id: 5, title: "Tech & Innovation in India", views: "850", time: "1 day ago", image: "https://picsum.photos/seed/india5/400/225" },
  { id: 6, title: "Entertainment Buzz India", views: "3K", time: "2 days ago", image: "https://picsum.photos/seed/india6/400/225" },
];

// ------------------
// India Section Component
// ------------------
export default function IndiaSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const CARD_WIDTH = 310; // width of one card including gap
  const totalPages = Math.ceil(indiaVideos.length / 3); // 3 cards per view

  const scrollToPage = (newPage: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: newPage * CARD_WIDTH,
      behavior: "smooth",
    });
    setPage(newPage);
  };

  return (
    <section className="max-w-[980px] mx-auto pt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
      <h2 className="text-[20px] font-bold text-[#111]">India</h2>
        <Link href="#" className="text-red-600 text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-2 overflow-hidden scroll-smooth"
        >
          {indiaVideos.map((video) => (
            <div key={video.id} className="w-[310px] flex-shrink-0">
              {/* Thumbnail */}
              <div className="relative h-[180px] rounded-lg overflow-hidden mb-2">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                {/* Play Icon */}
                <div className="absolute bottom-2 right-2 bg-black/70 w-12 h-6 flex items-center justify-center rounded-2xl">
                  <Play className="w-4 h-4 text-white fill-white bg-red-500 p-1 rounded-2xl" />
                </div>
              </div>

              {/* Title & Meta */}
              <p className="text-[14px] leading-snug line-clamp-2 mb-0.5">
                {video.title}
              </p>
              <span className="text-[12px] text-gray-500">
                {video.views} | {video.time}
              </span>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scrollToPage(Math.max(page - 1, 0))}
          disabled={page === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 disabled:opacity-40"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scrollToPage(Math.min(page + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 disabled:opacity-40"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${index === page ? "bg-black" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
