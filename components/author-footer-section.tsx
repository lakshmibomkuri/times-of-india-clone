"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Rss } from "lucide-react";

export function TOIFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-[11px]">
          {/* Column 1: THE TIMES OF INDIA */}
          <div>
            {/* <h3 className="font-bold text-[13px] text-[#333] mb-1">THE TIMES OF INDIA</h3> */}
            <img src="/71215965.cms" alt="times-of-india" className="mb-5" />
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">About us</Link></li>
              <li><Link href="#" className="hover:text-red-600">Create Your Own Ad</Link></li>
              <li><Link href="#" className="hover:text-red-600">Terms of Use and Grievance Redressal Policy</Link></li>
              <li><Link href="#" className="hover:text-red-600">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-red-600">Advertise with us</Link></li>
            </ul>
            
            <h4 className="font-bold text-[11px] text-[#333] mt-4 mb-2">FOLLOW US ON</h4>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-500 hover:text-blue-600"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="text-gray-500 hover:text-black"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="text-gray-500 hover:text-red-600"><Youtube className="w-4 h-4" /></Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="text-gray-500 hover:text-blue-700"><Linkedin className="w-4 h-4" /></Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500"><Rss className="w-4 h-4" /></Link>
            </div>
          </div>

          {/* Column 2: RSS/Newsletter */}
          <div className="mt-10">
            <ul className="space-y-1.5 text-gray-600 mt-6">
              <li><Link href="#" className="hover:text-red-600">RSS</Link></li>
              <li><Link href="#" className="hover:text-red-600">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-red-600">Feedback</Link></li>
              <li><Link href="#" className="hover:text-red-600">ePaper</Link></li>
              <li><Link href="#" className="hover:text-red-600">Sitemap</Link></li>
              <li><Link href="#" className="hover:text-red-600">Archives</Link></li>
            </ul>
          </div>

          {/* Column 3: LIVING AND ENTERTAINMENT + HOT ON THE WEB + POPULAR CATEGORIES */}
          <div>
            <h4 className="font-bold text-[11px] text-[#333] mb-2">LIVING AND ENTERTAINMENT</h4>
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">Cricbuzz</Link></li>
              <li><Link href="#" className="hover:text-red-600">Lifestyle</Link></li>
              <li><Link href="#" className="hover:text-red-600">Newspaper Subscription</Link></li>
              <li><Link href="#" className="hover:text-red-600">Food News</Link></li>
              <li><Link href="#" className="hover:text-red-600">TV</Link></li>
              <li><Link href="#" className="hover:text-red-600">Times Prime</Link></li>
            </ul>
            
            <h4 className="font-bold text-[11px] text-[#333] mt-4 mb-2">HOT ON THE WEB</h4>
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">FDA Ice Cream Recall</Link></li>
              <li><Link href="#" className="hover:text-red-600">Happy Teachers Day 2025</Link></li>
              <li><Link href="#" className="hover:text-red-600">Fruits For Kidney Health</Link></li>
              <li><Link href="#" className="hover:text-red-600">Dulquer Salman</Link></li>
              <li><Link href="#" className="hover:text-red-600">High Blood Pressure</Link></li>
              <li><Link href="#" className="hover:text-red-600">Chamomile Tea</Link></li>
              <li><Link href="#" className="hover:text-red-600">Liver Detox</Link></li>
            </ul>
            
            <h4 className="font-bold text-[11px] text-[#333] mt-4 mb-2">POPULAR CATEGORIES</h4>
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">Headlines</Link></li>
              <li><Link href="#" className="hover:text-red-600">Sports News</Link></li>
              <li><Link href="#" className="hover:text-red-600">Business News</Link></li>
              <li><Link href="#" className="hover:text-red-600">India News</Link></li>
              <li><Link href="#" className="hover:text-red-600">World News</Link></li>
              <li><Link href="#" className="hover:text-red-600">Bollywood News</Link></li>
            </ul>
          </div>

          {/* Column 4: More HOT ON THE WEB + More Categories */}
          <div className="mt-6">
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">Kidney Health</Link></li>
              <li><Link href="#" className="hover:text-red-600">Lemon Water Benefits</Link></li>
              <li><Link href="#" className="hover:text-red-600">Kunckaa Sadanand</Link></li>
              <li><Link href="#" className="hover:text-red-600">Uric Acid</Link></li>
              <li><Link href="#" className="hover:text-red-600">{"Teacher's Day Speech"}</Link></li>
              <li><Link href="#" className="hover:text-red-600">Offbeat Train Stations</Link></li>
              <li><Link href="#" className="hover:text-red-600">Palace of the Parliament</Link></li>
              <li><Link href="#" className="hover:text-red-600">Monkey Vs Apes</Link></li>
              <li><Link href="#" className="hover:text-red-600">Mrunal Thakur</Link></li>
              <li><Link href="#" className="hover:text-red-600">Pumpkin Seeds Benefits</Link></li>
            </ul>
            
            <ul className="space-y-1.5 text-gray-600 mt-4">
              <li><Link href="#" className="hover:text-red-600">Health + Tips</Link></li>
              <li><Link href="#" className="hover:text-red-600">Indian TV Shows</Link></li>
              <li><Link href="#" className="hover:text-red-600">Technology</Link></li>
              <li><Link href="#" className="hover:text-red-600">Travel</Link></li>
              <li><Link href="#" className="hover:text-red-600">Etimes</Link></li>
              <li><Link href="#" className="hover:text-red-600">Health & Fitness</Link></li>
              <li><Link href="#" className="hover:text-red-600">Delhi Gold Rate Today</Link></li>
            </ul>
          </div>

          {/* Column 5: Travel Destinations + Box Office + Rates */}
          <div>
            <ul className="space-y-1.5 text-gray-600 mt-6">
              <li><Link href="#" className="hover:text-red-600">Travel Destinations</Link></li>
              <li><Link href="#" className="hover:text-red-600">Whats Hot</Link></li>
              <li><Link href="#" className="hover:text-red-600">ETimes</Link></li>
              <li><Link href="#" className="hover:text-red-600">Times Life</Link></li>
              <li><Link href="#" className="hover:text-red-600">Times Pets</Link></li>
              <li><Link href="#" className="hover:text-red-600">MyLifeXP</Link></li>
            </ul>
            
            <ul className="space-y-1.5 text-gray-600 mt-4">
              <li><Link href="#" className="hover:text-red-600">Param Sundari Box Office</Link></li>
              <li><Link href="#" className="hover:text-red-600">Lokah Chapter 1 Collection</Link></li>
              <li><Link href="#" className="hover:text-red-600">Param Sundari Review</Link></li>
              <li><Link href="#" className="hover:text-red-600">Kartick Aaryan</Link></li>
              <li><Link href="#" className="hover:text-red-600">Raj Kundra</Link></li>
              <li><Link href="#" className="hover:text-red-600">War 2 Box Office</Link></li>
              <li><Link href="#" className="hover:text-red-600">Coolie Movie Review</Link></li>
            </ul>
            
            <ul className="space-y-1.5 text-gray-600 mt-4">
              <li><Link href="#" className="hover:text-red-600">Astrology</Link></li>
              <li><Link href="#" className="hover:text-red-600">Weather Today</Link></li>
              <li><Link href="#" className="hover:text-red-600">Platinum Rate Today</Link></li>
              <li><Link href="#" className="hover:text-red-600">Silver Rate Today</Link></li>
              <li><Link href="#" className="hover:text-red-600">Gold Rate Today</Link></li>
            </ul>
          </div>

          {/* Column 6: SERVICES + TRENDING TOPICS */}
          <div>
            <h4 className="font-bold text-[11px] text-[#333] mb-2">SERVICES</h4>
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">CouponDunia</Link></li>
              <li><Link href="#" className="hover:text-red-600">TechGig</Link></li>
              <li><Link href="#" className="hover:text-red-600">TimesJobs</Link></li>
              <li><Link href="#" className="hover:text-red-600">Bollywood News</Link></li>
              <li><Link href="#" className="hover:text-red-600">Times Mobile</Link></li>
            </ul>
            
            <h4 className="font-bold text-[11px] text-[#333] mt-4 mb-2">TRENDING TOPICS</h4>
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">Teachers Day 2025</Link></li>
              <li><Link href="#" className="hover:text-red-600">NCVT ITI Result</Link></li>
              <li><Link href="#" className="hover:text-red-600">Canada Student Visa</Link></li>
              <li><Link href="#" className="hover:text-red-600">SSC CGL Exam Date</Link></li>
              <li><Link href="#" className="hover:text-red-600">Lalit Modi</Link></li>
              <li><Link href="#" className="hover:text-red-600">Babar Azam</Link></li>
              <li><Link href="#" className="hover:text-red-600">D Gukesh</Link></li>
              <li><Link href="#" className="hover:text-red-600">Haidar Ali</Link></li>
              <li><Link href="#" className="hover:text-red-600">Carlos Alcaraz</Link></li>
              <li><Link href="#" className="hover:text-red-600">Iga Swiatek</Link></li>
              <li><Link href="#" className="hover:text-red-600">Brian Bennett</Link></li>
              <li><Link href="#" className="hover:text-red-600">R Ashwin</Link></li>
            </ul>
          </div>

          {/* Column 7: More Services + TRENDING VIDEOS */}
          <div>
            <ul className="space-y-1.5 text-gray-600 mt-6">
              <li><Link href="#" className="hover:text-red-600">Gadgets</Link></li>
              <li><Link href="#" className="hover:text-red-600">Times Events</Link></li>
              <li><Link href="#" className="hover:text-red-600">Work with Us</Link></li>
              <li><Link href="#" className="hover:text-red-600">Colombia</Link></li>
            </ul>
            
            <ul className="space-y-1.5 text-gray-600 mt-4">
              <li><Link href="#" className="hover:text-red-600">Yamuna Water Level</Link></li>
              <li><Link href="#" className="hover:text-red-600">Harsha Masaai Husband</Link></li>
              <li><Link href="#" className="hover:text-red-600">Pune RSV Cases</Link></li>
              <li><Link href="#" className="hover:text-red-600">Arun Gawli</Link></li>
              <li><Link href="#" className="hover:text-red-600">Nagpur Blast</Link></li>
              <li><Link href="#" className="hover:text-red-600">DK Shivakumar</Link></li>
              <li><Link href="#" className="hover:text-red-600">Mumbai Building Demolition</Link></li>
              <li><Link href="#" className="hover:text-red-600">Bihar Jail Wedding</Link></li>
            </ul>
            
            <h4 className="font-bold text-[11px] text-[#333] mt-4 mb-2">TRENDING VIDEOS</h4>
            <ul className="space-y-1.5 text-gray-600">
              <li><Link href="#" className="hover:text-red-600">{"Janelle 'BURN' Jerusalem"}</Link></li>
              <li><Link href="#" className="hover:text-red-600">{"Top Economist Slams Trump's Tariff"}</Link></li>
              <li><Link href="#" className="hover:text-red-600">{"Hamas 'Silences' Trump"}</Link></li>
              <li><Link href="#" className="hover:text-red-600">{"'Come To Moscow'"}</Link></li>
              <li><Link href="#" className="hover:text-red-600">Putin THRASHES Trump</Link></li>
              <li><Link href="#" className="hover:text-red-600">Donald Trump Warns India</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-[10px] text-gray-500">
            Copyright © 2026 Bennett, Coleman & Co. Ltd. All rights reserved. For reprint rights: Times Syndication Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default TOIFooter;
