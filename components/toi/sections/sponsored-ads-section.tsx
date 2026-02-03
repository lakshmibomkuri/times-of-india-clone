// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const ads = [
//   { image: "https://picsum.photos/seed/ad1/300/200", title: "Start Strong: Take the First Step Towards Enamel Care." },
//   { image: "https://picsum.photos/seed/ad2/300/200", title: "Complete coverage of the Union Budget 2026" },
//   { image: "https://picsum.photos/seed/ad3/300/200", title: "Re-access modern parenting through science and mindfulness." }
// ];


// export function SponsoredAdsSection() {
//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto">
//         {/* Top Ad Cards */}
//         <div className="grid grid-cols-3 gap-4 mb-4">
//           {ads.map((ad, idx) => (
//             <Link key={idx} href="#" className="block group">
//               <div className="relative aspect-[3/2] rounded overflow-hidden mb-2">
//                 <Image src={ad.image || "/placeholder.svg"} alt="" fill className="object-cover" />
//               </div>
//               {/* <p className="text-xs text-gray-700 group-hover:text-red-600">{ad.title}</p> */}
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

const ads = [
  { image: "https://picsum.photos/seed/ad1/300/200", title: "Start Strong: Take the First Step Towards Enamel Care." },
  { image: "https://picsum.photos/seed/ad2/300/200", title: "Complete coverage of the Union Budget 2026" },
  { image: "https://picsum.photos/seed/ad3/300/200", title: "Re-access modern parenting through science and mindfulness." }
];

export function SponsoredAdsSection() {
  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        {/* Responsive Ad Cards: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {ads.map((ad, idx) => (
            <Link key={idx} href="#" className="block group">
              <div className="relative aspect-[3/2] rounded overflow-hidden mb-2">
                <Image src={ad.image || "/placeholder.svg"} alt={ad.title} fill className="object-cover" />
              </div>
              {/* Optional title below the image */}
              <p className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">{ad.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
