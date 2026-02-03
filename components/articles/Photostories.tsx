"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const starsNews = [
    {
        image: "https://picsum.photos/seed/star1/250/180",
        title: "Ellie Goulding shares rare glimpse with Beau Minniear at Louvre",
    },
    {
        image: "https://picsum.photos/seed/star2/250/180",
        title: "Jodie Foster recalls how a lion almost mauled her: 'Probably the scariest thing that ever happened to me'",
    },
    {
        image: "https://picsum.photos/seed/star3/250/180",
        title: "What Brooklyn revealed about Victoria Beckham's 'inappropriate' dance",
    },
    {
        image: "https://picsum.photos/seed/star4/250/180",
        title: "Taylor Swift spotted at exclusive NYC restaurant with close friends",
    },
    {
        image: "https://picsum.photos/seed/star5/250/180",
        title: "Robert Downey Jr. teases potential Marvel return in cryptic interview",
    },
    {
        image: "https://picsum.photos/seed/star6/250/180",
        title: "Beyoncé breaks streaming records with surprise album release",
    },
];

const inFocusTags = ["In Focus", "Priyanka Chopra", "Varanasi", "Amitabh Bachchan", "AR Rahman", "Dharmendra", "Akshay Kumar", "Jana Nayagan"];

export function PhotoStories() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(starsNews.length / itemsPerPage);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const visibleItems = starsNews.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section className="py-5 border-t border-dashed border-gray-300">
            <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-0">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
                    Photostories <ChevronRight className="w-4 h-4" />
                </h2>

                {/* Carousel - No horizontal scroll */}
                <div className="relative mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {visibleItems.map((news, idx) => (
                            <Link key={idx} href="#" className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                                    <Image
                                        src={news.image || "/placeholder.svg"}
                                        alt={news.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <h3 className="text-[11px] sm:text-[12px] text-[#333] group-hover:text-red-600 line-clamp-2 leading-tight">
                                    {news.title}
                                </h3>
                            </Link>
                        ))}
                    </div>

                    {/* Navigation - Dots and Arrows */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-3">
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, dot) => (
                                <button
                                    key={dot}
                                    onClick={() => setCurrentIndex(dot)}
                                    className={`rounded-full transition-all ${dot === currentIndex ? "w-4 h-1 bg-gray-900" : "w-1 h-1 bg-gray-300 hover:bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handlePrev}
                                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* In Focus Tags */}
                <div className="mt-4 space-y-2">
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2 overflow-x-auto">
                        <span className="font-semibold text-xs whitespace-nowrap">Hot Picks</span>
                        {[
                            "Delhi rain",
                            "Budget 2026",
                            "Budget 2026 Expectations",
                            "Gold price prediction",
                            "Delhi AQI",
                        ].map((tag, i) => (
                            <button
                                key={i}
                                className="text-[12px] whitespace-nowrap rounded-full border border-gray-300 px-2 py-0.5"
                            >
                                {tag}
                            </button>
                        ))}
                        <button className="ml-auto p-1 rounded-full border border-gray-300">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="p-1 rounded-full border border-gray-300">
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className="grid grid-flow-col auto-cols-max items-center gap-2 overflow-x-auto">
                        <span className="font-semibold text-xs whitespace-nowrap">Top Trending</span>
                        {[
                            "Gurgaon Kidnapping Video",
                            "Patrick Mahomes",
                            "Ayesha Curry",
                            "Jason Kelce Quote",
                        ].map((tag, i) => (
                            <button
                                key={i}
                                className="text-[12px] whitespace-nowrap rounded-full border border-gray-300 px-2 py-0.5"
                            >
                                {tag}
                            </button>
                        ))}
                        <button className="ml-auto p-1 rounded-full border border-gray-300">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="p-1 rounded-full border border-gray-300">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
