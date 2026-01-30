"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/toi/header";
import { Play, ChevronRight, ChevronLeft, Facebook, Twitter, Bookmark, Share2, Instagram, Youtube, Send } from "lucide-react";
import React, { useState } from "react";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
import { Footer } from "@/components/toi/footer";

/* ---------------- MOCK DATA ---------------- */
const photoStories = [
  {
    id: 1,
    slug: "flowering-plants-balcony-garden",
    title: "How to successfully grow tulips in pots on your balcony",
    category: "Lifestyle",
    author: "Garden Expert",
    date: "January 21, 2026, 10:30 AM IST",
    photos: 15,
    heroImage: "https://picsum.photos/seed/hero-garden/1200/600",
    images: [
      { src: "https://picsum.photos/seed/flower1/900/600", caption: "Geraniums are incredibly versatile flowering plants that thrive in containers. Their vibrant blooms in shades of red, pink, and white add instant color to any balcony garden." },
      { src: "https://picsum.photos/seed/flower2/900/600", caption: "Most notably, geraniums can survive for long periods without watering. This makes them perfect for busy gardeners or those who travel frequently." },
      { src: "https://picsum.photos/seed/flower3/900/600", caption: "Pansies bring cheerful faces to your container garden with their distinctive markings. These cool-weather favorites are perfect for spring and fall displays." },
      { src: "https://picsum.photos/seed/flower4/900/600", caption: "The delicate petals of pansies come in an amazing variety of colors and patterns. From solid colors to bi-colors and even tri-colors." },
      { src: "https://picsum.photos/seed/flower5/900/600", caption: "When selecting containers for your balcony garden, consider both drainage and aesthetics. Terracotta pots are classic choices." },
      { src: "https://picsum.photos/seed/flower6/900/600", caption: "Proper soil preparation is essential for container gardening success. Use a high-quality potting mix that retains moisture." },
      { src: "https://picsum.photos/seed/flower7/900/600", caption: "Regular feeding with a balanced fertilizer will keep your container plants healthy and blooming throughout the season." },
      { src: "https://picsum.photos/seed/flower8/900/600", caption: "Deadheading spent blooms encourages plants to produce more flowers. This simple maintenance task takes just minutes." },
      { src: "https://picsum.photos/seed/flower9/900/600", caption: "Consider the sunlight conditions on your balcony when selecting plants. Most flowering plants need at least 6 hours of direct sunlight." },
      { src: "https://picsum.photos/seed/flower10/900/600", caption: "Watering is perhaps the most critical aspect of container gardening. Check the soil moisture regularly." },
      { src: "https://picsum.photos/seed/flower11/900/600", caption: "Tulips are among the most beloved spring flowers, and they can be successfully grown in containers on your balcony." },
      { src: "https://picsum.photos/seed/flower12/900/600", caption: "Choose large, healthy bulbs for the best results. Plant them about 6 inches deep with the pointed end facing up." },
    ],
    // Right sidebar content specific to THIS story
    sidebarContent: {
      viralVideos: [
        { id: 1, title: "Russian MP Claims Europe's Support For Kyiv...", thumbnail: "https://picsum.photos/seed/viral1/180/120" },
        { id: 2, title: "Man Omar Attacked At Minneapolis", thumbnail: "https://picsum.photos/seed/viral2/180/120" },
        { id: 3, title: "Shocking moment caught on camera", thumbnail: "https://picsum.photos/seed/viral3/180/120" },
        { id: 4, title: "Celebrity chef's kitchen disaster", thumbnail: "https://picsum.photos/seed/viral4/180/120" },
      ],
      featuredArticles: [
        { id: 1, title: "Planning to buy Tata Starlight? Here's what...", thumbnail: "https://picsum.photos/seed/feat1/120/80" },
        { id: 2, title: "Mahindra Thar Roxx 2km edition prices...", thumbnail: "https://picsum.photos/seed/feat2/120/80" },
        { id: 3, title: "Toyota Urban Cruiser Hyryder Tech Package", thumbnail: "https://picsum.photos/seed/feat3/120/80" },
        { id: 4, title: "Cheaper BMW vehicles responses to BE 8", thumbnail: "https://picsum.photos/seed/feat4/120/80" },
        { id: 5, title: "MG's Fortuner rival Majestic teased", thumbnail: "https://picsum.photos/seed/feat5/120/80" },
        { id: 6, title: "Hero Xtreme 125R vs TVS Raider", thumbnail: "https://picsum.photos/seed/feat6/120/80" },
      ],
      youMayLike: [
        { id: 1, title: "Mahindra Thai Common driving mistakes that damage car", thumbnail: "https://picsum.photos/seed/yml1/100/70", source: "TOI Auto" },
        { id: 2, title: "Roxx 2km edition on-road prices in...", thumbnail: "https://picsum.photos/seed/yml2/100/70", source: "TOI Auto" },
      ],
    },
  },
];

