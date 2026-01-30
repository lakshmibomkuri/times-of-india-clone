"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function IntlSportsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sports = [
    { title: "Why the Chiefs are considering reuniting Eric Bieniemy and Travis Kelce to reset the offense after a...", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=300&h=200&fit=crop" },
    { title: "Titans to hire 49ers DC Robert Saleh as head coach, who was rumored to be fired from Jets HC role because ...", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=200&fit=crop" },
    { title: "What's stopping Mike Tomlin from becoming the Buffalo Bills' next head coach?", image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300&h=200&fit=crop" }
  ];

  const inFocus = ["In Focus", "WPL Points Table", "WPL Results 2026", "WPL 2026", "T20 World Cup Schedule 2026", "WPL Schedule 2026"];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">International Sports</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Carousel */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sports.map((sport, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                  <Image src={sport.image || "/placeholder.svg"} alt={sport.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
                  {sport.title}
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

        {/* Advertisement */}
        <div className="lg:col-span-4">
          <div className="text-xs text-gray-400 text-center mb-2">Advertisement</div>
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded p-4 text-white">
            <p className="text-xs">Ensuring Their Smiles</p>
            <p className="font-bold text-lg">Plus Protection</p>
            <p className="text-2xl font-bold mt-2">LIC's PROTECTION Plus</p>
            <div className="mt-4 text-xs">
              <p>SALIENT FEATURES:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Multiple Investment Fund options available to suit your needs</li>
                <li>Increase your Risk Cover with Top up Premium Payments</li>
                <li>Option to Choose Higher Sum Assured as per Age and Term</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* In Focus Tags */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        {inFocus.map((tag, i) => (
          <span
            key={i}
            className={`text-sm px-3 py-1 rounded-full cursor-pointer ${i === 0 ? 'border border-gray-900 font-semibold' : 'border border-gray-300 text-gray-600 hover:bg-gray-100'}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
