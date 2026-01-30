"use client";

import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

/** -------------------- TABS -------------------- **/
const tabs = ["Most Read", "Most Commented", "Most Shared"];

/** -------------------- TYPES -------------------- **/
type TabItem = { image: string; title: string; duration?: string };

type TabData = {
    mainNews: { title: string; image: string; count: string };
    listNews: string[];
    featuredNews: { title: string; image: string }[];
    rightItems: TabItem[];
};

/** -------------------- TAB DATA -------------------- **/
const tabData: Record<string, TabData> = {
    "Most Read": {
        mainNews: {
            title: "Top 10 Football Moments of 2025 Season That Fans Will Never Forget",
            image: "https://picsum.photos/seed/football1/900/520",
            count: "12",
        },
        listNews: [
            "Lionel Messi breaks yet another record by scoring his 1000th career goal, thrilling fans worldwide with his remarkable consistency and skill.",
            "LeBron James leads the Los Angeles Lakers to a historic victory, showcasing his leadership and clutch performance in the final quarter.",
            "Serena Williams announces the launch of her new tennis academy aimed at nurturing the next generation of champions and promoting grassroots development.",
        ],
        featuredNews: [
            {
                title: "Champions League final highlights: unforgettable goals, near misses, and a last-minute winner that stunned the stadium",
                image: "https://picsum.photos/seed/clfinal/320/180",
            },
            {
                title: "Olympics 2025: Memorable sports moments including record-breaking performances and inspirational stories from athletes around the globe",
                image: "https://picsum.photos/seed/olympics/320/180",
            },
            {
                title: "Rising stars in the NBA: A deep dive into the players who are redefining the league with their agility, shooting, and court vision",
                image: "https://picsum.photos/seed/nba/320/180",
            },
            {
                title: "Historic World Cup goals that changed matches and made fans celebrate in unprecedented ways across continents",
                image: "https://picsum.photos/seed/worldcup/320/180",
            },
        ],
        rightItems: [
            {
                image: "https://picsum.photos/seed/match1/200/200",
                title: "Football recap: Last night’s goal fest saw six goals scored in a thrilling display of attacking",
            },
            {
                image: "https://picsum.photos/seed/match2/200/200",
                title: "Basketball epic buzzer-beater: LeBron’s last-second three-pointer secured a dramatic win",
            },
            {
                image: "https://picsum.photos/seed/match3/200/200",
                title: "Tennis Grand Slam review: An exciting match with unexpected twists kept spectators glued to every point",
            },
            {
                image: "https://picsum.photos/seed/match4/200/200",
                title: "Soccer highlights: Key players showcased extraordinary skills and teamwork in last night’s unforgettable clash",
            },
        ],
    },

    "Most Commented": {
        mainNews: {
            title: "Controversial Refereeing Decisions Spark Debate Among Fans and Analysts",
            image: "https://picsum.photos/seed/referee/900/520",
            count: "8",
        },
        listNews: [
            "Fans react passionately to shocking VAR calls, debating the fairness of decisions that dramatically changed match outcomes.",
            "Top five controversial red cards in sports history are being revisited as discussions heat up across social media platforms.",
            "Athletes speak out on fair play and emphasize the importance of consistent officiating in maintaining the integrity of the game.",
        ],
        featuredNews: [
            {
                title: "Social media explodes as fans discuss last night’s match, sharing memes, opinions, and heated debates",
                image: "https://picsum.photos/seed/social/320/180",
            },
            {
                title: "Expert analysis of referee errors provides insight into decision-making under pressure during crucial moments in games",
                image: "https://picsum.photos/seed/analysis/320/180",
            },
            {
                title: "Famous debates in sports history continue to inspire discussion about fairness, rules, and the human element of officiating",
                image: "https://picsum.photos/seed/debate/320/180",
            },
            {
                title: "Most talked-about penalties: Examining the decisions that caused uproar and how they impacted match results",
                image: "https://picsum.photos/seed/penalty/320/180",
            },
        ],
        rightItems: [
            {
                image: "https://picsum.photos/seed/comment1/200/200",
                title: "Fans discuss controversial match moments in heated forums, sharing opinions, videos, and tactical analyses",
            },
            {
                image: "https://picsum.photos/seed/comment2/200/200",
                title: "Social media reacts to latest player transfers, with debates about potential impact and team strategies",
            },
            {
                image: "https://picsum.photos/seed/comment3/200/200",
                title: "Live reactions to referee calls spark hundreds of comments, highlighting the passionate nature of sports fans worldwide",
            },
            {
                image: "https://picsum.photos/seed/comment4/200/200",
                title: "Post-match interviews fuel discussion about officiating standards and player responses in high-stakes games",
            },
        ],
    },

    "Most Shared": {
        mainNews: {
            title: "Epic Sports Moments That Went Viral Across Social Media in 2025",
            image: "https://picsum.photos/seed/viral/900/520",
            count: "15",
        },
        listNews: [
            "Incredible goals were shared millions of times as fans celebrated extraordinary skill and teamwork on social media platforms.",
            "Unbelievable dunks and basketball plays had fans creating viral clips, reactions, and highlight reels across networks.",
            "Record-breaking athletic feats amazed audiences worldwide, spreading like wildfire across Twitter, Instagram, and TikTok.",
        ],
        featuredNews: [
            {
                title: "Top viral sports clips: Fans and experts share reactions to the most jaw-dropping moments of the year",
                image: "https://picsum.photos/seed/viralclips/320/180",
            },
            {
                title: "Fan celebrations worldwide: From local communities to global stadiums, the joy of victory went viral",
                image: "https://picsum.photos/seed/fancelebration/320/180",
            },
            {
                title: "Historic saves in football that kept fans on the edge of their seats and instantly became trending highlights",
                image: "https://picsum.photos/seed/saves/320/180",
            },
            {
                title: "Most shared tennis rallies: Matches with incredible intensity and skill that everyone wanted to watch again and again",
                image: "https://picsum.photos/seed/tennisrally/320/180",
            },
        ],
        rightItems: [
            {
                image: "https://picsum.photos/seed/share1/200/200",
                title: "Fans share unforgettable moments from sports events around the world, generating widespread discussion online",
            },
            {
                image: "https://picsum.photos/seed/share2/200/200",
                title: "Trending videos across sports platforms capture amazing plays and unexpected highlights that went viral",
            },
            {
                image: "https://picsum.photos/seed/share3/200/200",
                title: "Viral content celebrates record-breaking performances and unforgettable match moments that captivated audiences",
            },
            {
                image: "https://picsum.photos/seed/share4/200/200",
                title: "Fans and media outlets circulate clips and stories, amplifying the excitement of historic sports events",
            },
        ],
    },
};

