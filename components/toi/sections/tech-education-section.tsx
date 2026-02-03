// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// const techNews = {
//   featured: { image: "https://picsum.photos/seed/tech-feat/130/80", title: "Months after Donald Trump made 'angry call' to Jeff" },
//   items: ["ChatGPT is dying: Legendary investor says $500B company faces...", "FTC Appeal Against Monopoly Ruling: US FTC challenges Meta court..."]
// };

// const educationNews = {
//   featured: { image: "https://picsum.photos/seed/edu-feat/130/80", title: "When will CBSE release Class 10, 12 admit cards" },
//   items: ["UPESSC exam dates for Assistant Professor, PGT, TGT and UP TET 2026...", "Congress flags 'missing law' on private college quotas, wants regulators..."]
// };

// const alsoInNews = {
//   featured: { image: "https://picsum.photos/seed/also-feat/130/80", title: "Maxx Crosby injury update: Raiders DE shares recovery" },
//   items: ["Is Justin Herbert the mystery wolf chasing Madison Beer in her new...", "'Slowly erasing me': Kayla Nicole's emotional post fuels debate as Travis..."]
// };

// export function TechEducationSection() {
//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* Technology */}
//           <div>
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
//               Technology <ChevronRight className="w-4 h-4" />
//             </h2>
//             <Link href="#" className="flex gap-3 mb-3 group">
//               <div className="relative w-[130px] h-[80px] flex-shrink-0 rounded overflow-hidden">
//                 <Image src={techNews.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
//               </div>
//               <p className="text-xs text-gray-700 group-hover:text-red-600">{techNews.featured.title}</p>
//             </Link>
//             <div className="space-y-2 pt-2 border-t border-gray-200">
//               {techNews.items.map((item, idx) => (
//                 <Link key={idx} href="#" className="block text-xs text-gray-600 hover:text-red-600">{item}</Link>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div>
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
//               Education <ChevronRight className="w-4 h-4" />
//             </h2>
//             <Link href="#" className="flex gap-3 mb-3 group">
//               <div className="relative w-[130px] h-[80px] flex-shrink-0 rounded overflow-hidden">
//                 <Image src={educationNews.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
//               </div>
//               <p className="text-xs text-gray-700 group-hover:text-red-600">{educationNews.featured.title}</p>
//             </Link>
//             <div className="space-y-2 pt-2 border-t border-gray-200">
//               {educationNews.items.map((item, idx) => (
//                 <Link key={idx} href="#" className="block text-xs text-gray-600 hover:text-red-600">{item}</Link>
//               ))}
//             </div>
//           </div>

//           {/* Also In News */}
//           <div>
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
//               Also In News <ChevronRight className="w-4 h-4" />
//             </h2>
//             <Link href="#" className="flex gap-3 mb-3 group">
//               <div className="relative w-[130px] h-[80px] flex-shrink-0 rounded overflow-hidden">
//                 <Image src={alsoInNews.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
//               </div>
//               <p className="text-xs text-gray-700 group-hover:text-red-600">{alsoInNews.featured.title}</p>
//             </Link>
//             <div className="space-y-2 pt-2 border-t border-gray-200">
//               {alsoInNews.items.map((item, idx) => (
//                 <Link key={idx} href="#" className="block text-xs text-gray-600 hover:text-red-600">{item}</Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const techNews = {
  featured: { image: "https://picsum.photos/seed/tech-feat/130/80", title: "Months after Donald Trump made 'angry call' to Jeff" },
  items: ["ChatGPT is dying: Legendary investor says $500B company faces...", "FTC Appeal Against Monopoly Ruling: US FTC challenges Meta court..."]
};

const educationNews = {
  featured: { image: "https://picsum.photos/seed/edu-feat/130/80", title: "When will CBSE release Class 10, 12 admit cards" },
  items: ["UPESSC exam dates for Assistant Professor, PGT, TGT and UP TET 2026...", "Congress flags 'missing law' on private college quotas, wants regulators..."]
};

const alsoInNews = {
  featured: { image: "https://picsum.photos/seed/also-feat/130/80", title: "Maxx Crosby injury update: Raiders DE shares recovery" },
  items: ["Is Justin Herbert the mystery wolf chasing Madison Beer in her new...", "'Slowly erasing me': Kayla Nicole's emotional post fuels debate as Travis..."]
};

export function TechEducationSection() {
  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Technology */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
              Technology <ChevronRight className="w-4 h-4" />
            </h2>
            <Link href="#" className="flex gap-3 mb-3 group">
              <div className="relative w-[130px] h-[80px] flex-shrink-0 rounded overflow-hidden">
                <Image src={techNews.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
              </div>
              <p className="text-xs text-gray-700 group-hover:text-red-600">{techNews.featured.title}</p>
            </Link>
            <div className="space-y-2 pt-2 border-t border-gray-200">
              {techNews.items.map((item, idx) => (
                <Link key={idx} href="#" className="block text-xs text-gray-600 hover:text-red-600">{item}</Link>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
              Education <ChevronRight className="w-4 h-4" />
            </h2>
            <Link href="#" className="flex gap-3 mb-3 group">
              <div className="relative w-[130px] h-[80px] flex-shrink-0 rounded overflow-hidden">
                <Image src={educationNews.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
              </div>
              <p className="text-xs text-gray-700 group-hover:text-red-600">{educationNews.featured.title}</p>
            </Link>
            <div className="space-y-2 pt-2 border-t border-gray-200">
              {educationNews.items.map((item, idx) => (
                <Link key={idx} href="#" className="block text-xs text-gray-600 hover:text-red-600">{item}</Link>
              ))}
            </div>
          </div>

          {/* Also In News */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-2">
              Also In News <ChevronRight className="w-4 h-4" />
            </h2>
            <Link href="#" className="flex gap-3 mb-3 group">
              <div className="relative w-[130px] h-[80px] flex-shrink-0 rounded overflow-hidden">
                <Image src={alsoInNews.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
              </div>
              <p className="text-xs text-gray-700 group-hover:text-red-600">{alsoInNews.featured.title}</p>
            </Link>
            <div className="space-y-2 pt-2 border-t border-gray-200">
              {alsoInNews.items.map((item, idx) => (
                <Link key={idx} href="#" className="block text-xs text-gray-600 hover:text-red-600">{item}</Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
