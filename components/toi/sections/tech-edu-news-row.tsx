"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function TechEduNewsRow() {
  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Technology */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-bold text-gray-900">Technology</h2>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
              </div>
              <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
                Palmer Luckey who Mark Zuckerberg fired after
              </h3>
            </div>
            <p className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">Quote of the day by Elon Musk: "Really pay attention to negative..."</p>
            <p className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">CMF Headphone Pro goes on sale in India: Price, launch offers,...</p>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-bold text-gray-900">Education</h2>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
              </div>
              <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
                Many jobs are now preferring education less
              </h3>
            </div>
            <p className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">Who leads the world in maths? Asia leads, America stumbles and...</p>
            <p className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">ICSI CSEET 2026 January result declared at icsi.edu; check direct link to...</p>
          </div>
        </div>

        {/* Also In News */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-bold text-gray-900">Also In News</h2>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 group cursor-pointer">
              <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
              </div>
              <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
                2026 Skoda Kushaq facelift revealed: What's changed
              </h3>
            </div>
            <p className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">MLB trade rumors: New York Mets might acquire $10 million Philadelphia...</p>
            <p className="text-xs text-gray-700 hover:text-red-600 cursor-pointer">"She is glowing": Klay Thompson's heartfelt gesture for Megan Thee...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
