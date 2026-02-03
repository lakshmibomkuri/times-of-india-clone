"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const tabs = ["Hindi", "Tamil", "Bengali", "Telugu", "Kannada"];

const videosByCategory = {
    Hindi: [
      {
        id: 1,
        title: "Khel Khel Mein - Official Trailer",
        description:
          "Watch the Official trailer from hindi movie 'Khel Khel Mein' starring Akshay Kumar...",
        views: "1.2M views",
        time: "2 days ago",
        duration: "02:45",
        thumbnail: "https://picsum.photos/seed/hindi1/600/400",
      },
      {
        id: 2,
        title: "Bade Miyan Chote Miyan - Official Teaser",
        description:
          "Watch the Official teaser from hindi movie 'Bade Miyan Chote Miyan' starring Akshay Kumar...",
        views: "2.5M views",
        time: "3 days ago",
        duration: "01:30",
        thumbnail: "https://picsum.photos/seed/hindi2/600/400",
      },
      {
        id: 3,
        title: "Sarfira - Official Trailer",
        description:
          "Watch the Official trailer from hindi movie 'Sarfira' starring Akshay Kumar...",
        views: "890K views",
        time: "1 week ago",
        duration: "02:20",
        thumbnail: "https://picsum.photos/seed/hindi3/600/400",
      },
      {
        id: 4,
        title: "Khiladi 1080 - Official Teaser",
        description:
          "Watch the Official teaser from hindi movie 'Khiladi 1080' starring Akshay Kumar...",
        views: "1.5M views",
        time: "5 days ago",
        duration: "01:45",
        thumbnail: "https://picsum.photos/seed/hindi4/600/400",
      },
      {
        id: 5,
        title: "Mission Raniganj - Official Trailer",
        description:
          "Watch the Official trailer from hindi movie 'Mission Raniganj' starring Akshay Kumar...",
        views: "750K views",
        time: "1 week ago",
        duration: "02:10",
        thumbnail: "https://picsum.photos/seed/hindi5/600/400",
      },
      {
        id: 6,
        title: "Hindi Movie Clip 6",
        description: "Short clip from Hindi movie 6",
        views: "500K views",
        time: "4 days ago",
        duration: "01:55",
        thumbnail: "https://picsum.photos/seed/hindi6/600/400",
      },
    ],
    Tamil: [
      {
        id: 7,
        title: "Tamil Movie Teaser 1",
        description: "Official teaser from Tamil movie 1",
        views: "800K views",
        time: "3 days ago",
        duration: "01:40",
        thumbnail: "https://picsum.photos/seed/tamil1/600/400",
      },
      {
        id: 8,
        title: "Tamil Movie Trailer 2",
        description: "Official trailer from Tamil movie 2",
        views: "1.1M views",
        time: "4 days ago",
        duration: "02:30",
        thumbnail: "https://picsum.photos/seed/tamil2/600/400",
      },
      {
        id: 9,
        title: "Tamil Movie Scene 3",
        description: "Action scene from Tamil movie 3",
        views: "650K views",
        time: "2 days ago",
        duration: "02:15",
        thumbnail: "https://picsum.photos/seed/tamil3/600/400",
      },
      {
        id: 10,
        title: "Tamil Movie Interview 4",
        description: "Interview with Tamil superstar",
        views: "900K views",
        time: "6 days ago",
        duration: "03:00",
        thumbnail: "https://picsum.photos/seed/tamil4/600/400",
      },
      {
        id: 11,
        title: "Tamil Behind Scenes 5",
        description: "Behind the scenes of Tamil blockbuster",
        views: "450K views",
        time: "1 week ago",
        duration: "02:45",
        thumbnail: "https://picsum.photos/seed/tamil5/600/400",
      },
      {
        id: 12,
        title: "Tamil Movie Clip 6",
        description: "Short clip from Tamil movie 6",
        views: "320K views",
        time: "5 days ago",
        duration: "01:40",
        thumbnail: "https://picsum.photos/seed/tamil6/600/400",
      },
    ],
    Bengali: [
      {
        id: 13,
        title: "Hok Kolorob - Official Teaser",
        description:
          "Watch the Official teaser from bengali movie 'Hok Kolorob' starring Saswata Chatterjee...",
        views: "4 views",
        time: "14 days ago",
        duration: "01:33",
        thumbnail: "https://picsum.photos/seed/bengali1/600/400",
      },
      {
        id: 14,
        title: "Kirtaner Por Kirtan - Official Trailer",
        description:
          "Watch the Official trailer from bengali movie 'Kirtaner Por Kirtan' starring Paran...",
        views: "8 views",
        time: "14 days ago",
        duration: "02:13",
        thumbnail: "https://picsum.photos/seed/bengali2/600/400",
      },
      {
        id: 15,
        title: "Nari Choritrro Bejay Jotil - Official Teaser",
        description:
          "Watch the Official teaser from bengali movie 'Nari Choritrro Bejay Jotil' starring Ankush...",
        views: "250K views",
        time: "19 days ago",
        duration: "01:50",
        thumbnail: "https://picsum.photos/seed/bengali3/600/400",
      },
      {
        id: 16,
        title: "Nari Choritrro Bejay Jotil - Official Trailer",
        description:
          "Watch the Official trailer from bengali movie 'Nari Choritrro Bejay Jotil' starring Ankush...",
        views: "6 views",
        time: "19 days ago",
        duration: "02:23",
        thumbnail: "https://picsum.photos/seed/bengali4/600/400",
      },
      {
        id: 17,
        title: "Bhanupriya Bhooter Hotel - Official Teaser",
        description:
          "Watch the Official teaser from bengali movie 'Bhanupriya Bhooter Hotel' starring Mimi...",
        views: "11 views",
        time: "1 month ago",
        duration: "01:03",
        thumbnail: "https://picsum.photos/seed/bengali5/600/400",
      },
      {
        id: 18,
        title: "Bengali Movie Clip 6",
        description: "Short clip from Bengali movie 6",
        views: "3K views",
        time: "20 days ago",
        duration: "02:10",
        thumbnail: "https://picsum.photos/seed/bengali6/600/400",
      },
    ],
    Telugu: [
      {
        id: 19,
        title: "Telugu Movie Teaser 1",
        description: "Official teaser from Telugu movie 1",
        views: "10K views",
        time: "5 days ago",
        duration: "02:00",
        thumbnail: "https://picsum.photos/seed/telugu1/600/400",
      },
      {
        id: 20,
        title: "Telugu Movie Trailer 2",
        description: "Official trailer from Telugu movie 2",
        views: "15K views",
        time: "6 days ago",
        duration: "02:40",
        thumbnail: "https://picsum.photos/seed/telugu2/600/400",
      },
      {
        id: 21,
        title: "Telugu Movie Scene 3",
        description: "Clip from Telugu movie 3",
        views: "8K views",
        time: "4 days ago",
        duration: "01:55",
        thumbnail: "https://picsum.photos/seed/telugu3/600/400",
      },
      {
        id: 22,
        title: "Telugu Movie Interview 4",
        description: "Interview with Telugu actor",
        views: "12K views",
        time: "8 days ago",
        duration: "02:10",
        thumbnail: "https://picsum.photos/seed/telugu4/600/400",
      },
      {
        id: 23,
        title: "Telugu Behind Scenes 5",
        description: "Behind the scenes of Telugu movie",
        views: "7K views",
        time: "9 days ago",
        duration: "02:30",
        thumbnail: "https://picsum.photos/seed/telugu5/600/400",
      },
      {
        id: 24,
        title: "Telugu Clip 6",
        description: "Short clip from Telugu movie 6",
        views: "5K views",
        time: "3 days ago",
        duration: "01:40",
        thumbnail: "https://picsum.photos/seed/telugu6/600/400",
      },
    ],
    Kannada: [
      {
        id: 25,
        title: "Kannada Movie Teaser 1",
        description: "Official teaser from Kannada movie 1",
        views: "6K views",
        time: "7 days ago",
        duration: "01:50",
        thumbnail: "https://picsum.photos/seed/kannada1/600/400",
      },
      {
        id: 26,
        title: "Kannada Movie Trailer 2",
        description: "Official trailer from Kannada movie 2",
        views: "9K views",
        time: "8 days ago",
        duration: "02:20",
        thumbnail: "https://picsum.photos/seed/kannada2/600/400",
      },
      {
        id: 27,
        title: "Kannada Movie Scene 3",
        description: "Scene clip from Kannada movie 3",
        views: "4K views",
        time: "6 days ago",
        duration: "02:05",
        thumbnail: "https://picsum.photos/seed/kannada3/600/400",
      },
      {
        id: 28,
        title: "Kannada Movie Interview 4",
        description: "Interview with Kannada star",
        views: "5K views",
        time: "9 days ago",
        duration: "01:55",
        thumbnail: "https://picsum.photos/seed/kannada4/600/400",
      },
      {
        id: 29,
        title: "Kannada Movie BTS 5",
        description: "Behind the scenes Kannada movie",
        views: "3K views",
        time: "7 days ago",
        duration: "02:10",
        thumbnail: "https://picsum.photos/seed/kannada5/600/400",
      },
      {
        id: 30,
        title: "Kannada Movie Clip 6",
        description: "Short clip Kannada movie 6",
        views: "2K views",
        time: "10 days ago",
        duration: "01:40",
        thumbnail: "https://picsum.photos/seed/kannada6/600/400",
      },
    ],
  };
  

