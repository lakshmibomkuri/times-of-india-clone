
"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Article = {
  title: string;
  image: string;
  category: string;
  href?: string;
};

const articles: Article[] = [
  { title: "Republic Day 2026: History, Significance and celebration ideas", image: "/placeholder.svg?height=200&width=300", category: "India" },
  { title: "Budget 2026 expectations: What salaried class wants from FM", image: "/placeholder.svg?height=200&width=300", category: "Business" },
  { title: "Best smartphones under Rs 20,000 to buy in January 2026", image: "/placeholder.svg?height=200&width=300", category: "Tech" },
  { title: "IPL 2026 mega auction: Complete list of retained players", image: "/placeholder.svg?height=200&width=300", category: "Cricket" },
  { title: "Top travel destinations in India for winter vacation", image: "/placeholder.svg?height=200&width=300", category: "Travel" },
  { title: "Health tips: Foods to boost immunity this winter season", image: "/placeholder.svg?height=200&width=300", category: "Health" },
  // You can add more items; the layout adjusts gracefully.
];

export function FromAcrossTOISection() {
  // --- Partition data to match Auto section layout ---
  const featured = articles[0];
  const middleList = articles.slice(1, 6); // 5 items for the middle bullets
  const bottomList = articles.slice(1, 5); // 4 items under the grid
  const rightList = articles.slice(2, 6);  // 4 items (with thumbnails)

  return (
    <section className="py-6 border-t border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-bold text-[#111]">From Across TOI</h2>
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left + Middle (take 9 cols on lg) */}
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

            {/* Middle list with dotted bullets & right divider */}
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

        {/* Right rail (3 cols on lg) */}
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
