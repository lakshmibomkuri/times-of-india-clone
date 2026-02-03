// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, Play } from "lucide-react";

// export function BusinessSection() {
//   const tabs = ["Featured", "India", "International", "Photos", "Videos", "Banking"];
//   const news = [
//     "Budget 2026 expectations: Next phase of financia...",
//     "Top stocks to buy today: Stock recommendations...",
//     "India in Davos: Union minister rules out trade talks...",
//     "Gold tops 1.5L/10gm, silver above Rs 3L/kg",
//     "Rupee feels geopolitical heat, breaches 91 level a...",
//   ];
//   const bottomNews = [
//     { title: "'Our refineries are robust!': India can process Venezuela...", col: 1 },
//     { title: "A new low for rupee! Currency falls 23 paise in early tradin...", col: 1 },
//     { title: "Stock market today: Nifty50 opens below 25,200; BSE Sensex...", col: 2 },
//     { title: "Wall Street tumbles! Dow sheds 850 points, S&P 500 slip...", col: 2 },
//   ];
//   const inFocusTags = ["Stock Market Holidays 2026", "Income Tax Calculator", "January Bank Holidays", "January Public Holidays", "Gold Rate Today"];

//   return (
//     <section className="border-t border-dashed border-gray-300 py-4">
//       <div className="flex items-center justify-between mb-3">
//         <h2 className="text-[15px] font-bold text-gray-900 flex items-center gap-0.5">
//           Business <ChevronRight className="w-4 h-4" />
//         </h2>
//         <div className="flex gap-3 text-[11px]">
//           {tabs.map((tab, i) => (
//             <button key={tab} className={`${i === 0 ? 'text-red-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-4">
//         {/* Left - Featured Video */}
//         <div className="w-[200px] flex-shrink-0">
//           <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer">
//             <Image src="https://picsum.photos/seed/biz1/200/150" alt="Business" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-2">
//               <span className="text-white text-[9px] font-bold uppercase">MARK CARNEY NET</span>
//               <span className="text-white text-[10px] mt-1 line-clamp-2">Mark Carney net worth 2026: Truth about Canadian PM's wealth that is turning heads</span>
//             </div>
//             <div className="absolute top-2 right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//               <Play className="w-4 h-4 text-white fill-white" />
//             </div>
//           </div>
//         </div>

//         {/* Middle - News List */}
//         <div className="flex-1">
//           <ul className="space-y-2">
//             {news.map((item, idx) => (
//               <li key={idx} className="flex items-start gap-1.5">
//                 <span className="text-gray-400 text-[10px]">•</span>
//                 <Link href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-tight">{item}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right - Advertisement */}
//         <div className="w-[200px] flex-shrink-0">
//           <div className="bg-blue-50 h-full flex items-center justify-center text-[10px] text-gray-400 border border-gray-200">
//             Advertisement
//           </div>
//         </div>
//       </div>

//       {/* Bottom News Grid */}
//       <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-100">
//         {bottomNews.map((item, idx) => (
//           <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-tight">{item.title}</Link>
//         ))}
//       </div>

//       {/* In Focus Tags */}
//       <div className="flex items-center gap-2 mt-4 pt-3 border-t border-dashed border-gray-200">
//         <span className="text-[11px] font-semibold text-gray-700">In Focus</span>
//         {inFocusTags.map((tag, idx) => (
//           <Link key={idx} href="#" className="text-[10px] px-2 py-1 border border-gray-300 rounded hover:border-red-500 hover:text-red-600">{tag}</Link>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

export function BusinessSection() {
  const tabs = ["Featured", "India", "International", "Photos", "Videos", "Banking"];
  const news = [
    "Budget 2026 expectations: Next phase of financia...",
    "Top stocks to buy today: Stock recommendations...",
    "India in Davos: Union minister rules out trade talks...",
    "Gold tops 1.5L/10gm, silver above Rs 3L/kg",
    "Rupee feels geopolitical heat, breaches 91 level a...",
  ];
  const bottomNews = [
    { title: "'Our refineries are robust!': India can process Venezuela...", col: 1 },
    { title: "A new low for rupee! Currency falls 23 paise in early tradin...", col: 1 },
    { title: "Stock market today: Nifty50 opens below 25,200; BSE Sensex...", col: 2 },
    { title: "Wall Street tumbles! Dow sheds 850 points, S&P 500 slip...", col: 2 },
  ];
  const inFocusTags = [
    "Stock Market Holidays 2026",
    "Income Tax Calculator",
    "January Bank Holidays",
    "January Public Holidays",
    "Gold Rate Today",
  ];

  return (
    <section className="border-t border-dashed border-gray-300 max-w-[980px] mx-auto mt-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-3 gap-3 md:gap-0">
        <h2 className="text-[15px] font-bold text-gray-900 flex items-center gap-0.5">
          Business <ChevronRight className="w-4 h-4" />
        </h2>
        <div className="flex flex-wrap gap-3 text-[11px] justify-center md:justify-start">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`${i === 0 ? "text-red-600 font-semibold" : "text-gray-600 hover:text-gray-900"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: flex-col on mobile, row on md */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left - Featured Video */}
        <div className="w-full md:w-[200px] flex-shrink-0">
          <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer rounded-md">
            <Image
              src="https://picsum.photos/seed/biz1/200/150"
              alt="Business"
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-2 rounded-md">
              <span className="text-white text-[9px] font-bold uppercase">MARK CARNEY NET</span>
              <span className="text-white text-[10px] mt-1 line-clamp-2">
                Mark Carney net worth 2026: Truth about Canadian PM's wealth that is turning heads
              </span>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Middle - News List */}
        <div className="flex-1">
          <ul className="space-y-2">
            {news.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-gray-400 text-[10px]">•</span>
                <Link href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-tight">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Advertisement */}
        <div className="w-full md:w-[200px] flex-shrink-0">
          <div className="bg-blue-50 h-full min-h-[150px] flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 rounded-md">
            Advertisement
          </div>
        </div>
      </div>

      {/* Bottom News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-100">
        {bottomNews.map((item, idx) => (
          <Link
            key={idx}
            href="#"
            className="text-[11px] text-gray-700 hover:text-red-600 leading-tight truncate"
            title={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* In Focus Tags */}
      <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-dashed border-gray-200">
        <span className="text-[11px] font-semibold text-gray-700 whitespace-nowrap">In Focus</span>
        {inFocusTags.map((tag, idx) => (
          <Link
            key={idx}
            href="#"
            className="text-[10px] px-2 py-1 border border-gray-300 rounded whitespace-nowrap hover:border-red-500 hover:text-red-600"
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
}
