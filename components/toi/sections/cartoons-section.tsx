"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const cartoons = [
  {
    title: "Trump's Trade Wars",
    artist: "R.K. Laxman",
    image: "https://picsum.photos/seed/cartoon1/200/150",
  },
  {
    title: "Budget Blues",
    artist: "Manjul",
    image: "https://picsum.photos/seed/cartoon2/200/150",
  },
  {
    title: "Election Season",
    artist: "Satish Acharya",
    image: "https://picsum.photos/seed/cartoon3/200/150",
  },
  {
    title: "Tech Troubles",
    artist: "Sandeep Adhwaryu",
    image: "https://picsum.photos/seed/cartoon4/200/150",
  },
  {
    title: "Climate Crisis",
    artist: "Alok Nirantar",
    image: "https://picsum.photos/seed/cartoon5/200/150",
  },
  {
    title: "Social Media Age",
    artist: "Sudhir Tailang",
    image: "https://picsum.photos/seed/cartoon6/200/150",
  },
];

const infographics = [
  {
    title: "India vs England: Stats Comparison",
    category: "Sports",
    image: "https://picsum.photos/seed/info1/200/110",
  },
  {
    title: "Budget 2026: Where Your Money Goes",
    category: "Economy",
    image: "https://picsum.photos/seed/info2/200/110",
  },
  {
    title: "Climate Change Impact on India",
    category: "Environment",
    image: "https://picsum.photos/seed/info3/200/110",
  },
];

export function CartoonsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cartoons.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCartoons = cartoons.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-4 border-t border-dashed border-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cartoons */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
            Cartoons <ChevronRight className="w-5 h-5" />
          </h2>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            {visibleCartoons.map((cartoon, idx) => (
              <div key={idx} className="cursor-pointer group">
                <div className="relative h-[120px] mb-2 rounded overflow-hidden border border-gray-200">
                  <Image src={cartoon.image || "/placeholder.svg"} alt={cartoon.title} fill className="object-cover" />
                </div>
                <p className="text-[12px] text-gray-800 font-medium group-hover:text-[#e53935] line-clamp-1">
                  {cartoon.title}
                </p>
                <p className="text-[10px] text-gray-500">By {cartoon.artist}</p>
              </div>
            ))}
          </div>
          
          {/* Dots on Left, Arrows on Right */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentPage ? "bg-gray-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevPage}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPage}
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Infographics */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
            Infographics <ChevronRight className="w-5 h-5" />
          </h2>
          
          <div className="grid grid-cols-3 gap-3">
            {infographics.map((info, idx) => (
              <div key={idx} className="cursor-pointer group">
                <div className="relative h-[110px] mb-2 rounded overflow-hidden">
                  <Image src={info.image || "/placeholder.svg"} alt={info.title} fill className="object-cover" />
                </div>
                <span className="text-[10px] text-[#e53935] font-medium">{info.category}</span>
                <p className="text-[12px] text-gray-800 leading-tight group-hover:text-[#e53935] mt-1 line-clamp-2">
                  {info.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
