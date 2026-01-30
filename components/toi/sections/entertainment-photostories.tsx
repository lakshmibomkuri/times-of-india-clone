"use client";

import { ChevronRight, MapPin, ImageIcon } from "lucide-react";
import Image from "next/image";

export function EntertainmentPhotostories() {
  const headlines = [
    "Jodie Foster recalls how a lion almost mauled her:...",
    "Ranya' stepfather, Ramachandra Rao accused in o...",
    "Police files case against speeding driver in Akshay...",
    "Star Trek: Starfleet Academy: William Shatner joke...",
    "Palash Muchhal back to directing post split with S...",
    "'Kung Fu Hustle' star Bruce Leung passes away at ...",
    "'My Rs 50 lakh policy ditched me in the darkest h...",
    "Fake Sweet Potato in the market? How to check t...",
    "Upcoming housing projects in Gurugram 2026: De...",
    "Archana's son Aaryamann surprises mother a new..."
  ];

  const photostories = [
    { title: "How to make Chef Sanjeev...", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=100&fit=crop", count: 9 },
    { title: "Ancient Devi Mantras...", image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=150&h=100&fit=crop", count: 10 },
    { title: "Amitabh Bachchan,...", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop", count: 9 },
    { title: "Fake Sweet Potato in the...", image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=150&h=100&fit=crop", count: 10 },
    { title: "5 desi gobi dishes among...", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=100&fit=crop", count: 6 },
    { title: "5 reasons why teens prefer...", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&h=100&fit=crop", count: 6 }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Entertainment Main */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-900">Entertainment</h2>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Featured */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded overflow-hidden mb-2">
                <Image 
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop" 
                  alt="Dhurandhar box office" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="text-white text-sm font-medium">'Dhurandhar' box office day 47 (LIVE)</span>
                </div>
              </div>
            </div>
            
            {/* Headlines List */}
            <div className="space-y-2">
              {headlines.map((headline, i) => (
                <p key={i} className="text-xs text-gray-700 hover:text-red-600 cursor-pointer flex items-start gap-1">
                  <span className="text-gray-400">○</span>
                  {headline}
                </p>
              ))}
            </div>
          </div>
          
          {/* Bottom Cards */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded overflow-hidden mb-2">
                <Image src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=180&fit=crop" alt="" fill className="object-cover" />
              </div>
              <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600">
                Bollywood pins January hope on Sunny Deol's Border 2
              </h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded overflow-hidden mb-2">
                <Image src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=180&fit=crop" alt="" fill className="object-cover" />
                <span className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full"></span>
              </div>
              <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600">
                Jana Nayagan: Release date hearing LIVE updates
              </h3>
            </div>
          </div>
        </div>

        {/* Photostories Sidebar */}
        <div className="lg:col-span-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad</span>
              <span className="text-gray-400">|</span>
              <span className="text-red-600 cursor-pointer">Change City</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-bold text-gray-900">Photostories</h3>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {photostories.map((story, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded overflow-hidden mb-1">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  <div className="absolute bottom-1 left-1 bg-red-600 text-white text-[10px] px-1 py-0.5 rounded flex items-center gap-0.5">
                    <ImageIcon className="w-2 h-2" />
                    {story.count}
                  </div>
                </div>
                <p className="text-[10px] text-gray-700 group-hover:text-red-600 line-clamp-2">{story.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
