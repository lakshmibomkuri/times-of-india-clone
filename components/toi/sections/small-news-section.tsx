"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function SmallNewsSection() {
  const newsItems = [
    {
      title: "Stray dogs order: SC criticises Maneka Gandhi's remarks; terms it 'contempt'",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=120&fit=crop"
    },
    {
      title: "The importance of 'metabolic health' and how to maintain it",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=120&fit=crop"
    },
    {
      title: "Sulaiman Khan quits: Engineer leaves OLA after podcast; sparks firing speculation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=120&fit=crop"
    },
    {
      title: "Crowd chants 'Gambhir haye haye'; Virat Kohli reacts - WATCH",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&h=120&fit=crop"
    }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newsItems.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-video rounded overflow-hidden mb-2">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
