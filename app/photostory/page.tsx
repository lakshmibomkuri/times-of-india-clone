"use client";

import { Header } from "@/components/toi/header";
import { Footer } from "@/components/toi/footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";
import { TrendingSection } from "@/components/toi/sections/trending-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";

// Inline photostories array
const photoStories = [
  {
    id: 1,
    title: "Popular baby names for Indian kids studying in the US",
    image: "https://picsum.photos/seed/ps1/420/280",
  },
  {
    id: 2,
    title: "8 baby boy names inspired by rare plants from around the world",
    image: "https://picsum.photos/seed/ps2/420/280",
  },
  {
    id: 3,
    title: "5 paintings of Amrita Shergill and what makes them extraordinary",
    image: "https://picsum.photos/seed/ps3/420/280",
  },
  {
    id: 4,
    title: "Top January 2026 releases on Hulu: The Beauty, Tell Me Lies S3 & more",
    image: "https://picsum.photos/seed/ps4/420/280",
  },
  {
    id: 5,
    title: 'Mesmerising sunrise views from hilltop temples',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    photos: 14,
  },
  {
    id: 6,
    title: 'Traditional street food that defines Indian summers',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    photos: 20,
  },
  {
    id: 7,
    title: 'Vintage cars that steal the spotlight at auto expos',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    photos: 16,
  },
  {
    id: 8,
    title: 'When cities glow: Stunning nightscapes from around the world',
    image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63',
    photos: 25,
  },
  {
    id: 9,
    title: 'Behind the scenes of a high-budget movie set',
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66',
    photos: 19,
  },
  {
    id: 10,
    title: 'Iconic monuments that look magical during monsoon',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    photos: 17,
  },
  {
    id: 11,
    title: 'Top fashion moments from international runways',
    image: 'https://picsum.photos/seed/fashion-runway/420/280',
    photos: 28,
  },
  {
    id: 12,
    title: 'A glimpse into luxury homes of top celebrities',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    photos: 21,
  },
  {
    id: 13,
    title: 'Rare pictures of wildlife in their natural habitat',
    image: 'https://picsum.photos/seed/wildlife-nature/420/280',
    photos: 24,
  },
  {
    id: 14,
    title: 'Spiritual journeys: Pilgrimage destinations across India',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    photos: 18,
  },
  {
    id: 15,
    title: 'Throwback photos from iconic cricket matches',
    image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d',
    photos: 30,
  },
  {
    id: 16,
    title: 'Inside the preparation of a royal wedding ceremony',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    photos: 26,
  },
  {
    id: 17,
    title: 'Mountain roads that offer the most scenic drives',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    photos: 15,
  },
  {
    id: 18,
    title: 'Unseen moments from international sporting events',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    photos: 27,
  },
  {
    id: 19,
    title: 'Architectural wonders that showcase modern design',
    image: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad',
    photos: 13,
  },
  {
    id: 20,
    title: 'Cultural festivals that celebrate traditions and colours',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    photos: 29,
  },
  {
    id: 21,
    title: 'Adventure sports that promise an adrenaline rush',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    photos: 18,
  },
  {
    id: 22,
    title: 'Calm beaches perfect for a peaceful weekend getaway',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    photos: 16,
  },
  
];


export default function PhotostoriesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="xl:ml-[140px] xl:mr-[145px]">
        <Header />

        <main className="bg-white">
          <div className="max-w-[980px] mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1 text-[11px] text-gray-500 mb-3">
              <Link href="/" className="text-red-600 hover:underline">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-700">Photostories</span>
            </nav>

            {/* Two Column Layout */}
            <div className="flex gap-6">
              {/* LEFT: Latest Photostories */}
              <div className="flex-1">
                <h2 className="text-[18px] font-bold text-gray-900 mb-4">
                  Latest Photostories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {photoStories.map((story) => (
                    <Link
                      key={story.id}
                      href={`/photostory/${encodeURIComponent(
                        story.title.replace(/\s+/g, "-").toLowerCase()
                      )}`}
                      className="group bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-3">
                        <h3 className="text-[14px] font-semibold text-gray-900 leading-snug group-hover:text-red-600">
                          {story.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className="hidden lg:block w-[300px] flex-shrink-0">
                 {/* REAL-LOOKING DUMMY AD */}
                 <div className="mb-6 border rounded-lg overflow-hidden sticky top-24 space-y-6">
                   <div className="text-[11px] text-gray-500 px-2 py-1 border-b">
                     Advertisement
                   </div>
                   <div className="relative h-[250px] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-4 flex flex-col justify-between">
                     <div>
                       <p className="text-xs uppercase tracking-wide opacity-80">
                         Sponsored
                       </p>
                      <h3 className="text-lg font-bold leading-tight mt-2">
                         Invest Smarter in 2026
                       </h3>
                       <p className="text-sm opacity-90 mt-2">
                         Open your free Demat account and start investing today.
                       </p>
                     </div>

                     <button className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded w-fit hover:bg-yellow-300">
                       Get Started
                     </button>
                   </div>
                 </div>

                 {/* Trending Photostories */}
                 <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                  Trending Photostories
                 </h3>

                 <div className="space-y-4">
                   {photoStories.slice(0, 5).map((story) => (
                    <Link
                      key={story.id}
                      href={`/photostory/${story.id}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-[70px] h-[50px] rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <h4 className="text-[13px] text-gray-800 leading-snug group-hover:text-red-600 line-clamp-2">
                        {story.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </main>
        <ExploredGlobeSection/>
         <HotOnWebSection/>
         <TrendingTopicsSection/>
         <PopularCategoriesSection/>
         <TrendingVideosSection/>
         <LatestNewsSection/>
        <Footer />
      </div>
    </div>
  );
}
