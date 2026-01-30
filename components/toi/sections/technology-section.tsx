"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

export function TechnologySection() {
  const tabs = ["News & Reviews", "Mobiles & Tabs", "Laptops & PC", "Tech Tips", "Tech News", "Gaming"];
  const news = [
    "Sony is selling its TV and home entertainment divi...",
    "Quote of the day by Elon Musk: \"Really pay attenti...",
    "Samsung Galaxy S26 Ultra: Check expected launc...",
    "Chinese Tech Phaseout Proposal: EU set to bar Hu...",
    "Anthropic CEO Dario Amodei warns US again: Cali...",
  ];
  const bottomNews = [
    { title: "Hack of the day: How to get doorstop banking for seniors...", image: "https://picsum.photos/seed/tech1/100/70" },
    { title: "'2026 is the new 2016' Instagram trend: Why this...", image: "https://picsum.photos/seed/tech2/100/70" },
    { title: "Amazon Fire TV Stick 4K Select Review: 4K quality content on a...", image: "https://picsum.photos/seed/tech3/100/70" },
    { title: "OpenAI Ad Revenue Projections: Analysts see $25B by 2030...", image: "https://picsum.photos/seed/tech4/100/70" },
  ];
  const mobiles = [
    { name: "Infinix Note 50s 6GB RAM", price: "17,999", ram: "6 GB", storage: "128 GB", battery: "5000 mAh", image: "https://picsum.photos/seed/mob1/80/120" },
    { name: "Xiaomi Redmi A4 6GB RAM 128 GB 8 GB", price: "9,799", ram: "6 GB", storage: "128 GB", battery: "5160 mAh", image: "https://picsum.photos/seed/mob2/80/120" },
    { name: "Tecno Spark 30C 128GB 128 GB 4 GB", price: "10,499", ram: "4 GB", storage: "128 GB", battery: "5000 mAh", image: "https://picsum.photos/seed/mob3/80/120" },
  ];
  const comparison = [
    { name1: "Apple iPhone 13", name2: "Apple iPhone 14", image1: "https://picsum.photos/seed/cmp1/60/80", image2: "https://picsum.photos/seed/cmp2/60/80" },
    { name1: "Motorola Edge 30 Ultra 5G", name2: "OnePlus Nord CE 3 Lite 5G", image1: "https://picsum.photos/seed/cmp3/60/80", image2: "https://picsum.photos/seed/cmp4/60/80" },
  ];

  return (
    <section className="border-t border-dashed border-gray-300 py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[15px] font-bold text-gray-900 flex items-center gap-0.5">
          Technology <ChevronRight className="w-4 h-4" />
        </h2>
        <div className="flex gap-3 text-[11px]">
          {tabs.map((tab, i) => (
            <button key={tab} className={`${i === 0 ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {/* Left - Featured + News */}
        <div className="w-[55%]">
          <div className="flex gap-3">
            {/* Netflix Feature */}
            <div className="w-[180px] flex-shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <Image src="https://picsum.photos/seed/netflix/180/240" alt="Netflix" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-2">
                  <span className="text-red-600 text-lg font-bold">NETFLIX</span>
                  <span className="text-white text-[10px] mt-1 leading-tight">Netflix to revamp its app to boost daily engagement; Takes on TikTok, Instagram and YouTube</span>
                </div>
              </div>
            </div>

            {/* News List */}
            <div className="flex-1">
              <ul className="space-y-2">
                {news.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-gray-400 text-[10px]">•</span>
                    <Link href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-tight">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom News with Images */}
          <div className="grid grid-cols-4 gap-3 mt-4 pt-3 border-t border-gray-100">
            {bottomNews.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] mb-1.5 overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <Link href="#" className="text-[10px] text-gray-700 group-hover:text-red-600 leading-tight line-clamp-2 block">{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Latest Mobiles */}
        <div className="w-[45%]">
          <h3 className="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
            Latest Mobiles <ChevronRight className="w-4 h-4" />
          </h3>
          <div className="space-y-3">
            {mobiles.map((phone, idx) => (
              <div key={idx} className="flex gap-3 p-2 border border-gray-100 rounded">
                <div className="relative w-[50px] h-[70px] flex-shrink-0">
                  <Image src={phone.image || "/placeholder.svg"} alt={phone.name} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-medium text-gray-800 mb-1">{phone.name}</h4>
                  <p className="text-[13px] font-bold text-gray-900 mb-1">Rs. {phone.price}</p>
                  <div className="flex gap-4 text-[9px] text-gray-500">
                    <div><span className="block text-gray-400">RAM</span>{phone.ram}</div>
                    <div><span className="block text-gray-400">STORAGE</span>{phone.storage}</div>
                    <div><span className="block text-gray-400">BATTERY</span>{phone.battery}</div>
                  </div>
                  <Link href="#" className="text-[10px] text-blue-600 hover:underline mt-1 block">See Full Specs &gt;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <h3 className="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
          Comparison <ChevronRight className="w-4 h-4" />
        </h3>
        <div className="flex items-center gap-4">
          {comparison.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 p-2 border border-gray-200 rounded">
              <div className="relative w-[40px] h-[55px]">
                <Image src={item.image1 || "/placeholder.svg"} alt={item.name1} fill className="object-contain" />
              </div>
              <span className="text-[9px] text-gray-400">VS</span>
              <div className="relative w-[40px] h-[55px]">
                <Image src={item.image2 || "/placeholder.svg"} alt={item.name2} fill className="object-contain" />
              </div>
              <div className="ml-2">
                <p className="text-[10px] text-gray-700">{item.name1}</p>
                <p className="text-[10px] text-gray-700">{item.name2}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-1 ml-auto">
            <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
