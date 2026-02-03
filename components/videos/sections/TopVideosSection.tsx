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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CARD_WIDTH = isMobile ? 160 : 182;
  const GAP = isMobile ? 8 : 16;
  const VISIBLE_CARDS = isMobile ? 2 : 3;

  const totalPages = Math.ceil(videoData.length / VISIBLE_CARDS);

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
    <section className="rounded w-full mt-5 sm:px-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[15px] sm:text-[16px] font-semibold text-black">Top Videos</h2>
        <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Top Row */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-4">
        {/* Featured Video */}
        <Link href="/videos/1" className="flex-1">
        <div className="w-full lg:w-[660px] border rounded-lg overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[220px]">
          {/* Image */}
          <div className="relative w-full sm:w-[390px] h-[200px] sm:h-[220px] flex-shrink-0">
            <Image
              src="https://picsum.photos/seed/mainvideo/800/450"
              alt="Featured video"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
              <div className="bg-black bg-opacity-80 rounded-full flex items-center gap-2 px-2 sm:px-3 py-1">
                <div className="bg-red-600 rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
                  <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white text-[10px] sm:text-xs font-semibold">05:24</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-2 sm:p-3 flex flex-col justify-center">
            <h3 className="text-[13px] sm:text-[15px] font-semibold leading-snug mb-1">
              'Our Neighbour Did Incredibly Well': India Tech Funding Question
              Puts Pak...
            </h3>
            <p className="text-[11px] sm:text-[13px] text-gray-600 mb-1 line-clamp-2">
              At the World Economic Forum in Davos, Pakistan's Finance Minister
              Senator...
            </p>
            <span className="text-[10px] sm:text-[11px] text-gray-500">
              1.5K views | 3 hours ago
            </span>
          </div>
        </div>
        </Link>

        {/* Ad Banner */}
        <div className="w-full lg:w-[300px] h-[180px] lg:h-[220px] border rounded-lg overflow-hidden">
          <Image
            src="https://picsum.photos/seed/adbanner/300/360"
            alt="Ad"
            width={300}
            height={220}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-2 sm:gap-4 overflow-hidden scroll-smooth"
        >
          {videoData.map((item) => (
            <Link key={item.id} href={`/videos/${item.id}`} passHref>
            <div className="w-[160px] sm:w-[182px] flex-shrink-0">
              <div className="relative h-[90px] sm:h-[100px] rounded overflow-hidden mb-2">
                <Image
                  src={item.image}
                  alt="Video"
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1">
                  <div className="bg-red-600 rounded-full w-3 sm:w-5 h-3 sm:h-5 flex items-center justify-center">
                    <svg className="w-2 sm:w-3 h-2 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] sm:text-xs font-semibold">{item.duration}</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-[12px] leading-snug line-clamp-2 mb-0.5">
                {item.title}
              </p>
              <span className="text-[9px] sm:text-[10px] text-gray-500">
                {item.views} | {item.time}
              </span>
            </div>
            </Link>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-1 sm:gap-2 mt-3">
          <button
            onClick={scrollLeft}
            disabled={page === 0}
            className="bg-white/90 border rounded-full p-1.5 sm:p-2 shadow hover:bg-white disabled:opacity-40"
          >
            <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" />
          </button>

          <button
            onClick={scrollRight}
            disabled={page === totalPages - 1}
            className="bg-white/90 border rounded-full p-1.5 sm:p-2 shadow hover:bg-white disabled:opacity-40"
          >
            <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1 sm:gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`transition-all duration-300 ${
              index === page
                ? "w-3 sm:w-4 h-1.5 sm:h-2 bg-black rounded-full"
                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300 rounded-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
}