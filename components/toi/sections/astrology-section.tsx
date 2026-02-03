"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as Arrow,
  Pin,
  Info,
} from "lucide-react";

/* ------------------ DATA ------------------ */

const headlines = [
  "Aquarius Weekly Shani Horoscope, February 2–8, 2026",
  "Capricorn Weekly Shani Horoscope, February 2–8, 2026",
  "Sagittarius Weekly Shani Horoscope, February 2–8, 2026",
  "Scorpio Weekly Shani Horoscope, February 2–8, 2026",
  "Libra Weekly Shani Horoscope, February 2–8, 2026",
];

const astroNews = [
  { title: "Leo Weekly Shani Horoscope: Saturn delays rewards", img: "https://picsum.photos/seed/leo/280/160" },
  { title: "Gemini Weekly Shani Horoscope: Reality check ahead", img: "https://picsum.photos/seed/gem/280/160" },
  { title: "Cancer Weekly Shani Horoscope: Emotional clarity", img: "https://picsum.photos/seed/cancer/280/160" },
];

const zodiacs = [
  { name: "Aries", symbol: "♈", date: "Mar 21 – Apr 19" },
  { name: "Taurus", symbol: "♉", date: "Apr 20 – May 20" },
  { name: "Gemini", symbol: "♊", date: "May 21 – Jun 20" },
  { name: "Cancer", symbol: "♋", date: "Jun 21 – Jul 22" },
  { name: "Leo", symbol: "♌", date: "Jul 23 – Aug 22" },
  { name: "Virgo", symbol: "♍", date: "Aug 23 – Sep 22" },
  { name: "Libra", symbol: "♎", date: "Sep 23 – Oct 22" },
  { name: "Scorpio", symbol: "♏", date: "Oct 23 – Nov 21" },
  { name: "Sagittarius", symbol: "♐", date: "Nov 22 – Dec 21" },
  { name: "Capricorn", symbol: "♑", date: "Dec 22 – Jan 19" },
  { name: "Aquarius", symbol: "♒", date: "Jan 20 – Feb 18" },
  { name: "Pisces", symbol: "♓", date: "Feb 19 – Mar 20" },
];

const tabs = ["Daily", "Weekly", "Monthly", "Yearly", "Characteristics"];

/* ------------------ COMPONENT ------------------ */

export function AstrologySection() {
  const [activeZodiac, setActiveZodiac] = useState(0);
  const [activeTab, setActiveTab] = useState("Daily");

  return (
    <section className="border-t border-dashed border-gray-300 py-5">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <h2 className="flex items-center gap-1 font-bold mb-4">
          Astrology <Arrow className="w-4 h-4" />
        </h2>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[2.2fr_1fr] gap-6">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">
            {/* Featured + Headlines */}
            <div className="grid md:grid-cols-[280px_1fr] gap-5">
              {/* Featured */}
              <Link href="#">
                <div className="relative aspect-[280/160] rounded overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/eclipse/560/320"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-white text-sm font-medium">
                      February 2026 Stellium and Solar Eclipse: The Heaviest Month
                    </p>
                  </div>
                </div>
              </Link>

              {/* Headlines */}
              <div className="space-y-2 text-sm">
                {headlines.map((h, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="block text-gray-700 hover:text-red-600 border-b border-dotted pb-1"
                  >
                    {h}
                  </Link>
                ))}
              </div>
            </div>

            {/* Astrology News */}
            <div>
              <h3 className="font-bold text-sm mb-3">
                Astrology News
              </h3>

              <div className="grid sm:grid-cols-3 gap-4">
                {astroNews.map((n, i) => (
                  <Link key={i} href="#" className="group">
                    <div className="relative aspect-[280/160] rounded overflow-hidden">
                      <Image src={n.img} alt="" fill className="object-cover" />
                    </div>
                    <p className="text-xs mt-2 text-gray-700 group-hover:text-red-600 line-clamp-2">
                      {n.title}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-3 text-gray-400">
                <ChevronLeft />
                <ChevronRight />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <aside className="border rounded-lg p-3 bg-white h-[300px]">
            <h3 className="font-bold text-sm mb-3">Horoscope</h3>

            {/* Zodiac Carousel */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={() =>
                  setActiveZodiac(activeZodiac === 0 ? 11 : activeZodiac - 1)
                }
                className="absolute left-0 bg-white shadow rounded-full p-1"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="text-center">
                <div className="text-[48px] leading-none">
                  {zodiacs[activeZodiac].symbol}
                </div>
                <div className="text-xs font-semibold">
                  {zodiacs[activeZodiac].name}
                </div>
                <div className="text-[10px] text-gray-500">
                  {zodiacs[activeZodiac].date}
                </div>
              </div>

              <button
                onClick={() =>
                  setActiveZodiac(activeZodiac === 11 ? 0 : activeZodiac + 1)
                }
                className="absolute right-0 bg-white shadow rounded-full p-1"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mt-3 text-xs border-b overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`pb-2 whitespace-nowrap ${
                    activeTab === t
                      ? "border-b-2 border-black font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="mt-3 text-xs">
              <div className="font-semibold mb-1">
                {zodiacs[activeZodiac].name} {activeTab} Horoscope
              </div>
              <p className="text-gray-600 line-clamp-4">
                Dummy {activeTab.toLowerCase()} horoscope content for{" "}
                {zodiacs[activeZodiac].name}. Focus on balance and clarity.
              </p>

              <Link href="#" className="text-red-600 mt-1 inline-block">
                Read More
              </Link>
            </div>

            <button className="mt-3 flex items-center gap-1 text-[11px] text-gray-600">
              <Pin size={12} /> Pin this Zodiac <Info size={12} />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
