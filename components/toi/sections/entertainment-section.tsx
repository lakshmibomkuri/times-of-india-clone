"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
const newsItems = [
  "Korean Kanakaraju: Varun Tej unveils title and teas...",
  "Priyanka Chopra shares her milestones with 2016 ...",
  "Katy and Justin attend first event as a couple – W...",
  "Meghan Trainor and Daryl Sabara share PICS of th...",
  "Sunny Deol's Border 2 receives CBFC certificate: ...",
  "Prostate cancer symptoms that mimic common a...",
  "8 baby girl names inspired by rare flowers from ar...",
  "'Dhoom' actress Rimi Sen is now a real estate age...",
  "Shivangi Joshi on dating co-stars: Profession does...",
  "Sourabh slams Noida authorities over techie's tra...",
  "Srishti Jain announces engagement with Shrey Gu...",
  "'Don't force me to speak the language,' says Sunie...",
  "Amitabh Bachchan, Dharmendra, Shah Rukh Khan..."
];

const photostories = [
  { image: "https://picsum.photos/seed/ps1/160/110", title: "5 times your soul knows the...", badge: "7" },
  { image: "https://picsum.photos/seed/ps2/160/110", title: "How to make Gujarati...", badge: "9" },
  { image: "https://picsum.photos/seed/ps3/160/110", title: "10 countries with the larges...", badge: "11" },
  { image: "https://picsum.photos/seed/ps4/160/110", title: "From Disha Vakani's...", badge: "9" },
  { image: "https://picsum.photos/seed/ps5/160/110", title: "How to stay calm when...", badge: "4" },
  { image: "https://picsum.photos/seed/ps6/160/110", title: "Baby names inspired by...", badge: "9" },
  { image: "https://picsum.photos/seed/ps7/160/110", title: "Curiosity Corner: Which...", badge: "6" },
  { image: "https://picsum.photos/seed/ps8/160/110", title: "From mantis to hippo: 5...", badge: "6" },
  { image: "https://picsum.photos/seed/ps9/160/110", title: "From India to Paris, 10 baby...", badge: "9" }
];

const worldOfStars = [
  {
    image: "https://picsum.photos/seed/wos1/360/220",
    title: "‘Doomsday’ to skip IMAX release because of ‘Dune’?"
  },
  {
    image: "https://picsum.photos/seed/wos2/360/220",
    title: "5 Best period-drama series to stream now on Apple TV+",
    badge: "6"
  },
  {
    image: "https://picsum.photos/seed/wos3/360/220",
    title: "Wedding guest backs allegations about ‘inappropriate’ dance",
    badge: "5"
  },
  {
    image: "https://picsum.photos/seed/wos4/360/220",
    title: "Why fans are debating the latest OTT release"
  }
];

const inFocusTags = [
  "Amitabh Bachchan",
  "Dharmendra",
  "Manoj Muntashir",
  "Suniel Shetty",
  "Border 2",
  "Siddharth Chopra",
  "Ram Gopal Varma"
];

export function EntertainmentSection() {
  const router = useRouter();
  const [wosIndex, setWosIndex] = useState(0);
  const wosPageSize = 3;

  const wosPages = useMemo(() => {
    const pages: typeof worldOfStars[] = [];
    for (let i = 0; i < worldOfStars.length; i += wosPageSize) {
      pages.push(worldOfStars.slice(i, i + wosPageSize));
    }
    return pages;
  }, []);

  const next = () => setWosIndex((i) => (i + 1) % wosPages.length);
  const prev = () => setWosIndex((i) => (i - 1 + wosPages.length) % wosPages.length);

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
          Entertainment <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Two column grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left column: World of Stars + News List */}
          <div className="col-span-2 space-y-8">
            {/* Left - Featured + thumbnails */}
            <div className="grid grid-cols-[280px_1fr] gap-5">
              {/* Left - Featured Image + News */}
              <div>
                <Link href="#" className="block group mb-4">
                  <div className="relative aspect-[280/160] rounded overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/entertainment-feat/280/160"
                      alt="Featured Entertainment"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-sm font-medium">
                        World of Stars Shine Bright in Latest Showcase
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Thumbnails */}
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Link key={i} href="#" className="block group">
                      <div className="relative aspect-[130/75] rounded overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/entertainment-thumb${i}/130/75`}
                          alt="Thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[10px] text-gray-700 mt-1 line-clamp-2 group-hover:text-red-600">
                        {i === 1
                          ? "'The Star-studded Film You Can't Miss'"
                          : "Behind the Scenes: Latest Celebrity Trends"}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Center - News List */}
              <div className="space-y-2">
                {newsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600"
                  >
                    <span className="text-gray-400 mt-0.5 select-none">•</span>
                    <span className="flex-1 line-clamp-2">{item}</span>
                    {idx % 4 === 0 && (
                      <span className="text-red-500 text-[10px] mt-0.5 select-none">▶</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* World of Stars */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1">
                World Of Stars <ChevronRight className="w-4 h-4" />
              </h3>
              <div className="flex gap-4">
                {wosPages[wosIndex].map((item, idx) => (
                  <Link key={idx} href="#" className="block group flex-1">
                    <div className="relative aspect-[280/160] rounded overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-700 mt-2 group-hover:text-red-600 line-clamp-2">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Pagination controls */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1">
                  {wosPages.map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-gray-900" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3 text-gray-400">
                  <button
                    aria-label="Previous"
                    className="hover:text-gray-600 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    aria-label="Next"
                    className="hover:text-gray-600 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Photostories + Advertisement */}
          <div className="flex flex-col gap-6">
            {/* Photostories */}
            <div>
              {/* <h3 className="text-sm font-bold text-gray-900 mb-3" onClick={window.history}>Photostories</h3> */}
              <h3
                className="text-sm font-bold text-gray-900 mb-3 cursor-pointer"
                onClick={() => router.push("/photostory")}
              >
                Photostories
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {photostories.map((ps, idx) => (
                  <Link key={idx} href="#" className="block group">
                    <div className="relative aspect-[4/3] rounded overflow-hidden">
                      <Image
                        src={ps.image}
                        alt={ps.title}
                        fill
                        className="object-cover w-full"
                        // sizes="(max-width: 1024px) 30vw, 100px"
                      />
                      <span className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-1 rounded flex items-center gap-0.5">
                        <Camera className="w-3 h-3" /> {ps.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-700 mt-1 leading-snug line-clamp-2">
                      {ps.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <Image
                src="https://picsum.photos/seed/dummy-ad/260/200"
                alt="Advertisement"
                width={260}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* In Focus Tags */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200 flex-wrap">
          <span className="text-xs font-bold text-gray-900">In Focus</span>
          <div className="flex flex-wrap gap-2">
            {inFocusTags.map((tag, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
}