// Up Next Stories - each with its own sidebar content
const upNextStories = [
  {
    id: 1,
    title: "Essential tips for growing organic vegetables at home",
    category: "Lifestyle",
    author: "Organic Living",
    date: "January 20, 2026, 09:15 AM IST",
    heroImage: "https://picsum.photos/seed/veg-hero/1200/600",
    images: [
      { src: "https://picsum.photos/seed/veg1/900/600", caption: "Starting your own vegetable garden is one of the most rewarding experiences. Begin with easy-to-grow vegetables like tomatoes, lettuce, and herbs." },
      { src: "https://picsum.photos/seed/veg2/900/600", caption: "Quality soil is the foundation of a successful vegetable garden. Invest in organic compost and mix it with potting soil." },
      { src: "https://picsum.photos/seed/veg3/900/600", caption: "Tomatoes are perhaps the most popular home-grown vegetable. Choose determinate varieties for containers." },
      { src: "https://picsum.photos/seed/veg4/900/600", caption: "Regular watering and feeding are essential for vegetable plants. Water deeply and consistently." },
      { src: "https://picsum.photos/seed/veg5/900/600", caption: "Harvesting vegetables at the right time ensures the best flavor and encourages more production." },
    ],
    sidebarContent: {
      viralVideos: [
        { id: 1, title: "Vegetable garden tips from experts", thumbnail: "https://picsum.photos/seed/vviral1/180/120" },
        { id: 2, title: "How to grow tomatoes indoors", thumbnail: "https://picsum.photos/seed/vviral2/180/120" },
        { id: 3, title: "Composting 101 for beginners", thumbnail: "https://picsum.photos/seed/vviral3/180/120" },
        { id: 4, title: "Best tools for home gardening", thumbnail: "https://picsum.photos/seed/vviral4/180/120" },
      ],
      featuredArticles: [
        { id: 1, title: "10 vegetables you can grow in pots", thumbnail: "https://picsum.photos/seed/vfeat1/120/80" },
        { id: 2, title: "Organic pest control methods", thumbnail: "https://picsum.photos/seed/vfeat2/120/80" },
        { id: 3, title: "Starting seeds indoors guide", thumbnail: "https://picsum.photos/seed/vfeat3/120/80" },
        { id: 4, title: "Best fertilizers for vegetables", thumbnail: "https://picsum.photos/seed/vfeat4/120/80" },
        { id: 5, title: "Vertical gardening ideas", thumbnail: "https://picsum.photos/seed/vfeat5/120/80" },
        { id: 6, title: "Container gardening basics", thumbnail: "https://picsum.photos/seed/vfeat6/120/80" },
      ],
      youMayLike: [
        { id: 1, title: "Grow fresh herbs in your kitchen", thumbnail: "https://picsum.photos/seed/vyml1/100/70", source: "TOI Lifestyle" },
        { id: 2, title: "Best indoor plants for clean air", thumbnail: "https://picsum.photos/seed/vyml2/100/70", source: "TOI Lifestyle" },
      ],
    },
  },
  {
    id: 2,
    title: "Creating a butterfly garden: Plants that attract pollinators",
    category: "Nature",
    author: "Wildlife Expert",
    date: "January 19, 2026, 11:30 AM IST",
    heroImage: "https://picsum.photos/seed/butterfly-hero/1200/600",
    images: [
      { src: "https://picsum.photos/seed/but1/900/600", caption: "Butterfly gardens are not only beautiful but also vital for supporting pollinator populations." },
      { src: "https://picsum.photos/seed/but2/900/600", caption: "Milkweed is essential for monarch butterflies, serving as the only food source for their caterpillars." },
      { src: "https://picsum.photos/seed/but3/900/600", caption: "Coneflowers, black-eyed Susans, and zinnias are excellent nectar sources that attract butterflies." },
      { src: "https://picsum.photos/seed/but4/900/600", caption: "Avoid using pesticides in your butterfly garden, as they can harm both caterpillars and adult butterflies." },
    ],
    sidebarContent: {
      viralVideos: [
        { id: 1, title: "Monarch butterfly migration filmed", thumbnail: "https://picsum.photos/seed/bviral1/180/120" },
        { id: 2, title: "How to attract hummingbirds", thumbnail: "https://picsum.photos/seed/bviral2/180/120" },
        { id: 3, title: "Building a bee hotel tutorial", thumbnail: "https://picsum.photos/seed/bviral3/180/120" },
        { id: 4, title: "Native plants for wildlife", thumbnail: "https://picsum.photos/seed/bviral4/180/120" },
      ],
      featuredArticles: [
        { id: 1, title: "Best flowers for bees and butterflies", thumbnail: "https://picsum.photos/seed/bfeat1/120/80" },
        { id: 2, title: "Creating a wildlife-friendly garden", thumbnail: "https://picsum.photos/seed/bfeat2/120/80" },
        { id: 3, title: "Native plants vs exotic species", thumbnail: "https://picsum.photos/seed/bfeat3/120/80" },
        { id: 4, title: "Pollinator garden design tips", thumbnail: "https://picsum.photos/seed/bfeat4/120/80" },
        { id: 5, title: "Butterfly identification guide", thumbnail: "https://picsum.photos/seed/bfeat5/120/80" },
        { id: 6, title: "Garden pond for wildlife", thumbnail: "https://picsum.photos/seed/bfeat6/120/80" },
      ],
      youMayLike: [
        { id: 1, title: "Bird watching for beginners", thumbnail: "https://picsum.photos/seed/byml1/100/70", source: "TOI Nature" },
        { id: 2, title: "Build a butterfly house DIY", thumbnail: "https://picsum.photos/seed/byml2/100/70", source: "TOI Nature" },
      ],
    },
  },
];

