
"use client";

import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

/** -------------------- DATA -------------------- **/

// 4 proper tabs (non-wrapping labels)
const tabs = ["Featured", "Recipes", "Food News", "Recipes Videos"];

// Featured Recipes (left bottom cards)
const featuredRecipes = [
  { title: "Lebanese Garlic Sauce", image: "https://picsum.photos/seed/garlic/320/180" },
  { title: "How to make Kerala-Style Appam and Chicken St...", image: "https://picsum.photos/seed/appam/320/180" },
  { title: "29 BEST DISHES WITH CAULIFLOWER", image: "https://picsum.photos/seed/cauli/320/180" },
  { title: "Fake Sweet Potato in the market? How to check t...", image: "https://picsum.photos/seed/potato/320/180" },
  { title: "Banana Cheela", image: "https://picsum.photos/seed/cheela/320/180" },
];

// Main Recipe (left large)
const mainRecipe = {
  title:
    "5 desi gobi dishes among the '29 Best Dishes with Cauliflower' as rated by top global culinary agency",
  image: "https://picsum.photos/seed/gobi/900/520",
  count: "6",
};

// Mid list (left top right column)
const listRecipes = [
  "How to make classic Bread Halwa at home",
  "How to make Chicken Kadi Patta for dinner",
  "20 Maggi combinations to enjoy this winter season",
];

// Video cards (used in Recipes Videos tab)
const recipeVideos = [
  { title: "Watch: How to make Chicken Noodles", duration: "02:14", image: "https://picsum.photos/seed/noodles/200/130" },
  { title: "Watch: 1-Minute Cookie Challenge", duration: "03:56", image: "https://picsum.photos/seed/cookie/200/130" },
  { title: "Watch: How to make Vetrilai Nattukozhi", duration: "02:38", image: "https://picsum.photos/seed/chicken/200/130" },
  { title: "Watch: How to make Blue Ice", duration: "01:29", image: "https://picsum.photos/seed/ice/200/130" },
];

// Tab content (all items normalized to the same schema)
type TabItem = { image: string; title: string; duration?: string };

const tabContent: Record<string, TabItem[]> = {
  Featured: [
    { image: "https://picsum.photos/seed/garlic/200/200", title: "Lebanese Garlic Sauce" },
    { image: "https://picsum.photos/seed/appam/200/200", title: "Kerala-Style Appam and Chicken" },
    { image: "https://picsum.photos/seed/cheela/200/200", title: "Banana Cheela" },
  ],
  Recipes: [
    { image: "https://picsum.photos/seed/cauli/200/200", title: "29 Best Dishes with Cauliflower" },
    { image: "https://picsum.photos/seed/potato/200/200", title: "Fake Sweet Potato" },
  ],
  "Food News": [
    { image: "https://picsum.photos/seed/milk/200/200", title: "Chamomile Milk" },
    { image: "https://picsum.photos/seed/spice/200/200", title: "Spice Prices Hit New High" },
  ],
  "Recipes Videos": recipeVideos.map((v) => ({
    image: v.image,
    title: v.title,
    duration: v.duration,
  })),
};

/** -------------------- COMPONENT -------------------- **/

export function RecipesSection() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  // Consistent sizes for right-side tab media
  const thumbW = 96; // px
  const thumbH = 64; // px
  const thumbClass = "w-24 h-16 rounded-lg object-cover"; // 96x64

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
        Recipes &amp; Food News <ChevronRight className="w-5 h-5" />
      </h2>

      {/* MAIN GRID: left (7) + right (5) on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: top split + bottom row */}
        <div className="lg:col-span-7 space-y-6">
          {/* TOP: 2 columns (image + list) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left big visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={mainRecipe.image}
                  alt={mainRecipe.title}
                  width={900}
                  height={520}
                  className="w-full object-cover rounded-lg"
                  sizes="(max-width:1024px) 100vw, 56rem"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-[13px] font-semibold leading-snug">
                    {mainRecipe.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right list */}
            <div className="lg:col-span-5">
              <ul className="space-y-3">
                {listRecipes.map((item, idx) => (
                  <li key={idx} className="flex items-start justify-between cursor-pointer">
                    <span className="flex items-start gap-2 text-[13px] leading-snug text-gray-800 hover:text-[#e53935]">
                      <span className="text-gray-400">○</span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM: 4 equal cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredRecipes.slice(0, 4).map((recipe, idx) => (
              <div key={idx} className="cursor-pointer">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={320}
                    height={180}
                    className="w-full h-24 object-cover rounded-lg"
                    sizes="(max-width:1024px) 50vw, 16rem"
                  />
                </div>
                <p className="text-[11px] text-gray-800 mt-1 leading-tight hover:text-[#e53935]">
                  {recipe.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: wider column with non-wrapping tabs */}
        <div className="lg:col-span-5">
          {/* Tabs */}
          <div className="flex gap-6 mb-4 border-b border-gray-200 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "text-[#e53935] border-b-2 border-[#e53935]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active tab content only */}
          <div className="space-y-3">
            {(tabContent[activeTab] ?? []).map((item, idx) => (
              <div key={`${activeTab}-${idx}`} className="flex items-center gap-3 cursor-pointer">
                {/* Media (image or video) with SAME size + rounded */}
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={thumbW}
                    height={thumbH}
                    className={thumbClass}
                    sizes={`${thumbW}px`}
                  />
                  {/* If video: play overlay + duration */}
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

                {/* Title */}
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
