"use client";

import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function MainHeroSection() {
  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main Featured Story */}
        <div className="lg:col-span-7">
          <div className="relative aspect-video bg-gray-200 rounded overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop"
              alt="Stock market crash"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">BREAKING</span>
            </div>
            <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
              <Play className="w-3 h-3 fill-white" />
              07:30
            </div>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-3 leading-tight hover:text-red-600 cursor-pointer">
            Stock market crash: Nifty50 goes below 25,232; BSE Sensex down over 1,000 points - top reasons
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Indian stock markets witnessed a sharp decline on Monday with Sensex falling over 1,000 points...
          </p>
        </div>

        {/* Side Stories */}
        <div className="lg:col-span-5 space-y-4">
          {[
            {
              title: "'200% tariff & he'll join': Trump threatens France over 'Board of Peace' snub; shares Macron's text",
              image: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?w=300&h=180&fit=crop",
              time: "07:30"
            },
            {
              title: "Hello, Doctor. India's top doctors here to answer your questions",
              image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=180&fit=crop",
              badge: "TOI+"
            },
            {
              title: "Noida techie's death: Builder arrested for criminal negligence",
              image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=180&fit=crop",
              time: "07:51"
            },
            {
              title: "Maggi packets, 20kg rice, cylinders: JeM's winter bunker unearthed",
              image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=180&fit=crop"
            }
          ].map((story, i) => (
            <div key={i} className="flex gap-3 group cursor-pointer">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 line-clamp-3">
                  {story.title}
                </h3>
              </div>
              <div className="relative w-28 h-20 flex-shrink-0 rounded overflow-hidden">
                <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                {story.time && (
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <Play className="w-2 h-2 fill-white" />
                    {story.time}
                  </div>
                )}
                {story.badge && (
                  <div className="absolute top-1 right-1 bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                    {story.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
