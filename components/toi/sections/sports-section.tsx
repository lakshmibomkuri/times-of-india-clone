// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, Play } from "lucide-react";

// const newsItems = [
//   "Gully To Glory: Ramandeep Singh's journey from C...",
//   "Jos Buttler Exclusive Interview: I owe Jayawarden...",
//   "T20 WC: 'Are you sure?' – Bangladesh captain ma...",
//   "BCCI likely to drop A+ category; question mark ov...",
//   "Meet Arunachal, undaunted despite crushing defe...",
//   "'You'll struggle to remember': Manjrekar after India...",
//   "1st T20I: Not Iyer! India captain reveals Tilak's repl...",
//   "Ranji Trophy: KL to play for Karnataka; NKR confir...",
//   "SA20: What makes Sunrisers Eastern Cape this go...",
//   "WPL: Welcome win for Capitals; MI second on tabl...",
//   "From Sania mix-ups to sporting immortality: Fare...",
//   "Rohit Sharma's captaincy record that stood tall fo...",
//   "'Ball daal apna chup chap aur peeche ja': Rohit Sh...",
//   "'I would like to bat the same way': Surya on his po..."
// ];

// const esportsItems = [
//   { image: "https://picsum.photos/seed/es1/80/80", title: "Marathon pre-order: All..." },
//   { image: "https://picsum.photos/seed/es2/80/80", title: "Genshin Impact Luna V banner..." },
//   { image: "https://picsum.photos/seed/es3/80/80", title: "Wuthering Waves 3.1..." },
//   { image: "https://picsum.photos/seed/es4/80/80", title: "League of Legends..." },
//   { image: "https://picsum.photos/seed/es5/80/80", title: "Fortnite leaks: Ed Edd n Edd..." },
//   { image: "https://picsum.photos/seed/es6/80/80", title: "How to get Bruno Mars in..." },
//   { image: "https://picsum.photos/seed/es7/80/80", title: "Fortnite 2026 collaboration..." },
//   { image: "https://picsum.photos/seed/es8/80/80", title: "Fortnite leaks: Looney Tunes..." },
//   { image: "https://picsum.photos/seed/es9/80/80", title: "Fortnite Professor..." }
// ];

// const intlSports = [
//   { image: "https://picsum.photos/seed/intl1/180/120", title: "Chiefs part ways with Kevin Saxton II as Andy Reid's offseason reset continues" },
//   { image: "https://picsum.photos/seed/intl2/180/120", title: "A.J. Brown Trade Rumors: Eagles could move star WR to reset cap and offense" },
//   { image: "https://picsum.photos/seed/intl3/180/120", title: "Robert Kraft confirms NFL moving toward 18-game season with focus on international growth" }
// ];

// const inFocusTags = ["WPL Points Table", "WPL Results 2026", "WPL 2026", "T20 World Cup Schedule 2026", "WPL Schedule 2026"];

// export function SportsSection() {
//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//     <div className="max-w-[980px] mx-auto">
//       {/* Header */}
//       <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
//         Sports <ChevronRight className="w-5 h-5" />
//       </h2>
  
//       {/* Two column grid */}
//       <div className="grid grid-cols-3 gap-6">
//         {/* Left column: Sports + International Sports */}
//         <div className="col-span-2 space-y-8">
//           {/* Sports main grid */}
//           <div className="grid grid-cols-[280px_1fr] gap-5">
//             {/* Left - Featured + thumbnails */}
//             <div>
//               <Link href="#" className="block group mb-4">
//                 <div className="relative aspect-[280/160] rounded overflow-hidden">
//                   <Image
//                     src="https://picsum.photos/seed/sports-feat/280/160"
//                     alt=""
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
//                     <p className="text-white text-sm font-medium">
//                       India's T20 WC prep enters home stretch: NZ series offers final chance to test formations
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//               <div className="grid grid-cols-2 gap-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <Link key={i} href="#" className="block group">
//                     <div className="relative aspect-[130/75] rounded overflow-hidden">
//                       <Image
//                         src={`https://picsum.photos/seed/sports-th${i}/130/75`}
//                         alt=""
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <p className="text-[10px] text-gray-700 mt-1 line-clamp-2 group-hover:text-red-600">
//                       {i === 1
//                         ? "'Why do we praise Rohit and Dhoni?' – Gill's captaincy under fire"
//                         : "India's leading vaulters stranded: Fined by the railways for carrying..."}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//             </div>
  
