"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const matches = [
  {
    team1: "RCB",
    team1Logo: "🔴",
    team1Score: "178/6",
    team1Overs: "20.0 ov",
    team2: "GG",
    team2Logo: "🟠",
    team2Score: "117/8",
    team2Overs: "20.0 ov",
    date: "Match 12 - 19 Jan 26",
    status: "COMPLETED",
    statusColor: "bg-green-500",
    result: "RCB beat GG by 61 runs",
  },
  {
    team1: "DC",
    team1Logo: "🔵",
    team2: "MI",
    team2Logo: "🔵",
    date: "Match 13 , 20 Jan 26",
    status: "UPCOMING",
    statusColor: "bg-blue-500",
    result: "19:30 IST, Vadodara",
  },
  {
    team1: "GG",
    team1Logo: "🟠",
    team2: "UPW",
    team2Logo: "🟣",
    date: "Match 14 , 22 Jan 26",
    status: "UPCOMING",
    statusColor: "bg-blue-500",
    result: "19:30 IST, Vadodara",
  },
];

const standings = [
  { pos: 1, team: "Royal Challengers Bengaluru", logo: "🔴", played: 5, won: 5, lost: 0, nr: 0, nrr: "+1.882", points: 10 },
  { pos: 2, team: "Mumbai Indians", logo: "🔵", played: 6, won: 2, lost: 3, nr: 0, nrr: "+0.151", points: 4 },
  { pos: 3, team: "UP Warriorz", logo: "🟣", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.483", points: 4 },
  { pos: 4, team: "Gujarat Giants", logo: "🟠", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.864", points: 4 },
  { pos: 5, team: "Delhi Capitals", logo: "🔵", played: 4, won: 1, lost: 3, nr: 0, nrr: "-0.856", points: 2 },
];

export function CricketSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-[#1a1a1a] text-white py-6">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Cricket</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-600 text-sm hover:bg-gray-800">Results</button>
            <button className="px-4 py-2 border border-gray-600 text-sm hover:bg-gray-800">Records</button>
          </div>
        </div>

        {/* Match Cards Carousel */}
        <div className="relative mb-6">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-4 overflow-hidden">
            {matches.map((match, idx) => (
              <div key={idx} className="flex-shrink-0 w-[300px] bg-[#2a2a2a] rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{match.team1}</span>
                    <span className="text-2xl">{match.team1Logo}</span>
                  </div>
                  <span className="text-xs text-gray-400">{match.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{match.team2}</span>
                    <span className="text-2xl">{match.team2Logo}</span>
                  </div>
                </div>
                {match.team1Score && (
                  <div className="flex justify-between text-sm mb-2">
                    <span>{match.team1Score} <span className="text-gray-400 text-xs">{match.team1Overs}</span></span>
                    <span>{match.team2Score} <span className="text-gray-400 text-xs">{match.team2Overs}</span></span>
                  </div>
                )}
                <div className="flex justify-center mb-2">
                  <span className={`${match.statusColor} text-white text-xs px-3 py-1 rounded`}>{match.status}</span>
                </div>
                <p className="text-center text-sm text-gray-300">{match.result}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide(Math.min(matches.length - 1, currentSlide + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mb-6">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full ${dot === currentSlide ? "bg-white" : "bg-gray-600"}`}
            />
          ))}
        </div>

        {/* Standings Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="text-left py-3 px-2">Team</th>
                <th className="text-center py-3 px-2">Played</th>
                <th className="text-center py-3 px-2">Won</th>
                <th className="text-center py-3 px-2">Lost</th>
                <th className="text-center py-3 px-2">N/R</th>
                <th className="text-center py-3 px-2">Net RR</th>
                <th className="text-center py-3 px-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.pos} className="border-b border-gray-800 hover:bg-[#2a2a2a]">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">{team.pos}</span>
                      <span className="text-lg">{team.logo}</span>
                      <span className="font-medium">{team.team}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-2">{team.played}</td>
                  <td className="text-center py-3 px-2">{team.won}</td>
                  <td className="text-center py-3 px-2 text-red-400">{team.lost}</td>
                  <td className="text-center py-3 px-2">{team.nr}</td>
                  <td className="text-center py-3 px-2">{team.nrr}</td>
                  <td className="text-center py-3 px-2 font-bold">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
