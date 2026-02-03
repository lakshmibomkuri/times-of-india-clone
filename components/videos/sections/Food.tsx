"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const mainVideo = {
    title: "Master 5 Easy & Delicious Home Cooking Recipes",
    description:
      "Step-by-step guide to cooking flavorful dishes that anyone can make at home — from appetizers to desserts.",
    sub: "Simple recipes, big flavors — perfect for every meal of the day.",
    views: "32.4K views",
    time: "1 day ago",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&h=500&w=900", // main food dish
  };
  
  const sideVideos = [
    {
      title: "Healthy Avocado & Quinoa Salad",
      views: "18.2K views",
      time: "2 days ago",
      duration: "08:20",
      thumbnail: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // avocado/quinoa salad
    },
    {
      title: "Fluffy Pancakes for Breakfast",
      views: "25.7K views",
      time: "3 days ago",
      duration: "07:15",
      thumbnail: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&h=170&q=80", // pancakes
    },
    {
      title: "Classic Margherita Pizza From Scratch",
      views: "21.3K views",
      time: "4 days ago",
      duration: "09:10",
      thumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&h=170&q=8", // pizza
    },
    {
      title: "Spicy Chicken Tacos",
      views: "29.6K views",
      time: "5 days ago",
      duration: "06:45",
      thumbnail: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=300&h=170&q=80", // tacos
    },
    {
      title: "Creamy Berry Smoothie",
      views: "15.1K views",
      time: "1 week ago",
      duration: "05:30",
      thumbnail: "https://images.unsplash.com/photo-1526424382096-74a93e105682?auto=format&fit=crop&w=300&h=170&q=80", // smoothie
    },
    {
      title: "Decadent Chocolate Brownie",
      views: "34.8K views",
      time: "1 week ago",
      duration: "10:05",
      thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&h=170&q=80", // brownie
    },
  ];
  
  
  
  
  


export default function FoodPage() {
    return (
        <main className="w-full mx-auto pt-5 sm:px-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-[18px] sm:text-[20px] font-semibold">Food</h1>
                <Link href="#" className="text-red-600 text-xs sm:text-sm font-medium">
                    See All
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 lg:gap-6">
                {/* LEFT – MAIN FEATURE */}
                <div>
                    <div className="relative rounded-xl overflow-hidden border mb-3">
                        <Image
                            src={mainVideo.thumbnail}
                            alt={mainVideo.title}
                            width={900}
                            height={500}
                            className="object-cover"
                        />

                        {/* Duration */}
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
      <span className="text-white text-[10px] sm:text-xs font-semibold">{mainVideo.duration}</span>
    </div>
                    </div>

                    <h2 className="text-[16px] sm:text-[18px] font-semibold mb-2 leading-snug">
                        {mainVideo.title}
                    </h2>

                    <p className="text-[13px] sm:text-[14px] text-gray-700 mb-2 line-clamp-2 sm:line-clamp-none">
                        {mainVideo.description}
                    </p>

                    <p className="text-[12px] sm:text-[13px] text-gray-600 mb-2 line-clamp-2 sm:line-clamp-none">
                        {mainVideo.sub}
                    </p>

                    <span className="text-[11px] sm:text-[12px] text-gray-500">
                        {mainVideo.views} | {mainVideo.time}
                    </span>
                </div>

                {/* RIGHT – TWO COLUMN VIDEO GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {sideVideos.map((video, index) => (
                        <div key={index} className="flex gap-2 sm:gap-3">
                            {/* Thumbnail */}
                            <div className="relative w-[100px] sm:w-[120px] h-[56px] sm:h-[68px] rounded overflow-hidden flex-shrink-0">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 bg-black bg-opacity-80 rounded-full flex items-center gap-1 px-1.5 sm:px-2 py-0.5 select-none">
      {/* Red circle with white play icon */}
      <div className="bg-red-600 rounded-full w-3 sm:w-4 h-3 sm:h-4 flex items-center justify-center">
        <svg
          className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      {/* Duration text */}
      <span className="text-white text-[9px] sm:text-[10px] font-semibold">{video.duration}</span>
    </div>
                            </div>

                            {/* Content */}
                            <div>
                                <p className="text-[12px] sm:text-[13px] leading-snug line-clamp-2 mb-1">
                                    {video.title}
                                </p>
                                <span className="text-[10px] sm:text-[11px] text-gray-500">
                                    {video.views} | {video.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
