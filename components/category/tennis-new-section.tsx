"use client";

import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

/** -------------------- TABS -------------------- **/

const tabs = ["Featured", "FrontOpen"];

/** -------------------- TYPES -------------------- **/

type TabItem = { image: string; title: string; duration?: string };

type TabData = {
  mainNews: {
    title: string;
    image: string;
    count: string;
  };
  listNews: string[];
  featuredNews: { title: string; image: string }[];
  rightItems: TabItem[];
};

/** -------------------- RIGHT SIDE DUMMY AD -------------------- **/

const rightSideAd = {
  label: "Sponsored",
  title: "Watch Grand Slam Tennis Live",
  description: "Stream ATP & WTA matches in HD. Live, highlights & replays.",
  image: "https://picsum.photos/seed/tennis-ad/300/180",
  cta: "Subscribe Now",
};

/** -------------------- TAB DATA -------------------- **/

const tabData: Record<string, TabData> = {
  Featured: {
    mainNews: {
      title:
        "Australian Open 2025: Rising stars shake up the men's singles draw",
      image: "https://picsum.photos/seed/tennis1/900/520",
      count: "6",
    },
    listNews: [
      "Novak Djokovic eyes historic 25th Grand Slam title",
      "Iga Świątek dominates straight sets to reach semifinals",
      "Carlos Alcaraz reveals fitness update ahead of big clash",
    ],
    featuredNews: [
      { title: "How Jannik Sinner became the most consistent player of 2024", image: "https://picsum.photos/seed/sinner/320/180" },
      { title: "Top 10 longest rallies in Australian Open history", image: "https://picsum.photos/seed/rally/320/180" },
      { title: "Why hard courts favor aggressive baseliners", image: "https://picsum.photos/seed/court/320/180" },
      { title: "Women to watch at the Australian Open this season", image: "https://picsum.photos/seed/wta/320/180" },
    ],
    rightItems: [
      { image: "https://picsum.photos/seed/djokovic/200/200", title: "Djokovic marches into quarterfinals with ease" },
      { image: "https://picsum.photos/seed/swiatek/200/200", title: "Świątek drops just 3 games in dominant win" },
    ],
  },

  FrontOpen: {
    mainNews: {
      title:
        "Next Gen Finals: Young players redefining modern tennis strategy",
      image: "https://picsum.photos/seed/tennis2/900/520",
      count: "4",
    },
    listNews: [
      "Why serve speed matters less than placement in 2025",
      "How data analytics is changing tennis coaching",
      "Former champions predict the next world No.1",
    ],
    featuredNews: [
      { title: "Inside the rise of teenage tennis sensations", image: "https://picsum.photos/seed/nextgen/320/180" },
      { title: "ATP calendar shake-up: What it means for players", image: "https://picsum.photos/seed/atp/320/180" },
      { title: "WTA prize money trends explained", image: "https://picsum.photos/seed/wta2/320/180" },
      { title: "How modern rackets changed baseline tennis", image: "https://picsum.photos/seed/racket/320/180" },
    ],
    rightItems: [
      {
        title: "Watch: Best shots from the Next Gen Finals",
        duration: "03:12",
        image: "https://picsum.photos/seed/highlights/200/130",
      },
      {
        title: "Watch: Fastest serves recorded this season",
        duration: "02:08",
        image: "https://picsum.photos/seed/serve/200/130",
      },
    ],
  },
};

/** -------------------- COMPONENT -------------------- **/

export function TenninsSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  const { mainNews, listNews, featuredNews, rightItems } =
    tabData[activeTab];

  const thumbW = 96;
  const thumbH = 64;
  const thumbClass = "w-24 h-16 rounded-lg object-cover";

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
        Tennins News <ChevronRight className="w-5 h-5" />
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={mainNews.image}
                  alt={mainNews.title}
                  width={900}
                  height={520}
                  className="w-full h-56 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-[13px] font-semibold leading-snug">
                    {mainNews.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ul className="space-y-3">
                {listNews.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 cursor-pointer">
                    <span className="text-gray-400">○</span>
                    <span className="text-[13px] leading-snug text-gray-800 hover:text-[#e53935]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredNews.map((item, idx) => (
              <div key={idx} className="cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={180}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <p className="text-[11px] text-gray-800 mt-1 leading-tight hover:text-[#e53935]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">
          {/* Tabs */}
          <div className="flex gap-6 mb-4 border-b border-gray-200 justify-end">
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

          {/* RIGHT SIDE AD (ALWAYS VISIBLE) */}
          <div className="border rounded-lg p-3 mb-4 bg-white shadow-sm">
            <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-2">
              {rightSideAd.label}
            </p>

            <Image
              src={rightSideAd.image}
              alt="Sponsored Ad"
              width={300}
              height={180}
              className="w-full h-28 object-cover rounded mb-2"
            />

            <p className="text-sm font-semibold leading-snug text-gray-900 mb-1">
              {rightSideAd.title}
            </p>

            <p className="text-xs text-gray-600 leading-snug mb-2">
              {rightSideAd.description}
            </p>

            <button className="w-full text-xs font-medium bg-[#e53935] text-white py-1.5 rounded hover:bg-red-700 transition">
              {rightSideAd.cta}
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="space-y-3">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={thumbW}
                    height={thumbH}
                    className={thumbClass}
                  />

                  {item.duration && (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-7 h-7 bg-[#e53935]/90 rounded-full flex items-center justify-center">
                          <Play className="w-3.5 h-3.5 text-white fill-white" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] px-1 rounded">
                        {item.duration}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-[13px] text-gray-900 leading-snug hover:text-[#e53935]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
