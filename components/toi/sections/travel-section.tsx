
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type TravelItem = {
  image: string;
  title: string;
  href?: string;
};
const travelNews: TravelItem[] = [
  { image: "https://picsum.photos/seed/travel1/160/110", title: "Best weekend getaways from Mumbai in January" },
  { image: "https://picsum.photos/seed/travel2/160/110", title: "Visa-free destinations for Indian passport holders" },
  { image: "https://picsum.photos/seed/travel3/160/110", title: "Hidden gems of Northeast India to explore" },
  { image: "https://picsum.photos/seed/travel4/160/110", title: "Budget travel tips for Europe in 2026" },
  { image: "https://picsum.photos/seed/travel5/160/110", title: "Top hill stations for winter vacation" },
  { image: "https://picsum.photos/seed/travel6/160/110", title: "Solo travel destinations for women in India" },
];


export function TravelSection() {
  // Partition to match Auto section UX
  const featured = travelNews[0];
  const middleList = travelNews.slice(1, 6); // up to 5 items
  const bottomList = travelNews.slice(1, 5); // 4 items below grid
  const rightList = travelNews.slice(2, 6);  // 4 items with thumbnails

  return (
    <section className="py-6 border-t border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-bold text-[#111]">Travel</h2>
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left + Middle (9 columns on lg) */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* Featured (Left) */}
            <div className="col-span-12 md:col-span-7">
              {featured && (
                <Link href={featured.href ?? "#"} className="block group">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src={featured.image || "/placeholder.svg"}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Title overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-[16px] md:text-[18px] font-semibold leading-snug">
                        {featured.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Middle bullets with right divider */}
            <div className="col-span-12 md:col-span-5">
              <div className="h-full md:border-r md:border-gray-200 pr-0 md:pr-6">
                <div className="space-y-4">
                  {middleList.map((item, idx) => (
                    <Link key={idx} href={item.href ?? "#"} className="flex gap-3 group">
                      <span className="text-gray-400 text-sm mt-[2px]">○</span>
                      <span className="text-[14px] leading-snug text-[#222] group-hover:text-red-600 line-clamp-2">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom 4 columns under featured+middle */}
            <div className="col-span-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                {bottomList.map((item, idx) => (
                  <Link key={idx} href={item.href ?? "#"} className="group">
                    <h4 className="text-[14px] leading-snug text-[#222] group-hover:text-red-600 line-clamp-3">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right rail (3 columns on lg) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="space-y-4">
            {rightList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href ?? "#"}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-[88px] h-[56px] rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] leading-snug text-[#222] group-hover:text-red-600 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
