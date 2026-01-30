"use client";

import Link from "next/link";

export function PopularCategoriesSection() {
  const columns = [
    ["Headlines", "Health+ Tips", "Chinese Horoscope Predictio...", "Platinum Rate Today", "NFL Schedule"],
    ["Sports News", "Indian TV Shows", "Markets", "Is Bank open today", "Technology News"],
    ["Business News", "Technology", "Astrology", "Is Bank Open Tomorrow", "International Sports"],
    ["India News", "Travel", "Weather Today", "Bank Holidays January 2026", "Public Holidays"],
    ["World News", "Etimes", "Gold Rate Today", "Public Holidays January 2026", "Bank Holidays"],
    ["Bollywood News", "Health & Fitness", "Silver Rate Today", "Deorhi", ""],
  ];

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <h2 className="text-[15px] font-bold text-gray-900 mb-4">Popular Categories</h2>
      <div className="border border-gray-200 rounded-lg p-5 bg-white">
        <div className="grid grid-cols-6 gap-x-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.filter(c => c).map((cat, idx) => (
                <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 block leading-snug">
                  {cat}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