// Photostories carousel data
const photostoriesCarousel = [
  { id: 1, title: "7 car technologies that reduce driver fatigue tremendously", thumbnail: "https://picsum.photos/seed/ps1/300/200", photos: 7 },
  { id: 2, title: "February 2026 OTT releases you can't miss: The Bluff", thumbnail: "https://picsum.photos/seed/ps2/300/200", photos: 12 },
  { id: 3, title: "Ajit Pawar's last flight: Plane crash that shook the nation", thumbnail: "https://picsum.photos/seed/ps3/300/200", photos: 9 },
  { id: 4, title: "Top 10 luxury SUVs launching in 2026", thumbnail: "https://picsum.photos/seed/ps4/300/200", photos: 10 },
  { id: 5, title: "Inside Shah Rukh Khan's new mansion", thumbnail: "https://picsum.photos/seed/ps5/300/200", photos: 15 },
  { id: 6, title: "Best budget smartphones of 2026", thumbnail: "https://picsum.photos/seed/ps6/300/200", photos: 8 },
];
export const youMayLike = [
  {
    img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "3, 4 BHK from ₹1.40 Cr* by Tridasa Realty",
    title: (
      <>
        3, 4 BHK from{" "}
        <span className="underline cursor-pointer">₹1.40 Cr*</span> by Tridasa Realty
      </>
    ),
    description: (
      <>
        Swimming pool, gym, badminton court, squash court, mini{" "}
        <span className="underline cursor-pointer">theatre</span>
      </>
    ),
    brand: "Tridasa Realty Private Limited",
  },
  {
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Urbanrise 3 BHK at 84 Lakhs* (All Incl.)",
    title: "Urbanrise 3 BHK at 84 Lakhs* (All Incl.)",
    description: "Avail the No-GST on ready-to-move-in 2 and 3 BHK residences",
    brand: "Urbanrise",
  },
  {
    img: "https://images.pexels.com/photos/1181631/pexels-photo-1181631.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Only 2% Traders Know this Powerful Intraday Strategy",
    title: "Only 2% Traders Know this Powerful Intraday Strategy",
    description: "Learn elite scalping strategy from Mr. Pankaj — 6+ years market expert.",
    brand: "TradeWise",
  },
];