export default function EntertainmentPage() {
  const [activeTab, setActiveTab] = useState("Hindi");

  const videos = videosByCategory[activeTab] || [];

  return (
    <section className="w-full mx-auto mt-5 sm:px-0">
      {/* Header with Entertainment + Vertical Bar + Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-6">
        <h2 className="text-[18px] sm:text-xl font-semibold">Entertainment</h2>
        <div className="hidden sm:block w-px bg-gray-300 mx-2 h-6" />
        <nav className="flex gap-3 sm:gap-6 text-[12px] sm:text-sm font-medium flex-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-0 whitespace-nowrap flex-shrink-0 ${
                tab === activeTab
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="text-gray-600 px-2 hover:text-red-600 flex-shrink-0">⋮</button>
          <Link href="#" className="text-red-600 font-medium text-xs sm:text-sm">
          See All
        </Link>
        </nav>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {videos.slice(0, 6).map((video) => (
          <Link
            key={video.id}
            href="#"
            className="bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div className="relative aspect-video">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1">
                <div className="bg-red-600 rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
                  <svg
                    className="w-2 sm:w-3 h-2 sm:h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white text-[10px] sm:text-xs font-semibold">{video.duration}</span>
              </div>
            </div>
            <div className="p-2 sm:p-3">
              <h3 className="font-semibold text-[12px] sm:text-sm line-clamp-2">{video.title}</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-1 line-clamp-2">{video.description}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-2">{video.views} • {video.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}