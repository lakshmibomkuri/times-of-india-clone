"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const trendingTags = [
  "Green Card Mistake",
  "Rohit Sharma",
  "MLB Trade Rumors",
  "Influencer Jake Lang",
  "Bill Belichick",
  "BCCI Central Contract",
  "T20 World Cup 2026 Schedule",
  "PM M",
];

export function TrendingNewsBar() {
  return (
    <section className="py-4 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 whitespace-nowrap">Trending News</span>
          
          <div className="flex-1 flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {trendingTags.map((tag, idx) => (
              <button
                key={idx}
                className="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex gap-1">
            <button className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
