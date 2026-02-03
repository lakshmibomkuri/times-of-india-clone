"use client";

import { Header } from "@/components/toi/header";
import { Footer } from "@/components/toi/footer";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";
import TopVideosSection from "@/components/videos/sections/TopVideosSection";
import CategoryVideosSection from "@/components/videos/sections/CategoryVideosSection";
import { useRef, useState, useEffect } from "react";
import GlobalPulsePage from "@/components/videos/sections/global-pulse";
import InternationalNewsPage from "@/components/videos/sections/international-news";
import MantraPage from "@/components/videos/sections/mantra";
import BollywoodSection from "@/components/videos/sections/BollywoodSection";
import ToiOrginalsPage from "@/components/videos/sections/TOI-originals";
import FeaturedVideosPage from "@/components/videos/sections/Featured-videos";
import EntertainmentPage from "@/components/videos/sections/Entertainment";
import TVPage from "@/components/videos/sections/TVPage";
import IndiaSection from "@/components/videos/sections/IndiaSection";
import TOINewsSection from "@/components/videos/sections/TOINewspointSection";
import HealthFitnessSection from "@/components/videos/sections/HealthFItnesSection";
import HollywoodSection from "@/components/videos/sections/Hollywood";
import FormulaESection from "@/components/videos/sections/FormulaE";
import FoodPage from "@/components/videos/sections/Food";
import RegionalVideoPage from "@/components/videos/sections/Regional-videos";
import MusicSection from "@/components/videos/sections/Music";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
const categories = ["Top Videos", "Trending", "Entertainment", "TOI Originals", "Sports", "Regional"];

const shorts = [
  { id: 1, title: "Football Icon Messi Visits Anant Ambani's Vantara", views: "2K", thumbnail: "https://picsum.photos/seed/short1/200/350" },
  { id: 2, title: "PM Modi Visits Ethiopian National Museum", views: "24K", thumbnail: "https://picsum.photos/seed/short2/200/350" },
  { id: 3, title: "PM Modi Arrives In Oman, Receives Ceremonial Welcome", views: "17K", thumbnail: "https://picsum.photos/seed/short3/200/350" },
  { id: 4, title: "Why Is Trump Betting Big On Asim Munir", views: "2K", thumbnail: "https://picsum.photos/seed/short4/200/350" },
  { id: 5, title: "SHINee's Key Halts All Activities After SHOCKING Revelation", views: "12K", thumbnail: "https://picsum.photos/seed/short5/200/350" },
  { id: 6, title: "SpongeBob SquarePants Immortalised At TCL Chinese Theatre", views: "3K", thumbnail: "https://picsum.photos/seed/short6/200/350" },
  { id: 7, title: "Why Is Trump Betting Big On Asim Munir", views: "2K", thumbnail: "https://picsum.photos/seed/short4/200/350" },
];

const educationVideos = [
  {
    id: 1,
    title: "Teacher Shares Why She's Quitting Public School After Years",
    views: "85K views",
    time: "12 hours ago",
    image: "https://picsum.photos/seed/edu1/600/400",
    videoUrl: "https://www.youtube.com/watch?v=_3GR1UX-cZU", // example
  },
  {
    id: 2,
    title: "Top 5 Latest Education News in India Today",
    views: "71 views",
    time: "Today",
    image: "https://picsum.photos/seed/edu2/600/400",
    videoUrl: "https://www.youtube.com/watch?v=_3GR1UX-cZU", // real example :contentReference[oaicite:0]{index=0}
  },
  {
    id: 3,
    title: "International Schools Craze — Exclusive Report",
    views: "3.2K views",
    time: "2 days ago",
    image: "https://picsum.photos/seed/edu3/600/400",
    videoUrl: "https://ndtv.in/videos/education", // example :contentReference[oaicite:1]{index=1}
  },
  {
    id: 4,
    title: "CBSE Enhances Digital Classrooms for Students",
    views: "4.9K views",
    time: "1 day ago",
    image: "https://picsum.photos/seed/edu4/600/400",
    videoUrl: "#", // placeholder
  },
  {
    id: 5,
    title: "Homeschooling Rise & K-12 Reopening Debate Panel",
    views: "7.1K views",
    time: "3 days ago",
    image: "https://picsum.photos/seed/edu5/600/400",
    videoUrl: "#", // placeholder
  },
  {
    id: 6,
    title: "Girls' Education & UNICEF Program Boost Confidence",
    views: "1.3K views",
    time: "4 days ago",
    image: "https://picsum.photos/seed/edu6/600/400",
    videoUrl: "#", // placeholder
  },
];


