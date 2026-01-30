"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const videoData = [
  { id: 1, title: "Italy Says India-EU FTA Is About Trust, Talent And Technology", views: "286 views", time: "4 hours ago", duration: "05:35", image: "https://picsum.photos/seed/thumb1/400/225" },
  { id: 2, title: "How Tech Is Changing The Way We Watch Sports", views: "1.2K views", time: "1 day ago", duration: "03:50", image: "https://picsum.photos/seed/thumb2/400/225" },
  { id: 3, title: "Inside The World Of High-Speed Electric Racing", views: "2.3K views", time: "2 hours ago", duration: "04:20", image: "https://picsum.photos/seed/thumb3/400/225" },
  { id: 4, title: "Top 10 Moments In Sports History", views: "4.6K views", time: "3 days ago", duration: "06:10", image: "https://picsum.photos/seed/thumb4/400/225" },
  { id: 5, title: "Fitness Trends That Are Shaping Modern Athletes", views: "890 views", time: "6 hours ago", duration: "05:05", image: "https://picsum.photos/seed/thumb5/400/225" },
  { id: 6, title: "New Rules Changing Football Forever", views: "3.1K views", time: "1 hour ago", duration: "02:45", image: "https://picsum.photos/seed/thumb6/400/225" },
  { id: 7, title: "Top 5 Cricket Moments of 2024", views: "1.8K views", time: "9 hours ago", duration: "04:55", image: "https://picsum.photos/seed/thumb7/400/225" },
  { id: 8, title: "Tennis Stars Who Changed The Game", views: "2.9K views", time: "5 hours ago", duration: "03:20", image: "https://picsum.photos/seed/thumb8/400/225" },
  { id: 9, title: "Formula E: What You Need To Know", views: "980 views", time: "12 hours ago", duration: "05:15", image: "https://picsum.photos/seed/thumb9/400/225" },
];

export default function TopVideosSection() {
  const carouselRef = useRef(null);
  const [page, setPage] = useState(0);

  const CARD_WIDTH = 182;
  const GAP = 16;
  const VISIBLE_CARDS = 3;

  const totalPages = Math.ceil(videoData.length / VISIBLE_CARDS);

  // Scroll function
  const scrollToPage = (pageIndex) => {
    if (!carouselRef.current) return;
    const scrollLeft = pageIndex * (CARD_WIDTH + GAP) * VISIBLE_CARDS;
    carouselRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
    setPage(pageIndex);
  };

  const scrollLeft = () => {
    const newPage = Math.max(page - 1, 0);
    scrollToPage(newPage);
  };

  const scrollRight = () => {
    const newPage = Math.min(page + 1, totalPages - 1);
    scrollToPage(newPage);
  };

  return (
    <section className="rounded max-w-[980px] mt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[16px] font-semibold text-black">Top Videos</h2>
        <Link href="#" className="text-red-600 text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Top Row */}
      <div className="flex gap-4 mb-4">
        {/* Featured Video (NORMAL SIZE) */}
        <Link href="/videos/1"> {/* Link to the video details page */} 
        <div className="w-[660px] border rounded-lg overflow-hidden flex h-[220px]">
          {/* LEFT: Image */}
          <div className="relative w-[390px] h-[220px] flex-shrink-0">
            <Image
              src="https://picsum.photos/seed/mainvideo/800/450"
              alt="Featured video"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-80 rounded-full flex items-center gap-2 px-3 py-1 select-none">
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
                <span className="text-white text-xs font-semibold">05:24</span>
              </div>

            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="p-3 flex flex-col justify-center">
            <h3 className="text-[15px] font-semibold leading-snug mb-1">
              ‘Our Neighbour Did Incredibly Well’: India Tech Funding Question
              Puts Pak...
            </h3>
            <p className="text-[13px] text-gray-600 mb-1">
              At the World Economic Forum in Davos, Pakistan’s Finance Minister
              Senator...
            </p>
            <span className="text-[11px] text-gray-500">
              1.5K views | 3 hours ago
            </span>
          </div>
        </div>
        </Link>

        {/* Ad Banner (MATCH HEIGHT) */}
        <div className="w-[300px] h-[220px] border rounded-lg overflow-hidden">
          <Image
            src="https://picsum.photos/seed/adbanner/300/360"
            alt="Ad"
            width={200}
            height={360}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-hidden scroll-smooth"
        >
          {videoData.map((item) => (
            <Link key={item.id} href={`/videos/${item.id}`} passHref>
            <div key={item.id} className="w-[182px] flex-shrink-0">
              <div className="relative h-[100px] rounded overflow-hidden mb-2">
                <Image
                  src={item.image}
                  alt="Video"
                  fill
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
                  <span className="text-white text-xs font-semibold">{item.duration}</span>
                </div>
              </div>

              <p className="text-[12px] leading-snug line-clamp-2 mb-0.5">
                {item.title}
              </p>
              <span className="text-[10px] text-gray-500">
                {item.views} | {item.time}
              </span>
            </div>
            </Link>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={scrollLeft}
            disabled={page === 0}
            className="bg-white/90 border rounded-full p-2 shadow hover:bg-white disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={scrollRight}
            disabled={page === totalPages - 1}
            className="bg-white/90 border rounded-full p-2 shadow hover:bg-white disabled:opacity-40"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`transition-all duration-300 ${index === page
                ? "w-4 h-2 bg-black rounded-full"
                : "w-2 h-2 bg-gray-300 rounded-full"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
