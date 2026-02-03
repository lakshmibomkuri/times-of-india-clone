"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, MessageCircle, ChevronRight, ChevronLeft, ArrowLeft, ArrowDown } from "lucide-react";
import { Header } from "@/components/toi/header";
import { Footer } from "@/components/toi/footer";
import { Facebook, Youtube, Send, Instagram } from "lucide-react";
import UpNextArticlePage from "@/components/articles/Up-next";
import { useState, useEffect, useRef } from "react";
import { PhotoStories } from "@/components/articles/Photostories";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section";
/* ---------------- MOCK DATA ---------------- */
const article = {
  title: "Will US roll back 25% tariffs on India?",
  author: "Times of India",
  date: "Jan 24, 2026, 10:15 IST",
  heroImage: "https://picsum.photos/seed/hero/900/500",
  summary: "This is a sample summary for the article. You can put any text here.",
  publishedDate: "Jan 1, 2026",
  category: "General",
  readingTime: "5 min",

  contentPart1: `
    <p>The United States may reconsider the 25% tariffs imposed on Indian goods, following the collapse of Russian oil purchases.</p>
    <p>Sources familiar with the matter said discussions between trade officials are ongoing, with diplomatic channels actively engaged.</p>
    <p>The move could significantly impact bilateral trade relations between India and the US.</p>
  `,

  video: {
    thumbnail: "https://picsum.photos/seed/video/900/500",
    title: "Explained: Why US tariffs on India matter"
  },

  contentPart2: `
    <p>Experts believe that easing tariffs could help stabilize supply chains disrupted by geopolitical tensions.</p>
    <p>India has maintained that its energy security needs require diversified oil sourcing.</p>
    <p>Any rollback decision would likely be accompanied by fresh negotiations.</p>
  `
};

const comments = [
  { user: "Rahul", text: "Very detailed article." },
  { user: "Meena", text: "Hope this improves trade relations." }
];

const recommended = [
  { title: "India–US trade explained", image: "https://picsum.photos/seed/rec1/300/180" },
  { title: "Oil politics decoded", image: "https://picsum.photos/seed/rec2/300/180" },
  { title: "Global tariffs impact", image: "https://picsum.photos/seed/rec3/300/180" }
];

const photoStories = [
  { title: "World leaders meet", image: "https://picsum.photos/seed/photo1/150/220" },
  { title: "Markets in focus", image: "https://picsum.photos/seed/photo2/150/220" },

];

const upNext = [
  { title: "Sensex today", image: "https://picsum.photos/seed/next1/120/70" },
  { title: "Rupee vs Dollar", image: "https://picsum.photos/seed/next2/120/70" }
];

const alsoWatch = [
  { title: "Breaking news update", image: "https://picsum.photos/seed/watch1/100/60" },
  { title: "Budget highlights", image: "https://picsum.photos/seed/trend1/90/50" },
  { title: "India–US trade explained", image: "https://picsum.photos/seed/rec1/300/180" },
  { title: "Oil politics decoded", image: "https://picsum.photos/seed/rec2/300/180" },
  { title: "Global tariffs impact", image: "https://picsum.photos/seed/rec3/300/180" }
];

const trendingVideos = [
  { title: "Budget highlights", image: "https://picsum.photos/seed/trend1/90/50" },
  { title: "Sensex today", image: "https://picsum.photos/seed/next1/120/70" },
  { title: "Rupee vs Dollar", image: "https://picsum.photos/seed/next2/120/70" }
];

