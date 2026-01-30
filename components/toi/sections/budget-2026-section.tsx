"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function Budget2026Section() {
  const headlines = [
    "History of India's Union Budgets - Some Budgets t...",
    "Budget 2026: Education experts urge government...",
    "Budget 2026 for taxpayers: Five fixes that can ma...",
    "Budget 2026: Tata Motors flags pressure on entry-...",
    "Budget 2026: MAIT seeks customs duty cuts on k..."
  ];

  const cards = [
    { title: "Budget 2026 for real estate: Luxury housing soars,...", image: "" },
    { title: "Budget 2026 income tax: What middle class, salaried...", image: "" },
    { title: "Union Budget 2026 Aviation Focus: Experts urge...", image: "" },
    { title: "Budget 2026: Simpler tax laws may lift FDI flows; experts flag...", image: "" }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Budget 2026</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Featured */}
        <div className="lg:col-span-4">
          <div className="relative aspect-[4/3] rounded overflow-hidden mb-3">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
              alt="Budget 2026"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-sm font-semibold">
                Budget 2026: Why standard deduction should be hiked under the new income tax regime - explained
              </h3>
            </div>
          </div>
        </div>

        {/* Headlines */}
        <div className="lg:col-span-4 space-y-3">
          {headlines.map((headline, i) => (
            <p key={i} className="text-sm text-gray-700 hover:text-red-600 cursor-pointer flex items-start gap-2">
              <span className="text-gray-400">○</span>
              {headline}
            </p>
          ))}
        </div>

        {/* Advertisement */}
        <div className="lg:col-span-4">
          <div className="bg-gray-100 rounded p-4 text-center">
            <p className="text-xs text-gray-400 mb-2">Advertisement</p>
            <div className="bg-white rounded p-4">
              <p className="text-orange-500 font-bold text-xl">Optum</p>
              <p className="text-teal-600 font-semibold mt-2">Now hiring for technology roles</p>
              <button className="bg-teal-600 text-white text-sm px-4 py-2 rounded mt-3">Apply today</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {cards.map((card, i) => (
          <p key={i} className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">
            {card.title}
          </p>
        ))}
      </div>
    </section>
  );
}
