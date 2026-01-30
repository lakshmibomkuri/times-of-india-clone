"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function WorldStarsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stars = [
    { name: "Ellie Goulding shares rare glimpse with Beau Minniear at Louvre", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop" },
    { name: "Jodie Foster recalls how a lion almost mauled her: 'Probably the scariest thing that ever happened to me'", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop" },
    { name: "What Brooklyn revealed about Victoria Beckham's 'inappropriate' dance", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" }
  ];

  const inFocus = ["Priyanka Chopra", "Varanasi", "Amitabh Bachchan", "AR Rahman", "Dharmendra", "Akshay Kumar", "Jana Nayagan"];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">World Of Stars</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stars.map((star, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded overflow-hidden mb-2">
                <Image src={star.image || "/placeholder.svg"} alt={star.name} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 line-clamp-2">
                {star.name}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={`w-2 h-2 rounded-full ${currentSlide === dot ? 'bg-gray-800' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* In Focus */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <span className="text-sm font-semibold text-gray-900 border border-gray-900 px-3 py-1 rounded-full">In Focus</span>
        {inFocus.map((topic, i) => (
          <span key={i} className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 cursor-pointer">
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
}
