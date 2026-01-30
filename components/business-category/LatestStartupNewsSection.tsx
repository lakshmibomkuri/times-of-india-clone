"use client";

import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type News = {
  id: string;
  title: string;
  image: string;
};

const startupNews: News[] = [
  {
    id: "1",
    title:
      "1.14 lakh startups generate more than 12 lakh jobs in India: Finance ministry",
    image: "https://placehold.co/1280x720/7c2d12/ffffff?text=Startup+Jobs+in+India",
  },
  {
    id: "2",
    title:
      "These startups are helping carbon dioxide find a new life",
    image: "https://placehold.co/1280x720/14532d/ffffff?text=Carbon+Tech+Startups",
  },
  {
    id: "3",
    title:
      "E-commerce firm Udaan raises $340 million ahead of planned IPO",
    image: "https://placehold.co/1280x720/1e3a8a/ffffff?text=Udaan+IPO+News",
  },
];

export default function LatestStartupNewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.children[0].clientWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActive(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % startupNews.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Latest Sartup News</h2>
        <ChevronRight className="w-4 h-4" />
      </div>


      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {startupNews.map((item) => (
          <div
            key={item.id}
            className="relative min-w-[300px] md:min-w-[380px] h-[220px] snap-start rounded-xl overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-semibold text-sm md:text-base line-clamp-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* Dots */}
      <div className="flex items-center justify-between mt-4">
        {/* Pagination dots */}
        <div className="flex justify-center gap-2">
          {startupNews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${active === i ? "w-6 bg-black" : "w-2 bg-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              scrollToIndex(
                active === 0 ? startupNews.length - 1 : active - 1
              )
            }
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={() =>
              scrollToIndex((active + 1) % startupNews.length)
            }
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>


    </section>
  );
}
