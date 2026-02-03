"use client";

import { Header } from "@/components/toi/header";
import { Footer } from "@/components/toi/footer";
import Image from "next/image";
import { Play, Share2, ThumbsUp, ThumbsDown, Clock, Eye, ChevronRight, Forward } from "lucide-react";
import TopViralVideosSection from "@/components/videos/sections/Top-viral-videos";
import ShortVideosSection from "@/components/videos/sections/Short-videos";
import RelatedArticles from "@/components/videos/sections/Related-articles";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
import YouMayLike from "@/components/videos/sections/You-may-like";

const video = {
  id: 1,
  title: "'Vande Mataram' Chants Echo As Indian Diaspora Welcomes PM Modi In Oman",
  description: "Prime Minister Narendra Modi was accorded a warm welcome by the Indian community in Muscat, Oman, where large crowds gathered at his hotel waving Indian flags and chanting patriotic slogans. PM Modi interacted with members of the diaspora and witnessed cultural performances organised in his honour.",
  duration: "08:22",
  views: "351.5K",
  date: "Jan 20, 2026",
  category: "News",
  thumbnail: "https://picsum.photos/seed/mainvid/1200/675",
  likes: 12500,
  dislikes: 234
};

const relatedVideos = [
  { id: 2, title: "Bangladesh Leader's Seven Sisters Remark Triggers Diplomatic Row", duration: "05:05", views: "1.6K", thumbnail: "https://picsum.photos/seed/rel1/200/120" },
  { id: 3, title: "US Infighting Over Venezuela Operation Escalates", duration: "09:00", views: "38", thumbnail: "https://picsum.photos/seed/rel2/200/120" },
  { id: 4, title: "Rob Reiner's Daughter Found His Body", duration: "07:18", views: "546", thumbnail: "https://picsum.photos/seed/rel3/200/120" },
];

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Left Ad Strip */}
      {/* <div className="fixed left-0 top-0 w-[120px] h-full bg-black z-40 hidden xl:block">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-white text-center p-3">
            <h3 className="text-sm font-bold leading-tight">Financial<br/>Backing<br/>for the<br/>Bold.</h3>
            <button className="bg-red-500 text-white text-[10px] px-3 py-1 mt-3 rounded">Apply Now</button>
          </div>
        </div>
      </div> */}

      {/* Right Ad Strip */}
      {/* <div className="fixed right-0 top-0 w-[120px] h-full bg-black z-40 hidden xl:block">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-white text-center p-3">
            <h3 className="text-sm font-bold leading-tight">Financial<br/>Backing<br/>for the<br/>Bold.</h3>
            <button className="bg-red-500 text-white text-[10px] px-3 py-1 mt-3 rounded">Apply Now</button>
          </div>
        </div>
      </div> */}

      {/* Main Content Area */}
      <div className="sm:px-4 lg:px-6 xl:mx-[145px]">
        <Header />

        <main className="bg-white mt-3 sm:mt-5 px-2 lg:p-0">
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Left Content */}
              <div className="flex-1">
                {/* Title above video */}
                <h1 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">{video.title}</h1>

                {/* Video Player */}
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 sm:w-20 h-16 sm:h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Play className="w-8 sm:w-10 h-8 sm:h-10 text-white ml-1" fill="white" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/80 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 text-gray-600 gap-2 sm:gap-0">

                  {/* Left Side: Views and Date */}
                  <div className="flex gap-3 sm:gap-4 text-xs">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>

                  {/* Right Side: Share and Copy Link */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Share Button */}
                    <button className="flex items-center gap-1 sm:gap-2 hover:text-red-600">
                      <Forward className="w-4 sm:w-5 h-4 sm:h-5" />
                      <span className="text-xs sm:text-sm">Share</span>
                    </button>

                    {/* Copy Link Button */}
                    <button
                      className="text-gray-600 hover:text-red-600 underline text-xs sm:text-sm"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied!");
                      }}
                    >
                      Copy Link
                    </button>
                  </div>

                </div>


                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{video.description}</p>
              </div>

              {/* Right Sidebar - Advertisement + Related Videos */}
              <aside className="w-full lg:w-[320px] flex-shrink-0 mt-6 lg:mt-0">
                {/* Realistic Advertisement */}
                <div className="mb-4 sm:mb-6 rounded-lg border border-orange-300 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 p-3 sm:p-4 shadow-lg select-none">
                  <h4 className="text-xs font-semibold text-orange-700 mb-2 tracking-widest uppercase">
                    Advertisement
                  </h4>
                  <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                    <p className="text-2xl sm:text-3xl font-handwriting text-orange-600 leading-snug">
                      The Touch of Thai
                    </p>
                    <p className="text-xs text-orange-600 uppercase tracking-widest mb-2 sm:mb-3">
                      products you can trust
                    </p>

                    <div className="bg-orange-300 rounded-md px-3 sm:px-5 py-1 text-xs sm:text-sm font-semibold text-orange-900 tracking-widest shadow-sm w-fit mx-auto">
                      1 - 31 JANUARY 2026
                    </div>

                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-3 w-full max-w-[260px]">
                      {/* Left character */}
                      <div className="flex flex-col items-center text-orange-800 text-xs font-semibold">
                        <svg
                          className="w-8 sm:w-10 h-8 sm:h-10 mb-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" stroke="orange" strokeWidth="1.5" />
                          <path
                            d="M7 17L11 13L15 17"
                            stroke="orange"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="leading-tight text-[10px] sm:text-xs">now at</span>
                        <span className="leading-tight font-bold text-[10px] sm:text-xs">Amma Naana</span>
                        <span className="leading-tight text-[10px] sm:text-xs">Stores</span>
                      </div>

                      {/* Right logo block */}
                      <div className="flex flex-col items-center gap-1">
                        <img
                          src="/ditp-logo.png" // Replace with your actual logo image URL
                          alt="DITP Logo"
                          className="w-12 sm:w-16 h-auto object-contain"
                          loading="lazy"
                        />
                        <p className="text-orange-700 text-[9px] sm:text-[10px] font-semibold tracking-wide">DITP</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommended Playlist */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recommended Playlist</h3>
                <div className="space-y-3 sm:space-y-4">
                  {relatedVideos.map((vid) => (
                    <a key={vid.id} href={`/videos/${vid.id}`} className="flex gap-2 sm:gap-3 group">
                      <div className="relative w-[120px] sm:w-[160px] h-[68px] sm:h-[90px] flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={vid.thumbnail || "/placeholder.svg"}
                          alt={vid.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] sm:text-[10px] px-1 py-0.5 rounded flex items-center gap-0.5">
                          <Play className="w-2 h-2" fill="white" />
                          {vid.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-red-600 line-clamp-2 mb-1">
                          {vid.title}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">{vid.views} views</p>
                      </div>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
          <TopViralVideosSection/>
          <ShortVideosSection/>
          <RelatedArticles/>
          <YouMayLike/>

          <ExploredGlobeSection/>
          <TrendingTopicsSection/>
          <PopularCategoriesSection/>
          <TrendingTopicsSection/>
          <LatestNewsSection/>
        </main>

        <Footer />
      </div>
    </div>
  );
}