//             {/* Center - News List */}
//             <div className="space-y-2">
//               {newsItems.map((item, idx) => (
//                 <Link
//                   key={idx}
//                   href="#"
//                   className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600"
//                 >
//                   <span className="text-gray-400 mt-0.5 select-none">○</span>
//                   <span className="flex-1 line-clamp-2">{item}</span>
//                   {idx % 4 === 0 && (
//                     <span className="text-red-500 text-[10px] mt-0.5 select-none">▶</span>
//                   )}
//                 </Link>
//               ))}
//             </div>
//           </div>
  
//           {/* International Sports */}
//           <div>
//             <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1">
//               International Sports <ChevronRight className="w-4 h-4" />
//             </h3>
//             <div className="flex gap-4">
//               {intlSports.map((item, idx) => (
//                 <Link key={idx} href="#" className="block group flex-1">
//                   <div className="relative aspect-[280/160] rounded overflow-hidden">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt=""
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <p className="text-xs text-gray-700 mt-2 group-hover:text-red-600 line-clamp-2">
//                     {item.title}
//                   </p>
//                 </Link>
//               ))}
//             </div>
  
//             {/* Pagination controls */}
//             <div className="flex items-center justify-between mt-3">
//               {/* Dots on left */}
//               <div className="flex gap-1">
//                 {Array.from({ length: 4 }).map((_, i) => (
//                   <span
//                     key={i}
//                     className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-gray-900" : "bg-gray-300"
//                       }`}
//                   />
//                 ))}
//               </div>
  
//               {/* Arrows on right */}
//               <div className="flex gap-3 text-gray-400">
//                 <button
//                   aria-label="Previous"
//                   className="hover:text-gray-600 transition-colors"
//                 >
//                   ←
//                 </button>
//                 <button
//                   aria-label="Next"
//                   className="hover:text-gray-600 transition-colors"
//                 >
//                   →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
  
//         {/* Right column: Esports + Advertisement */}
//         <div className="flex flex-col gap-6">
//           {/* Esports */}
//           <div>
//             <h3 className="text-sm font-bold text-gray-900 mb-3">Esports</h3>
//             <div className="grid grid-cols-3 gap-2">
//               {esportsItems.map((item, idx) => (
//                 <Link key={idx} href="#" className="block group">
//                   <div className="relative aspect-square rounded overflow-hidden">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt=""
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <p className="text-[9px] text-gray-600 mt-1 line-clamp-2">
//                     {item.title}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </div>
  
//           {/* Dummy Advertisement */}
//           <div className="border border-gray-300 rounded overflow-hidden">
//             <Image
//               src="https://picsum.photos/seed/dummy-ad/260/200"
//               alt="Advertisement"
//               width={260}
//               height={200}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
  
//       {/* In Focus Tags */}
//       <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200 flex-wrap">
//         <span className="text-xs font-bold text-gray-900">In Focus</span>
//         <div className="flex flex-wrap gap-2">
//           {inFocusTags.map((tag, idx) => (
//             <Link
//               key={idx}
//               href="#"
//               className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full"
//             >
//               {tag}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
  

//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const newsItems = [
  "Gully To Glory: Ramandeep Singh's journey from C...",
  "Jos Buttler Exclusive Interview: I owe Jayawarden...",
  "T20 WC: 'Are you sure?' – Bangladesh captain ma...",
  "BCCI likely to drop A+ category; question mark ov...",
  "Meet Arunachal, undaunted despite crushing defe...",
  "'You'll struggle to remember': Manjrekar after India...",
  "1st T20I: Not Iyer! India captain reveals Tilak's repl...",
  "Ranji Trophy: KL to play for Karnataka; NKR confir...",
  "SA20: What makes Sunrisers Eastern Cape this go...",
  "WPL: Welcome win for Capitals; MI second on tabl...",
  "From Sania mix-ups to sporting immortality: Fare...",
  "Rohit Sharma's captaincy record that stood tall fo...",
  "'Ball daal apna chup chap aur peeche ja': Rohit Sh...",
  "'I would like to bat the same way': Surya on his po..."
];

