import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

export default function FeaturedVideosPage() {
    return (
        <main className="max-w-[980px] mx-auto mt-5">
{/* Header */}
<div className="flex justify-between items-center mb-4">
                <h1 className="text-[20px] font-semibold">Featured Videos</h1>
                <Link href="#" className="text-red-600 text-sm font-medium">
                    See All
                </Link>
            </div>

            {/* ================= SECTION 1 ================= */}
            <section className="bg-white rounded-xl grid grid-cols-10 gap-6 mb-3">

                {/* LEFT: MAIN VIDEO (70%) */}
                <div className="col-span-7 relative h-[320px] rounded-xl overflow-hidden">
                    <Image
                        src="https://picsum.photos/seed/mainvideo/900/500"
                        alt="Featured Video"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-lg font-semibold leading-snug">
                            Trump Hurts Himself At Board Of Peace Signing
                        </h2>
                        <p className="text-xs text-gray-300">
                            1.2K views • 2 hours ago
                        </p>
                    </div>

                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-2 px-3 py-1 select-none">
                                    {/* Red circle with white play icon */}
                                    <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    {/* Duration text */}
                                    <span className="text-white text-xs font-semibold">07:00</span>
                                </div>
                </div>

                {/* RIGHT: AD (30%) */}
                <div className="col-span-3 h-[320px] rounded-xl border flex items-center justify-center bg-blue-700 text-white text-center font-semibold">
                    SIMPLE MATLAB <br /> INDEX FUNDS
                </div>
            </section>

            {/* ================= SECTION 2 ================= */}
            <section className="bg-white grid grid-cols-10 gap-6">

                {/* LEFT: FEATURED LIST (70%) */}
                <div className="col-span-7 space-y-4 rounded-xl border border-gray-200 p-4">

                    {featuredList.map((item, idx) => (
                        <div key={idx} className="flex gap-4 border-b pb-4 last:border-b-0">
                            <div className="relative w-[220px] h-[120px] rounded overflow-hidden">
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-2 px-3 py-1 select-none">
                                    {/* Red circle with white play icon */}
                                    <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    {/* Duration text */}
                                    <span className="text-white text-xs font-semibold">{item.duration}</span>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm font-semibold leading-snug mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                                    {item.desc}
                                </p>
                                <span className="text-[11px] text-gray-500">
                                    {item.views} • {item.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: SIDEBAR (30%) */}
                <div className="col-span-3 space-y-4 rounded-xl border border-gray-200 p-4">
                    <h3 className="font-semibold text-sm">More News</h3>

                    {sideList.map((item, idx) => (
                        <div key={idx} className="flex gap-2">
                            <span className="text-red-600 text-lg leading-none">●</span>
                            <div>
                                <p className="text-xs font-medium leading-snug">
                                    {item.title}
                                </p>
                                <span className="text-[10px] text-gray-500">
                                    {item.views} • {item.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

/* ================= DATA ================= */

const featuredList = [
    {
        title: "‘You Won’t Get Greenland’: Denmark Warns Trump",
        desc: "Denmark warns US President amid rising geopolitical tensions.",
        views: "9.7K views",
        time: "2 days ago",
        duration: "12:45",
        thumbnail: "https://picsum.photos/seed/f1/300/170",
    },
    {
        title: "Did US Military Just Invade Another Country?",
        desc: "US military aircraft spotted landing in Mexico raises questions.",
        views: "3.5K views",
        time: "3 days ago",
        duration: "08:22",
        thumbnail: "https://picsum.photos/seed/f2/300/170",
    },
    {
        title: "Qatar Signals Eviction Of US Forces",
        desc: "Qatar’s warning sends shockwaves through Washington.",
        views: "9.8K views",
        time: "4 days ago",
        duration: "14:10",
        thumbnail: "https://picsum.photos/seed/f3/300/170",
    },
];

const sideList = [
    { title: "Russia Makes Bold Move In NATO Row", views: "1.5K views", time: "4 days ago" },
    { title: "US Personnel Exit Base In Iraq", views: "15.7K views", time: "4 days ago" },
    { title: "Europe Will Respond: Macron", views: "3.2K views", time: "4 days ago" },
    { title: "Greenland Explodes In Protests", views: "30.1K views", time: "5 days ago" },
    { title: "Violent Clashes Rock UK Capital", views: "12.4K views", time: "5 days ago" },
];
