"use client";

import Image from "next/image";
import Link from "next/link";

// ------------------
// Sample Videos Data
// ------------------
const videos = [
  {
    id: 1,
    title: "Healthy Eating Tips for a Better Life",
    description: "Learn how to maintain a balanced diet with simple tips.",
    views: "1.2K",
    time: "2 hours ago",
    duration: "05:20",
    thumbnail: "https://picsum.photos/seed/health1/400/225",
  },
  {
    id: 2,
    title: "10 Minute Full Body Workout",
    description: "Quick exercises to stay fit at home without equipment.",
    views: "3.5K",
    time: "4 hours ago",
    duration: "10:12",
    thumbnail: "https://picsum.photos/seed/health2/400/225",
  },
  {
    id: 3,
    title: "Meditation for Beginners",
    description: "Step by step guide to reduce stress and anxiety.",
    views: "2K",
    time: "1 day ago",
    duration: "08:45",
    thumbnail: "https://picsum.photos/seed/health3/400/225",
  },
  {
    id: 4,
    title: "Yoga for Flexibility",
    description: "Improve flexibility and balance with these simple yoga poses.",
    views: "1.8K",
    time: "3 days ago",
    duration: "12:30",
    thumbnail: "https://picsum.photos/seed/health4/400/225",
  },
  {
    id: 5,
    title: "Top 5 Superfoods",
    description: "Boost your immunity and energy with these foods.",
    views: "900",
    time: "2 days ago",
    duration: "06:15",
    thumbnail: "https://picsum.photos/seed/health5/400/225",
  },
  {
    id: 6,
    title: "Cardio Exercises at Home",
    description: "Burn calories effectively with no equipment needed.",
    views: "2.3K",
    time: "5 hours ago",
    duration: "09:50",
    thumbnail: "https://picsum.photos/seed/health6/400/225",
  },
];

// ------------------
// TOI News Section with Header
// ------------------
export default function HealthFItnesSection() {
  return (
    <section className="w-full mx-auto pt-5 sm:px-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#111]">Health & Fitness</h2>
        <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
          See All
        </Link>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {videos.slice(0, 6).map((video) => (
          <Link
            key={video.id}
            href="#"
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition"
          >
            {/* Image Top */}
            <div className="relative aspect-video">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              {/* Duration Badge */}
              <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black bg-opacity-80 rounded-full flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 select-none">
                {/* Red circle with white play icon */}
                <div className="bg-red-600 rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
                  <svg
                    className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Duration text */}
                <span className="text-white text-[10px] sm:text-xs font-semibold">{video.duration}</span>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="p-2 sm:p-3 border-t border-gray-200">
              <h3 className="font-semibold text-[13px] sm:text-sm line-clamp-2">{video.title}</h3>
              <p className="text-[11px] sm:text-xs text-gray-600 mt-1 line-clamp-2 sm:line-clamp-none">{video.description}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">{video.views} • {video.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
