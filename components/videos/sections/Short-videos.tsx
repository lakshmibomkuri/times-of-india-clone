"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_VIEW = 6;
const CARD_WIDTH = 158;
const VIEW_WIDTH = ITEMS_PER_VIEW * CARD_WIDTH;

export const shortVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Global Economy 2026 Outlook",
    views: "720K",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1580130732478-4e339fb6836f",
    title: "‘Canada Showed Up’: Carney Jibes Trump",
    views: "860K",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    title: "China’s Humanoid Robot Shocks World",
    views: "2.1M",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d",
    title: "Java On Edge As Mount Semeru Erupts",
    views: "540K",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1542228262-3d663b306a53",
    title: "Emergency In Los Angeles: Monster Storm",
    views: "980K",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    title: "Modi & Meloni Break The Internet",
    views: "3.4M",
  },
  {
    id: 7,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "AI Chip Race Heats Up",
    views: "1.7M",
  },
  {
    id: 8,
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Mars Mission Breakthrough",
    views: "2.8M",
  },
  {
    id: 9,
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Inside World’s Smartest Factory",
    views: "640K",
  },
  {
    id: 10,
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Stock Market Shock Explained",
    views: "910K",
  },
  {
    id: 11,
    thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    title: "Robots Take Over Warehouses",
    views: "2.2M",
  },
];

export default function ShortsSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ITEMS_PER_VIEW = isMobile ? 2 : 6;
  const CARD_WIDTH = isMobile ? 140 : 158;
  const VIEW_WIDTH = ITEMS_PER_VIEW * CARD_WIDTH;
  const totalPages = Math.ceil(shortVideos.length / ITEMS_PER_VIEW);

  const handlePrev = () => {
    setPageIndex((p) => Math.max(p - 1, 0));
  };

  const handleNext = () => {
    setPageIndex((p) => Math.min(p + 1, totalPages - 1));
  };

  return (
    <section className="w-full max-w-[980px] mx-auto px-2 sm:px-0 mb-4 sm:mb-6">
      <h2 className="text-[16px] sm:text-[18px] font-bold mb-3">Short Videos</h2>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-1.5 sm:gap-2 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${pageIndex * VIEW_WIDTH}px)`,
          }}
        >
          {shortVideos.map((short) => (
            <Link
              key={short.id}
              href="#"
              className="flex-shrink-0 w-[135px] sm:w-[150px]"
            >
              <div className="rounded-lg overflow-hidden bg-white">
                <div className="relative aspect-[9/16]">
                  <Image
                    src={short.thumbnail}
                    alt={short.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 bg-black/70 w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-2xl">
                    <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white" />
                  </div>
                </div>

                <div className="p-1.5 sm:p-2">
                  <p className="text-[9px] sm:text-[10px] font-medium line-clamp-2">
                    {short.title}
                  </p>
                  <span className="text-[8px] sm:text-[9px] text-gray-500">
                    {short.views} views
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          disabled={pageIndex === 0}
          className="absolute left-1 sm:left-3 top-[100px] sm:top-[120px] bg-white p-1 sm:p-1.5 rounded-full shadow disabled:opacity-40 z-10"
        >
          <ChevronLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
        </button>

        <button
          onClick={handleNext}
          disabled={pageIndex === totalPages - 1}
          className="absolute right-1 sm:right-3 top-[100px] sm:top-[120px] bg-white p-1 sm:p-1.5 rounded-full shadow disabled:opacity-40 z-10"
        >
          <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
        </button>
      </div>

      {/* DOTTED PAGINATION */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPageIndex(i)}
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition ${
              i === pageIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