/* ---------------- PAGE ---------------- */
export default function ArticlePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [mediaTab, setMediaTab] = useState("watch");
  const [infoTab, setInfoTab] = useState("business");


  // Number of items visible at once (approx)
  const itemsPerPage = 4; // Adjust based on container width or breakpoints if needed

  const totalPages = Math.ceil(photoStories.length / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (!scrollRef.current) return;
    const scrollLeft = page * (150 + 12) * itemsPerPage; // width + gap approx, times page number
    scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    setCurrentPage(page);
  };

  // Update current page on manual scroll (optional, improves dots syncing)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const page = Math.round(scrollLeft / ((150 + 12) * itemsPerPage));
      setCurrentPage(page);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [itemsPerPage]);
  const [activeTab, setActiveTab] = useState("watch");
  const businessPoints = [
    "Market trends you should know",
    "Top startup funding rounds",
    "Latest IPO updates",
    "Corporate leadership moves",
    "Emerging technologies to watch",
    "Mergers and acquisitions news",
    "Global trade and investment updates",
    "Regulatory changes affecting businesses",
    "Tips for small business growth",
    "Industry expert insights and analysis",
  ];

  const sitePoints = [
    "Most read stories today",
    "Editors' picks",
    "Breaking news alerts",
    "Trending across categories",
    "Top opinion articles",
    "Featured interviews",
    "Lifestyle highlights",
    "Popular videos",
    "Community discussions",
    "Weekly top stories roundup",
  ];


  return (
    <div className="min-h-screen bg-white">
      <div className="xl:ml-[145px] xl:mr-[145px]">
        <Header />

        <main className="bg-white lg:p-4 px-2 sm:px-2 lg:px-2">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* ================= LEFT CONTENT ================= */}
            <article className="flex-1 w-full lg:max-w-[700px]">

              {/* Title */}
              <h1 className="text-[20px] sm:text-[26px] font-bold text-[#1a1a1a] mb-3">
                {article.title}
              </h1>

              {/* Meta */}
              <p className="text-[12px] text-gray-500 mb-4">
                {article.author} | {article.date}
              </p>

              {/* Hero Image */}
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                {/* Left: Hero Image */}
                <div className="relative w-full lg:w-1/2 aspect-video">
                  <Image
                    src={article.heroImage}
                    alt={article.title || "Hero Image"}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-3 sm:p-4 bg-white">
                  <p className="text-lg sm:text-xl font-bold mb-2">{article.title || "Article Title"}</p>
                  <p className="text-sm text-gray-700 mb-2">
                    {article.summary || "This is a sample summary for the article. You can put any text here."}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Published on: {article.publishedDate || "Jan 1, 2026"}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Author: {article.author || "Admin"}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Category: {article.category || "General"}
                  </p>
                  <p className="text-sm text-gray-700">
                    Reading time: {article.readingTime || "5 min"}
                  </p>
                </div>
              </div>


              {/* CONTENT – PART 1 */}
              {/* SECTION 2: Article Content – Part 1 */}
              <div
                className="mb-6 text-[15px] text-[#333] leading-[1.75]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <p>
                  The United States’ trade relationship with India has once again come under
                  the spotlight, with fresh indications that Washington may revisit the 25%
                  tariffs imposed on a range of Indian exports.
                </p>

                <p className="mt-3">
                  The development follows a reported decline in India’s purchase of Russian
                  crude oil, an issue that had previously strained bilateral ties.
                </p>

                <p className="mt-3">
                  Sources familiar with the discussions said that officials from both
                  countries are engaged in quiet negotiations aimed at reducing friction.
                </p>

                <p className="mt-3">
                  The tariffs, introduced during the earlier phase of trade disputes, had a
                  direct impact on sectors such as metals, engineering goods, and certain
                  consumer products.
                </p>

                <p className="mt-3">
                  Indian exporters have consistently argued that the additional duties
                  affected competitiveness in the US market.
                </p>

                <p className="mt-3">
                  On the American side, the measures were justified as a way to protect
                  domestic industries and address trade imbalances.
                </p>

                <p className="mt-3">
                  Changing geopolitical dynamics, however, appear to have prompted a
                  reassessment of earlier positions.
                </p>

                <p className="mt-3">
                  Analysts note that easing trade restrictions could help stabilise global
                  supply chains that remain under stress.
                </p>

                <p className="mt-3">
                  Bilateral trade between India and the US currently exceeds $190 billion
                  annually, highlighting the stakes involved.
                </p>

                <p className="mt-3">
                  Any policy shift on tariffs is expected to take into account both economic
                  and strategic considerations.
                </p>
              </div>


              {/* RELATED VIDEO (IF PUBLISHED) */}
              {article.video && (
                <div className="mb-6">
                  <div className="relative aspect-video rounded overflow-hidden">
                    <Image
                      src={article.video.thumbnail}
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-14 h-14 text-white fill-white" />
                    </div>
                  </div>
                  <p className="text-[13px] mt-2 font-medium">
                    {article.video.title}
                  </p>
                </div>
              )}

              {/* CONTENT CONTINUES AFTER VIDEO */}
              {/* SECTION 4: Article Content – Part 2 */}
              <div
                className="mb-8 text-[15px] text-[#333] leading-[1.75]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <p>
                  Trade experts believe that a rollback of tariffs would signal a renewed
                  commitment by the US to strengthening economic ties with India.
                </p>

                <p className="mt-3">
                  Such a move could also align with broader efforts to diversify supply chains
                  amid ongoing geopolitical uncertainties.
                </p>

                <p className="mt-3">
                  Indian officials have maintained that energy procurement decisions are
                  guided by national interest and prevailing market conditions.
                </p>

                <p className="mt-3">
                  They point out that reduced oil purchases from Russia demonstrate India’s
                  responsiveness to global concerns.
                </p>

                <p className="mt-3">
                  Business groups in both countries have welcomed the renewed engagement,
                  calling it a positive step toward predictability.
                </p>

                <p className="mt-3">
                  Export-oriented sectors are particularly hopeful that easing tariffs will
                  revive demand and improve margins.
                </p>

                <p className="mt-3">
                  From Washington’s perspective, closer trade ties with India are viewed as
                  strategically important in the Indo-Pacific region.
                </p>

                <p className="mt-3">
                  Any formal announcement is likely to follow detailed policy reviews and
                  negotiations.
                </p>

                <p className="mt-3">
                  Analysts caution that trade outcomes often involve compromise and should be
                  assessed in a broader context.
                </p>

                <p className="mt-3">
                  As discussions continue, industry stakeholders and markets will be closely
                  watching for concrete signals.
                </p>
              </div>


              {/* COMMENTS */}
              {/* ================= COMMENT SECTION TYPE 1 ================= */}
              <section className="border-t border-gray-200 pt-6 mt-6">

                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-[18px] font-bold text-[#111]">
                    Comments <span className="text-gray-500 font-normal">(40)</span>
                  </h2>
                  <span className="text-gray-400 text-[18px]">›</span>
                </div>

                {/* AI Summary + Top Takes */}
                <div className="bg-[#eef8f3] rounded-2xl p-4 sm:p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Left */}
                    <div>
                      <h3 className="text-[14px] font-semibold text-blue-600 mb-3">
                        ✨ What Readers Are Saying
                      </h3>

                      <p className="text-[14px] text-[#333] leading-[1.7]">
                        Comments indicate concerns about India potentially succumbing to US
                        pressure and compromising its sovereignty over Russian oil. Many
                        believe trade disputes and political maneuvering, not just oil
                        imports, drive tariff adjustments. Some argue sanctions have
                        impacted India more than tariffs.
                      </p>

                      <div className="flex items-center gap-3 mt-4 text-[13px]">
                        <span className="text-gray-600">Was this summary helpful?</span>
                        <button className="border rounded px-2 py-1">👍</button>
                        <button className="border rounded px-2 py-1">👎</button>
                      </div>
                    </div>

                    {/* Right */}
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#111] mb-3 flex items-center gap-2">
                        🟢 Top Takes from Readers
                      </h3>

                      <div className="space-y-3">
                        {[
                          ["Critical Of India’s Position", "30%"],
                          ["Skeptical Of US Motives", "30%"],
                          ["Neutral/Analytical", "20%"],
                          ["Nationalistic/Pro-India", "20%"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="flex justify-between items-center bg-white rounded-xl px-4 py-3 border"
                          >
                            <span className="text-[14px] text-[#333]">{label}</span>
                            <span className="text-[14px] font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[12px] text-gray-500 mt-3">
                        Tap to read related comments
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlighted Comment */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-700">
                      G
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-semibold">Guest Login</span>
                        <span className="bg-green-100 text-green-700 text-[11px] px-2 py-0.5 rounded-full">
                          Most Insightful
                        </span>
                      </div>

                      <p className="text-[12px] text-gray-500 mb-2">
                        22 minutes ago
                      </p>

                      <p className="text-[14px] text-[#333] leading-[1.6]">
                        Remember what Canadian Prime Minister Mark Carney warned about the
                        danger of middle powers “acquiescing” or “accommodating” USA’s
                        pressure results in a loss of their actual independence. So, it’s
                        not ...
                        <span className="text-blue-600 cursor-pointer"> Read More</span>
                      </p>

                      <div className="flex items-center gap-6 mt-3 text-[13px] text-gray-600">
                        <span>👍 5</span>
                        <span className="cursor-pointer">Reply</span>
                      </div>
                      {/* Actions */}
                      <div className="flex gap-3">
                        <button className="border rounded-full px-5 py-2 text-[13px]">
                          See all Comments
                        </button>
                        <button className="bg-black text-white rounded-full px-3 sm:px-5 py-2 text-[13px]">
                          Share Opinion
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </section>


              {/* RECOMMENDED */}
              {/* ===================== RECOMMENDED FOR YOU ===================== */}
              <section>

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-[16px] font-bold text-[#111] uppercase">
                    Recommended For You
                  </h2>
                  <span className="text-[10px] text-gray-500 uppercase">
                    Sponsored Links by Taboola
                  </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* Card 1 */}
                  <div>
                    <div className="rounded overflow-hidden mb-2">
                      <img
                        src="https://picsum.photos/seed/eye1/400/220"
                        className="w-full h-[160px] object-cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-[1.4] mb-1">
                      Blurry Vision & Fading Eyesight? Do This Immediately!
                    </h3>
                    <p className="text-[12px] text-gray-500 mb-2">Vision Veda</p>
                    <div className="flex justify-between">
                      <p className="text-[12px] text-gray-500 mb-2">TlanetGum</p>
                      <button className="border border-gray-300 rounded px-3 py-1 text-[12px]">
                        Learn More
                      </button></div>
                  </div>

                  {/* Card 2 */}
                  <div>
                    <div className="rounded overflow-hidden mb-2">
                      <img
                        src="https://picsum.photos/seed/building1/400/220"
                        className="w-full h-[160px] object-cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-[1.4] mb-1">
                      Tridasa Rise 40 min away from Airport
                    </h3>
                    <p className="text-[12px] text-gray-500 mb-2">
                      Luxurious 3, 4BHK flats from ₹1.40 Cr* at Tridasa Rise, Hyderabad
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[12px] text-gray-500 mb-2">Hearing Aids</p>
                      <button className="border border-gray-300 rounded px-3 py-1 text-[12px]">
                        Learn More
                      </button></div>
                  </div>

                  {/* Card 3 */}
                  <div>
                    <div className="rounded overflow-hidden mb-2">
                      <img
                        src="https://picsum.photos/seed/eye2/400/220"
                        className="w-full h-[160px] object-cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-[1.4] mb-1">
                      Glaucoma and cataracts? Never do this! (Watch)
                    </h3>
                    <p className="text-[12px] text-gray-500 mb-2">Vision Veda</p>
                    <div className="flex justify-between">
                      <p className="text-[12px] text-gray-500 mb-2">TradeWise</p>
                      <button className="border border-gray-300 rounded px-3 py-1 text-[12px]">
                        Learn More
                      </button></div>
                  </div>

                  {/* Card 4 */}
                  <div>
                    <div className="rounded overflow-hidden mb-2">
                      <img
                        src="https://picsum.photos/seed/speaker1/400/220"
                        className="w-full h-[160px] object-cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-[1.4] mb-1">
                      Public Speaking Skills for Young Minds
                    </h3>
                    <p className="text-[12px] text-gray-500 mb-2">
                      Expert-led classes for kids aged 5 to 14
                    </p>
                    <div className="flex justify-between">
                      <p className="text-[12px] text-gray-500 mb-2">Talent Gum</p>
                      <button className="border border-gray-300 rounded px-3 py-1 text-[12px]">
                        Book Now
                      </button></div>
                  </div>

                  {/* Card 5 */}
                  <div>
                    <div className="rounded overflow-hidden mb-2">
                      <img
                        src="https://picsum.photos/seed/trading1/400/220"
                        className="w-full h-[160px] object-cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-[1.4] mb-1">
                      Mr Bala’s Powerful Intraday Strategy Revealed – No More Guesswork
                    </h3>
                    <p className="text-[12px] text-gray-500 mb-2">TradeWise</p>
                    <div className="flex justify-between">
                      <p className="text-[12px] text-gray-500 mb-2">Trade Wise</p>
                      <button className="border border-gray-300 rounded px-3 py-1 text-[12px]">
                        Learn More
                      </button></div>
                  </div>

                  {/* Card 6 */}
                  <div>
                    <div className="rounded overflow-hidden mb-2">
                      <img
                        src="https://picsum.photos/seed/hearing1/400/220"
                        className="w-full h-[160px] object-cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-[1.4] mb-1">
                      AI-powered hearing aid at surprising cost
                    </h3>
                    <div className="flex flex-wrap">
                      <p className="text-[12px] text-gray-500 mb-2">
                        Recommended by audiologist
                      </p>
                      <div className="flex justify-between">
                        <p className="text-[12px] text-gray-500 mb-2">TradeWise</p>
                        <button className="border border-gray-300 rounded px-3 py-1 text-[12px]">
                          Learn More
                        </button></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col gap-2 mt-5">
                  <div>
                    <span className="text-[11px] text-gray-600 mr-2">Follow Us On Social Media</span>
                  </div>
                  <div className="flex flex-wrap gap-2">

                    {/* Google */}
                    <Link
                      href="#"
                      className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-md px-2 sm:px-3 py-1.5 text-[11px] sm:text-[12px] hover:bg-gray-50"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          fill="#EA4335"
                          d="M12 10.2v3.6h5.1c-.2 1.2-1.4 3.6-5.1 3.6-3.1 0-5.6-2.6-5.6-5.8s2.5-5.8 5.6-5.8c1.8 0 3 .8 3.7 1.5l2.5-2.4C16.7 2.6 14.6 1.5 12 1.5 6.8 1.5 2.5 5.8 2.5 11s4.3 9.5 9.5 9.5c5.5 0 9.2-3.9 9.2-9.3 0-.6-.1-1.1-.2-1.6H12z"
                        />
                      </svg>
                      <span className="hidden sm:inline">Google</span>
                    </Link>

                    {/* Facebook */}
                    <Link
                      href="#"
                      className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-md px-2 sm:px-3 py-1.5 text-[11px] sm:text-[12px] text-[#1877F2] hover:bg-gray-50"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Facebook</span>
                    </Link>

                    {/* Twitter / X */}
                    <Link
                      href="#"
                      className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-md px-2 sm:px-3 py-1.5 text-[11px] sm:text-[12px] hover:bg-gray-50"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                      </svg>
                      <span className="hidden sm:inline">Twitter</span>
                    </Link>

                    {/* Instagram */}
                    <Link
                      href="#"
                      className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-md px-2 sm:px-3 py-1.5 text-[11px] sm:text-[12px] text-pink-500 hover:bg-gray-50"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Instagram</span>
                    </Link>

                    {/* YouTube */}
                    <Link
                      href="#"
                      className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-md px-2 sm:px-3 py-1.5 text-[11px] sm:text-[12px] text-red-600 hover:bg-gray-50"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">YouTube</span>
                    </Link>

                    {/* Telegram */}
                    <Link
                      href="#"
                      className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded-md px-2 sm:px-3 py-1.5 text-[11px] sm:text-[12px] text-blue-500 hover:bg-gray-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Telegram</span>
                    </Link>

                  </div>

                </div>
              </section>


              {/* PHOTO STORIES */}
              <PhotoStories />
              {/* ================= COMMENT SECTION TYPE 2 ================= */}
              <section className="border-t border-gray-200 pt-6 mt-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-[18px] font-bold text-[#111]">
                    Comments
                  </h2>

                  <button className="bg-black text-white rounded-full px-5 py-2 text-[13px]">
                    Share your Opinion
                  </button>
                </div>

                {/* First Voice */}
                <div className="flex items-center gap-2 text-[14px] text-gray-600 mb-6">
                  <span>Be the first to share a thought and become the</span>
                  <span className="bg-green-100 text-green-700 text-[12px] px-2 py-0.5 rounded-full">
                    First Voice
                  </span>
                  <span>of this News Article</span>
                </div>

                {/* End of Article */}
                <div className="text-center text-[12px] text-gray-400">
                  — End of Article —
                </div>

              </section>

            </article>

            {/* ================= RIGHT SIDEBAR ================= */}
            <aside className="w-full lg:w-[320px] space-y-6">

              {/* Ad 1 */}
              <a href="#" className="block rounded-md overflow-hidden">
                <Image
                  src="https://picsum.photos/300/250?random=1"
                  width={300}
                  height={250}
                  alt="Advertisement"
                  className="w-full"
                />
              </a>

              {/* Tabs Section 1 */}
              <div>
                <div className="flex flex-wrap border-b border-gray-300 justify-between">
                  <button
                    onClick={() => setMediaTab("watch")}
                    className={`px-4 py-2 text-sm font-semibold ${mediaTab === "watch"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                      }`}
                  >
                    Also Watch
                  </button>
                  <button
                    onClick={() => setMediaTab("trending")}
                    className={`px-4 py-2 text-sm font-semibold ${mediaTab === "trending"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                      }`}
                  >
                    Viral Videos
                  </button>
                </div>

                <div className="p-4 bg-white">
                  {mediaTab === "watch" && (
                    <div className="space-y-3">
                      {alsoWatch.map((v, i) => (
                        <Link key={i} href="#" className="flex gap-2 items-center">
                          <Image src={v.image} width={100} height={60} alt="" />
                          <p className="text-[12px]">{v.title}</p>
                        </Link>
                      ))}
                    </div>
                  )}

                  {mediaTab === "trending" && (
                    <div className="space-y-3">
                      {trendingVideos.map((v, i) => (
                        <Link key={i} href="#" className="flex gap-2 items-center">
                          <Image src={v.image} width={90} height={50} alt="" />
                          <p className="text-[12px]">{v.title}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Ad 2 */}
              <a href="#" className="block rounded-md overflow-hidden">
                <Image
                  src="https://picsum.photos/300/250?random=3"
                  width={300}
                  height={250}
                  alt="Advertisement"
                  className="w-full"
                />
              </a>

              {/* Tabs Section 2 */}
              <div>
                <div className="flex flex-wrap border-b border-gray-300">
                  <button
                    onClick={() => setInfoTab("business")}
                    className={`px-4 py-2 text-sm font-semibold ${infoTab === "business"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                      }`}
                  >
                    In Business
                  </button>
                  <button
                    onClick={() => setInfoTab("site")}
                    className={`px-4 py-2 text-sm font-semibold ${infoTab === "site"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                      }`}
                  >
                    Entire Website
                  </button>
                </div>

                <div className="p-4 bg-white">
                  {infoTab === "business" && (
                    <ul className="list-disc pl-4 space-y-2 text-[12px] text-gray-700">
                      {businessPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {infoTab === "site" && (
                    <ul className="list-disc pl-4 space-y-2 text-[12px] text-gray-700">
                      {sitePoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Ad 3 */}
              <a href="#" className="block rounded-md overflow-hidden">
                <Image
                  src="https://picsum.photos/300/250?random=4"
                  width={300}
                  height={250}
                  alt="Advertisement"
                  className="w-full"
                />
              </a>

            </aside>



          </div>
          {/* UP NEXT */}
          <UpNextArticlePage />
          <ExploredGlobeSection/>
      <HotOnWebSection/>
      <TrendingTopicsSection/>
      <PopularCategoriesSection/>
      <TrendingVideosSection/>
      <LatestNewsSection/>
        </main>
      </div>
  
      <Footer />
    </div>
  );
}