const featuredInAuto = [
  { id: 1, title: "Planning to buy Tata Starlight? Here's what the Goan...", subtitle: "Mahindra responds to BE 6 fire incident, offers...", thumbnail: "https://picsum.photos/seed/auto1/100/70" },
  { id: 2, title: "Toyota Urban Cruiser Hyryder: Tech Packag...", subtitle: "Cheaper BMWs: Mercedes-bound India-EU FTA...", thumbnail: "https://picsum.photos/seed/auto2/100/70" },
  { id: 3, title: "MG's Fortuner rival Majestic teased; launch date...", subtitle: "Hero Xtreme 125R vs TVS Raider vs Honda SP125...", thumbnail: "https://picsum.photos/seed/auto3/100/70" },
  { id: 4, title: "2025 Renault Duster revealed: Top five things yo...", subtitle: "TVS first electric motorcycle design patented in India...", thumbnail: "https://picsum.photos/seed/auto4/100/70" },
  { id: 5, title: "Audi e-tron GT review: Fast and futuristic...", subtitle: "Tesla Model 3 update hints at major battery change...", thumbnail: "https://picsum.photos/seed/auto5/100/70" },
  { id: 6, title: "Hyundai Creta 2026 facelift spy shots emerge...", subtitle: "Maruti Suzuki to launch affordable electric hatch...", thumbnail: "https://picsum.photos/seed/auto6/100/70" },
  { id: 7, title: "BMW X5 vs Mercedes GLE: Which SUV to pick...", subtitle: "Jaguar Land Rover teases next-gen Range Rover...", thumbnail: "https://picsum.photos/seed/auto7/100/70" },
  { id: 8, title: "Kia EV6 long-range model gets new features...", subtitle: "Honda to unveil new motorcycle line-up in India...", thumbnail: "https://picsum.photos/seed/auto8/100/70" },
  { id: 9, title: "Mahindra Thar special edition revealed...", subtitle: "Upcoming electric scooters for Indian roads...", thumbnail: "https://picsum.photos/seed/auto9/100/70" },
  { id: 10, title: "Volkswagen Taigun 2026 updates leaked...", subtitle: "Luxury carmakers react on India-EU FTA implications...", thumbnail: "https://picsum.photos/seed/auto10/100/70" }
];

type LinkItem = {
  label: string;
  href?: string;
};

const livingEntertainment: LinkItem[] = [
  { label: "ETimes" },
  { label: "Travel Destinations" },
  { label: "Cricbuzz.com" },
  { label: "TV" },
  { label: "Lifestyle" },
  { label: "Newspaper Subscription" },
  { label: "Food News" },
  { label: "Times Prime" },
  { label: "Whats Hot" },
];

const services: LinkItem[] = [
  { label: "CouponDunia" },
  { label: "TechGig" },
  { label: "TimesJobs" },
  { label: "Bollywood News" },
  { label: "Times Mobile" },
  { label: "Gadgets" },
  { label: "Work with Us" },
  { label: "Colombia" },
];

const SectionBox = ({
  title,
  items,
}: {
  title: string;
  items: LinkItem[];
}) => (
  <div className="mb-10">
    <h3 className="mb-4 text-lg font-semibold text-gray-800">
      {title}
    </h3>

    <div className="rounded-xl border border-gray-200 bg-white px-6 py-6">
      <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href ?? "#"}
            className="hover:text-red-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

