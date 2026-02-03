"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

/* ---------------- TYPES ---------------- */
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

/* ---------------- DATA ---------------- */
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
    { title: "BITSAT 2026: Exam Schedule Released", image: "https://picsum.photos/seed/edu15/300/180", category: "BITSAT" },
    { title: "VITEEE 2026 Registration Opens", image: "https://picsum.photos/seed/edu16/300/180", category: "VITEEE" },
  ],
  results: [
    { title: "CBSE Class 12 Result Expected Date", image: "https://picsum.photos/seed/edu7/300/180", category: "CBSE Class 12" },
    { title: "UPSC Civil Services Result", image: "https://picsum.photos/seed/edu8/300/180", category: "UPSC" },
    { title: "JEE Main 2026 Result Declared", image: "https://picsum.photos/seed/edu17/300/180", category: "JEE" },
    { title: "NEET UG 2026 Result Announcement", image: "https://picsum.photos/seed/edu18/300/180", category: "NEET" },
  ],
  jobs: [
    { title: "UPSC Recruitment 2026: Apply Now for Various Posts", image: "https://picsum.photos/seed/edu9/300/180", category: "UPSC Jobs" },
    { title: "Government Jobs for Engineers in 2026", image: "https://picsum.photos/seed/edu10/300/180", category: "Government Jobs" },
    { title: "Railway Recruitment 2026 Notification Released", image: "https://picsum.photos/seed/edu19/300/180", category: "Railway Jobs" },
    { title: "SSC CGL 2026 Registration Open", image: "https://picsum.photos/seed/edu20/300/180", category: "SSC Jobs" },
  ],
  studyBoard: [
    { title: "CBSE Class 10, 12 Study Tips and Resources", image: "https://picsum.photos/seed/edu11/300/180", category: "CBSE Study Resources" },
    { title: "Best Books for JEE Preparation", image: "https://picsum.photos/seed/edu12/300/180", category: "JEE Study Books" },
    { title: "NEET UG Study Materials", image: "https://picsum.photos/seed/edu21/300/180", category: "NEET" },
    { title: "UPSC Preparation Guide 2026", image: "https://picsum.photos/seed/edu22/300/180", category: "UPSC" },
  ],
  colleges: [
    { title: "Top Engineering Colleges in India 2026 Rankings", image: "https://picsum.photos/seed/edu13/300/180", category: "Engineering Colleges" },
    { title: "Top Medical Colleges in India 2026 Rankings", image: "https://picsum.photos/seed/edu14/300/180", category: "Medical Colleges" },
    { title: "Best Law Colleges in India 2026", image: "https://picsum.photos/seed/edu23/300/180", category: "Law" },
    { title: "Top MBA Colleges in India 2026", image: "https://picsum.photos/seed/edu24/300/180", category: "MBA" },
  ],
};

const newsList: string[] = [
  "When will CBSE release Class 10, 12 admit cards",
  "UPESSC exam dates for Assistant Professor, PGT, TGT and UP TET 2026...",
  "Congress flags 'missing law' on private college quotas",
  "IIT Delhi launches new AI research centre",
  "NEET UG 2026: Important dates and guidelines",
];

/* ---------------- COMPONENT ---------------- */
export function EducationSection() {
  const [activeTab, setActiveTab] = useState<keyof EducationNews>("featured");

  // Small items: always 4
  const smallItems = educationNews[activeTab].slice(0, 4);

  return (
    <section className="border-b border-dashed border-gray-300 mt-5">

      {/* ---------- HEADER + TABS ---------- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        {/* Heading */}
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2 md:mb-0">
          Education <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-300 overflow-x-auto no-scrollbar">
          {(Object.keys(educationNews) as (keyof EducationNews)[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-xs whitespace-nowrap transition-colors
                ${activeTab === tab
                  ? "text-[#e53935] border-b-2 border-[#e53935]"
                  : "text-gray-700 hover:text-gray-900"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- MAIN GRID ---------- */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT COLUMN */}
        <div className="col-span-12 lg:col-span-5 space-y-3">
          {/* Featured */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={educationNews[activeTab][0].image}
              alt={educationNews[activeTab][0].title}
              width={800}
              height={420}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white font-semibold text-sm leading-snug">
                {educationNews[activeTab][0].title}
              </h3>
            </div>
          </div>

          {/* Small items grid - always 4 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
            {smallItems.map((item, i) => (
              <p
                key={i}
                className="text-sm font-medium leading-snug cursor-pointer hover:text-[#e53935]"
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div className="col-span-12 lg:col-span-4">
          <ul className="space-y-4">
            {newsList.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-gray-400">○</span>
                <span className="text-sm text-gray-800 leading-snug hover:text-[#e53935] border-b border-dotted border-gray-300 pb-2">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN (Advertisement) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="mt-6 text-center">
            <p className="text-[11px] text-gray-500 mb-1">Advertisement</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="https://picsum.photos/seed/ads/400/300"
                alt="Advertisement"
                width={400}
                height={300}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
