// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// // 6-column grid matching uploaded image exactly
// export function MoreSectionsGrid() {
//   const row1 = [
//     {
//       title: "Blogs",
//       items: [
//         { title: "MBZ in Delhi, Turks at our gates", image: "https://picsum.photos/seed/blog1/100/70" },
//         { title: "In Modi's BJP, what exactly will Nabin do?" },
//         { title: "Time is not running out. It is moving through us" },
//         { title: "World of difference" },
//       ],
//     },
//     {
//       title: "NRI",
//       items: [
//         { title: "Indian-American Sally Grimes appointed as CEO of Diageo North America", image: "https://picsum.photos/seed/nri1/100/70" },
//         { title: "Indian diaspora can build bridges between various countries an..." },
//         { title: "'We are building a stronger pipeline of students from India'" },
//         { title: "Meet Annu Khot, an Indian woman who runs a cannabis..." },
//       ],
//     },
//     {
//       title: "Women",
//       items: [
//         { title: "Today's Daily Horoscope For All 12 Zodiac Signs – January 21, 2026", image: "https://picsum.photos/seed/women1/100/70", label: "DAILY HOROSCOPE" },
//         { title: "Border 2: Did You Know The Real Life Inspiration Behind..." },
//         { title: "Jana Nayagan Release Date Hearing: Still No Luck For Vijay, Madra..." },
//         { title: "O'Romeo: Hussain Ustara's Daughter Objects To Love Angl..." },
//       ],
//     },
//     {
//       title: "Science",
//       items: [
//         { title: "How much did ISRO spend to send Shubhanshu Shukla to the ISS on...", image: "https://picsum.photos/seed/science1/100/70" },
//         { title: "Shubhanshu Shukla's journey: From secret NDA application to..." },
//         { title: "NASA warns! 1200-foot asteroid 2005 VO5 to pass Earth..." },
//         { title: "Trump administration planning to cut over 2145 NASA..." },
//       ],
//     },
//     {
//       title: "Astrology",
//       items: [
//         { title: "Daily Lal Kitab Horoscope, January 21, 2026: Moon in Aquarius demands Lord...", image: "https://picsum.photos/seed/astro1/100/70" },
//         { title: "Horoscope Tomorrow, January 22, 2026: Ganesha Jayanti..." },
//         { title: "Daily Shani Predictions, January 21, 2026: Saturn in..." },
//         { title: "Rahu Horoscope Today (January 21, 2025): The Shadow..." },
//       ],
//     },
//     {
//       title: "Obituaries",
//       items: [
//         { title: "SMT. RITA SRIVASTAVA", image: "https://picsum.photos/seed/obit1/100/70" },
//         { title: "Shree Adya Prashad" },
//         { title: "Late Madan Lal Gupta (Father)" },
//         { title: "SHRI RAJENDRA PAUL GULATI" },
//       ],
//     },
//   ];

//   const row2 = [
//     {
//       title: "Environment",
//       items: [
//         { title: "A wedding invitation to the clouds: Inside India's frog marriages", image: "https://picsum.photos/seed/env1/100/70" },
//         { title: "Chile declares emergency as wildfires kill at least 15" },
//         { title: "NGT issues notice to UP after report on water contamination" },
//         { title: "First global repository of ice cores: How Antarctica scientists..." },
//       ],
//     },
//     {
//       title: "Speaking Tree",
//       items: [
//         { title: "An Exemplary Tale", image: "https://picsum.photos/seed/speak1/100/70" },
//         { title: "A case for being average in a world that worships genius" },
//         { title: "Truth About Liberals: Artist's Instagram monologue sparks..." },
//         { title: "Women In Islam" },
//       ],
//     },
//     {
//       title: "Sunday Times",
//       items: [
//         { title: "Fredrik Logevall interview: Historian urges humility in global leadership; lesson...", image: "https://picsum.photos/seed/sun1/100/70" },
//         { title: "'Delulu' US has to let go of strategic altruism myth" },
//         { title: "Ten years after Rohith Vemula's death, why campus reforms still..." },
//         { title: "Chetan Bhagat column: What our abuse of airport...", hasPlus: true },
//       ],
//     },
//     {
//       title: "Tech Tips",
//       items: [
//         { title: "How to enable WhatsApp IP Protect feature", image: "https://picsum.photos/seed/techtip1/100/70", isGreen: true },
//         { title: "How to pin a conversation in Google Messages: A..." },
//         { title: "How to put a call on hold on iPhone" },
//         { title: "Aadhaar Lock and Unlock feature: What it is and how to use it" },
//       ],
//     },
//     {
//       title: "Good News",
//       items: [
//         { title: "Tribal girl raises the bar, gets Maha govt grant for LLM degree in London", image: "https://picsum.photos/seed/good1/100/70" },
//         { title: "This Chennai boy conquers Palk Strait – and autism" },
//         { title: "Karnataka cabby dies in accident, gives 5 new lease of life" },
//         { title: "5-yr-old Tripura girl donates hair to Maha cancer patient" },
//       ],
//     },
//     {
//       title: "iTimes Espanol",
//       items: [
//         { title: "Polémica internacional tras publicación de Trump con un mapa alterado de...", image: "https://picsum.photos/seed/esp1/100/70" },
//         { title: "Informe revela interés de inteligencia estadounidense en..." },
//         { title: "Choque entre facciones rebeldes en Colombia deja al..." },
//         { title: "¡Feliz cumpleaños a un tipo fantástico!': Mensaje de..." },
//       ],
//     },
//   ];

