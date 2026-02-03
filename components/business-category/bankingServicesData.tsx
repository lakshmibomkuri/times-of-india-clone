"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight } from "lucide-react";

const bankingServicesData = [
  {
    title: "Yes Bank Corporate Financing",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0NXwwfDF8c2VhY2h8Mnx8ZmluYW5jZSUyMGFuZCUyMG1vbmV5fGVufDB8fHx8fDE2ODc4NzYyNzI&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    title: "Bank of Maharashtra Maha Gold Scheme",
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Bank of Maharashtra Maha Super Car Loan Scheme",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
];

const budget2025Data = {
  featured: {
    title: "IT sector faces AI-era uncertainties as global model power concentrates, says Economic Survey",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    isVideo: true,
  },
  bulletPoints: [
    "Tariff war, AI bubble: Crisis worse than 2008 looming",
    "Budget 2026 for agriculture: The opportunity to streamline subsidies",
    "Budget 2026: Charting a course for ports - Two areas of focus",
    "Budget 2026: Can LTCG rules be made simpler for investors?",
    "Union Budget 2026: When is it presented? Date, timeline & expectations",
  ],
  thumbnails: [
    {
      title: "Union Budget 2026: Teachers, technology and the true cost of schooling",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=300&q=80",
      isVideo: false,
    },
    {
      title: "Budget 2026: Auto industry hopes for duty cuts, incentives to power growth",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=300&q=80",
      isVideo: false,
    },
    {
      title: "Economic Survey 2025-26 key highlights: GDP growth pegged at 7.4%, inflation stable",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=300&q=80",
      isVideo: true,
    },
    {
      title: "Dalal Street lost $360 billion in January, all eyes now on FM Sitharaman’s announcements",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=80&q=80",
      isVideo: false,
    },
  ],
  adImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
};

function BankingServicesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prev = () => {
      setCurrentIndex((idx) => (idx === 0 ? bankingServicesData.length - 1 : idx - 1));
    };
  
    const next = () => {
      setCurrentIndex((idx) => (idx === bankingServicesData.length - 1 ? 0 : idx + 1));
    };
  
    return (
      <div className="mt-5 rounded-lg w-full">
        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / bankingServicesData.length)}%)` }}
          >
            {bankingServicesData.map((item, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <div className="relative w-full h-[150px] sm:h-[180px] lg:h-[200px] rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold bg-black bg-opacity-60 rounded px-2 py-1 line-clamp-2">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Pagination Dots and Arrows */}
        <div className="flex justify-between items-center mt-4">
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {bankingServicesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-1 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gray-900" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
  
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    );
  }

export function BankingServicesSection() {
  return (
    <section className="mt-5 rounded-lg w-full">
      <h2 className="text-m font-semibold mb-4 flex items-center gap-1">
        Banking Services <ChevronRight className="w-4 h-4" />
      </h2>
      <BankingServicesCarousel />
      <hr className="border-dotted border-t border-gray-300 mt-6" />
    </section>
  );
}
export function Budget2025Section() {
  return (
    <section className="mt-5 rounded-lg w-full">
      <h2 className="text-m font-semibold mb-4 flex items-center gap-1">
        Budget 2025 <span className="inline-block rotate-45">&#8250;</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Side: Featured Image + Bullet List */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured Image */}
          <div className="md:col-span-7 relative rounded overflow-hidden aspect-[16/9]">
            <Image
              src={budget2025Data.featured.image}
              alt={budget2025Data.featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 41vw"
              priority
            />
            {budget2025Data.featured.isVideo && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-1 rounded font-semibold select-none">
                ▶
              </div>
            )}
            <p className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold bg-black bg-opacity-70 rounded px-2 py-1">
              {budget2025Data.featured.title}
            </p>
          </div>

          {/* Bullet List */}
          <ul className="md:col-span-5 text-xs list-disc list-inside space-y-2 border-l border-gray-300 pl-4 max-h-[200px] sm:max-h-[220px] overflow-y-auto">
            {budget2025Data.bulletPoints.map((point, idx) => (
              <li
                key={idx}
                className="line-clamp-2"
                title={point}
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Bottom Row with Thumbnails - full width below featured + bullets */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-2">
            {budget2025Data.thumbnails.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded overflow-hidden group cursor-pointer"
                title={item.title}
              >
                <div className="relative w-full h-[80px] sm:h-[100px] md:h-[120px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12vw"
                  />
                </div>
                {item.isVideo && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-1 rounded font-semibold select-none">
                    ▶
                  </div>
                )}
                <p className="text-[10px] sm:text-[12px] mt-1 line-clamp-2 text-gray-900 group-hover:text-red-600">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Advertisement Image */}
        <aside className="lg:col-span-4 mt-6 lg:mt-0">
          <div className="border rounded-lg p-3 bg-white shadow-sm h-full flex flex-col justify-center">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Advertisement</p>
            <div className="relative w-full h-[150px] sm:h-[200px]">
              <Image
                src={budget2025Data.adImage}
                alt="Advertisement"
                fill
                className="rounded object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
                priority
              />
            </div>
          </div>
        </aside>
      </div>

      <hr className="border-dotted border-t border-gray-300 mt-6" />
    </section>
  );
}