/** -------------------- COMPONENT -------------------- **/
export function PopularSportsSection() {
    const [activeTab, setActiveTab] = useState("Most Read");
    const { mainNews, listNews, featuredNews, rightItems } = tabData[activeTab];

    const thumbW = 96;
    const thumbH = 64;
    const thumbClass = "w-24 h-16 rounded-lg object-cover";

    return (
        <section className="py-4 border-b border-dashed border-gray-300">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
                Popular Sports <ChevronRight className="w-5 h-5" />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* LEFT */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-7">
                            <div className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={mainNews.image}
                                    alt={mainNews.title}
                                    width={900}
                                    height={520}
                                    className="w-full h-56 object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                                    <p className="text-white text-[13px] font-semibold leading-snug line-clamp-1">
                                        {mainNews.title}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <ul className="space-y-3">
                                {listNews.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 cursor-pointer">
                                        <span className="text-gray-400">○</span>
                                        <span className="text-[13px] leading-snug text-gray-800 hover:text-[#e53935] line-clamp-2">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {featuredNews.map((item, idx) => (
                            <div key={idx} className="cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={320}
                                    height={180}
                                    className="w-full h-24 object-cover rounded-lg"
                                />
                                <p className="text-[11px] text-gray-800 mt-1 leading-tight hover:text-[#e53935] line-clamp-3">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-5">
                    {/* Tabs */}
                    <div className="flex gap-6 mb-4 border-b border-gray-200 justify-end">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-sm font-medium whitespace-nowrap ${activeTab === tab
                                        ? "text-[#e53935] border-b-2 border-[#e53935]"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* TAB CONTENT */}
                    <div className="space-y-3">
                        <aside className="col-span-4 space-y-4">
                            {rightItems.map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={100}
                                        height={50} // make it square
                                        className="rounded flex-shrink-0 object-cover h-[70px]"
                                    />
                                    <p className="text-sm leading-snug line-clamp-2">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </aside>

                    </div>
                </div>
            </div>
        </section>
    );
}