//   const renderSection = (section: typeof row1[0]) => (
//     <div key={section.title}>
//       <h3 className="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
//         {section.title} <ChevronRight className="w-4 h-4" />
//       </h3>
//       <div className="space-y-2">
//         {section.items.map((item, i) => (
//           <div key={i}>
//             {item.image && i === 0 ? (
//               <div className="mb-2">
//                 <div className="relative w-full aspect-[4/3] mb-1.5 overflow-hidden">
//                   <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
//                   {item.label && (
//                     <div className="absolute top-1 left-1 bg-orange-500 text-white text-[7px] px-1 py-0.5 font-bold uppercase">
//                       {item.label}
//                     </div>
//                   )}
//                 </div>
//                 <Link href="#" className="text-[11px] text-gray-800 hover:text-red-600 leading-tight line-clamp-2 block">
//                   {item.title}
//                 </Link>
//               </div>
//             ) : (
//               <Link href="#" className="text-[11px] text-gray-600 hover:text-red-600 leading-tight block mb-1.5 flex items-start gap-0.5">
//                 <span className="line-clamp-2">{item.title}</span>
//                 {item.hasPlus && <span className="text-red-500 text-[10px] flex-shrink-0">+</span>}
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="border-t border-dashed border-gray-300 py-4">
//       <div className="grid grid-cols-6 gap-5">
//         {row1.map(renderSection)}
//       </div>
//       <div className="grid grid-cols-6 gap-5 mt-5 pt-4 border-t border-dashed border-gray-300">
//         {row2.map(renderSection)}
//       </div>
//     </section>
//   );
// }

// export function AutoSection() {
//   return null;
// }

// export function SpeakingTreeSection() {
//   return null;
// }

// export function GoodNewsSection() {
//   return null;
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type SectionItem = {
  title: string;
  image?: string;
  label?: string;
  hasPlus?: boolean;
  isGreen?: boolean;
};

type Section = {
  title: string;
  items: SectionItem[];
};

/** -------------------- DATA -------------------- **/

const row1: Section[] = [
  {
    title: "Blogs",
    items: [
      { title: "MBZ in Delhi, Turks at our gates", image: "https://picsum.photos/seed/blog1/100/70" },
      { title: "In Modi's BJP, what exactly will Nabin do?" },
      { title: "Time is not running out. It is moving through us" },
      { title: "World of difference" },
    ],
  },
  {
    title: "NRI",
    items: [
      { title: "Indian-American Sally Grimes appointed as CEO of Diageo North America", image: "https://picsum.photos/seed/nri1/100/70" },
      { title: "Indian diaspora can build bridges between various countries an..." },
      { title: "'We are building a stronger pipeline of students from India'" },
      { title: "Meet Annu Khot, an Indian woman who runs a cannabis..." },
    ],
  },
  {
    title: "Women",
    items: [
      { title: "Today's Daily Horoscope For All 12 Zodiac Signs – January 21, 2026", image: "https://picsum.photos/seed/women1/100/70", label: "DAILY HOROSCOPE" },
      { title: "Border 2: Did You Know The Real Life Inspiration Behind..." },
      { title: "Jana Nayagan Release Date Hearing: Still No Luck For Vijay, Madra..." },
      { title: "O'Romeo: Hussain Ustara's Daughter Objects To Love Angl..." },
    ],
  },
  {
    title: "Science",
    items: [
      { title: "How much did ISRO spend to send Shubhanshu Shukla to the ISS on...", image: "https://picsum.photos/seed/science1/100/70" },
      { title: "Shubhanshu Shukla's journey: From secret NDA application to..." },
      { title: "NASA warns! 1200-foot asteroid 2005 VO5 to pass Earth..." },
      { title: "Trump administration planning to cut over 2145 NASA..." },
    ],
  },
  {
    title: "Astrology",
    items: [
      { title: "Daily Lal Kitab Horoscope, January 21, 2026: Moon in Aquarius demands Lord...", image: "https://picsum.photos/seed/astro1/100/70" },
      { title: "Horoscope Tomorrow, January 22, 2026: Ganesha Jayanti..." },
      { title: "Daily Shani Predictions, January 21, 2026: Saturn in..." },
      { title: "Rahu Horoscope Today (January 21, 2025): The Shadow..." },
    ],
  },
  {
    title: "Obituaries",
    items: [
      { title: "SMT. RITA SRIVASTAVA", image: "https://picsum.photos/seed/obit1/100/70" },
      { title: "Shree Adya Prashad" },
      { title: "Late Madan Lal Gupta (Father)" },
      { title: "SHRI RAJENDRA PAUL GULATI" },
    ],
  },
];

