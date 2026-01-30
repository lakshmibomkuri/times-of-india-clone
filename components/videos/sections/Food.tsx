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
      thumbnail: "https://images.unsplash.com/photo-1587734572182-90598d9f66d6?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // pancakes
    },
    {
      title: "Classic Margherita Pizza From Scratch",
      views: "21.3K views",
      time: "4 days ago",
      duration: "09:10",
      thumbnail: "https://images.unsplash.com/photo-1594007650439-ec5f8ecfaaf3?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // pizza
    },
    {
      title: "Spicy Chicken Tacos",
      views: "29.6K views",
      time: "5 days ago",
      duration: "06:45",
      thumbnail: "https://images.unsplash.com/photo-1617196036506-d43aa1b6f394?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // tacos
    },
    {
      title: "Creamy Berry Smoothie",
      views: "15.1K views",
      time: "1 week ago",
      duration: "05:30",
      thumbnail: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // smoothie
    },
    {
      title: "Decadent Chocolate Brownie",
      views: "34.8K views",
      time: "1 week ago",
      duration: "10:05",
      thumbnail: "https://images.unsplash.com/photo-1601924582975-0f3aa786f146?crop=entropy&cs=tinysrgb&fit=max&h=170&w=300", // brownie
    },
  ];
  
  
  
  
  


export default function FoodPage() {
    return (
        <main className="max-w-[980px] mx-auto mt-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-[20px] font-semibold">Food</h1>
                <Link href="#" className="text-red-600 text-sm font-medium">
                    See All
                </Link>
            </div>

            <div className="grid grid-cols-[1fr_1.2fr] gap-6">
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
      <span className="text-white text-xs font-semibold">{mainVideo.duration}</span>
    </div>
                    </div>

                    <h2 className="text-[18px] font-semibold mb-2 leading-snug">
                        {mainVideo.title}
                    </h2>

                    <p className="text-[14px] text-gray-700 mb-2">
                        {mainVideo.description}
                    </p>

                    <p className="text-[13px] text-gray-600 mb-2">
                        {mainVideo.sub}
                    </p>

                    <span className="text-[12px] text-gray-500">
                        {mainVideo.views} | {mainVideo.time}
                    </span>
                </div>

                {/* RIGHT – VIDEO LIST */}
                {/* RIGHT – TWO COLUMN VIDEO GRID */}
                <div className="grid grid-cols-2 gap-2">
                    {sideVideos.map((video, index) => (
                        <div key={index} className="flex gap-3">
                            {/* Thumbnail */}
                            <div className="relative w-[120px] h-[68px] rounded overflow-hidden flex-shrink-0">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
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
      <span className="text-white text-xs font-semibold">{video.duration}</span>
    </div>
                            </div>

                            {/* Content */}
                            <div>
                                <p className="text-[13px] leading-snug line-clamp-2 mb-1">
                                    {video.title}
                                </p>
                                <span className="text-[11px] text-gray-500">
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
