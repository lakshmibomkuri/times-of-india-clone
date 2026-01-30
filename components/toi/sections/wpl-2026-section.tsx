"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Calendar, Users, TrendingUp, Trophy, Award, Medal, ClipboardList } from "lucide-react";
import Image from "next/image";

export function WPL2026Section() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const headlines = [
    "WPL: RCB in playoffs with 5th consecutive win",
    "RCB register fifth straight win, ensure top 3 finish in WPL",
    "Mandhana falls 4 short of maiden WPL century, guides RCB to fourth consecutive win",
    "WPL: Day after being retired out, Harleen Deol guides UPW to victory",
    "WPL: NZ all-rounder highlights role of Indian players in franchise cricket"
  ];

  const statButtons = [
    { icon: Calendar, label: "Schedule" },
    { icon: Users, label: "Teams" },
    { icon: TrendingUp, label: "Stats" },
    { icon: Trophy, label: "Standings" },
    { icon: Award, label: "Orange Cap" },
    { icon: Medal, label: "Purple Cap" },
    { icon: ClipboardList, label: "Results" },
    { icon: Trophy, label: "Records" }
  ];

  const matches = [
    { team1: "RCB", team1Score: "178/6", team2: "GG", team2Score: "117/8", result: "COMPLETED", date: "Match 12 - 19 Jan 26", venue: "RCB beat GG by 61 runs" },
    { team1: "DC", team2: "MI", result: "UPCOMING", date: "Match 13, 20 Jan 26", time: "19:30 IST, Vadodara" },
    { team1: "GG", team2: "UPW", result: "UPCOMING", date: "Match 14, 22 Jan 26", time: "19:30 IST, Vadodara" },
    { team1: "RCB", team2: "DC", result: "UPCOMING", date: "Match 15, 24 Jan 26", time: "19:30 IST, Vadodara" },
    { team1: "MI", team2: "GG", result: "UPCOMING", date: "Match 16, 25 Jan 26", time: "15:30 IST, Mumbai" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(matches.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleMatches = matches.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="bg-gray-900 text-white py-6 -mx-4 px-4 lg:-mx-0 lg:px-0 lg:rounded">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-bold uppercase tracking-wide">Women's Premier League 2026</h2>
          <ChevronRight className="w-5 h-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Match */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video rounded overflow-hidden">
              <Image
                src="https://picsum.photos/seed/wpl2026/500/300"
                alt="WPL 2026"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-white font-semibold">Mumbai Indians wicketkeeper Kamalini ruled out of remainder of WPL</h3>
              </div>
            </div>
          </div>

          {/* Headlines */}
          <div className="lg:col-span-4 space-y-3">
            {headlines.map((headline, i) => (
              <p key={i} className="text-sm text-gray-300 hover:text-white cursor-pointer flex items-start gap-2">
                <span className="text-gray-500">○</span>
                {headline}
              </p>
            ))}
          </div>

          {/* Stats Buttons */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-2">
              {statButtons.map((btn, i) => (
                <button
                  key={i}
                  className="bg-gray-800 hover:bg-gray-700 rounded p-3 flex flex-col items-center gap-1 transition-colors"
                >
                  <btn.icon className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-gray-300">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Match Cards with Arrows */}
        <div className="mt-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {visibleMatches.map((match, i) => (
              <div key={i} className="bg-gray-800 rounded p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-gray-400">{match.team1}</span>
                  <span className="text-xs text-gray-500">{match.date}</span>
                  <span className="text-xs text-gray-400">{match.team2}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {match.team1.substring(0, 2)}
                    </div>
                    {match.team1Score && <span className="text-sm">{match.team1Score}</span>}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${match.result === 'COMPLETED' ? 'bg-green-600' : 'bg-blue-600'}`}>
                    {match.result}
                  </span>
                  <div className="flex items-center gap-2">
                    {match.team2Score && <span className="text-sm">{match.team2Score}</span>}
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {match.team2.substring(0, 2)}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center mt-2">{match.venue || match.time}</p>
              </div>
            ))}
          </div>

          {/* Dots on Left, Arrows on Right */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentPage ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevPage}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPage}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
