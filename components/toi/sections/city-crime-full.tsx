"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function CityCrimeSection() {
  const crimes = [
    { title: "Kokrajhar violence: 1 killed, 4 injured in mob attack in Assam; highwa...", image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=200&h=130&fit=crop" },
    { title: "Starved, beaten, left gasping for life: CRPF officer, wife held for...", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=130&fit=crop" },
    { title: "'Video killed him': Kerala woman faces abetment charges after youth ends...", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=130&fit=crop" },
    { title: "Tamil Nadu blast: 1 dead, 18 injured after helium gas cylinder explodes...", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=200&h=130&fit=crop" },
    { title: "Noida techie's fatal wait: Cops came in 9 mins, fire brigade took 45, SDRF 7...", image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=200&h=130&fit=crop" },
    { title: "Mumbai road crash: Auto driver hurt as Mercedes collides with Akshay...", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=200&h=130&fit=crop" }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">City Crime</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {crimes.map((crime, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/2] rounded overflow-hidden mb-2">
              <Image src={crime.image || "/placeholder.svg"} alt={crime.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
              {crime.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
