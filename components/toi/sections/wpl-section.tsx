// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, ChevronLeft, Calendar, Users, BarChart3, Trophy, Award, FileText, Medal } from "lucide-react";

// const newsItems = [
//   "WPL: Openers, Jemimah Rodrigues steer Delhi Capitals home",
//   "WPL: Welcome win for Capitals; MI second on table despite fourth loss",
//   "'Want to play like him': Pandya's special message leaves RCB player emotional",
//   "Mumbai Indians wicketkeeper Kamalini ruled out of remainder of WPL",
//   "WPL: RCB in playoffs with 5th consecutive win"
// ];

// const quickLinks = [
//   { icon: Calendar, label: "Schedule" },
//   { icon: Users, label: "Teams" },
//   { icon: BarChart3, label: "Stats" },
//   { icon: Trophy, label: "Standings" },
//   { icon: Award, label: "Orange Cap" },
//   { icon: Medal, label: "Purple Cap" },
//   { icon: FileText, label: "Results" },
//   { icon: Trophy, label: "Records" }
// ];

// const matches = [
//   { team1: "MI", team1Logo: "https://picsum.photos/seed/mi/30/30", team1Score: "154/5", team1Overs: "20.0 ov", team2: "DC", team2Logo: "https://picsum.photos/seed/dc/30/30", team2Score: "155/3", team2Overs: "19.0 ov", status: "COMPLETED", result: "DC beat MI by 7 wickets", date: "Match 13 - 20 Jan 26" },
//   { team1: "GG", team1Logo: "https://picsum.photos/seed/gg/30/30", team1Score: "", team2: "UPW", team2Logo: "https://picsum.photos/seed/upw/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Vadodara", date: "Match 14, 22 Jan 26" },
//   { team1: "RCB", team1Logo: "https://picsum.photos/seed/rcb/30/30", team1Score: "", team2: "DC", team2Logo: "https://picsum.photos/seed/dc2/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Vadodara", date: "Match 15, 24 Jan 26" },
//   { team1: "MI", team1Logo: "https://picsum.photos/seed/mi2/30/30", team1Score: "", team2: "GG", team2Logo: "https://picsum.photos/seed/gg2/30/30", team2Score: "", status: "UPCOMING", result: "15:30 IST, Mumbai", date: "Match 16, 25 Jan 26" },
//   { team1: "UPW", team1Logo: "https://picsum.photos/seed/upw2/30/30", team1Score: "", team2: "RCB", team2Logo: "https://picsum.photos/seed/rcb2/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Lucknow", date: "Match 17, 26 Jan 26" },
//   { team1: "UPW", team1Logo: "https://picsum.photos/seed/upw2/30/30", team1Score: "", team2: "RCB", team2Logo: "https://picsum.photos/seed/rcb2/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Lucknow", date: "Match 17, 26 Jan 26" }
// ];

// const standings = [
//   { rank: 1, team: "Royal Challengers Bengaluru", logo: "https://picsum.photos/seed/rcblogo/24/24", played: 5, won: 5, lost: 0, nr: 0, nrr: "+1.882", pts: 10 },
//   { rank: 2, team: "Mumbai Indians", logo: "https://picsum.photos/seed/milogo/24/24", played: 6, won: 2, lost: 4, nr: 0, nrr: "+0.046", pts: 4 },
//   { rank: 3, team: "UP Warriorz", logo: "https://picsum.photos/seed/upwlogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.483", pts: 4 },
//   { rank: 4, team: "Delhi Capitals", logo: "https://picsum.photos/seed/dclogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.586", pts: 4 },
//   { rank: 5, team: "Gujarat Giants", logo: "https://picsum.photos/seed/gglogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.864", pts: 4 },
//   { rank: 6, team: "Gujarat Giants", logo: "https://picsum.photos/seed/gglogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.864", pts: 4 }
// ];

// export function WPLSection() {
//   const [currentMatch, setCurrentMatch] = useState(0);
//   const matchesPerPage = 3;
//   const totalPages = Math.ceil(matches.length / matchesPerPage);

//   const nextMatches = () => {
//     setCurrentMatch((prev) => (prev + 1) % totalPages);
//   };

//   const prevMatches = () => {
//     setCurrentMatch((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   const visibleMatches = matches.slice(
//     currentMatch * matchesPerPage,
//     currentMatch * matchesPerPage + matchesPerPage
//   );

//   return (
//     <section className="bg-[#1a1a2e] py-6 rounded-lg my-5">
//       <div className="max-w-[980px] mx-auto px-4">
//         <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-1">
//           {"WOMEN'S PREMIER LEAGUE 2026"} <ChevronRight className="w-5 h-5" />
//         </h2>

