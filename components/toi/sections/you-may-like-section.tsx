"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sponsoredContent = [
  {
    image: "https://picsum.photos/seed/sp1/160/110",
    title: '"No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!',
    source: "TradeWise",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp2/160/110",
    title: "Chandanagar: Best Public Speaking Course for Children",
    source: "Planet Spark",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp3/160/110",
    title: "Trader Hemant Explains His Swing Trading Strategy for Free!",
    source: "TradeWise",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp4/160/110",
    title: "Blurry Vision & Fading Eyesight? Do This Immediately!",
    source: "Vision Veda",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp5/160/110",
    title: "Glaucoma and cataract can disappear! And vision can return quickly",
    source: "Vision Veda",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp6/160/110",
    title: "Transform Your Child's Confidence with Our Public Speaking Program",
    source: "Planet Spark",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp7/160/110",
    title: "Best Investment Options for 2026: Expert Recommendations",
    source: "FinanceHub",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp8/160/110",
    title: "Learn AI & Machine Learning from IIT Professors",
    source: "EduTech",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp9/160/110",
    title: "Luxury Apartments Starting from 50 Lakhs in Hyderabad",
    source: "PropertyNow",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp10/160/110",
    title: "Book Your Dream Vacation at 70% Off - Limited Time Offer",
    source: "TravelMax",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp11/160/110",
    title: "Premium Health Insurance Plans for Your Family",
    source: "HealthFirst",
    sponsored: true,
  },
  {
    image: "https://picsum.photos/seed/sp12/160/110",
    title: "Electric Cars 2026: Best Options Under 20 Lakhs",
    source: "AutoWorld",
    sponsored: true,
  },
];

export function YouMayLikeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(sponsoredContent.length / itemsPerPage);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const visibleItems = sponsoredContent.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-6 border-t border-dashed border-gray-300">
    <div className="max-w-[980px] mx-auto px-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
          You May Like
        </h2>
        <span className="text-[10px] text-gray-400">by Taboola</span>
      </div>
  
      <div className="grid grid-cols-6 gap-4">
        {visibleItems.map((item, idx) => (
          <Link key={idx} href="#" className="group cursor-pointer">
            <div className="relative aspect-[4/3] mb-2 overflow-hidden rounded">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-[11px] leading-tight text-gray-800 group-hover:text-red-600 line-clamp-3 mb-1">
              {item.title}
            </h3>
            <p className="text-[10px] text-gray-500">
              {item.source} | <span className="text-gray-400">Sponsored</span>
            </p>
          </Link>
        ))}
      </div>
  
      {/* Footer: Dots on left, Arrows on right */}
      <div className="flex justify-between items-center mt-4">
        {/* Pagination dots on left */}
        <div className="flex gap-1">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex
                  ? 'w-4 h-1 bg-gray-800'
                  : 'w-1 h-1 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
  
        {/* Navigation arrows on right */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button
            onClick={handleNext}
            className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  </section>
  
  );
}
