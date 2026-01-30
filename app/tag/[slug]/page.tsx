"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Search } from "lucide-react";
import { Header } from "@/components/toi/header";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";

/* ---------- MOCK DATA ---------- */

const articlesFull = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  title: `Covid News Article ${i + 1}`,
  desc:
    "Bombay High Court directed insurance firms to make claims payable within April...",
  image: `https://picsum.photos/seed/article${i}/180/120`,
  time: `Jan ${20 - (i % 20)}, 2026, 10:${i} IST`,
}));

const photosFull = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  title: `Covid Photo ${i + 1}`,
  image: `https://picsum.photos/seed/photo${i}/300/200`,
}));

const videosFull = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  title: `Covid Video ${i + 1}`,
  image: `https://picsum.photos/seed/video${i}/300/200`,
}));

/* ---------- DUMMY ADS ---------- */

const ads = [
  { id: "ad1", image: "https://picsum.photos/seed/ad1/180/120", text: "Advertisement 1" },
  { id: "ad2", image: "https://picsum.photos/seed/ad2/180/120", text: "Advertisement 2" },
  { id: "ad3", image: "https://picsum.photos/seed/ad3/180/120", text: "Advertisement 3" },
];

/* ---------- PAGE ---------- */

export default function TagPage() {
  const topic = "Covid"; // Default search topic

  const [activeTab, setActiveTab] = useState<"all" | "articles" | "photos" | "videos">("all");
  const [searchValue, setSearchValue] = useState(topic);

  const [articlesCount, setArticlesCount] = useState(30);
  const [photosCount, setPhotosCount] = useState(30);
  const [videosCount, setVideosCount] = useState(30);

  const articles = articlesFull.slice(0, articlesCount);
  const photos = photosFull.slice(0, photosCount);
  const videos = videosFull.slice(0, videosCount);

  const clearSearch = () => setSearchValue("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Search submitted: "${searchValue}"`);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="xl:mx-[145px]">
        <Header />

        <main className="bg-white">
          <div className="max-w-[1000px] mx-auto px-3 pt-4">

            {/* Breadcrumb */}
            <div className="text-[13px] text-gray-700 mb-2">
              News / Topic
            </div>

            {/* Search bar */}
            <form
              onSubmit={onSearch}
              className="relative max-w-full mb-5"
              role="search"
              aria-label="Search topic"
            >
              <input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
                className="w-full border-b border-gray-300 px-4 py-2 text-[14px] focus:outline-none focus:border-red-600"
                aria-describedby="search-desc"
              />
              {/* Clear button */}
              {searchValue && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {/* Search button */}
              <button
                type="submit"
                aria-label="Submit search"
                className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-600"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            <p className="text-[14px] mb-6">
              You have searched for <strong>{topic}</strong>, Showing <strong>10000</strong> results
            </p>

            {/* CONTENT TABS */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-6 text-[13px]">
                {[
                  { key: "all", label: `ALL (10000)` },
                  { key: "articles", label: `ARTICLES (${articlesFull.length})` },
                  { key: "photos", label: `PHOTOS (${photosFull.length})` },
                  { key: "videos", label: `VIDEOS (${videosFull.length})` },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`pb-2 border-b-2 transition-colors ${activeTab === tab.key
                        ? "border-red-600 text-red-600 font-semibold"
                        : "border-transparent text-gray-500 hover:text-red-600"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ALL TAB */}
            {activeTab === "all" && (
              <>
                <ArticleList articles={articles.slice(0, 10)} />
                {/* <AdSlot content={ads[0].text} image={ads[0].image} /> */}
                <PhotoSection photos={photos.slice(0, 8)} />
                <AdSlot content={ads[1].text} image={ads[1].image} />
                <VideoSection videos={videos.slice(0, 6)} />
                <ArticleList articles={articles.slice(10, 20)} />
                <AdSlot content={ads[2].text} image={ads[2].image} />
                {/* <PhotoSection photos={photos.slice(8, 16)} /> */}
              </>
            )}

            {/* ARTICLES TAB */}
            {activeTab === "articles" && (
              <>
                <ArticleList articles={articles} />
                {articlesCount < articlesFull.length && (
                  <div className="text-center mt-6 mb-12">
                    <button
                      className="px-4 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50"
                      onClick={() => setArticlesCount((c) => Math.min(c + 10, articlesFull.length))}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}

            {/* PHOTOS TAB */}
            {activeTab === "photos" && (
              <>
                <PhotoGrid photos={photos} />
                {photosCount < photosFull.length && (
                  <div className="text-center mt-6 mb-12">
                    <button
                      className="px-4 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50"
                      onClick={() => setPhotosCount((c) => Math.min(c + 8, photosFull.length))}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}

            {/* VIDEOS TAB */}
            {activeTab === "videos" && (
              <>
                <VideoGrid videos={videos} />
                {videosCount < videosFull.length && (
                  <div className="text-center mt-6 mb-12">
                    <button
                      className="px-4 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50"
                      onClick={() => setVideosCount((c) => Math.min(c + 6, videosFull.length))}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          <ExploredGlobeSection />
          {/* Hot on the Web */}
          <HotOnWebSection />

          {/* Trending Topics */}
          <TrendingTopicsSection />

          {/* Popular Categories */}
          <PopularCategoriesSection />

          {/* Trending Videos */}
          <TrendingVideosSection />

          {/* Latest News */}
          <LatestNewsSection />
        </main>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function ArticleList({ articles }: any) {
  return (
    <div className="divide-y divide-gray-200 mb-8">
      {articles.map((a: any) => (
        <article key={a.id} className="flex gap-3 py-4">
          <div className="w-[120px] h-[80px] relative flex-shrink-0">
            <Image src={a.image} alt={a.title} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-[15px] text-[#1a0dab] hover:text-red-600 font-medium">
              {a.title}
            </h3>
            <p className="text-[13px] text-gray-700 mt-1 line-clamp-2">
              {a.desc}
            </p>
            <div className="text-[11px] text-gray-500 mt-1">{a.time}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

function PhotoSection({ photosFull }: { photosFull?: any[] }) {
  const [photosCount, setPhotosCount] = useState(8);

  // Ensure photosFull is always an array
  const photos = (photosFull ?? []).slice(0, photosCount);

  return (
    <section className="mt-4">
      <h2 className="text-[16px] font-bold mb-3">PHOTOS</h2>

      <div className="flex gap-3 overflow-x-scroll scrolling-touch scrollbar-hide">
        {photos.map((p: any) => (
          <div key={p.id} className="min-w-[180px] flex-shrink-0">
            <div className="relative w-[180px] h-[120px] rounded overflow-hidden">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <p className="text-[12px] mt-1">{p.title}</p>
          </div>
        ))}
      </div>

      {photosCount < (photosFull ?? []).length && (
        <div className="text-center mt-4">
          <button
            className="px-4 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50"
            onClick={() =>
              setPhotosCount((c) => Math.min(c + 8, (photosFull ?? []).length))
            }
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

function VideoSection({ videosFull }: { videosFull?: any[] }) {
  const [videosCount, setVideosCount] = useState(6);
  const videos = (videosFull ?? []).slice(0, videosCount);

  return (
    <section className="mt-8">
      <h2 className="text-[16px] font-bold mb-3">VIDEOS</h2>

      <div className="flex gap-3 overflow-x-scroll scrolling-touch scrollbar-hide">
        {videos.map((v: any) => (
          <div key={v.id} className="min-w-[180px] flex-shrink-0">
            <div className="relative w-[180px] h-[120px] rounded overflow-hidden">
              <Image src={v.image} alt={v.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 p-2 rounded-full">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <p className="text-[12px] mt-1">{v.title}</p>
          </div>
        ))}
      </div>

      {videosCount < (videosFull ?? []).length && (
        <div className="text-center mt-4">
          <button
            className="px-4 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50"
            onClick={() =>
              setVideosCount((c) => Math.min(c + 6, (videosFull ?? []).length))
            }
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}


function PhotoGrid({ photos }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {photos.map((p: any) => (
        <div key={p.id} className="rounded overflow-hidden">
          <div className="relative w-full h-[160px]">
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          </div>
          <p className="text-[12px] mt-1">{p.title}</p>
        </div>
      ))}
    </div>
  );
}

function VideoGrid({ videos }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {videos.map((v: any) => (
        <div key={v.id} className="rounded overflow-hidden">
          <div className="relative w-full h-[160px]">
            <Image src={v.image} alt={v.title} fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 p-2 rounded-full">
                <Play className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <p className="text-[12px] mt-1">{v.title}</p>
        </div>
      ))}
    </div>
  );
}

function AdSlot({ content, image }: { content: string; image: string }) {
  return (
    <div className="border border-gray-300 rounded-md p-2 my-6 text-center text-gray-600 bg-gray-50 text-sm select-none flex flex-col items-center">
      <div className="relative w-[180px] h-[120px] mb-2">
        <Image src={image} alt={content} fill className="object-cover rounded" />
      </div>
      {content}
    </div>
  );
}