//         <div className="grid grid-cols-[320px_1fr_200px] gap-5 mb-5">
//           {/* Featured Image */}
//           <Link href="#" className="block">
//             <div className="relative aspect-video rounded overflow-hidden">
//               <Image src="https://picsum.photos/seed/wpl-feat/320/180" alt="" fill className="object-cover" />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
//                 <p className="text-white text-sm font-medium">WPL: Lizelle Lee slapped with heavy fine for Code of Conduct breach</p>
//               </div>
//             </div>
//           </Link>

//           {/* News List */}
//           <div className="space-y-2">
//             {newsItems.map((item, idx) => (
//               <Link key={idx} href="#" className="flex items-start gap-2 text-xs text-gray-300 hover:text-white">
//                 <span className="text-gray-500 mt-0.5">○</span>
//                 <span>{item}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Quick Links */}
//           <div className="grid grid-cols-2 gap-2">
//             {quickLinks.map((link, idx) => (
//               <Link key={idx} href="#" className="flex flex-col items-center justify-center p-3 bg-[#252547] rounded hover:bg-[#2f2f5f] transition-colors">
//                 <link.icon className="w-5 h-5 text-gray-400 mb-1" />
//                 <span className="text-xs text-gray-300">{link.label}</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Match Cards with Arrows */}
//         <div className="mb-5">
//           {/* Match Cards */}
//           <div className="grid grid-cols-3 gap-4 mt-3">
//             {visibleMatches.map((match, idx) => (
//               <div key={idx} className="bg-[#252547] rounded-lg p-3">
//                 <div className="text-[10px] text-gray-400 mb-2 text-center">{match.date}</div>
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     <div className="relative w-6 h-6 rounded-full overflow-hidden">
//                       <Image src={match.team1Logo || "/placeholder.svg"} alt={match.team1} fill className="object-cover" />
//                     </div>
//                     <div>
//                       <div className="text-white font-medium text-sm">{match.team1}</div>
//                       {match.team1Score && <div className="text-gray-400 text-xs">{match.team1Score} <span className="text-[10px]">{match.team1Overs}</span></div>}
//                     </div>
//                   </div>
//                   <span className={`text-[10px] px-2 py-0.5 rounded ${match.status === 'COMPLETED' ? 'bg-green-600' : 'bg-yellow-600'} text-white`}>
//                     {match.status}
//                   </span>
//                   <div className="flex items-center gap-2 text-right">
//                     <div>
//                       <div className="text-white font-medium text-sm">{match.team2}</div>
//                       {match.team2Score && <div className="text-gray-400 text-xs">{match.team2Score} <span className="text-[10px]">{match.team2Overs}</span></div>}
//                     </div>
//                     <div className="relative w-6 h-6 rounded-full overflow-hidden">
//                       <Image src={match.team2Logo || "/placeholder.svg"} alt={match.team2} fill className="object-cover" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center text-xs text-gray-400">{match.result}</div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center justify-between">
//             {/* Dots on Left */}
//             <div className="flex gap-1.5">
//               {Array.from({ length: totalPages }).map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentMatch(idx)}
//                   className={`w-2 h-2 rounded-full transition-colors ${
//                     idx === currentMatch ? "bg-white" : "bg-gray-600"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Arrows on Right */}
//             <div className="flex gap-2">
//               <button
//                 onClick={prevMatches}
//                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={nextMatches}
//                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Standings Table */}
//         <div className="bg-[#252547] rounded-lg overflow-hidden">
//           <table className="w-full text-xs">
//             <thead>
//               <tr className="text-gray-400 border-b border-gray-700">
//                 <th className="text-left p-3">Team</th>
//                 <th className="p-3">Played</th>
//                 <th className="p-3">Won</th>
//                 <th className="p-3">Lost</th>
//                 <th className="p-3">N/R</th>
//                 <th className="p-3">Net RR</th>
//                 <th className="p-3">Points</th>
//               </tr>
//             </thead>
//             <tbody>
//               {standings.map((team) => (
//                 <tr key={team.rank} className="text-gray-300 border-b border-gray-700/50 hover:bg-[#2f2f5f]">
//                   <td className="p-3 flex items-center gap-2">
//                     <span className="text-gray-500">{team.rank}</span>
//                     <div className="relative w-5 h-5 rounded-full overflow-hidden">
//                       <Image src={team.logo || "/placeholder.svg"} alt={team.team} fill className="object-cover" />
//                     </div>
//                     <span className="text-white">{team.team}</span>
//                   </td>
//                   <td className="p-3 text-center">{team.played}</td>
//                   <td className="p-3 text-center">{team.won}</td>
//                   <td className="p-3 text-center">{team.lost}</td>
//                   <td className="p-3 text-center">{team.nr}</td>
//                   <td className="p-3 text-center">{team.nrr}</td>
//                   <td className="p-3 text-center text-white font-bold">{team.pts}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Calendar, Users, BarChart3, Trophy, Award, FileText, Medal } from "lucide-react";

