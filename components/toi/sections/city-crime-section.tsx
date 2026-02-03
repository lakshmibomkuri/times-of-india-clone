// import Image from "next/image";
// import { ChevronRight } from "lucide-react";

// const crimeNews = [
//   {
//     image: "https://picsum.photos/seed/crime1/160/110",
//     title: "Kokrajhar violence: 1 killed, 4 injured in mob attack in Assam; highwa...",
//   },
//   {
//     image: "https://picsum.photos/seed/crime2/160/110",
//     title: "Starved, beaten, left gasping for life: CRPF officer, wife held for...",
//   },
//   {
//     image: "https://picsum.photos/seed/crime3/160/110",
//     title: "'Video killed him': Kerala woman faces abetment charges after youth ends...",
//   },
//   {
//     image: "https://picsum.photos/seed/crime4/160/110",
//     title: "Tamil Nadu blast: 1 dead, 18 injured after helium gas cylinder explodes...",
//   },
//   {
//     image: "https://picsum.photos/seed/crime5/160/110",
//     title: "Noida techie's fatal wait: Cops came in 9 mins, fire brigade took 45, SDRF 7...",
//   },
//   {
//     image: "https://picsum.photos/seed/crime6/160/110",
//     title: "Mumbai road crash: Auto driver hurt as Mercedes collides with Akshay...",
//   },
// ];

// export function CityCrimeSection() {
//   return (
//     <section className="py-6 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto px-0">
//         <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
//           City Crime <ChevronRight className="w-5 h-5" />
//         </h2>

//         <div className="grid grid-cols-6 gap-4">
//           {crimeNews.map((item, idx) => (
//             <div key={idx} className="group cursor-pointer">
//               <div className="relative aspect-[4/3] mb-2 overflow-hidden rounded">
//                 <Image
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform"
//                 />
//               </div>
//               <h3 className="text-xs leading-tight text-gray-800 group-hover:text-red-600 line-clamp-3">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { ChevronRight } from "lucide-react";

const crimeNews = [
  {
    image: "https://picsum.photos/seed/crime1/160/110",
    title: "Kokrajhar violence: 1 killed, 4 injured in mob attack in Assam; highwa...",
  },
  {
    image: "https://picsum.photos/seed/crime2/160/110",
    title: "Starved, beaten, left gasping for life: CRPF officer, wife held for...",
  },
  {
    image: "https://picsum.photos/seed/crime3/160/110",
    title: "'Video killed him': Kerala woman faces abetment charges after youth ends...",
  },
  {
    image: "https://picsum.photos/seed/crime4/160/110",
    title: "Tamil Nadu blast: 1 dead, 18 injured after helium gas cylinder explodes...",
  },
  {
    image: "https://picsum.photos/seed/crime5/160/110",
    title: "Noida techie's fatal wait: Cops came in 9 mins, fire brigade took 45, SDRF 7...",
  },
  {
    image: "https://picsum.photos/seed/crime6/160/110",
    title: "Mumbai road crash: Auto driver hurt as Mercedes collides with Akshay...",
  },
];

export function CityCrimeSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-0">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          City Crime <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Mobile: 2 cols, Tablet & Desktop: all 6 in a single row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {crimeNews.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-2 overflow-hidden rounded">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xs leading-tight text-gray-800 group-hover:text-red-600 line-clamp-3">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
