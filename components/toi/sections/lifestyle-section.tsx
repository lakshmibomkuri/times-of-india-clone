// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// const sections = [
//   {
//     title: "Health+",
//     featured: {
//       image: "https://picsum.photos/seed/health1/280/160",
//       headline: "Twice a cancer survivor, invites her doctor to her 50th wedding anniversary celebration"
//     },
//     items: [
//       "Not baby fat: Extra weight can harm a child's liver, warns...",
//       "UK study shows ctDNA blood test can predict how advance..."
//     ]
//   },
//   {
//     title: "Style",
//     featured: {
//       image: "https://picsum.photos/seed/style1/280/160",
//       headline: "The 13 crore rare watch is Shah Rukh's current favourite"
//     },
//     items: [
//       "German woman in a saree on Bengaluru streets goes viral",
//       "Masaba disables Instagram comments after Kangana's..."
//     ]
//   },
//   {
//     title: "Relationships",
//     featured: {
//       image: "https://picsum.photos/seed/rel1/280/160",
//       headline: "Brooklyn vs The Beckhams: Inside the explosive family feud rocking Britain's most..."
//     },
//     items: [
//       "Watch: Video resurfaces of Brooklyn Beckham...",
//       "Prince Harry's friends were 'good source of leaks': Privacy case..."
//     ]
//   },
//   {
//     title: "Beauty",
//     featured: {
//       image: "https://picsum.photos/seed/beauty1/280/160",
//       headline: "Manikyam Aurangzeb's mom reveals secret behind her beauty transformation"
//     },
//     items: [
//       "From Nagaland to the national beauty conversation: The...",
//       "Why celebrity nutritionist Rujuta Diwekar wants you t..."
//     ]
//   },
//   {
//     title: "Parenting",
//     featured: {
//       image: "https://picsum.photos/seed/parent1/280/160",
//       headline: "Sunita Williams' nicknames are fascinating: Here's what they are and what they mean"
//     },
//     items: [
//       "Curiosity Corner: The Olympic Games began in which...",
//       "Quote of the day for kids: \"Growth begins where comfort ends\""
//     ]
//   },
//   {
//     title: "Food",
//     featured: {
//       image: "https://picsum.photos/seed/food1/280/160",
//       headline: "How to make classic Poha for breakfast at home"
//     },
//     items: [
//       "What is Khapli wheat and why it is so much in the news? Expert...",
//       "How to make Punjabi Lobia Masala for dinner at home"
//     ]
//   },
//   {
//     title: "Travel",
//     featured: {
//       image: "https://picsum.photos/seed/travel1/280/160",
//       headline: "United States launches 'FIFA PASS' to fast-track visas for 2026 World Cup visitors"
//     },
//     items: [
//       "What's the weather today: Will it rain in Delhi? Here's what...",
//       "Russia's Kamchatka is under mounds of snow now. What has..."
//     ]
//   },
//   {
//     title: "Astrology",
//     featured: {
//       image: "https://picsum.photos/seed/astro1/280/160",
//       headline: "Horoscope Tomorrow, January 22, 2026: Ganesha Jayanti Special—'New Beginnings'..."
//     },
//     items: [
//       "Daily Shani Predictions, January 21, 2026: Saturn in...",
//       "Nadi Astrology Daily Horoscope (January 21, 2026): Today's Lif..."
//     ]
//   },
//   {
//     title: "Real Estate",
//     featured: {
//       image: "https://picsum.photos/seed/realestate1/280/160",
//       headline: "Private builder estates vs government development projects: Which is a better opti..."
//     },
//     items: [
//       "Upcoming housing projects in Gurugram 2026: Developers to...",
//       "International Luxury designer launches residential..."
//     ]
//   }
// ];

// const inFocusTags = ["Fake Sweet Potato", "Baby Girl Names", "Anand Mahindra", "Queen Of Arabian Sea", "Snake Eggs", "US Visa"];

// export function LifestyleSection() {
//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto">
//         <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
//           Lifestyle <ChevronRight className="w-5 h-5" />
//         </h2>
        
//         {/* 3x3 Grid */}
//         <div className="grid grid-cols-3 gap-x-6 gap-y-5">
//           {sections.map((section, idx) => (
//             <div key={idx}>
//               <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-1">
//                 {section.title} <ChevronRight className="w-4 h-4" />
//               </h3>
//               <Link href="#" className="block group">
//                 <div className="relative aspect-video rounded overflow-hidden mb-2">
//                   <Image src={section.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
//                     <p className="text-white text-xs font-medium leading-tight">{section.featured.headline}</p>
//                   </div>
//                 </div>
//               </Link>
//               <div className="space-y-1.5">
//                 {section.items.map((item, i) => (
//                   <Link key={i} href="#" className="block text-xs text-gray-700 hover:text-red-600 leading-tight">
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* In Focus Tags */}
//         <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200">
//           <span className="text-xs font-bold text-gray-900">In Focus</span>
//           <div className="flex flex-wrap gap-2">
//             {inFocusTags.map((tag, idx) => (
//               <Link key={idx} href="#" className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full">
//                 {tag}
//               </Link>
//             ))}
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

