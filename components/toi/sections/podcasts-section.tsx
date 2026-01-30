
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// --- Data (you can keep yours as-is) ---
const podcasts = [
  {
    title: "Morning Brief: Top Headlines",
    host: "TOI Newsroom",
    duration: "15:30",
    image: "https://picsum.photos/seed/pod1/360/220",
  },
  {
    title: "Tech Talk: AI Revolution",
    host: "Rahul Sharma",
    duration: "28:45",
    image: "https://picsum.photos/seed/pod2/360/220",
  },
  {
    title: "Sports Spotlight: Cricket Analysis",
    host: "Harsha Bhogle",
    duration: "22:10",
    image: "https://picsum.photos/seed/pod3/360/220",
  },
  {
    title: "Business Beat: Market Update",
    host: "Priya Nair",
    duration: "18:20",
    image: "https://picsum.photos/seed/pod4/360/220",
  },
  {
    title: "Entertainment Express",
    host: "Bollywood Buzz",
    duration: "25:00",
    image: "https://picsum.photos/seed/pod5/360/220",
  },
  {
    title: "Health & Wellness Hour",
    host: "Dr. Mehta",
    duration: "32:15",
    image: "https://picsum.photos/seed/pod6/360/220",
  },
];

const nbtCard = {
  image: "https://picsum.photos/seed/nbt/88/56",
  title:
    "मुंबई में सामान्य केटेगरी की महिला होगी मेयर, ठाणे, पुणे, नागपुर समेत 29 …",
  href: "#",
};

export function PodcastsSection() {
  // exactly 3 tiles in the middle row as per the reference
  const middleTiles = podcasts.slice(0, 3);

  return (
    <section className="py-4 border-t border-dashed border-gray-300">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-bold text-gray-900">Podcasts</h2>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left Promo */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-4">
              {/* Mic-in-triangle logo (SVG) */}
              <div className="relative w-20 h-20 shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-20 h-20 text-[#e53935]"
                  aria-hidden="true"
                >
                  {/* triangle (play) */}
                  <path d="M10 10 L90 50 L10 90 Z" fill="currentColor" opacity="0.9" />
                  {/* mic inside */}
                  <g transform="translate(42,30)" fill="white">
                    <rect x="6" y="0" width="14" height="30" rx="7" />
                    <path d="M0 30 a13 13 0 0 0 26 0 h-4 a9 9 0 0 1-18 0z" />
                    <rect x="11" y="30" width="4" height="10" rx="2" />
                    <rect x="7" y="40" width="12" height="4" rx="2" />
                  </g>
                </svg>
              </div>

              <div>
                <p className="text-[22px] font-semibold text-gray-900 leading-tight">
                  Pressed for time?
                </p>
                <p className="text-gray-600 mt-1">
                  Hear the latest Podcasts episodes on the go
                </p>
              </div>
            </div>
          </div>

          {/* Middle – 3 podcast tiles */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <div className="flex gap-4">
              {middleTiles.map((pod, i) => (
                <Link
                  key={i}
                  href="#"
                  className="group relative block w-full max-w-[240px]"
                >
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                    <Image
                      src={pod.image || "/placeholder.svg"}
                      alt={pod.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 33vw, 240px"
                      priority={i === 0}
                    />
                  </div>
                  <p className="mt-2 text-[13px] leading-snug text-gray-900 line-clamp-2">
                    {pod.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right – Navbharat Times widget with vertical divider */}
          <div className="col-span-12 lg:col-span-3 relative">
            {/* vertical divider aligned like the reference */}
            <div className="hidden lg:block absolute -left-3 top-0 bottom-0 border-l border-gray-200" />

            <div className="pl-0 lg:pl-2">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[16px] font-semibold text-gray-900">
                  Navbharat Times
                </h3>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>

              <Link href={nbtCard.href} className="group flex gap-3">
                <div className="relative w-[88px] h-[56px] rounded overflow-hidden shrink-0">
                  <Image
                    src={nbtCard.image}
                    alt="Navbharat Times story"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] leading-snug text-gray-900 line-clamp-2 group-hover:text-red-600">
                    {nbtCard.title}
                  </p>
                  {/* dots like the tiny carousel indicator */}
                  <div className="mt-2 flex items-center gap-[6px]">
                    {[...Array(6)].map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block rounded-full ${
                          idx === 1 ? "w-[5px] h-[5px] bg-gray-900" : "w-[5px] h-[5px] bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
