"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Play,
} from "lucide-react";

const tabs = [
  "Sports",
  "Cricket",
  "Featured",
  "Football",
  "Formula E",
  "Tennis",
];

// 🔥 Data for all tabs (6 items each)
const videosByCategory = {
  Cricket: [
    {
      id: 1,
      title: "ISPL: Aakash Jangid on staying consistent under pressure",
      views: "22 views",
      time: "2 hours ago",
      image: "https://picsum.photos/seed/cricket1/600/400",
      duration: "05:14",
    },
    {
      id: 2,
      title: "India runs cricket no less than Bollywood abroad",
      views: "1.8K views",
      time: "12 hours ago",
      image: "https://picsum.photos/seed/cricket2/600/400",
      duration: "08:18",
    },
    {
      id: 3,
      title: "Glenn Phillips press conference: key takeaways",
      views: "76 views",
      time: "19 hours ago",
      image: "https://picsum.photos/seed/cricket3/600/400",
      duration: "09:45",
    },
    {
      id: 4,
      title: "Young talents who could dominate world cricket",
      views: "640 views",
      time: "7 hours ago",
      image: "https://picsum.photos/seed/cricket4/600/400",
      duration: "06:19",
    },
    {
      id: 5,
      title: "IPL vs ISPL: What makes street leagues special?",
      views: "980 views",
      time: "1 day ago",
      image: "https://picsum.photos/seed/cricket5/600/400",
      duration: "06:10",
    },
    {
      id: 6,
      title: "How data analytics is reshaping modern cricket",
      views: "1.3K views",
      time: "10 hours ago",
      image: "https://picsum.photos/seed/cricket6/600/400",
      duration: "05:40",
    },
  ],

  Sports: [],
  Featured: [],
  Football: [],
  "Formula E": [],
  Tennis: [],
};

export default function CategoryVideosSection() {
  const [activeTab, setActiveTab] = useState("Cricket");
  const carouselRef = useRef(null);

  const videos = videosByCategory[activeTab] || [];

  const CARD_WIDTH = 320; // card width + gap
  const VISIBLE_CARDS = 3;
  const totalPages = Math.ceil(videos.length / VISIBLE_CARDS);
  const [page, setPage] = useState(0);

  // Reset carousel on tab change
  useEffect(() => {
    setPage(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0 });
    }
  }, [activeTab]);

  const scrollLeft = () => {
    if (!carouselRef.current) return;

    const newPage = Math.max(page - 1, 0);
    carouselRef.current.scrollTo({
      left: newPage * CARD_WIDTH * VISIBLE_CARDS,
      behavior: "smooth",
    });
    setPage(newPage);
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;

    const newPage = Math.min(page + 1, totalPages - 1);
    carouselRef.current.scrollTo({
      left: newPage * CARD_WIDTH * VISIBLE_CARDS,
      behavior: "smooth",
    });
    setPage(newPage);
  };

  return (
    <section className="mb-6 max-w-[980px] mt-5">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-5 text-[15px]">
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-1 ${
                tab === activeTab
                  ? "text-red-600 border-b-2 border-red-600 font-medium"
                  : "text-gray-700"
              }`}
            >
              {tab}
            </span>
          ))}
          <MoreVertical className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>

        <Link href="#" className="text-red-600 text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-hidden scroll-smooth"
        >
          {videos.map((video) => (
            <div key={video.id} className="w-[300px] flex-shrink-0">
              {/* Thumbnail */}
              <div className="relative h-[165px] rounded-xl overflow-hidden mb-2 bg-black">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                {/* Play Icon */}
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
                </div>
              </div>

              {/* Title */}
              <p className="text-[15px] font-medium leading-snug mb-1 line-clamp-2">
                {video.title}
              </p>

              {/* Meta */}
              <span className="text-[13px] text-gray-500">
                {video.views} | {video.time}
              </span>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          disabled={page === 0}
          className="absolute left-3 top-[75px] z-10 bg-white/90 border rounded-full p-2 shadow hover:bg-white disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={scrollRight}
          disabled={page === totalPages - 1}
          className="absolute right-10 top-[75px] z-10 bg-white/90 border rounded-full p-2 shadow hover:bg-white disabled:opacity-40"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Pagination Dots */}
      {/* Pagination (EXACT like image) */}
<div className="flex justify-center items-center gap-2 mt-4">
  {Array.from({ length: totalPages }).map((_, index) => (
    <span
      key={index}
      className={`transition-all duration-300 ${
        index === page
          ? "w-5 h-2 bg-black rounded-full"
          : "w-2 h-2 bg-gray-300 rounded-full"
      }`}
    />
  ))}
</div>

    </section>
  );
}