const esportsItems = [
  { image: "https://picsum.photos/seed/es1/80/80", title: "Marathon pre-order: All..." },
  { image: "https://picsum.photos/seed/es2/80/80", title: "Genshin Impact Luna V banner..." },
  { image: "https://picsum.photos/seed/es3/80/80", title: "Wuthering Waves 3.1..." },
  { image: "https://picsum.photos/seed/es4/80/80", title: "League of Legends..." },
  { image: "https://picsum.photos/seed/es5/80/80", title: "Fortnite leaks: Ed Edd n Edd..." },
  { image: "https://picsum.photos/seed/es6/80/80", title: "How to get Bruno Mars in..." },
  { image: "https://picsum.photos/seed/es7/80/80", title: "Fortnite 2026 collaboration..." },
  { image: "https://picsum.photos/seed/es8/80/80", title: "Fortnite leaks: Looney Tunes..." },
  { image: "https://picsum.photos/seed/es9/80/80", title: "Fortnite Professor..." }
];

const intlSports = [
  { image: "https://picsum.photos/seed/intl1/180/120", title: "Chiefs part ways with Kevin Saxton II as Andy Reid's offseason reset continues" },
  { image: "https://picsum.photos/seed/intl2/180/120", title: "A.J. Brown Trade Rumors: Eagles could move star WR to reset cap and offense" },
  { image: "https://picsum.photos/seed/intl3/180/120", title: "Robert Kraft confirms NFL moving toward 18-game season with focus on international growth" }
];

const inFocusTags = ["WPL Points Table", "WPL Results 2026", "WPL 2026", "T20 World Cup Schedule 2026", "WPL Schedule 2026"];

export function SportsSection() {
  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
          Sports <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Grid: stack left and right on mobile & tablet, side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left column: Sports + International Sports */}
          <div className="order-1 col-span-1 lg:col-span-2 space-y-8">
            
            {/* Sports main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 md:grid-cols-2">
              
              {/* Left - Featured + thumbnails */}
              <div>
                <Link href="#" className="block group mb-4">
                  <div className="relative aspect-[280/160] rounded overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/sports-feat/280/160"
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-sm font-medium">
                        India's T20 WC prep enters home stretch: NZ series offers final chance to test formations
                      </p>
                    </div>
                  </div>
                </Link>
                
                {/* Thumbnail grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Link key={i} href="#" className="block group">
                      <div className="relative aspect-[130/75] rounded overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/sports-th${i}/130/75`}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[10px] text-gray-700 mt-1 line-clamp-2 group-hover:text-red-600">
                        {i === 1
                          ? "'Why do we praise Rohit and Dhoni?' – Gill's captaincy under fire"
                          : "India's leading vaulters stranded: Fined by the railways for carrying..."}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Center - News List */}
              <div className="space-y-2">
                {newsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600"
                  >
                    <span className="text-gray-400 mt-0.5 select-none">○</span>
                    <span className="flex-1 line-clamp-2">{item}</span>
                    {idx % 4 === 0 && (
                      <span className="text-red-500 text-[10px] mt-0.5 select-none">▶</span>
                    )}
                  </Link>
                ))}
              </div>

            </div>

            {/* International Sports */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1">
                International Sports <ChevronRight className="w-4 h-4" />
              </h3>
              <div className="flex gap-4 flex-wrap">
                {intlSports.map((item, idx) => (
                  <Link key={idx} href="#" className="block group flex-1 min-w-[180px]">
                    <div className="relative aspect-[280/160] rounded overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-700 mt-2 group-hover:text-red-600 line-clamp-2">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Esports + Advertisement */}
          <div className="order-2 col-span-1 lg:col-span-1 flex flex-col gap-6">
            
            {/* Esports */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Esports</h3>
              <div className="grid grid-cols-3 gap-2">
                {esportsItems.map((item, idx) => (
                  <Link key={idx} href="#" className="block group">
                    <div className="relative aspect-square rounded overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[9px] text-gray-600 mt-1 line-clamp-2">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Dummy Advertisement */}
            <div className="border border-gray-300 rounded overflow-hidden">
              <Image
                src="https://picsum.photos/seed/dummy-ad/260/200"
                alt="Advertisement"
                width={260}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* In Focus Tags */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200 flex-wrap">
          <span className="text-xs font-bold text-gray-900">In Focus</span>
          <div className="flex flex-wrap gap-2">
            {inFocusTags.map((tag, idx) => (
              <Link
                key={idx}
                href="#"
                className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


