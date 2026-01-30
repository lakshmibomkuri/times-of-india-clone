"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/toi/header";
import IndiaBusinessNewsSection from "@/components/business-category/indiaBusinessNews";
import { ChevronRight,ChevronDown } from "lucide-react";
import { useRef } from "react";
import LatestVideosPage from "@/components/business-category/latest-business-news";
import LatestStartupNewsSection from "@/components/business-category/LatestStartupNewsSection";
import CorporateNews from "@/components/business-category/corporateNewsSection";
import EconomyNews from "@/components/business-category/economyNewsSection";
import CryptocurrencyNews from "@/components/business-category/CryptocurrencyNews";
import RealEstateNews from "@/components/business-category/RealEstateNews";
import TelecomNews from "@/components/business-category/telecomNewsSection";
import PersonalFinanceNews from "@/components/business-category/financeNewsSection";
import AviationNews from "@/components/business-category/aviationNewsSection";
import { BankingServicesSection, Budget2025Section } from "@/components/business-category/bankingServicesData";
import PopularBanksIFSC from "@/components/business-category/PopularBanksIFSC";
import YouMayLikeSection from "@/components/business-category/YouMayLikeSection";
import QuickLinksSection from "@/components/business-category/QuickLinksSection";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
import { Footer } from "@/components/toi/footer";
type Blog = {
    id: number;
    author: string;
    role: string;
    title: string;
    avatar: string;
};

const blogs: Blog[] = [
    {
        id: 1,
        author: "Ajay Srivastava",
        role: "Business, Edit Page, India",
        title: "What do we get from EU?",
        avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
        id: 2,
        author: "Rahul Phondke",
        role: "Business",
        title: "Powerpoint... and other crimes against humanity",
        avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
        id: 3,
        author: "Ajay Srivastava",
        role: "Business, Edit Page, India",
        title: "What do we get from EU?",
        avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
        id: 4,
        author: "Rahul Phondke",
        role: "Business",
        title: "Powerpoint... and other crimes against humanity",
        avatar: "https://i.pravatar.cc/80?img=12",
    },

];

// Breaking News Ticker
function BreakingNewsTicker() {
    return (
        <div className="bg-red-600 text-white py-1.5">
            <div className="max-w-[1000px] mx-auto px-4 flex items-center gap-3">
                <span className="bg-white text-red-600 text-[10px] font-bold px-2 py-0.5 rounded">BREAKING</span>
                <div className="overflow-hidden flex-1">
                    <p className="text-[12px] animate-marquee whitespace-nowrap">
                        Sensex jumps 500 points, Nifty above 23,000 | RBI keeps repo rate unchanged at 6.5% | IT stocks rally on strong Q3 results | Gold prices hit record high
                    </p>
                </div>
            </div>
        </div>
    );
}

// app/data/businessNews.ts
const businessNews = {
    leftColumn: {
        //   title: "Business News",
        items: [
            {
                headline: "‘We failed our customers’: Why IndiGo CEO says...",
                description:
                    "IndiGo CEO Pieter Elbers addressed recent flight disruptions. He stated the airline failed to meet expectations.",
            },
            {
                headline:
                    "Rupee returns to red! Currency falls to 92 per US Dollar",
                description:
                    "The rupee hit a record low of 92.00 against the US dollar on Thursday morning due to sustained external pressures.",
            },
        ],
    },

    featured: {
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        alt: "Global trade and containers",
        headline:
            "Economic Survey 2026: Will India–US trade deal be sealed this year?",
        description:
            "India’s trade talks with the US are nearing completion this year, potentially easing external uncertainties, according to the Economic Survey 2026. While progress has been slow, concluding a deal could boost economic confidence.",
    },

    rightColumn: [
        {
            image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
            alt: "Stock market volatility",
            headline:
                "How rupee became a victim of geopolitics & a strategic power...",
        },
        {
            image:
                "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=800&q=80",
            alt: "Indian economy growth",
            headline:
                "Paradox of 2025: India’s strongest performance in decades has...",
        },
    ],

    advertisement: {
        label: "Advertisement",
        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        alt: "Business advertisement",
        content: `India–EU FTA: A calculated leap beyond comfort zones
  
  The FTA demonstrates India’s willingness to move beyond its comfort zone by committing to deep market access, predictable rules, and regulatory cooperation. This marks a significant step toward integrating India into global trade networks.`,
    },
};
const internationalBusinessNews = {
    lead: {
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
        title:
            "Global Markets Rally as Trade Talks Progress: What Investors Need to Know",
    },
    middleList: [
        "US-China trade negotiations show positive signs...",
        "EU proposes new regulations for tech giants...",
        "Emerging markets attract record foreign investments...",
        "OPEC agrees on production cuts to stabilize prices...",
    ],
    bottomCards: [
        {
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
            title: "Asia-Pacific economic outlook brightens with new deals",
        },
        {
            image:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
            title: "Tech industry braces for upcoming global regulations",
        },
        {
            image:
                "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
            title: "Energy sector reacts to OPEC’s production decisions",
        },
        {
            image:
                "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=300&q=80",
            title: "Investors eye emerging markets for growth opportunities",
        },
    ],
    rightStories: [
        {
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80",
            title: "Trade talks update: Key takeaways",
        },
        {
            image:
                "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=100&q=80",
            title: "Global inflation trends impact business",
        },
        {
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=100&q=80",
            title: "Emerging markets show strong resilience",
        },
        {
            image:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&q=80",
            title: "Tech sector adapts to new regulations",
        },
    ],
};