const row2: Section[] = [
  {
    title: "Environment",
    items: [
      { title: "A wedding invitation to the clouds: Inside India's frog marriages", image: "https://picsum.photos/seed/env1/100/70" },
      { title: "Chile declares emergency as wildfires kill at least 15" },
      { title: "NGT issues notice to UP after report on water contamination" },
      { title: "First global repository of ice cores: How Antarctica scientists..." },
    ],
  },
  {
    title: "Speaking Tree",
    items: [
      { title: "An Exemplary Tale", image: "https://picsum.photos/seed/speak1/100/70" },
      { title: "A case for being average in a world that worships genius" },
      { title: "Truth About Liberals: Artist's Instagram monologue sparks..." },
      { title: "Women In Islam" },
    ],
  },
  {
    title: "Sunday Times",
    items: [
      { title: "Fredrik Logevall interview: Historian urges humility in global leadership; lesson...", image: "https://picsum.photos/seed/sun1/100/70" },
      { title: "'Delulu' US has to let go of strategic altruism myth" },
      { title: "Ten years after Rohith Vemula's death, why campus reforms still..." },
      { title: "Chetan Bhagat column: What our abuse of airport...", hasPlus: true },
    ],
  },
  {
    title: "Tech Tips",
    items: [
      { title: "How to enable WhatsApp IP Protect feature", image: "https://picsum.photos/seed/techtip1/100/70", isGreen: true },
      { title: "How to pin a conversation in Google Messages: A..." },
      { title: "How to put a call on hold on iPhone" },
      { title: "Aadhaar Lock and Unlock feature: What it is and how to use it" },
    ],
  },
  {
    title: "Good News",
    items: [
      { title: "Tribal girl raises the bar, gets Maha govt grant for LLM degree in London", image: "https://picsum.photos/seed/good1/100/70" },
      { title: "This Chennai boy conquers Palk Strait – and autism" },
      { title: "Karnataka cabby dies in accident, gives 5 new lease of life" },
      { title: "5-yr-old Tripura girl donates hair to Maha cancer patient" },
    ],
  },
  {
    title: "iTimes Espanol",
    items: [
      { title: "Polémica internacional tras publicación de Trump con un mapa alterado de...", image: "https://picsum.photos/seed/esp1/100/70" },
      { title: "Informe revela interés de inteligencia estadounidense en..." },
      { title: "Choque entre facciones rebeldes en Colombia deja al..." },
      { title: "¡Feliz cumpleaños a un tipo fantástico!': Mensaje de..." },
    ],
  },
];

/** -------------------- COMPONENT -------------------- **/

export function MoreSectionsGrid() {
  const renderSection = (section: Section) => (
    <div key={section.title}>
      <h3 className="text-[13px] font-bold text-gray-900 mb-2 flex items-center gap-1">
        {section.title} <ChevronRight className="w-4 h-4" />
      </h3>

      <div className="space-y-2">
        {section.items.map((item, i) => (
          <div key={i}>
            {item.image && i === 0 ? (
              <div className="mb-2">
                <div className="relative w-full aspect-[4/3] mb-1.5 overflow-hidden rounded">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  {item.label && (
                    <div className="absolute top-1 left-1 bg-orange-500 text-white text-[7px] px-1 py-0.5 font-bold uppercase">
                      {item.label}
                    </div>
                  )}
                </div>
                <Link
                  href="#"
                  className="text-[11px] text-gray-800 hover:text-red-600 leading-tight line-clamp-2 block"
                >
                  {item.title}
                </Link>
              </div>
            ) : (
              <Link
                href="#"
                className={`text-[11px] leading-tight block mb-1.5 flex items-start gap-0.5 ${
                  item.isGreen ? "text-green-600" : "text-gray-600 hover:text-red-600"
                }`}
              >
                <span className="line-clamp-2">{item.title}</span>
                {item.hasPlus && <span className="text-red-500 text-[10px] flex-shrink-0">+</span>}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="border-t border-dashed border-gray-300 lg:px-0">
      {/* First Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {row1.map(renderSection)}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mt-5 pt-4 border-t border-dashed border-gray-300">
        {row2.map(renderSection)}
      </div>
    </section>
  );
}