const technologyVideos = [
  {
    id: 1,
    title: "AI is Changing Education — What You Need to Know",
    views: "1.1K views",
    time: "3 hours ago",
    image: "https://picsum.photos/seed/tech1/600/400",
  },
  {
    id: 2,
    title: "New Tech Gadgets 2024 — Top Picks",
    views: "2.4K views",
    time: "1 day ago",
    image: "https://picsum.photos/seed/tech2/600/400",
  },
  {
    id: 3,
    title: "Big Tech Layoffs: What's Next?",
    views: "5.6K views",
    time: "5 hours ago",
    image: "https://picsum.photos/seed/tech3/600/400",
  },
  {
    id: 4,
    title: "Metaverse Explained — Future of Social Media",
    views: "3.2K views",
    time: "2 days ago",
    image: "https://picsum.photos/seed/tech4/600/400",
  },
  {
    id: 5,
    title: "Cybersecurity Tips You Must Know",
    views: "1.9K views",
    time: "7 hours ago",
    image: "https://picsum.photos/seed/tech5/600/400",
  },
  {
    id: 6,
    title: "5G is Coming — What It Means For You",
    views: "4.1K views",
    time: "12 hours ago",
    image: "https://picsum.photos/seed/tech6/600/400",
  },
];

const toiShorts = [
  {
    id: 1,
    title: "Why 2026 could be a turning point for the global economy",
    thumbnail: "https://picsum.photos/seed/toi1/300/500",
  },
  {
    id: 2,
    title: "India's strong message at the UN on global security",
    thumbnail: "https://picsum.photos/seed/toi2/300/500",
  },
  {
    id: 3,
    title: "Stock markets may face turbulence, experts warn",
    thumbnail: "https://picsum.photos/seed/toi3/300/500",
  },
  {
    id: 4,
    title: "Why health experts say sleep is more important than diet",
    thumbnail: "https://picsum.photos/seed/toi4/300/500",
  },
  {
    id: 5,
    title: "AI jobs boom: Which careers will survive?",
    thumbnail: "https://picsum.photos/seed/toi5/300/500",
  },
  {
    id: 6,
    title: "Hidden temples in India you won't believe exist",
    thumbnail: "https://picsum.photos/seed/toi6/300/500",
  },
  {
    id: 7,
    title: "Bollywood faces backlash after latest controversy",
    thumbnail: "https://picsum.photos/seed/toi7/300/500",
  },
  {
    id: 8,
    title: "Simple money habits that can change your future",
    thumbnail: "https://picsum.photos/seed/toi8/300/500",
  },
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("Top Videos");
  const [shortIndex, setShortIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleShortNext = () => {
    if (shortIndex < shorts.length - 6) {
      setShortIndex((p) => p + 1);
    }
  };

  const handleShortPrev = () => {
    if (shortIndex > 0) {
      setShortIndex((p) => p - 1);
    }
  };
  const carouselRef = useRef(null);
  const techCarouselRef = useRef(null);
  const [page, setPage] = useState(0);
  const [techPage, setTechPage] = useState(0);

  const CARD_WIDTH = 310; // width of each card
  const GAP = 10; // gap between cards
  const VISIBLE = 3; // show 3 cards at a time

  const totalPages = Math.ceil(educationVideos.length / VISIBLE);

  const scrollToPage = (index) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: index * (CARD_WIDTH + GAP) * VISIBLE,
      behavior: "smooth",
    });
    setPage(index);
  };

  const scrollToTechPage = (index) => {
    if (!techCarouselRef.current) return;
    techCarouselRef.current.scrollTo({
      left: index * (CARD_WIDTH + GAP) * VISIBLE,
      behavior: "smooth",
    });
    setTechPage(index);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Shared Ad Strips */}
      {/* <SharedAdStrips /> */}

      {/* Main Content Area */}
      <div className="xl:ml-[145px] xl:mr-[145px] px-2">
        {/* Top Ad Banner - AU Bank */}
        <div className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] py-2">
          <div className="max-w-[970px] mx-auto px-2 sm:px-4">
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-white flex-wrap">
              <span className="text-[10px] sm:text-[11px]">Still not banking with</span>
              <span className="text-lg sm:text-xl font-bold text-yellow-400">AU?</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-[9px] sm:text-[10px]">Up to</span>
                <span className="text-xl sm:text-2xl font-bold text-yellow-400">6.50%</span>
                <span className="text-[8px] sm:text-[9px] text-center">interest p.a. &<br />Monthly Interest Payment</span>
              </div>
              <button className="bg-white text-[#1a1a2e] text-[9px] sm:text-[10px] px-2 sm:px-3 py-1.5 rounded font-semibold">Open Account</button>
              <span className="text-[7px] sm:text-[8px] text-gray-400">T&C Apply</span>
            </div>
          </div>
        </div>

        <Header />

        <main>
          <div className="max-w-[980px] mx-auto">
            {/* Page Header with Categories */}
            <div className="flex items-center justify-between mb-3 bg-white rounded">
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] rounded whitespace-nowrap transition-colors flex-shrink-0 ${activeCategory === cat ? "text-red-600 font-bold" : "text-gray-600 hover:text-red-600"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Now Playing Banner */}
            <div className="bg-[#333] text-white px-2 sm:px-3 py-1.5 mb-3 rounded flex items-center gap-2 overflow-hidden">
              <span className="text-[9px] sm:text-[10px] font-bold text-red-500 flex-shrink-0">Now Playing</span>
              <div className="text-[10px] sm:text-[11px] truncate">PM Modi Joins 10,000 Bodo Zumba Record Event</div>
            </div>

            <div className="flex gap-2 sm:gap-4 w-full">
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {/* Top Videos Section */}
                <TopVideosSection />
                {/* SHORTS SECTION */}
                <section className="mb-6 w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] sm:text-[15px] font-bold text-[#333] flex items-center gap-2">
                      <span className="text-m rounded font-bold">
                        Shorts
                      </span>
                    </h2>
                  </div>

                  {/* Carousel */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex gap-1 sm:gap-2 transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateX(-${shortIndex * (isMobile ? 122 : 152)}px)`,
                      }}
                    >
                      {shorts.map((short) => (
                        <Link
                          key={short.id}
                          href="#"
                          className="flex-shrink-0 w-[120px] sm:w-[150px] group"
                        >
                          {/* CARD */}
                          <div className="rounded-lg overflow-hidden bg-white">

                            {/* TOP: Video */}
                            <div className="relative aspect-[9/16]">
                              <Image
                                src={short.thumbnail || "/placeholder.svg"}
                                alt={short.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                              />

                              {/* Play Icon Bottom Right */}
                              <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/70 w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-2xl">
                                <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white bg-red-500 p-0.5 sm:p-1 rounded-2xl" />
                              </div>
                            </div>

                            {/* BOTTOM: Content */}
                            <div className="p-1.5 sm:p-2">
                              <p className="text-[9px] sm:text-[10px] text-gray-900 font-medium line-clamp-2 leading-tight">
                                {short.title}
                              </p>
                              <span className="text-[8px] sm:text-[9px] text-gray-500">{short.views} views</span>
                            </div>

                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Arrows */}
                    <button
                      onClick={handleShortPrev}
                      disabled={shortIndex === 0}
                      className="absolute left-1 sm:left-3 top-[100px] sm:top-[120px] bg-white/90 border rounded-full p-1 sm:p-1.5 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>

                    <button
                      onClick={handleShortNext}
                      disabled={shortIndex >= toiShorts.length - 6}
                      className="absolute right-1 sm:right-3 top-[100px] sm:top-[120px] bg-white/90 border rounded-full p-1 sm:p-1.5 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-1 sm:gap-2 mt-2">
                    {Array.from({ length: Math.ceil(toiShorts.length / 6) }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${i === Math.floor(shortIndex / 6) ? "bg-black" : "bg-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </section>

                <CategoryVideosSection />

                {/* Education Section */}
                <section className="mb-6 w-full">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-[15px] sm:text-[16px] font-bold text-[#111]">Education</h2>
                    <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
                      See All
                    </Link>
                  </div>

                  {/* Carousel */}
                  <div className="relative overflow-hidden">
                    <div
                      ref={carouselRef}
                      className="flex gap-1 sm:gap-2 overflow-hidden scroll-smooth"
                    >
                      {educationVideos.map((video) => (
                        <div key={video.id} className="w-[280px] sm:w-[310px] flex-shrink-0">
                          <div className="relative h-[160px] sm:h-[180px] rounded-lg overflow-hidden mb-2">
                            <Image
                              src={video.image}
                              alt={video.title}
                              fill
                              className="object-cover"
                            />

                            {/* Play Icon */}
                            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/70 w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-2xl">
                              <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white bg-red-500 p-0.5 sm:p-1 rounded-2xl" />
                            </div>
                          </div>

                          <p className="text-[13px] sm:text-[14px] leading-snug line-clamp-2 mb-0.5">
                            {video.title}
                          </p>
                          <span className="text-[11px] sm:text-[12px] text-gray-500">
                            {video.views} | {video.time}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Left Arrow */}
                    <button
                      onClick={() => scrollToPage(Math.max(page - 1, 0))}
                      disabled={page === 0}
                      className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 sm:p-2 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={() => scrollToPage(Math.min(page + 1, totalPages - 1))}
                      disabled={page === totalPages - 1}
                      className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 sm:p-2 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-1 sm:gap-2 mt-3">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <span
                        key={index}
                        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${index === page ? "bg-black" : "bg-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </section>


                {/* Technology Section */}
                <section className="mb-6 w-full">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-[15px] sm:text-[16px] font-bold text-[#111]">Technology</h2>
                    <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
                      See All
                    </Link>
                  </div>

                  {/* Carousel */}
                  <div className="relative overflow-hidden">
                    <div
                      ref={techCarouselRef}
                      className="flex gap-1 sm:gap-2 overflow-hidden scroll-smooth"
                    >
                      {technologyVideos.map((video) => (
                        <div key={video.id} className="w-[280px] sm:w-[310px] flex-shrink-0">
                          <div className="relative h-[160px] sm:h-[180px] rounded-lg overflow-hidden mb-2">
                            <Image
                              src={video.image}
                              alt={video.title}
                              fill
                              className="object-cover"
                            />

                            {/* Play Icon */}
                            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/70 w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-2xl">
                              <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white bg-red-500 p-0.5 sm:p-1 rounded-2xl" />
                            </div>
                          </div>

                          <p className="text-[13px] sm:text-[14px] leading-snug line-clamp-2 mb-0.5">
                            {video.title}
                          </p>
                          <span className="text-[11px] sm:text-[12px] text-gray-500">
                            {video.views} | {video.time}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Arrows */}
                    <button
                      onClick={() => scrollToTechPage(Math.max(techPage - 1, 0))}
                      disabled={techPage === 0}
                      className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 sm:p-2 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>

                    <button
                      onClick={() => scrollToTechPage(Math.min(techPage + 1, totalPages - 1))}
                      disabled={techPage === totalPages - 1}
                      className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 sm:p-2 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-1 sm:gap-2 mt-3">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <span
                        key={index}
                        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${index === techPage ? "bg-black" : "bg-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </section>

                {/* TOI Shorts */}
                <section className="mb-6 w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[14px] sm:text-[15px] font-bold text-[#333] flex items-center gap-2">
                      <span className="text-m rounded font-bold">
                        TOI Shorts
                      </span>
                    </h2>
                  </div>

                  {/* Carousel */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex gap-1 sm:gap-2 transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateX(-${shortIndex * (isMobile ? 122 : 152)}px)`,
                      }}
                    >
                      {toiShorts.map((short) => (
                        <Link
                          key={short.id}
                          href="#"
                          className="flex-shrink-0 w-[120px] sm:w-[150px] group"
                        >
                          {/* CARD */}
                          <div className="rounded-lg overflow-hidden bg-white">

                            {/* TOP: Video */}
                            <div className="relative aspect-[9/16]">
                              <Image
                                src={short.thumbnail || "/placeholder.svg"}
                                alt={short.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                              />

                              {/* Play Icon Bottom Right */}
                              <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/70 w-10 sm:w-12 h-5 sm:h-6 flex items-center justify-center rounded-2xl">
                                <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white fill-white bg-red-500 p-0.5 sm:p-1 rounded-2xl" />
                              </div>
                            </div>

                            {/* BOTTOM: Content */}
                            <div className="p-1.5 sm:p-2">
                              <p className="text-[9px] sm:text-[10px] text-gray-900 font-medium line-clamp-2 leading-tight">
                                {short.title}
                              </p>
                              <span className="text-[8px] sm:text-[9px] text-gray-500">{short.views} views</span>
                            </div>

                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Arrows */}
                    <button
                      onClick={handleShortPrev}
                      disabled={shortIndex === 0}
                      className="absolute left-1 sm:left-3 top-[100px] sm:top-[120px] bg-white/90 border rounded-full p-1 sm:p-1.5 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>

                    <button
                      onClick={handleShortNext}
                      disabled={shortIndex >= toiShorts.length - 6}
                      className="absolute right-1 sm:right-3 top-[100px] sm:top-[120px] bg-white/90 border rounded-full p-1 sm:p-1.5 shadow z-10 disabled:opacity-40"
                    >
                      <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-1 sm:gap-2 mt-2">
                    {Array.from({ length: Math.ceil(toiShorts.length / 6) }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${i === Math.floor(shortIndex / 6) ? "bg-black" : "bg-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </section>
                <GlobalPulsePage />

                {/* International News Section */}
                <InternationalNewsPage />
                <MantraPage />
                <BollywoodSection />

                {/* Featured Videos Section */}
                <FeaturedVideosPage />

                {/* TOI Originals Section */}
                <ToiOrginalsPage />
                {/* Entertainment Hindi Section */}
                <EntertainmentPage />
                <TVPage />
                <IndiaSection />

                {/* TOI Newspoint Section */}
                <TOINewsSection videos={[]} />

                {/* Health & Fitness Section */}
                <HealthFitnessSection />

                {/* Hollywood Section */}
                <HollywoodSection />

                {/* Formula E Section */}
                <FormulaESection />

                {/* Food Section */}
                <FoodPage />

                {/* Music Section */}
                <MusicSection />

                {/* Regional Videos Hindi Section */}
                <RegionalVideoPage />
              </div>
            </div>

            {/* Footer Sections */}
            <div className="mt-6 bg-white rounded p-2 sm:p-4">
              <ExploredGlobeSection />
              <HotOnWebSection />
              <TrendingTopicsSection />
              <PopularCategoriesSection />
              <TrendingVideosSection />
              <LatestNewsSection />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}