const financialCalculator = {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3v5a3 3 0 006 0v-5c0-1.657-1.343-3-3-3z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2" />
        </svg>
    ),
    title: "Mutual Fund Calculator",
    description:
        "A Mutual Fund Calculator helps estimate the future value of investments",
    ctaText: "Calculate Now",
};

const tags = [
    "Maharashtra Bank Closed",
    "Budget 2026",
    "Economic Survey 2026",
    "Ajit Pawar",
    "India–EU FTA Deal",
];
const stories = [
    {
        id: 1,
        images: 12,
        title: "Vande Bharat Sleeper Train Launch Soon On This Route! Indian Railways’ New Train Better Than Rajdhani - Check Photos,…",
        imgs: [
            "https://picsum.photos/id/1018/400/200", // top-left
            "https://picsum.photos/id/1021/400/200", // top-right
            "https://picsum.photos/id/1025/400/200", // bottom-left
            "https://picsum.photos/id/1035/400/200", // bottom-right
        ],
    },
    {
        id: 2,
        images: 11,
        title: "Top 10 fastest wealth creators: Which stocks have grown your money the most in the last 5 years? Check List",
        imgs: ["https://picsum.photos/id/1043/800/400"],
    },
    {
        id: 3,
        images: 5,
        title: "Million-dollar executives: Meet top 5 highest-paid CXOs in India FY25",
        imgs: ["https://picsum.photos/id/1005/400/300"],
    },
    {
        id: 4,
        images: 16,
        title: "Top Diwali stocks 2025: 15 stocks you should bet on for Samvat 2082; check target price, upside potential & more",
        imgs: ["https://picsum.photos/id/1052/400/300"],
    },
    {
        id: 5,
        images: 11,
        title: "11 years of Make in India! From toys to smartphones and world-class trains- top points to know",
        imgs: ["https://picsum.photos/id/1062/400/300"],
    },
    {
        id: 6,
        images: 10,
        title: "GST 2.0 kicks in today! Check what the new tax reforms mean for you – Here’s 10 things you should know",
        imgs: ["https://picsum.photos/id/1074/400/300"],
    },
];
function MarketItem({
    label,
    value,
    change,
    down,
}: {
    label: string;
    value: string;
    change: string;
    down?: boolean;
}) {
    return (
        <div>
            <p className="text-xs font-medium text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-gray-900">{value}</p>
            <p
                className={`text-sm font-medium ${down ? "text-red-500" : "text-green-600"
                    }`}
            >
                {change} {down ? "↓" : "↑"}
            </p>
        </div>
    );
}
// Main Page Component
const CARD_WIDTH = 336;
const allBusinessItems = [
    // Sample business news items
    ...Array(20).fill(null).map((_, i) => ({
        image: `https://picsum.photos/id/${237 + i}/400/220`, // Replace with business-related images
        title: `Business News headline #${i + 1} — exciting corporate developments...`,
    })),
    // Additional business news items
    ...Array(30).fill(null).map((_, i) => ({
        image: `https://picsum.photos/id/${257 + i}/400/220`, // Replace with business-related images
        title: `Business Insight #${i + 21} — key market updates...`,
    })),
];
export default function BusinessPage() {

    const [activePage, setActivePage] = useState(0);

    const handlePrev = () => {
        setActivePage((p) => (p === 0 ? tags.length - 1 : p - 1));
    };

    const handleNext = () => {
        setActivePage((p) => (p === tags.length - 1 ? 0 : p + 1));
    };
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const totalPages = Math.max(blogs.length - 1, 1);

    const scrollTo = (index: number) => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollTo({
            left: index * CARD_WIDTH,
            behavior: "smooth",
        });
        setActiveIndex(index);
    };

    const onScroll = () => {
        if (!sliderRef.current) return;
        setActiveIndex(
            Math.round(sliderRef.current.scrollLeft / CARD_WIDTH)
        );
    };
    const handleScroll = () => {
        if (!sliderRef.current) return;
        const index = Math.round(
            sliderRef.current.scrollLeft / CARD_WIDTH
        );
        setActiveIndex(index);
    };
    
    const [visibleCount, setVisibleCount] = useState(20);

    function loadMore() {
        setVisibleCount((count) => Math.min(count + 10, allBusinessItems.length));
    }
    return (
        
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Shared Ad Strips */}
            {/* <SharedAdStrips /> */}

            {/* Main Content */}
            <div className="xl:mx-[145px]">
                {/* Stock Ticker */}
                {/* <StockTicker /> */}

                <Header />
              <main className="bg-white px-4">
                {/* Breaking News Ticker */}
                <BreakingNewsTicker />

                {/* Page Title */}
                <div>
                    <div className="mt-3">
                        <h1 className="text-[22px] font-bold text-gray-900">Business News</h1>
                    </div>
                </div>

                {/* Business News Section */}
                <section className="mt-5 rounded-lg max-w-[980px]">
                    <div className="flex gap-6">

                        {/* 1st col - Left list - 15% */}
                        <aside className="flex-shrink-0 w-[125px] space-y-6">
                            <div className="space-y-4">
                                {businessNews.leftColumn.items.map((item, idx) => (
                                    <article key={idx} className="space-y-1">
                                        <h3 className="font-semibold text-sm">{item.headline}</h3>
                                        <p className="text-xs text-gray-600">{item.description}</p>
                                        {idx !== businessNews.leftColumn.items.length - 1 && <hr />}
                                    </article>
                                ))}
                            </div>
                        </aside>

                        {/* 2nd col - Featured story - 35% */}
                        <article className="flex-shrink-0 w-[315px] space-y-4">
                            <div className="relative w-full h-[200px] rounded overflow-hidden">
                                <Image
                                    src={businessNews.featured.image}
                                    alt={businessNews.featured.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 35vw"
                                    priority
                                />
                            </div>
                            <h3 className="text-2xl font-bold leading-snug">
                                {businessNews.featured.headline}
                            </h3>
                            <p className="text-sm text-gray-700">{businessNews.featured.description}</p>
                        </article>

                        {/* 3rd col - Two stacked small stories - 35% */}
                        <div className="flex flex-col gap-6 flex-shrink-0 w-[120px]">
                            {businessNews.rightColumn.map((item, idx) => (
                                <article key={idx} className="space-y-2">
                                    <div className="relative w-full h-[100px] rounded overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 35vw"
                                            priority={idx === 0}
                                        />
                                    </div>
                                    <h4 className="text-sm font-semibold">{item.headline}</h4>
                                </article>
                            ))}
                        </div>

                        {/* 4th col - Advertisement + content below - 15% */}
                        <aside className="flex-shrink-0 w-[315px] flex flex-col space-y-4">
                            <div className="border rounded overflow-hidden">
                                <p className="text-xs text-center py-1 text-gray-500">{businessNews.advertisement.label}</p>
                                <div className="relative w-full h-[200px]">
                                    <Image
                                        src={businessNews.advertisement.image}
                                        alt={businessNews.advertisement.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 15vw"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Content below ad image */}
                            <div className="text-xs leading-snug text-gray-700 whitespace-pre-line">
                                {businessNews.advertisement.content}
                            </div>
                        </aside>
                    </div>
                </section>

                <IndiaBusinessNewsSection />
                {/* international business news */}
                <section className="mt-5 rounded-lg max-w-[980px]">
                    {/* TITLE */}
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-m font-bold tracking-wide">International Business News</h2>
                        <ChevronRight className="w-4 h-4" />
                    </div>

                    {/* MAIN TWO-COLUMN LAYOUT */}
                    <div className="grid grid-cols-12 gap-4">
                        {/* LEFT SIDE (8 COLS) */}
                        <div className="col-span-8">
                            {/* TOP ROW: FEATURED + MIDDLE */}
                            <div className="grid grid-cols-12 gap-4">
                                {/* FEATURED */}
                                <div className="col-span-7">
                                    <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                            src={internationalBusinessNews.lead.image}
                                            alt={internationalBusinessNews.lead.title}
                                            width={700}
                                            height={420}
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                                            {internationalBusinessNews.lead.title}
                                        </p>
                                    </div>
                                </div>

                                {/* MIDDLE LIST */}
                                <div className="col-span-5">
                                    <ul className="space-y-3 text-sm">
                                        {internationalBusinessNews.middleList.map((text, i) => (
                                            <li
                                                key={i}
                                                className={i !== internationalBusinessNews.middleList.length - 1 ? "border-b pb-2" : ""}
                                            >
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* BOTTOM ROW: 4 CARDS */}
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {internationalBusinessNews.bottomCards.map((card, i) => (
                                    <div key={i}>
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={300}
                                            height={180}
                                            className="mb-2 rounded w-full object-cover"
                                        />
                                        <p className="text-sm leading-snug">{card.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE (4 COLS) */}
                        <aside className="col-span-4 space-y-4">
                            {internationalBusinessNews.rightStories.map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={100}
                                        height={70}
                                        className="rounded flex-shrink-0 object-cover"
                                    />
                                    <p className="text-sm leading-snug">{item.title}</p>
                                </div>
                            ))}
                        </aside>
                    </div>
                </section>
                {/* photostories */}
                <section className="mt-5 rounded-lg max-w-[980px]">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-m font-bold tracking-wide">Photostories</h2>
                            <ChevronRight className="w-4 h-4" />
                        </div>


                    {/* Top grid with two cards */}
                    <div className="flex gap-[20px] mb-[30px]">
                        {/* Left card (4 images in 2x2 grid) */}
                        <div className="relative rounded-[8px] shadow-lg cursor-pointer w-[480px] h-[320px] overflow-hidden">
                            <div className="grid grid-cols-2 grid-rows-2 gap-[8px] w-full h-full">
                                {stories[0].imgs.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt=""
                                        className={`w-full h-full object-cover ${i === 0 ? "rounded-tl-[8px]" : ""
                                            } ${i === 1 ? "rounded-tr-[8px]" : ""} ${i === 2 ? "rounded-bl-[8px]" : ""
                                            } ${i === 3 ? "rounded-br-[8px]" : ""}`}
                                    />
                                ))}
                            </div>

                            {/* Red badge */}
                            <div className="absolute top-3 left-3 bg-[#E00C1C] text-white text-[11px] font-semibold px-2 py-[2px] rounded flex items-center gap-1 z-10 select-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 10h16"
                                    />
                                </svg>
                                {stories[0].images}
                            </div>

                            {/* Text overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 rounded-b-[8px]">
                                <p className="text-white font-semibold text-[14px] leading-[1.3] line-clamp-3">
                                    {stories[0].title}
                                </p>
                            </div>
                        </div>

                        {/* Right card (single big image) */}
                        <div className="relative rounded-[8px] shadow-lg cursor-pointer w-[480px] h-[320px] overflow-hidden">
                            <img
                                src={stories[1].imgs[0]}
                                alt=""
                                className="w-full h-full object-cover rounded-[8px]"
                            />

                            {/* Red badge */}
                            <div className="absolute top-3 left-3 bg-[#E00C1C] text-white text-[11px] font-semibold px-2 py-[2px] rounded flex items-center gap-1 z-10 select-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 10h16"
                                    />
                                </svg>
                                {stories[1].images}
                            </div>

                            {/* Text overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 rounded-b-[8px]">
                                <p className="text-white font-semibold text-[14px] leading-[1.3] line-clamp-3">
                                    {stories[1].title}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row with 4 smaller cards */}
                    <div className="flex gap-[20px]">
                        {stories.slice(2).map(({ id, images, title, imgs }) => (
                            <div
                                key={id}
                                className="relative rounded-[8px] shadow cursor-pointer w-[230px] overflow-hidden"
                            >
                                <img
                                    src={imgs[0]}
                                    alt=""
                                    className="w-full h-[140px] object-cover rounded-[8px]"
                                />
                                {/* Red badge */}
                                <div className="absolute top-3 left-3 bg-[#E00C1C] text-white text-[11px] font-semibold px-2 py-[2px] rounded flex items-center gap-1 z-10 select-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 10h16"
                                        />
                                    </svg>
                                    {images}
                                </div>
                                <p className="mt-2 text-[13px] font-normal leading-[1.3]">{title}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* latest business blogs */}
                <section className="mt-5 rounded-lg max-w-[980px]">
                    <div>
                        <h2 className="mb-4 text-m font-semibold text-gray-800">
                            Latest Business Blogs <span className="ml-1">›</span>
                        </h2>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1px_1fr]">
                            {/* LEFT: BLOG CARDS */}
                            <div>
                                <div className="relative overflow-hidden w-[610px] flex">
                                    <div
                                        ref={sliderRef}
                                        onScroll={handleScroll}
                                        className="flex gap-4 overflow-x-hidden scroll-smooth pb-2"
                                    >
                                        {blogs.map((blog) => (
                                            <div
                                                key={blog.id}
                                                className="w-[290px] flex-shrink-0 rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition"
                                            >
                                                <div className="mb-3 flex items-center gap-3">
                                                    <Image
                                                        src={blog.avatar}
                                                        alt={blog.author}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-800">
                                                            {blog.author}
                                                        </p>
                                                        <p className="text-xs text-gray-500">{blog.role}</p>
                                                    </div>
                                                </div>

                                                <p className="text-base font-medium text-gray-900 italic">
                                                    {blog.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* DOTS + ARROWS */}
                                <div className="mt-4 flex items-center justify-center gap-6">
                                    <div className="flex gap-2">
                                        {Array.from({ length: totalPages }).map((_, i) => (
                                            <span
                                                key={i}
                                                className={`h-2 rounded-full transition-all ${activeIndex === i ? "w-6 bg-black" : "w-2 bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-400">
                                        <button
                                            onClick={() => scrollTo(Math.max(activeIndex - 1, 0))}
                                            className="hover:text-black"
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={() =>
                                                scrollTo(Math.min(activeIndex + 1, totalPages - 1))
                                            }
                                            className="hover:text-black"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* DIVIDER */}
                            <div className="hidden lg:block w-px bg-gray-200" />

                            {/* RIGHT: MARKET SNAPSHOT */}
                            <div className="rounded-xl border border-gray-200 p-4">
                                <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-800">
                                    MARKET SNAPSHOT
                                </h3>

                                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                                    <MarketItem label="NIFTY" value="26142.1" change="-35.06" down />
                                    <MarketItem label="SENSEX" value="85408.7" change="-116.14" down />
                                    <MarketItem label="GOLD (₹/10 GRMS)" value="138396.0" change="+511" />
                                    <MarketItem label="SILVER (₹/1 KG)" value="223991.0" change="+4338" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* latest business new section */}
                <LatestVideosPage/>
                <LatestStartupNewsSection/>
                <CorporateNews/>
                <EconomyNews/>
                <CryptocurrencyNews/>
                <RealEstateNews/>
                <TelecomNews/>
                <PersonalFinanceNews/>
                <AviationNews/>
                <BankingServicesSection/>
                <Budget2025Section/>
                <PopularBanksIFSC/>
                {/* more stories */}
                <section className="mt-5 rounded-lg max-w-[980px]">
                    <h2 className="text-m font-semibold flex items-center gap-2 mb-6">
                        More Business News
                        <ChevronRight className="w-5 h-5" />
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {allBusinessItems.slice(0, visibleCount).map((item, idx) => (
                            <div
                                key={idx}
                                className="relative group rounded-lg overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={220}
                                    className="w-full h-[140px] sm:h-[160px] md:h-[140px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                    priority={idx < 6} // prioritize first few for performance
                                />
                                <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold leading-snug line-clamp-3 drop-shadow-lg">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < allBusinessItems.length && (
                        <div className="mt-6 text-center border border-gray-300 rounded w-[165px] mx-auto flex">
                            <button
                                onClick={loadMore}
                                className="inline-block px-1 py-1 bg-white text-red-500 rounded"
                            >
                                Load More Stories
                            </button>
                            <div className="flex justify-center mt-1">
                                <ChevronDown className="w-6 h-6 text-red-500" />
                            </div>
                        </div>
                    )}
                </section>
                <YouMayLikeSection/>
                <QuickLinksSection/>
                <ExploredGlobeSection/>
                <HotOnWebSection/>
                <TrendingTopicsSection/>
                <PopularCategoriesSection/>
                <TrendingVideosSection/>
                <LatestNewsSection/>
                <Footer/>
                </main>
            </div>

            {/* Marquee Animation Style */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    );
}
