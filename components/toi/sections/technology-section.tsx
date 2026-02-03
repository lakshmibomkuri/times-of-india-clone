// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// export function TechnologySection() {
//   const tabs = ["News & Reviews", "Mobiles & Tabs", "Laptops & PC", "Tech Tips", "Tech News", "Gaming"];
//   const news = [
//     "Sony is selling its TV and home entertainment divi...",
//     "Quote of the day by Elon Musk: \"Really pay attenti...",
//     "Samsung Galaxy S26 Ultra: Check expected launc...",
//     "Chinese Tech Phaseout Proposal: EU set to bar Hu...",
//     "Anthropic CEO Dario Amodei warns US again: Cali...",
//   ];
//   const bottomNews = [
//     { title: "Hack of the day: How to get doorstop banking for seniors...", image: "https://picsum.photos/seed/tech1/100/70" },
//     { title: "'2026 is the new 2016' Instagram trend: Why this...", image: "https://picsum.photos/seed/tech2/100/70" },
//     { title: "Amazon Fire TV Stick 4K Select Review: 4K quality content on a...", image: "https://picsum.photos/seed/tech3/100/70" },
//     { title: "OpenAI Ad Revenue Projections: Analysts see $25B by 2030...", image: "https://picsum.photos/seed/tech4/100/70" },
//   ];
//   const mobiles = [
//     { name: "Infinix Note 50s 6GB RAM", price: "17,999", ram: "6 GB", storage: "128 GB", battery: "5000 mAh", image: "https://picsum.photos/seed/mob1/80/120" },
//     { name: "Xiaomi Redmi A4 6GB RAM 128 GB 8 GB", price: "9,799", ram: "6 GB", storage: "128 GB", battery: "5160 mAh", image: "https://picsum.photos/seed/mob2/80/120" },
//     { name: "Tecno Spark 30C 128GB 128 GB 4 GB", price: "10,499", ram: "4 GB", storage: "128 GB", battery: "5000 mAh", image: "https://picsum.photos/seed/mob3/80/120" },
//   ];
//   const comparison = [
//     { name1: "Apple iPhone 13", name2: "Apple iPhone 14", image1: "https://picsum.photos/seed/cmp1/60/80", image2: "https://picsum.photos/seed/cmp2/60/80" },
//     { name1: "Motorola Edge 30 Ultra 5G", name2: "OnePlus Nord CE 3 Lite 5G", image1: "https://picsum.photos/seed/cmp3/60/80", image2: "https://picsum.photos/seed/cmp4/60/80" },
//   ];

//   return (
//     <section className="border-t border-dashed border-gray-300 py-4">
//       <div className="flex items-center justify-between mb-3">
//         <h2 className="text-[15px] font-bold text-gray-900 flex items-center gap-0.5">
//           Technology <ChevronRight className="w-4 h-4" />
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
//         {/* Left - Featured + News */}
//         <div className="w-[55%]">
//           <div className="flex gap-3">
//             {/* Netflix Feature */}
//             <div className="w-[180px] flex-shrink-0">
//               <div className="relative aspect-[3/4] overflow-hidden bg-black">
//                 <Image src="https://picsum.photos/seed/netflix/180/240" alt="Netflix" fill className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-2">
//                   <span className="text-red-600 text-lg font-bold">NETFLIX</span>
//                   <span className="text-white text-[10px] mt-1 leading-tight">Netflix to revamp its app to boost daily engagement; Takes on TikTok, Instagram and YouTube</span>
//                 </div>
//               </div>
//             </div>

