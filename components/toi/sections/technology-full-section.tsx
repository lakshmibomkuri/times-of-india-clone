"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const tabs = ["News & Reviews", "Mobiles & Tabs", "Laptops & PC", "Tech Tips", "Tech News", "Gaming"];

const mainNews = [
  {
    title: "Palmer Luckey who Mark Zuckerberg fired after acquiring his...",
    image: "https://picsum.photos/seed/palmer/200/130",
  },
  {
    title: "CMF Headphone Pro goes on sale in India: Price, launch offers,...",
    image: "https://picsum.photos/seed/headphone/200/130",
  },
  {
    title: "Read the full interview that got engineer Sulaiman Khan Ghor...",
    image: "https://picsum.photos/seed/engineer/200/130",
  },
  {
    title: "Elon Musk launches poll asking if he should buy Ryanair...",
    image: "https://picsum.photos/seed/musk/200/130",
  },
];

const listNews = [
  "Google exec 'calls out' the No. 1 problem that Am...",
  "Apple nears launch of M5 Pro and M5 Max MacBo...",
  "Report claims 'caught Bill Gates lie' on climate; claims Gates Foundation's millions of dollar investments in ...",
  "Tesla CEO Elon Musk: We know Twitter's algorithm...",
  "Amazon Echo Show 11, fourth-generation Echo S...",
  "World's fastest and slowest mobile internet cities f...",
];

const latestMobiles = [
  {
    name: "Tecno Spark Go 3",
    price: "₹8,999",
    ram: "4 GB",
    storage: "64 GB",
    battery: "5000 mAh",
    image: "https://picsum.photos/seed/tecno/120/150",
  },
  {
    name: "Lava Blaze Duo 3 5G",
    price: "₹17,434",
    ram: "6 GB",
    storage: "128 GB",
    battery: "5000 mAh",
    image: "https://picsum.photos/seed/lava/120/150",
  },
  {
    name: "Vivo Y50e",
    price: "-",
    ram: "6 GB",
    storage: "128 GB",
    battery: "6000 mAh",
    image: "https://picsum.photos/seed/vivo/120/150",
  },
];

const comparisons = [
  { phone1: "Apple iPhone 13", phone2: "Apple iPhone 14" },
  { phone1: "Motorola Edge 30 Ultra 5G", phone2: "OnePlus Nord CE 3 Lite 5G" },
];

export function TechnologyFullSection() {
  const [activeTab, setActiveTab] = useState("News & Reviews");

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
        Technology <ChevronRight className="w-5 h-5" />
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium whitespace-nowrap ${
              activeTab === tab
                ? "text-[#e53935] border-b-2 border-[#e53935]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left - News with Images */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-3">
            {mainNews.map((news, idx) => (
              <div key={idx} className="cursor-pointer">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={200}
                  height={130}
                  className="w-full h-24 object-cover"
                />
                <p className="text-xs text-gray-800 mt-1 leading-tight hover:text-[#e53935]">
                  {news.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Center - News List */}
        <div className="lg:col-span-4">
          <ul className="space-y-2">
            {listNews.map((item, idx) => (
              <li key={idx} className="text-xs text-gray-800 hover:text-[#e53935] cursor-pointer flex items-start gap-1">
                <span className="text-gray-400">○</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Comparison */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Comparison</h4>
            <div className="space-y-2">
              {comparisons.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className="text-gray-700">{comp.phone1}</span>
                  <span className="text-[#e53935] font-bold">VS</span>
                  <span className="text-gray-700">{comp.phone2}</span>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Latest Mobiles */}
        <div className="lg:col-span-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Latest Mobiles</h4>
          <div className="grid grid-cols-3 gap-2">
            {latestMobiles.map((mobile, idx) => (
              <div key={idx} className="bg-gray-50 p-2 text-center cursor-pointer hover:bg-gray-100">
                <Image
                  src={mobile.image || "/placeholder.svg"}
                  alt={mobile.name}
                  width={120}
                  height={150}
                  className="w-full h-24 object-contain mx-auto"
                />
                <p className="text-xs font-semibold text-gray-900 mt-2">{mobile.name}</p>
                <p className="text-[#e53935] text-xs font-bold">{mobile.price}</p>
                <div className="text-[9px] text-gray-500 mt-1 space-y-0.5">
                  <p>RAM: {mobile.ram}</p>
                  <p>STORAGE: {mobile.storage}</p>
                  <p>BATTERY: {mobile.battery}</p>
                </div>
                <button className="text-[10px] text-blue-600 mt-1 hover:underline">
                  See Full Specs {'>'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
