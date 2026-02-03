// import { ChevronRight } from "lucide-react";
// import Image from "next/image";

// const worldSectionData = {
//   lead: {
//     title: "Qatar's 10-year residency dream: A new golden opportunity for entrepreneurs and CEOs",
//     image: "https://picsum.photos/seed/worldfeat/600/400",
//   },
//   middleList: [
//     "Kennedy Center to shut for 2 years: Trump orders ...",
//     "‘We know about your mom’: Zohran Mamdani fac...",
//     "‘We’ll find out whether Khamenei was right’: Trum... ",
//     "Epstein row: Elon Musk denies links; rejects ‘creep...",
//     "Nepal-born police officer Pradeep Tamang killed r...",
//   ],
//   bottomCards: [
//     "Rare cherry blossoms bloom in Philippines goes viral: Baguio...",
//     "‘You’re 100% lying’: Internet explodes as Bryan Johnson...",
//     "‘Long lost cave in New Zealand’ reveals million-year-old...",
//     "Ramadan 2026: Will the month of fasting begin from Wed, Feb...",
//   ],
//   rightStories: [
//     {
//       image: "https://picsum.photos/seed/funny/80/80",
//       title: "Was FunnyMike arrested? Viral rumor accuses YouTuber of new murder",
//     },
//     {
//       image: "https://picsum.photos/seed/twitch/80/80",
//       title: "Twitch streamer PlaqueBoyMax opens up about lust addiction and quitting",
//     },
//     {
//       image: "https://picsum.photos/seed/shooter/80/80",
//       title: "Alex Pretti shooter Jesus Ochoa is a gun enthusiast with 25 rifles, pistols and ...",
//     },
//     {
//       image: "https://picsum.photos/seed/twitch/80/80",
//       title: "Twitch streamer PlaqueBoyMax opens up about lust addiction and quitting",
//     },
//   ],
// };

// export function WorldSection() {
//   return (
//     <section className="mt-5 rounded-lg max-w-[980px] mx-auto px-4 sm:px-6">
//       {/* TITLE */}
//       <div className="flex items-center gap-2 mb-4">
//         <h2 className="text-m font-bold tracking-wide">World News</h2>
//         <ChevronRight className="w-4 h-4" />
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="grid grid-cols-12 gap-4">
//         {/* LEFT SIDE (FEATURED + MIDDLE + BOTTOM CARDS) */}
//         <div className="col-span-12 md:col-span-6">
//           {/* TOP ROW: FEATURED + MIDDLE */}
//           <div className="grid grid-cols-12 gap-4">
//             {/* FEATURED */}
//             <div className="col-span-7 relative rounded-lg overflow-hidden h-[200px] sm:h-[220px] md:h-[250px]">
//               <Image
//                 src={worldSectionData.lead.image}
//                 alt={worldSectionData.lead.title}
//                 width={700}
//                 height={420}
//                 className="w-full"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//               <p className="absolute bottom-3 left-3 right-3 text-white text-sm sm:text-base font-semibold">
//                 {worldSectionData.lead.title}
//               </p>
//             </div>

//             {/* MIDDLE LIST */}
//             <div className="col-span-5">
//               <ul className="space-y-3 text-sm">
//                 {worldSectionData.middleList.map((text, i) => (
//                   <li
//                     key={i}
//                     className={
//                       i !== worldSectionData.middleList.length - 1
//                         ? "border-b pb-2 truncate"
//                         : "truncate"
//                     }
//                   >
//                     <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
//                       {text}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* BOTTOM ROW: FULL WIDTH CARDS UNDER LEFT SIDE */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm text-gray-700">
//             {worldSectionData.bottomCards.map((text, i) => (
//               <div
//                 key={i}
//                 className="pr-3"
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE (4 COLS) */}
//         <aside className="col-span-12 md:col-span-4 space-y-4 mt-4 md:mt-0">
//           {worldSectionData.rightStories.map((item, i) => (
//             <div key={i} className="flex gap-3">
//               <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-sm leading-snug">{item.title}</p>
//             </div>
//           ))}
//         </aside>
//       </div>
//     </section>
//   );
// }

import { ChevronRight } from "lucide-react";
import Image from "next/image";

const worldSectionData = {
  lead: {
    title: "Qatar's 10-year residency dream: A new golden opportunity for entrepreneurs and CEOs",
    image: "https://picsum.photos/seed/worldfeat/600/400",
  },
  middleList: [
    "Kennedy Center to shut for 2 years: Trump orders ...",
    "‘We know about your mom’: Zohran Mamdani fac...",
    "‘We’ll find out whether Khamenei was right’: Trump ...",
    "Epstein row: Elon Musk denies links; rejects ‘creep...'",
    "Nepal-born police officer Pradeep Tamang killed r...",
  ],
  bottomCards: [
    "Rare cherry blossoms bloom in Philippines goes viral: Baguio...",
    "‘You’re 100% lying’: Internet explodes as Bryan Johnson...",
    "‘Long lost cave in New Zealand’ reveals million-year-old...",
    "Ramadan 2026: Will the month of fasting begin from Wed, Feb...",
  ],
  rightStories: [
    {
      image: "https://picsum.photos/seed/funny/80/80",
      title: "Was FunnyMike arrested? Viral rumor accuses YouTuber of new murder",
    },
    {
      image: "https://picsum.photos/seed/twitch/80/80",
      title: "Twitch streamer PlaqueBoyMax opens up about lust addiction and quitting",
    },
    {
      image: "https://picsum.photos/seed/shooter/80/80",
      title: "Alex Pretti shooter Jesus Ochoa is a gun enthusiast with 25 rifles, pistols and ...",
    },
    {
      image: "https://picsum.photos/seed/twitch2/80/80",
      title: "Twitch streamer PlaqueBoyMax opens up about lust addiction and quitting",
    },
  ],
};

export function WorldSection() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px] mx-auto">
      {/* TITLE */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">World News</h2>
        <ChevronRight className="w-4 h-4" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT SIDE (FEATURED + MIDDLE + BOTTOM CARDS) */}
        <div className="col-span-12 lg:col-span-8">
          {/* TOP ROW: FEATURED + MIDDLE */}
          <div className="grid grid-cols-12 gap-4">
            {/* FEATURED */}
            <div className="col-span-12 md:col-span-7 relative rounded-lg overflow-hidden h-[200px] sm:h-[220px] md:h-[250px]">
              <Image
                src={worldSectionData.lead.image}
                alt={worldSectionData.lead.title}
                width={700}
                height={420}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm sm:text-base font-semibold">
                {worldSectionData.lead.title}
              </p>
            </div>

            {/* MIDDLE LIST */}
            <div className="col-span-12 md:col-span-5">
              <ul className="space-y-2 sm:space-y-3 text-sm">
                {worldSectionData.middleList.map((text, i) => (
                  <li
                    key={i}
                    className={`${
                      i !== worldSectionData.middleList.length - 1
                        ? "border-b pb-2"
                        : ""
                    } truncate`}
                  >
                    <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM ROW: FULL WIDTH CARDS UNDER LEFT SIDE */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm text-gray-700">
            {worldSectionData.bottomCards.map((text, i) => (
              <div key={i} className="pr-2 sm:pr-3">
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (STORIES) */}
        <aside className="col-span-12 lg:col-span-4 space-y-4 mt-4 lg:mt-0">
          {worldSectionData.rightStories.map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm leading-snug">{item.title}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
