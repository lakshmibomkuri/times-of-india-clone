// import Image from "next/image";
// import { ChevronRight } from "lucide-react";

// const legalNews = [
//   {
//     image: "https://picsum.photos/seed/legal1/200/140",
//     title: "Even if marriage never legally existed, maintenance can still...",
//   },
//   {
//     image: "https://picsum.photos/seed/legal2/200/140",
//     title: "Bahu is a relative, but not by SEBI definition? The takeover rule dilemma &...",
//   },
//   {
//     image: "https://picsum.photos/seed/legal3/200/140",
//     title: "Wife's qualification no ground to deny maintenance: HC",
//   },
//   {
//     image: "https://picsum.photos/seed/legal4/200/140",
//     title: "Sympathy for accused cannot override the law, rules SC",
//   },
//   {
//     image: "https://picsum.photos/seed/legal5/200/140",
//     title: "Supreme Court to examine immunity for CEC & ECs after PIL flags...",
//   },
//   {
//     image: "https://picsum.photos/seed/legal6/200/140",
//     title: "Court proceedings distorted, High Court orders removal of reels",
//   },
// ];

// export function LegalSection() {
//   return (
//     <section className="py-6 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto px-0">
//         <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
//           Legal <ChevronRight className="w-5 h-5" />
//         </h2>

//         <div className="grid grid-cols-6 gap-4">
//           {legalNews.map((item, idx) => (
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

const legalNews = [
  {
    image: "https://picsum.photos/seed/legal1/200/140",
    title: "Even if marriage never legally existed, maintenance can still...",
  },
  {
    image: "https://picsum.photos/seed/legal2/200/140",
    title: "Bahu is a relative, but not by SEBI definition? The takeover rule dilemma &...",
  },
  {
    image: "https://picsum.photos/seed/legal3/200/140",
    title: "Wife's qualification no ground to deny maintenance: HC",
  },
  {
    image: "https://picsum.photos/seed/legal4/200/140",
    title: "Sympathy for accused cannot override the law, rules SC",
  },
  {
    image: "https://picsum.photos/seed/legal5/200/140",
    title: "Supreme Court to examine immunity for CEC & ECs after PIL flags...",
  },
  {
    image: "https://picsum.photos/seed/legal6/200/140",
    title: "Court proceedings distorted, High Court orders removal of reels",
  },
];

export function LegalSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Legal <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {legalNews.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-2 overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xs sm:text-sm md:text-base leading-tight text-gray-800 group-hover:text-red-600 line-clamp-3">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