const sections = [
  {
    title: "Health+",
    featured: {
      image: "https://picsum.photos/seed/health1/280/160",
      headline: "Twice a cancer survivor, invites her doctor to her 50th wedding anniversary celebration"
    },
    items: [
      "Not baby fat: Extra weight can harm a child's liver, warns...",
      "UK study shows ctDNA blood test can predict how advance..."
    ]
  },
  {
    title: "Style",
    featured: {
      image: "https://picsum.photos/seed/style1/280/160",
      headline: "The 13 crore rare watch is Shah Rukh's current favourite"
    },
    items: [
      "German woman in a saree on Bengaluru streets goes viral",
      "Masaba disables Instagram comments after Kangana's..."
    ]
  },
  {
    title: "Relationships",
    featured: {
      image: "https://picsum.photos/seed/rel1/280/160",
      headline: "Brooklyn vs The Beckhams: Inside the explosive family feud rocking Britain's most..."
    },
    items: [
      "Watch: Video resurfaces of Brooklyn Beckham...",
      "Prince Harry's friends were 'good source of leaks': Privacy case..."
    ]
  },
  {
    title: "Beauty",
    featured: {
      image: "https://picsum.photos/seed/beauty1/280/160",
      headline: "Manikyam Aurangzeb's mom reveals secret behind her beauty transformation"
    },
    items: [
      "From Nagaland to the national beauty conversation: The...",
      "Why celebrity nutritionist Rujuta Diwekar wants you t..."
    ]
  },
  {
    title: "Parenting",
    featured: {
      image: "https://picsum.photos/seed/parent1/280/160",
      headline: "Sunita Williams' nicknames are fascinating: Here's what they are and what they mean"
    },
    items: [
      "Curiosity Corner: The Olympic Games began in which...",
      "Quote of the day for kids: \"Growth begins where comfort ends\""
    ]
  },
  {
    title: "Food",
    featured: {
      image: "https://picsum.photos/seed/food1/280/160",
      headline: "How to make classic Poha for breakfast at home"
    },
    items: [
      "What is Khapli wheat and why it is so much in the news? Expert...",
      "How to make Punjabi Lobia Masala for dinner at home"
    ]
  },
  {
    title: "Travel",
    featured: {
      image: "https://picsum.photos/seed/travel1/280/160",
      headline: "United States launches 'FIFA PASS' to fast-track visas for 2026 World Cup visitors"
    },
    items: [
      "What's the weather today: Will it rain in Delhi? Here's what...",
      "Russia's Kamchatka is under mounds of snow now. What has..."
    ]
  },
  {
    title: "Astrology",
    featured: {
      image: "https://picsum.photos/seed/astro1/280/160",
      headline: "Horoscope Tomorrow, January 22, 2026: Ganesha Jayanti Special—'New Beginnings'..."
    },
    items: [
      "Daily Shani Predictions, January 21, 2026: Saturn in...",
      "Nadi Astrology Daily Horoscope (January 21, 2026): Today's Lif..."
    ]
  },
  {
    title: "Real Estate",
    featured: {
      image: "https://picsum.photos/seed/realestate1/280/160",
      headline: "Private builder estates vs government development projects: Which is a better opti..."
    },
    items: [
      "Upcoming housing projects in Gurugram 2026: Developers to...",
      "International Luxury designer launches residential..."
    ]
  }
];

const inFocusTags = ["Fake Sweet Potato", "Baby Girl Names", "Anand Mahindra", "Queen Of Arabian Sea", "Snake Eggs", "US Visa"];

export function LifestyleSection() {
  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-1">
          Lifestyle <ChevronRight className="w-5 h-5" />
        </h2>
        
        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-1">
                {section.title} <ChevronRight className="w-4 h-4" />
              </h3>
              
              {/* Featured Image */}
              <Link href="#" className="block group">
                <div className="relative aspect-video rounded overflow-hidden mb-2">
                  <Image src={section.featured.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <p className="text-white text-xs font-medium leading-tight line-clamp-2">{section.featured.headline}</p>
                  </div>
                </div>
              </Link>

              {/* Items with Border */}
              <div className="rounded p-2 space-y-4 flex justify-between">
                {section.items.map((item, i) => (
                  <Link key={i} href="#" className="block text-xs text-gray-700 hover:text-red-600 leading-tight line-clamp-2">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* In Focus Tags */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-200 flex-wrap">
          <span className="text-xs font-bold text-gray-900">In Focus</span>
          <div className="flex flex-wrap gap-2">
            {inFocusTags.map((tag, idx) => (
              <Link key={idx} href="#" className="text-xs text-gray-600 hover:text-red-600 px-2 py-1 bg-gray-100 rounded-full">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
