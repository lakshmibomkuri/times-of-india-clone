"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Pin, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy data
const astrologyMainNews = [
  {
    title: "Vastu Mistakes For Money Flow: Common home errors may block prosperity; decluttering can help",
    image: "https://picsum.photos/seed/vastu1/280/160",
  },
];

const astrologyThumbnails = [
  { title: "5 plants you should have at home", image: "https://picsum.photos/seed/plant1/130/75" },
  { title: "Gupt Navratri & Zodiac Signs Ritual", image: "https://picsum.photos/seed/nav1/130/75" },
  { title: "Daily Horoscope Predictions", image: "https://picsum.photos/seed/horo1/130/75" },
  { title: "Saturn Transit in Uttara Bhadrapada", image: "https://picsum.photos/seed/sat1/130/75" },
];

const astrologyHeadlines = [
  "What 2026 has in store for you based on your life path",
  "Quote of the day by Swami Vivekananda: \"If a star shines in your life...\"",
  "Daily Lal Kitab Horoscope: Moon predictions for today",
  "Horoscope Tomorrow: Ganesha guidance for your career",
  "Daily Shani Predictions: Saturn insights for finances",
];

const intlAstrology = [
  { title: "Global astrology trends for 2026", image: "https://picsum.photos/seed/astro1/280/160" },
  { title: "Planetary alignments affecting career", image: "https://picsum.photos/seed/astro2/280/160" },
  { title: "Moon phases and financial luck", image: "https://picsum.photos/seed/astro3/280/160" },
  { title: "Astrology insights from world experts", image: "https://picsum.photos/seed/astro4/280/160" },
];

const inFocusTags = ["Horoscope", "Vastu", "Moon Phases", "Planetary Alignments"];

export function AstrologySection() {
  const [newsPage, setNewsPage] = useState(0);
  const newsPerPage = 3;
  const totalNewsPages = Math.ceil(intlAstrology.length / newsPerPage);

  const handleNewsPrev = () => {
    setNewsPage((prev) => (prev === 0 ? totalNewsPages - 1 : prev - 1));
  };
  const handleNewsNext = () => {
    setNewsPage((prev) => (prev + 1) % totalNewsPages);
  };

  const visibleNews = intlAstrology.slice(
    newsPage * newsPerPage,
    newsPage * newsPerPage + newsPerPage
  );

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
          Astrology <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Two column grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left column: Main + thumbnails + headlines */}
          <div className="col-span-2 space-y-8">
            {/* Main + Thumbnails */}
            <div className="grid grid-cols-[280px_1fr] gap-5">
              {/* Left - Featured + thumbnails */}
              <div>
                <Link href="#" className="block group mb-4">
                  <div className="relative aspect-[280/160] rounded overflow-hidden">
                    <Image
                      src={astrologyMainNews[0].image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-sm font-medium">
                        {astrologyMainNews[0].title}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {astrologyThumbnails.map((item, i) => (
                    <Link key={i} href="#" className="block group">
                      <div className="relative aspect-[130/75] rounded overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <p className="text-[10px] text-gray-700 mt-1 line-clamp-2 group-hover:text-red-600">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Center - Headlines List */}
              <div className="space-y-2">
                {astrologyHeadlines.map((headline, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600"
                  >
                    <span className="text-gray-400 mt-0.5 select-none">○</span>
                    <span className="flex-1 line-clamp-2">{headline}</span>
                    {idx % 4 === 0 && (
                      <span className="text-red-500 text-[10px] mt-0.5 select-none">▶</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* International Astrology */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1">
                International Astrology <ChevronRight className="w-4 h-4" />
              </h3>
              <div className="flex gap-4">
                {visibleNews.map((item, idx) => (
                  <Link key={idx} href="#" className="block group flex-1">
                    <div className="relative aspect-[280/160] rounded overflow-hidden">
                      <Image src={item.image} alt="" fill className="object-cover" />
                    </div>
                    <p className="text-xs text-gray-700 mt-2 group-hover:text-red-600 line-clamp-2">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Pagination controls */}
              <div className="flex items-center justify-between mt-3">
                {/* Dots on left */}
                <div className="flex gap-1">
                  {Array.from({ length: totalNewsPages }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i === newsPage ? "bg-gray-900" : "bg-gray-300"}`}
                    />
                  ))}
                </div>

                {/* Arrows on right */}
                <div className="flex gap-3 text-gray-400">
                  <button
                    aria-label="Previous"
                    onClick={handleNewsPrev}
                    className="hover:text-gray-600 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    aria-label="Next"
                    onClick={handleNewsNext}
                    className="hover:text-gray-600 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Horoscope + Advertisement */}
          <div className="flex flex-col gap-6">
            {/* Horoscope */}
            <div className="bg-white border border-gray-200 rounded p-3">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Horoscope</h3>
              <div className="relative aspect-[280/160] rounded overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/horoscope/280/160"
                  alt="Horoscope"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[10px] text-gray-700 mt-2 line-clamp-3">
                Your daily horoscope predicts positive energy. Stay focused on career and health. <Link href="#" className="text-red-600">Read More</Link>
              </p>
            </div>

            {/* Dummy Advertisement */}
            <div className="border border-gray-300 rounded p-3 text-center text-xs text-gray-600 bg-gray-50">
              <div className="mb-2 font-semibold text-gray-800">Advertisement</div>
              <div className="h-[120px] bg-gray-200 rounded flex items-center justify-center text-gray-400 select-none">
                Ad Space - 280x120
              </div>
            </div>
          </div>
        </div>

        {/* In Focus Tags */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200 flex-wrap">
          <span className="text-xs font-bold text-gray-900">In Focus</span>
          <div className="flex flex-wrap gap-2">
            {inFocusTags.map((tag, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