//             {/* News List */}
//             <div className="flex-1">
//               <ul className="space-y-2">
//                 {news.map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-1.5">
//                     <span className="text-gray-400 text-[10px]">•</span>
//                     <Link href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-tight">{item}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Bottom News with Images */}
//           <div className="grid grid-cols-4 gap-3 mt-4 pt-3 border-t border-gray-100">
//             {bottomNews.map((item, idx) => (
//               <div key={idx} className="group cursor-pointer">
//                 <div className="relative aspect-[4/3] mb-1.5 overflow-hidden">
//                   <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
//                 </div>
//                 <Link href="#" className="text-[10px] text-gray-700 group-hover:text-red-600 leading-tight line-clamp-2 block">{item.title}</Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right - Latest Mobiles */}
//         <div className="w-[45%]">
//           <h3 className="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
//             Latest Mobiles <ChevronRight className="w-4 h-4" />
//           </h3>
//           <div className="space-y-3">
//             {mobiles.map((phone, idx) => (
//               <div key={idx} className="flex gap-3 p-2 border border-gray-100 rounded">
//                 <div className="relative w-[50px] h-[70px] flex-shrink-0">
//                   <Image src={phone.image || "/placeholder.svg"} alt={phone.name} fill className="object-contain" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="text-[11px] font-medium text-gray-800 mb-1">{phone.name}</h4>
//                   <p className="text-[13px] font-bold text-gray-900 mb-1">Rs. {phone.price}</p>
//                   <div className="flex gap-4 text-[9px] text-gray-500">
//                     <div><span className="block text-gray-400">RAM</span>{phone.ram}</div>
//                     <div><span className="block text-gray-400">STORAGE</span>{phone.storage}</div>
//                     <div><span className="block text-gray-400">BATTERY</span>{phone.battery}</div>
//                   </div>
//                   <Link href="#" className="text-[10px] text-blue-600 hover:underline mt-1 block">See Full Specs &gt;</Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Comparison Section */}
//       <div className="mt-4 pt-3 border-t border-gray-100">
//         <h3 className="text-[13px] font-bold text-gray-900 mb-3 flex items-center gap-0.5">
//           Comparison <ChevronRight className="w-4 h-4" />
//         </h3>
//         <div className="flex items-center gap-4">
//           {comparison.map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 p-2 border border-gray-200 rounded">
//               <div className="relative w-[40px] h-[55px]">
//                 <Image src={item.image1 || "/placeholder.svg"} alt={item.name1} fill className="object-contain" />
//               </div>
//               <span className="text-[9px] text-gray-400">VS</span>
//               <div className="relative w-[40px] h-[55px]">
//                 <Image src={item.image2 || "/placeholder.svg"} alt={item.name2} fill className="object-contain" />
//               </div>
//               <div className="ml-2">
//                 <p className="text-[10px] text-gray-700">{item.name1}</p>
//                 <p className="text-[10px] text-gray-700">{item.name2}</p>
//               </div>
//             </div>
//           ))}
//           <div className="flex gap-1 ml-auto">
//             <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
//               <ChevronLeft className="w-4 h-4" />
//             </button>
//             <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
//               <ChevronRight className="w-4 h-4" />
//             </button>
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

