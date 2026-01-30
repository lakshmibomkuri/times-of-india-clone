"use client"; // This is to mark the component as a Client Component

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

// Type definitions for the education news data
interface EducationItem {
  title: string;
  image: string;
  category: string;
}

type EducationNews = {
  featured: EducationItem[];
  exams: EducationItem[];
  results: EducationItem[];
  jobs: EducationItem[];
  studyBoard: EducationItem[];
  colleges: EducationItem[];
};

const educationNews: EducationNews = {
  featured: [
    { title: "CBSE Class 10, 12 Board Exam Dates Announced", image: "https://picsum.photos/seed/edu1/300/180", category: "Board Exams" },
    { title: "JEE Main 2026 Registration Begins Today", image: "https://picsum.photos/seed/edu2/300/180", category: "JEE" },
    { title: "UPSC Civil Services Prelims Result Expected", image: "https://picsum.photos/seed/edu3/300/180", category: "UPSC" },
    { title: "Top Engineering Colleges in India 2026 Rankings", image: "https://picsum.photos/seed/edu4/300/180", category: "Rankings" },
  ],
  exams: [
    { title: "JEE Advanced 2026 Exam Date Released", image: "https://picsum.photos/seed/edu5/300/180", category: "JEE Advanced" },
    { title: "NEET UG 2026: Important Dates and Guidelines", image: "https://picsum.photos/seed/edu6/300/180", category: "NEET UG" },
  ],
  results: [
    { title: "CBSE Class 12 Result Expected Date", image: "https://picsum.photos/seed/edu7/300/180", category: "CBSE Class 12" },
    { title: "UPSC Civil Services Result", image: "https://picsum.photos/seed/edu8/300/180", category: "UPSC" },
  ],
  jobs: [
    { title: "UPSC Recruitment 2026: Apply Now for Various Posts", image: "https://picsum.photos/seed/edu9/300/180", category: "UPSC Jobs" },
    { title: "Government Jobs for Engineers in 2026", image: "https://picsum.photos/seed/edu10/300/180", category: "Government Jobs" },
  ],
  studyBoard: [
    { title: "CBSE Class 10, 12 Study Tips and Resources", image: "https://picsum.photos/seed/edu11/300/180", category: "CBSE Study Resources" },
    { title: "Best Books for JEE Preparation", image: "https://picsum.photos/seed/edu12/300/180", category: "JEE Study Books" },
  ],
  colleges: [
    { title: "Top Engineering Colleges in India 2026 Rankings", image: "https://picsum.photos/seed/edu13/300/180", category: "Engineering Colleges" },
    { title: "Top Medical Colleges in India 2026 Rankings", image: "https://picsum.photos/seed/edu14/300/180", category: "Medical Colleges" },
  ]
};

const newsList: string[] = [
  "When will CBSE release Class 10, 12 admit cards",
  "UPESSC exam dates for Assistant Professor, PGT, TGT and UP TET 2026...",
  "Congress flags 'missing law' on private college quotas, wants regulators...",
  "IIT Delhi Launches New AI Research Centre",
  "NEET UG 2026: Important Dates and Guidelines",
];

export function EducationSection() {
  const [activeTab, setActiveTab] = useState<keyof EducationNews>("featured"); // Ensure the activeTab is a key of EducationNews

  const handleTabChange = (tab: keyof EducationNews) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex justify-between">
        {/* Section heading */}
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
          Education <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Tabs Row */}
        <div className="flex gap-6 mb-4 border-b border-gray-300 overflow-x-auto no-scrollbar">
          {["featured", "exams", "results", "jobs", "studyBoard", "colleges"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab as keyof EducationNews)} // Ensure type safety
              className={`pb-3 text-xs whitespace-nowrap ${activeTab === tab ? "text-[#e53935] border-b-2 border-[#e53935]" : "text-gray-700 hover:text-gray-900"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN GRID: 12 columns */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN (5/12) */}
        <div className="col-span-12 lg:col-span-5 space-y-3">
          {/* Big feature card */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={educationNews[activeTab][0].image}
              alt="feature"
              width={800}
              height={420}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white font-semibold text-[15px] leading-snug">
                {educationNews[activeTab][0].title}
              </h3>
            </div>
          </div>

          {/* 4 small items as 2×2 grid */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {educationNews[activeTab].slice(1).map((item, idx) => (
              <div key={idx} className="cursor-pointer">
                <p className="text-sm text-gray-900 font-medium hover:text-[#e53935] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN (4/12) */}
        <div className="col-span-12 lg:col-span-4">
          <ul className="space-y-4">
            {newsList.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start cursor-pointer">
                <span className="text-gray-400">○</span>
                <span className="text-sm text-gray-800 hover:text-[#e53935] leading-snug flex-1 pb-2 border-b border-dotted border-gray-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN (3/12) */}
        <div className="col-span-12 lg:col-span-3">
          {/* Advertisement block */}
          <div className="mt-6 text-center">
            <p className="text-[11px] text-gray-500 mb-1">Advertisement</p>

            <div className="rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="https://picsum.photos/seed/ads/400/300"
                alt="Advertisement"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
