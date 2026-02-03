// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, MapPin, Cloud } from "lucide-react";

// const newsItems = [
//   "Weekly IFR 2026 contest: Sailing with the Times – ...",
//   "Stray dog massacre continues: 100 poisoned nea...",
//   "Pollution triggers surge in allergies, respiratory ill...",
//   "Don't let Hyderabad choke like Delhi",
//   "HYDRAA reclaims two acres of park land in Bachu..."
// ];

// const bottomNews = [
//   "Telangana Rising makes strong Davos debut, global majors...",
//   "Saina – star who inspired millions – quietly quits",
//   "'Sensitive cases': Police to register FIR at victims' doorstep",
//   "Your phone was tapped too under BRS rule, cops tell Harish"
// ];

// export function CitySection() {
//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1">
//             City <ChevronRight className="w-5 h-5" />
//           </h2>
//           <div className="flex items-center gap-3 text-xs text-gray-600">
//             <span className="flex items-center gap-1">
//               Hyderabad <Cloud className="w-3 h-3" /> 23°C
//             </span>
//             <span>|</span>
//             <span className="flex items-center gap-1 text-gray-700 hover:text-red-600 cursor-pointer">
//               Change City <MapPin className="w-3 h-3 text-red-500" />
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-[320px_1fr_260px] gap-5">
//           {/* Left - Featured */}
//           <div>
//             <Link href="#" className="block group">
//               <div className="relative aspect-video rounded overflow-hidden">
//                 <Image src="https://picsum.photos/seed/city-feat/320/180" alt="" fill className="object-cover" />
//                 <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 font-bold rounded">TOI</span>
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-600/90 to-transparent p-3">
//                   <p className="text-white text-xs font-bold uppercase">HYDERABAD NEWS</p>
//                   <p className="text-white text-sm font-medium mt-1">Crop mapping: 10-12% land may be kept out of Rythu Bharosa ambit</p>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Center - News List */}
//           <div className="space-y-2">
//             {newsItems.map((item, idx) => (
//               <Link key={idx} href="#" className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600">
//                 <span className="text-gray-400 mt-0.5">○</span>
//                 <span>{item}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Right - Ad */}
//           <div>
//             <p className="text-[10px] text-gray-400 mb-2">Advertisement</p>
//             <div className="bg-gray-900 rounded overflow-hidden">
//               <Image src="https://picsum.photos/seed/city-ad/260/300" alt="Ad" width={260} height={300} className="w-full" />
//             </div>
//           </div>
//         </div>

//         {/* Bottom News */}
//         <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200">
//           {bottomNews.map((item, idx) => (
//             <Link key={idx} href="#" className="text-xs text-gray-700 hover:text-red-600">
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Cloud } from "lucide-react";

const newsItems = [
  "Weekly IFR 2026 contest: Sailing with the Times – ...",
  "Stray dog massacre continues: 100 poisoned nea...",
  "Pollution triggers surge in allergies, respiratory ill...",
  "Don't let Hyderabad choke like Delhi",
  "HYDRAA reclaims two acres of park land in Bachu..."
];

const bottomNews = [
  "Telangana Rising makes strong Davos debut, global majors...",
  "Saina – star who inspired millions – quietly quits",
  "'Sensitive cases': Police to register FIR at victims' doorstep",
  "Your phone was tapped too under BRS rule, cops tell Harish"
];

export function CitySection() {
  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <div className="flex flex-row items-center justify-between mb-4 gap-3">
          <h2 className="text-lg font-bold text-gray-900 flex gap-1">
            City <ChevronRight className="w-5 h-5" />
          </h2>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span className="flex items-center gap-1 whitespace-nowrap">
              Hyderabad <Cloud className="w-3 h-3" /> 23°C
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-gray-700 hover:text-red-600 cursor-pointer whitespace-nowrap">
              Change City <MapPin className="w-3 h-3 text-red-500" />
            </span>
          </div>
        </div>

        {/* Main Grid: Left + Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">
          {/* Left side: featured + middle + bottom cards */}
          <div className="flex flex-col gap-4">
            {/* Top Row inside left: featured + middle content side-by-side */}
            <div className="grid grid-cols-12 gap-4">
              {/* Featured image: 7 cols */}
              <div className="col-span-12 md:col-span-7 relative aspect-video rounded overflow-hidden">
                <Link href="#" className="block group">
                  <Image
                    src="https://picsum.photos/seed/city-feat/320/180"
                    alt="Featured"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 font-bold rounded">
                    TOI
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-600/90 to-transparent p-3">
                    <p className="text-white text-xs font-bold uppercase">
                      HYDERABAD NEWS
                    </p>
                    <p className="text-white text-sm font-medium mt-1">
                      Crop mapping: 10-12% land may be kept out of Rythu Bharosa ambit
                    </p>
                  </div>
                </Link>
              </div>

              {/* Middle content list: 5 cols */}
              <div className="col-span-12 md:col-span-5 space-y-2 text-xs">
                {newsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="flex items-start gap-2 text-gray-700 hover:text-red-600"
                  >
                    <span className="text-gray-400 mt-0.5">○</span>
                    <span className="truncate">{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom cards full width below */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-700">
              {bottomNews.map((item, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="block hover:text-red-600 line-clamp-3"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Advertisement */}
          <div className="lg:block">
            <p className="text-[10px] text-gray-400 mb-2">Advertisement</p>
            <div className="bg-gray-900 rounded overflow-hidden h-[100px]">
              <Image
                src="https://picsum.photos/seed/city-ad/260/300"
                alt="Ad"
                width={260}
                height={300}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