/* ---------------- COMPONENTS ---------------- */

// Right Sidebar Component - receives unique content for each story
interface SidebarContent {
  viralVideos: { id: number; title: string; thumbnail: string }[];
  featuredArticles: { id: number; title: string; thumbnail: string }[];
  youMayLike: { id: number; title: string; thumbnail: string; source: string }[];
}

function StorySidebar({ content, activeVideoTab, setActiveVideoTab }: { content: SidebarContent; activeVideoTab: string; setActiveVideoTab: (tab: string) => void }) {
  return (
    <div className="w-[300px] flex-shrink-0 ml-4 hidden lg:block sticky top-[88px] self-start">
      <div className="space-y-4">

        {/* Ad Block */}
        <div className="bg-white rounded border">
          <p className="text-[9px] text-gray-400 px-3 py-1 border-b">Advertisement</p>
          <div className="p-3">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-white text-orange-600 px-2 py-0.5 rounded text-[10px] font-bold">amazon</div>
              </div>
              <p className="text-[14px] font-bold mb-1">Great Republic Day Sale</p>
              <p className="text-[11px] opacity-90">Up to 80% off on Electronics</p>
            </div>
          </div>
        </div>

        {/* Watch Viral Videos */}
        <div className="bg-white rounded border">
          <div className="p-3 border-b">
            <h3 className="text-[14px] font-bold text-[#1a1a1a] flex items-center gap-1">
              <Play className="w-4 h-4 text-red-600 fill-red-600" /> Watch Viral Videos
            </h3>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setActiveVideoTab("trending")} className={`text-[11px] px-3 py-1 rounded ${activeVideoTab === "trending" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600"}`}>Trending</button>
              <button onClick={() => setActiveVideoTab("latest")} className={`text-[11px] px-3 py-1 rounded ${activeVideoTab === "latest" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600"}`}>Latest</button>
            </div>
          </div>
          <div className="p-3 grid grid-cols-2 gap-2">
            {content.viralVideos.map((video) => (
              <Link key={video.id} href="#" className="group">
                <div className="relative aspect-video rounded overflow-hidden mb-1">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <h4 className="text-[10px] text-[#333] leading-tight group-hover:text-red-600 line-clamp-2">{video.title}</h4>
              </Link>
            ))}
          </div>
          <div className="p-3 pt-0">
            <button className="w-full text-center text-[11px] text-red-600 font-medium border border-red-600 rounded py-1.5 hover:bg-red-50">View More Videos</button>
          </div>
        </div>

        {/* Ad Block 2 */}
        <div className="bg-white rounded border">
          <p className="text-[9px] text-gray-400 px-3 py-1 border-b">Advertisement</p>
          <div className="relative h-[180px]">
            <Image src="https://picsum.photos/seed/ad-sidebar/300/180" alt="Ad" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden mb-4 shadow-sm">
          <div className="p-3 border-b">
            <h3 className="text-[14px] font-bold text-[#1a1a1a] flex items-center gap-1">
              Featured In Auto <ChevronRight className="w-4 h-4" />
            </h3>
          </div>

          {/* GRID */}
          <div className="p-3 grid grid-cols-2 gap-3">
            {featuredInAuto.map((item) => (
              <Link
                key={item.id}
                href="#"
                className="group block"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded overflow-hidden mb-2">
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <p className="text-[12px] text-[#333] leading-snug group-hover:text-red-600 line-clamp-2">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>


        {/* You May Like */}
        <section className="mt-5 relative">                         {/* Section Title */}                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">                           You May Like <ChevronRight className="w-5 h-5" />                         </h2>
          {/* Cards Container */}
          <div className="flex flex-col gap-6 mb-6">
            {youMayLike.map(({ img, alt, title, description, brand }, idx) => (
              <article
                key={idx}
                className="flex flex-col overflow-hidden w-full"
              >
                {/* Image */}
                <div className="relative w-full h-40 md:h-48">
                  <Image src={img} alt={alt} layout="fill" objectFit="cover" />
                </div>

                {/* Content */}
                <div className="p-1 flex flex-col flex-grow">
                  <h3 className="font-bold text-base leading-tight mb-1">{title}</h3>
                  <p className="text-xs text-gray-700 mb-1 leading-snug">{description}</p>
                  <p className="text-xs font-medium text-gray-500 mb-4">{brand}</p>
                  <div className="mt-auto self-start">
                    <button className="px-3 py-1 text-xs hover:bg-gray-100 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Photostories Carousel Component
function PhotostoriesCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(photostoriesCarousel.length / perPage);

  const getCurrentItems = () => {
    const start = page * perPage;
    return photostoriesCarousel.slice(start, start + perPage);
  };

  return (
    <section className="bg-white border-t relative mb-5">
      <h2 className="text-[16px] font-bold text-[#1a1a1a] mb-4 flex items-center gap-1">
        Photostories <ChevronRight className="w-4 h-4" />
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {getCurrentItems().map((ps) => (
          <Link key={ps.id} href={`/photostory/${ps.id}`} className="group">
            <div className="relative aspect-[3/2] rounded overflow-hidden mb-2">
              <Image src={ps.thumbnail || "/placeholder.svg"} alt={ps.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-[11px] text-[#333] group-hover:text-red-600 line-clamp-2 leading-tight">{ps.title}</h3>
          </Link>
        ))}
      </div>
      {/* Dots on left, Arrows on right */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-2 h-2 rounded-full ${i === page ? 'bg-gray-800' : 'bg-gray-300'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} className={`w-7 h-7 rounded-full border flex items-center justify-center ${page === 0 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 hover:bg-gray-100'}`}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page === totalPages - 1} className={`w-7 h-7 rounded-full border flex items-center justify-center ${page === totalPages - 1 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 hover:bg-gray-100'}`}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE COMPONENT ---------------- */
export default function PhotostorySlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [mainVideoTab, setMainVideoTab] = useState("trending");
  const [upNextVideoTabs, setUpNextVideoTabs] = useState<Record<number, string>>({});

  const story = photoStories.find((s) => s.slug === slug) || photoStories[0];

  if (!story) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Photostory not found</h1>
          <Link href="/photostory" className="text-red-600 hover:underline">Back to Photostories</Link>
        </div>
      </div>
    );
  }

  const getUpNextVideoTab = (id: number) => upNextVideoTabs[id] || "trending";
  const setUpNextVideoTab = (id: number, tab: string) => setUpNextVideoTabs(prev => ({ ...prev, [id]: tab }));

  return (
    <div
      className="min-h-screen bg-white hide-scrollbar"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        overflowY: "auto",
        scrollbarWidth: "none",   // Firefox
        msOverflowStyle: "none",  // IE / old Edge
      }}
    >
      <style jsx>{`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>

      <div className="xl:ml-[145px] xl:mr-[145px]">
        <Header />
        <main className="h-[calc(100vh-88px)]">
          {/* <div className="max-w-[980px] h-full"> */}

            {/* =================== MAIN STORY SECTION =================== */}
            <section className="relative">
              <div className="flex items-start">

                {/* Left - Story Content */}
                <div className="flex-1 bg-white">
                  <div>
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1 text-[11px] text-gray-500 mb-4">
                      <Link href="/" className="text-red-600 hover:underline">Home</Link>
                      <ChevronRight className="w-3 h-3" />
                      <Link href="/photostory" className="text-red-600 hover:underline">Photostories</Link>
                      <ChevronRight className="w-3 h-3" />
                      <Link href="#" className="text-red-600 hover:underline">{story.category}</Link>
                    </nav>

                    {/* Title */}
                    <h1 className="text-[24px] lg:text-[28px] font-bold leading-tight text-[#1a1a1a] mb-3">{story.title}</h1>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-4 pb-4 border-b">
                      <div className="text-[12px] text-gray-500">
                        <span className="text-red-600">{story.author}</span>
                        <span className="mx-2">|</span>
                        <span>{story.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 rounded bg-[#3b5998] flex items-center justify-center"><Facebook className="w-3.5 h-3.5 text-white" /></button>
                        <button className="w-7 h-7 rounded bg-black flex items-center justify-center"><Twitter className="w-3.5 h-3.5 text-white" /></button>
                        <button className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center"><Bookmark className="w-3.5 h-3.5 text-gray-600" /></button>
                        <button className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center"><Share2 className="w-3.5 h-3.5 text-gray-600" /></button>
                      </div>
                    </div>

                    {/* Story Images */}
                    <div className="space-y-6">
                      {story.images.map((img, index) => (
                        <div key={index}>
                          <div className="relative w-full aspect-[3/2] rounded overflow-hidden">
                            <Image src={img.src || "/placeholder.svg"} alt={`Photo ${index + 1}`} fill className="object-cover" />
                            <div className="absolute top-3 left-3 bg-black/70 text-white text-[11px] px-2 py-1 rounded">
                              {String(index + 1).padStart(2, '0')}/{String(story.photos).padStart(2, '0')}
                            </div>
                          </div>
                          <p className="mt-3 text-[14px] text-[#333] leading-relaxed">{img.caption}</p>

                          {/* Inline Ad after every 5th image */}
                          {(index + 1) % 5 === 0 && index < story.images.length - 1 && (
                            <div className="my-6 bg-gray-100 p-3 rounded">
                              <p className="text-[9px] text-gray-400 mb-2 text-center">Advertisement</p>
                              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 rounded flex items-center justify-between">
                                <div>
                                  <p className="text-[13px] font-bold">Flipkart Big Saving Days</p>
                                  <p className="text-[11px]">Up to 70% off on Fashion</p>
                                </div>
                                <button className="bg-white text-green-600 text-[11px] font-bold px-3 py-1.5 rounded">Shop Now</button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Comment Section */}
                    <section className="mt-8 pt-6 border-t relative">
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <input type="text" placeholder="Start a Conversation" className="w-full border border-gray-300 rounded-full px-4 py-2 text-[12px] focus:outline-none focus:border-gray-400" />
                        </div>
                        <button className="bg-red-600 text-white text-[12px] font-medium px-4 py-2 rounded hover:bg-red-700">Post comment</button>
                      </div>
                    </section>

                    {/* Follow Us On Social Media */}
                    <section className="mt-6 pt-6 border-t relative mb-2">
                      <h3 className="text-[13px] font-bold text-[#333] mb-3">Follow Us On Social Media</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 text-[11px] text-gray-600"><Facebook className="w-3.5 h-3.5" /> Facebook</Link>
                        <Link href="#" className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 text-[11px] text-gray-600"><Twitter className="w-3.5 h-3.5" /> X</Link>
                        <Link href="#" className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 text-[11px] text-gray-600"><Instagram className="w-3.5 h-3.5" /> Instagram</Link>
                        <Link href="#" className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 text-[11px] text-gray-600"><Youtube className="w-3.5 h-3.5" /> Youtube</Link>
                        <Link href="#" className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 text-[11px] text-gray-600"><Send className="w-3.5 h-3.5" /> Telegram</Link>
                      </div>
                    </section>
                  </div>

                  {/* Photostories Carousel for Main Story */}
                  <PhotostoriesCarousel />
                </div>

                {/* Right - Sidebar (unique content for main story) */}
                <StorySidebar content={story.sidebarContent} activeVideoTab={mainVideoTab} setActiveVideoTab={setMainVideoTab} />
              </div>
            </section>
          {/* </div> */}
          <section className="w-full bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-black">TIMES</span>{" "}
          <span className="text-red-600">ENTERTAINMENT</span>
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Living and entertainment
        </p>
      </div>

      {/* Sections */}
      <SectionBox
        title="Living and entertainment"
        items={livingEntertainment}
      />

      <SectionBox title="Services" items={services} />
    </section>
          <HotOnWebSection/>
          <TrendingTopicsSection/>
          <PopularCategoriesSection/>
          <LatestNewsSection/>
          <Footer/>
        </main>

      </div>
    </div>
  );
}