const newsItems = [
  "WPL: Openers, Jemimah Rodrigues steer Delhi Capitals home",
  "WPL: Welcome win for Capitals; MI second on table despite fourth loss",
  "'Want to play like him': Pandya's special message leaves RCB player emotional",
  "Mumbai Indians wicketkeeper Kamalini ruled out of remainder of WPL",
  "WPL: RCB in playoffs with 5th consecutive win"
];

const quickLinks = [
  { icon: Calendar, label: "Schedule" },
  { icon: Users, label: "Teams" },
  { icon: BarChart3, label: "Stats" },
  { icon: Trophy, label: "Standings" },
  { icon: Award, label: "Orange Cap" },
  { icon: Medal, label: "Purple Cap" },
  { icon: FileText, label: "Results" },
  { icon: Trophy, label: "Records" }
];

const matches = [
  { team1: "MI", team1Logo: "https://picsum.photos/seed/mi/30/30", team1Score: "154/5", team1Overs: "20.0 ov", team2: "DC", team2Logo: "https://picsum.photos/seed/dc/30/30", team2Score: "155/3", team2Overs: "19.0 ov", status: "COMPLETED", result: "DC beat MI by 7 wickets", date: "Match 13 - 20 Jan 26" },
  { team1: "GG", team1Logo: "https://picsum.photos/seed/gg/30/30", team1Score: "", team2: "UPW", team2Logo: "https://picsum.photos/seed/upw/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Vadodara", date: "Match 14, 22 Jan 26" },
  { team1: "RCB", team1Logo: "https://picsum.photos/seed/rcb/30/30", team1Score: "", team2: "DC", team2Logo: "https://picsum.photos/seed/dc2/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Vadodara", date: "Match 15, 24 Jan 26" },
  { team1: "MI", team1Logo: "https://picsum.photos/seed/mi2/30/30", team1Score: "", team2: "GG", team2Logo: "https://picsum.photos/seed/gg2/30/30", team2Score: "", status: "UPCOMING", result: "15:30 IST, Mumbai", date: "Match 16, 25 Jan 26" },
  { team1: "UPW", team1Logo: "https://picsum.photos/seed/upw2/30/30", team1Score: "", team2: "RCB", team2Logo: "https://picsum.photos/seed/rcb2/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Lucknow", date: "Match 17, 26 Jan 26" },
  { team1: "UPW", team1Logo: "https://picsum.photos/seed/upw2/30/30", team1Score: "", team2: "RCB", team2Logo: "https://picsum.photos/seed/rcb2/30/30", team2Score: "", status: "UPCOMING", result: "19:30 IST, Lucknow", date: "Match 17, 26 Jan 26" }
];