export function TechnologySection() {
  const tabs = [
    "News & Reviews",
    "Mobiles & Tabs",
    "Laptops & PC",
    "Tech Tips",
    "Tech News",
    "Gaming",
  ];

  const newsBullets = [
    "How to delete a photo or video from Facebook St…",
    "How to avoid phishing scam on Instagram: A com…",
    "20 generative AI tools in 2026 powering writing, c…",
    "How to silence unknown callers on WhatsApp",
    "Ever wondered what is the full form of COMPUTER…",
  ];

  const bottomTexts = [
    "How to track websites sharing data with Facebook and…",
    "5 easy ways to customise Google Maps for everyday…",
    "How to turn multiple Live Photos into a video on iPhone",
    "How to block and unblock someone on Instagram",
  ];

  const comparison = [
    {
      name1: "Apple iPhone 13",
      name2: "Apple iPhone 14",
      image1: "https://picsum.photos/seed/cmp1/60/80",
      image2: "https://picsum.photos/seed/cmp2/60/80",
    },
    {
      name1: "Motorola Edge 30 Ultra 5G",
      name2: "OnePlus Nord CE 3 Lite 5G",
      image1: "https://picsum.photos/seed/cmp3/60/80",
      image2: "https://picsum.photos/seed/cmp4/60/80",
    },
  ];

  const voteGadgets = [
    {
      name: "Apple iPhone 17 Pro Max",
      image: "https://picsum.photos/seed/gad1/40/40",
    },
    {
      name: "Google Pixel 10 Pro XL",
      image: "https://picsum.photos/seed/gad2/40/40",
    },
    {
      name: "Oppo Find X9 Pro",
      image: "https://picsum.photos/seed/gad3/40/40",
    },
    {
      name: "Samsung Galaxy S25 Ultra",
      image: "https://picsum.photos/seed/gad4/40/40",
    },
  ];

  return (
    <section className="max-w-[980px] mx-auto border-t border-dashed mt-5">
      {/* Header: Technology heading left + tabs right */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 gap-3 sm:gap-0">
        <h2 className="text-[15px] font-bold text-gray-900 flex items-center gap-1">
          Technology <ChevronRight className="w-4 h-4" />
        </h2>

        <div className="flex flex-wrap gap-3 sm:gap-6 text-[11px] font-semibold">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`pb-[2px] border-b-2 ${
                i === 3
                  ? "text-red-600 border-red-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main content: flex row on XL, column on smaller */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Top: Feature image + bullets */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Feature Image */}
            <div className="relative w-full md:w-[320px] h-[200px] rounded overflow-hidden flex-shrink-0">
              <Image
                src="https://picsum.photos/seed/elon/700/463"
                alt="Pin direct messages on Twitter"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-[18px] leading-tight max-w-full md:max-w-[300px]">
                  Here's how to pin direct messages on Twitter
                </h3>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex-1 text-[13px] text-gray-900 border-b border-gray-200 pb-5 mb-5">
              {newsBullets.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 border-b border-dotted border-gray-300 last:border-0 py-2"
                >
                  <span className="text-gray-400 mt-1">•</span>
                  <Link
                    href="#"
                    className="hover:text-red-600 line-clamp-1"
                    title={item.replace(/\.\.\.$/, "")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom short text blocks */}
          <div className="flex flex-col sm:flex-row gap-6 text-[13px] text-gray-900 mb-6">
            {bottomTexts.map((text, i) => (
              <div
                key={i}
                className={`flex-1 min-w-[150px] ${
                  i !== bottomTexts.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-gray-300 pr-0 sm:pr-5 pb-2 sm:pb-0"
                    : ""
                }`}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Comparison Section */}
          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-5 flex items-center gap-1">
              Comparison <ChevronRight className="w-4 h-4" />
            </h3>

            <div className="flex flex-wrap gap-6">
              {comparison.map((pair, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-md p-3 w-full sm:w-[280px]"
                >
                  <div className="relative w-[60px] h-[80px]">
                    <Image
                      src={pair.image1}
                      alt={pair.name1}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="bg-gray-100 text-gray-400 text-[10px] rounded-full w-6 h-6 flex items-center justify-center select-none border border-gray-300">
                    VS
                  </span>
                  <div className="relative w-[60px] h-[80px]">
                    <Image
                      src={pair.image2}
                      alt={pair.name2}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-[12px] text-gray-700">{pair.name1}</p>
                    <p className="text-[12px] text-gray-700">{pair.name2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Vote For Gadgets */}
        <aside className="w-full xl:w-[300px] flex-shrink-0 mt-6 xl:mt-0">
          <div className="bg-white rounded-md shadow p-6">
            <h3 className="font-bold underline text-[16px] text-gray-900 mb-3">
              Vote For Gadgets Now Awards
            </h3>
            <p className="text-red-600 font-semibold text-[14px] mb-6">
              Best Smartphone Of The Year
            </p>

            <ul className="space-y-5">
              {voteGadgets.map(({ name, image }, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:shadow-md"
                >
                  <div className="relative w-[50px] h-[50px] rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-contain"
                      sizes="50px"
                    />
                  </div>
                  <span className="text-[15px] font-normal text-gray-900">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-bold text-center mt-8 text-[14px] cursor-default">
              Tap on a Gadget to Vote
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
