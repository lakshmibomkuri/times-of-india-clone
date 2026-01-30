"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

const blogCategories = [
  { name: "NRI", count: "125" },
  { name: "Astrology", count: "89" },
  { name: "Obituaries", count: "45" },
  { name: "Speaking Tree", count: "234" },
  { name: "Sunday Times", count: "156" },
  { name: "Tech Tips", count: "78" },
  { name: "Good News", count: "67" },
  { name: "iTimes Espanol", count: "34" },
];

const featuredBlogs = [
  {
    title: "Finding Peace in Chaos: A Spiritual Journey",
    author: "Swami Ananda",
    category: "Speaking Tree",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    title: "NRI Guide: Navigating Tax Laws in 2026",
    author: "Priya Sharma",
    category: "NRI",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    title: "Tech Tips: Maximizing Your Phone Battery",
    author: "Rahul Tech",
    category: "Tech Tips",
    image: "/placeholder.svg?height=120&width=200",
  },
];

const recentBlogs = [
  "Why Sunday mornings feel different in every city",
  "The art of letting go: Lessons from ancient texts",
  "Good News: Local hero saves 10 lives in flood",
  "Understanding Mercury Retrograde in January 2026",
  "NRI Corner: Best investment options for 2026",
];

export function BlogsSection() {
  return (
    <section className="py-4 border-t border-dashed border-gray-300">
      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
        Blogs <ChevronRight className="w-5 h-5" />
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left - Categories */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            {blogCategories.map((cat, idx) => (
              <div key={idx} className="flex items-center justify-between py-1.5 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                <span className="text-[13px] text-gray-700 hover:text-[#e53935]">{cat.name}</span>
                <span className="text-[11px] text-gray-400">({cat.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center - Featured Blogs */}
        <div className="lg:col-span-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Featured</h3>
          <div className="grid grid-cols-3 gap-3">
            {featuredBlogs.map((blog, idx) => (
              <div key={idx} className="cursor-pointer group">
                <div className="relative h-[100px] mb-2 rounded overflow-hidden">
                  <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                </div>
                <span className="text-[10px] text-[#e53935] font-medium">{blog.category}</span>
                <p className="text-[12px] text-gray-800 font-medium leading-tight group-hover:text-[#e53935] mt-1">
                  {blog.title}
                </p>
                <p className="text-[10px] text-gray-500 mt-1">By {blog.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Recent Blogs */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Posts</h3>
          <div className="space-y-3">
            {recentBlogs.map((blog, idx) => (
              <p key={idx} className="text-[12px] text-gray-700 hover:text-[#e53935] cursor-pointer flex items-start gap-2 pb-2 border-b border-gray-100">
                <span className="text-gray-400">○</span>
                {blog}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