const standings = [
  { rank: 1, team: "Royal Challengers Bengaluru", logo: "https://picsum.photos/seed/rcblogo/24/24", played: 5, won: 5, lost: 0, nr: 0, nrr: "+1.882", pts: 10 },
  { rank: 2, team: "Mumbai Indians", logo: "https://picsum.photos/seed/milogo/24/24", played: 6, won: 2, lost: 4, nr: 0, nrr: "+0.046", pts: 4 },
  { rank: 3, team: "UP Warriorz", logo: "https://picsum.photos/seed/upwlogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.483", pts: 4 },
  { rank: 4, team: "Delhi Capitals", logo: "https://picsum.photos/seed/dclogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.586", pts: 4 },
  { rank: 5, team: "Gujarat Giants", logo: "https://picsum.photos/seed/gglogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.864", pts: 4 },
  { rank: 6, team: "Gujarat Giants", logo: "https://picsum.photos/seed/gglogo/24/24", played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.864", pts: 4 }
];

export function WPLSection() {
  const [currentMatch, setCurrentMatch] = useState(0);
  const matchesPerPage = 3;
  const totalPages = Math.ceil(matches.length / matchesPerPage);

  const nextMatches = () => setCurrentMatch((prev) => (prev + 1) % totalPages);
  const prevMatches = () => setCurrentMatch((prev) => (prev - 1 + totalPages) % totalPages);
  const visibleMatches = matches.slice(currentMatch * matchesPerPage, currentMatch * matchesPerPage + matchesPerPage);

  return (
    <section className="bg-[#1a1a2e] py-6 rounded-lg my-5">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-1">
          {"WOMEN'S PREMIER LEAGUE 2026"} <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </h2>

        {/* Top Section */}
        <div className="grid gap-5 mb-5
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-[320px_1fr_200px]">

          {/* Featured Image */}
          <Link href="#" className="block w-full md:col-span-1 lg:col-span-1">
            <div className="relative aspect-video rounded overflow-hidden w-full">
              <Image src="https://picsum.photos/seed/wpl-feat/320/180" alt="" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                <p className="text-xs sm:text-sm font-medium text-white">
                  WPL: Lizelle Lee slapped with heavy fine for Code of Conduct breach
                </p>
              </div>
            </div>
          </Link>

          {/* News List */}
          <div className="space-y-2 text-[10px] sm:text-xs md:col-span-1 lg:col-span-1">
            {newsItems.map((item, idx) => (
              <Link key={idx} href="#" className="flex items-start gap-2 text-gray-300 hover:text-white">
                <span className="text-gray-500 mt-0.5">○</span>
                <span className="break-words">{item}</span>
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:col-span-2 lg:col-span-1">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex flex-col items-center justify-center p-2 sm:p-3 bg-[#252547] rounded hover:bg-[#2f2f5f] transition-colors"
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mb-1" />
                <span className="text-[10px] sm:text-xs text-gray-300">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Match Cards */}
        <div className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {visibleMatches.map((match, idx) => (
              <div key={idx} className="bg-[#252547] rounded-lg p-3 flex flex-col sm:flex-col">
                <div className="text-[10px] sm:text-xs text-gray-400 mb-2 text-center">{match.date}</div>
                <div className="flex flex-col sm:flex-row items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={match.team1Logo || "/placeholder.svg"} alt={match.team1} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-white font-medium text-sm sm:text-base">{match.team1}</div>
                      {match.team1Score && (
                        <div className="text-gray-400 text-[10px] sm:text-xs">{match.team1Score} <span className="text-[10px]">{match.team1Overs}</span></div>
                      )}
                    </div>
                  </div>

                  <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded ${match.status === 'COMPLETED' ? 'bg-green-600' : 'bg-yellow-600'} text-white`}>
                    {match.status}
                  </span>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <div className="flex flex-col text-right">
                      <div className="text-white font-medium text-sm sm:text-base">{match.team2}</div>
                      {match.team2Score && (
                        <div className="text-gray-400 text-[10px] sm:text-xs">{match.team2Score} <span className="text-[10px]">{match.team2Overs}</span></div>
                      )}
                    </div>
                    <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={match.team2Logo || "/placeholder.svg"} alt={match.team2} fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-[10px] sm:text-xs text-gray-400">{match.result}</div>
              </div>
            ))}
          </div>

          {/* Pagination Dots + Arrows */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentMatch(idx)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${idx === currentMatch ? "bg-white" : "bg-gray-600"}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevMatches}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button
                onClick={nextMatches}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Standings Table */}
        <div className="bg-[#252547] rounded-lg overflow-x-auto">
          <table className="w-full text-xs min-w-[600px] sm:min-w-full">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="text-left p-2 sm:p-3">Team</th>
                <th className="p-2 sm:p-3 text-center">Played</th>
                <th className="p-2 sm:p-3 text-center">Won</th>
                <th className="p-2 sm:p-3 text-center">Lost</th>
                <th className="p-2 sm:p-3 text-center">N/R</th>
                <th className="p-2 sm:p-3 text-center">Net RR</th>
                <th className="p-2 sm:p-3 text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.rank} className="text-gray-300 border-b border-gray-700/50 hover:bg-[#2f2f5f]">
                  <td className="p-2 sm:p-3 flex items-center gap-2">
                    <span className="text-gray-500 text-[10px] sm:text-xs">{team.rank}</span>
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={team.logo || "/placeholder.svg"} alt={team.team} fill className="object-cover" />
                    </div>
                    <span className="text-white text-[10px] sm:text-sm">{team.team}</span>
                  </td>
                  <td className="p-2 sm:p-3 text-center">{team.played}</td>
                  <td className="p-2 sm:p-3 text-center">{team.won}</td>
                  <td className="p-2 sm:p-3 text-center">{team.lost}</td>
                  <td className="p-2 sm:p-3 text-center">{team.nr}</td>
                  <td className="p-2 sm:p-3 text-center">{team.nrr}</td>
                  <td className="p-2 sm:p-3 text-center text-white font-bold">{team.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
