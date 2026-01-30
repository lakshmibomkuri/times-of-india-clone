"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const internationalNews = [
  {
    image: "https://picsum.photos/seed/int4/250/180",
    title: "Why the Chiefs are considering reuniting Eric Bieniemy and Travis Kelce to reset the offense",
  },
  {
    image: "https://picsum.photos/seed/int5/250/180",
    title: "Titans to hire 49ers DC Robert Saleh as head coach after Jets departure",
  },
  {
    image: "https://picsum.photos/seed/int6/250/180",
    title: "What's stopping Mike Tomlin from becoming the Buffalo Bills' next head coach?",
  },
];

const inFocusTags = ["In Focus", "WPL Points Table", "WPL Results 2026", "WPL 2026", "T20 World Cup Schedule 2026", "WPL Schedule 2026"];

export function InternationalSportsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(internationalNews.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleItems = internationalNews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-[15px] font-bold text-[#333] mb-4 flex items-center gap-1">
          International Sports <ChevronRight className="w-4 h-4" />
        </h2>

        {/* Carousel - No horizontal scroll */}
        <div className="relative mb-6">
          <div className="grid grid-cols-3 gap-4">
            {visibleItems.map((news, idx) => (
              <Link key={idx} href="#" className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-[12px] text-[#333] group-hover:text-red-600 line-clamp-3 leading-tight">
                  {news.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Navigation - Dots and Arrows */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentIndex(dot)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    dot === currentIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext}
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* In Focus Tags */}
        <div className="flex flex-wrap gap-2">
          {inFocusTags.map((tag, idx) => (
            <Link
              key={tag}
              href="#"
              className={`px-3 py-1.5 text-[11px] rounded-full border transition-colors ${
                idx === 0
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600"
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
