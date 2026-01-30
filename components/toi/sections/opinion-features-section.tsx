
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const tabs = [
  "Featured",
  "Times View",
  "Readers' Blog",
  "Q&A",
  "Times Evoke",
  "Foreign Media",
  "Entertainment",
];

// LEFT – Big feature + 4 small items
const leftFeature = {
  image: "https://picsum.photos/seed/davos/800/420",
  title: "Making Davos great again",
};

const leftSmall = [
  { title: "Why Rupee@91 is a kitchen table issue" },
  { title: "Understanding MoUs" },
  { title: "One right, many wrongs" },
  { title: "Builders, bill-ders" },
];

// CENTER – Opinion list
const listOpinions = [
  "MBZ in Delhi, Turks at our gates",
  "In BJP, what exactly will Nabin do?",
  "Death by admin",
  "Aloka & the monks",
];

// RIGHT – Items above ad
const rightOpinions = [
  {
    title: "Is Trump starting an arms race",
    image: "https://picsum.photos/seed/tp/300/200",
  },
  {
    title: "What movies don’t say about fighting extremism",
    image: "https://picsum.photos/seed/fight/300/200",
  },
];

export function OpinionFeaturesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex justify-between">
      {/* Section heading */}
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
        Opinion And Features <ChevronRight className="w-5 h-5" />
      </h2>

      {/* Tabs Row */}
      <div className="flex gap-6 mb-4 border-b border-gray-300 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-xs whitespace-nowrap ${
              activeTab === tab
                ? "text-[#e53935] border-b-2 border-[#e53935]"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>

      {/* MAIN GRID: 12 columns */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT COLUMN (5/12) */}
        <div className="col-span-12 lg:col-span-5 space-y-3">

          {/* Big feature card */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={leftFeature.image}
              alt="feature"
              width={800}
              height={420}
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white font-semibold text-[15px] leading-snug">
                {leftFeature.title}
              </h3>
            </div>
          </div>

          {/* 4 small items as 2×2 grid */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {leftSmall.map((item, idx) => (
              <div key={idx} className="cursor-pointer">
                <p className="text-sm text-gray-900 font-medium hover:text-[#e53935] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN (4/12) */}
        <div className="col-span-12 lg:col-span-4">
          <ul className="space-y-4">
            {listOpinions.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start cursor-pointer">
                <span className="text-gray-400">○</span>
                <span className="text-sm text-gray-800 hover:text-[#e53935] leading-snug flex-1 pb-2 border-b border-dotted border-gray-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN (3/12) */}
        <div className="col-span-12 lg:col-span-3">
          {/* Advertisement block */}
          <div className="mt-6 text-center">
            <p className="text-[11px] text-gray-500 mb-1">Advertisement</p>

            <div className="rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="https://picsum.photos/seed/ads/400/300"
                alt="Advertisement"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
