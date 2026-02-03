import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const indiaBusinessNews = {
  lead: {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    title:
      "Economic Survey 2026: Will India-US trade deal be sealed this year? What the document says",
  },
  middleList: [
    "How rupee became a victim of geopolitics & a strategic power...",
    "Paradox of 2025: India’s strongest performance in decades has...",
    "‘We failed our customers’: Why IndiGo CEO says…",
    "Budget session: PM Modi says 2026 India...",
  ],
  bottomCards: [
    {
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80",
      title: "India–EU FTA: A calculated leap beyond comfort zones",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
      title: "’India talent will play a key role in designing next-gen...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624365169364-0640dd10e180?auto=format&fit=crop&w=1600&q=80",
      title: "Gold, silver price prediction today: Will gold cross Rs 1.85...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616536369008-268db5b2a5f8?auto=format&fit=crop&w=1600&q=80",
      title: "Silver price breaches record high! White metal crosses Rs 4...",
    },
  ],
};

const calculators = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-teal-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3v5a3 3 0 006 0v-5c0-1.657-1.343-3-3-3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2" />
      </svg>
    ),
    title: "Mutual Fund Calculator",
    description:
      "A Mutual Fund Calculator helps estimate the future value of investments",
    ctaText: "Calculate Now",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: "NPS Calculator",
    description:
      "Calculate your expected National Pension Scheme returns and plan retirement.",
    ctaText: "Calculate Now",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.343-3 3v5a3 3 0 006 0v-5c0-1.657-1.343-3-3-3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2" />
      </svg>
    ),
    title: "Fixed Deposit Calculator",
    description: "Calculate interest earnings on your fixed deposits easily.",
    ctaText: "Calculate Now",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-orange-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h12" />
      </svg>
    ),
    title: "FPP Calculator",
    description: "Estimate future payments with our Financial Planning calculator.",
    ctaText: "Calculate Now",
  },
];

function CalculatorCarousel() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.clientWidth * index,
      behavior: "smooth",
    });
    setActive(index);
  };

  return (
    <div className="h-full rounded-xl bg-white">
      <h3 className="mb-3 text-base font-semibold">Financial Calculators</h3>

      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_60%)]" />

        <div
          ref={containerRef}
          className="relative flex snap-x snap-mandatory overflow-hidden"
        >
          {calculators.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 snap-center px-6 py-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-10 w-10 text-teal-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18M7 7h10M7 12h10M7 17h10"
                  />
                </svg>
              </div>

              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-gray-600">
                {item.description}
              </p>

              <button className="mt-6 rounded-md border border-red-500 px-6 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                Calculate Now
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4">
          <button onClick={() => goTo(Math.max(active - 1, 0))}>
            <ChevronLeft className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>

          <div className="flex gap-2">
            {calculators.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-6 rounded-full ${
                  i === active ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button onClick={() => goTo(Math.min(active + 1, calculators.length - 1))}>
            <ChevronRight className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
  
const tags = [
    "Maharashtra Bank Closed",
    "Budget 2026",
    "Economic Survey 2026",
    "Ajit Pawar",
    "India–EU FTA Deal",
  ];
export default function IndiaBusinessNewsSection() {
  return (
    <>
    <section className="mt-5 rounded-lg w-full">
      {/* TITLE */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">India Business News</h2>
        <ChevronRight className="w-4 h-4" />
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT SIDE */}
        <div className="lg:col-span-8">
          {/* TOP ROW: FEATURED + MIDDLE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* FEATURED */}
            <div className="md:col-span-7 relative rounded-lg overflow-hidden h-[200px] sm:h-[250px] cursor-pointer group">
              <Image
                src={indiaBusinessNews.lead.image}
                alt={indiaBusinessNews.lead.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 41vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow-lg">
                {indiaBusinessNews.lead.title}
              </p>
            </div>

            {/* MIDDLE LIST */}
            <nav className="md:col-span-5 flex flex-col justify-between">
              <ul className="divide-y divide-dotted divide-gray-300 text-sm text-gray-800 space-y-2">
                {indiaBusinessNews.middleList.map((text, i) => (
                  <li
                    key={i}
                    className="py-2 hover:text-red-600 cursor-pointer relative"
                  >
                    {text}
                    {i === indiaBusinessNews.middleList.length - 1 && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-red-600">
                        <ChevronRight size={18} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* BOTTOM ROW: 4 CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4">
            {indiaBusinessNews.bottomCards.map((card, i) => (
              <div key={i} className="cursor-pointer">
                <div className="relative w-full h-[80px] sm:h-[100px] rounded overflow-hidden mb-2">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12vw"
                    priority={i === 0}
                  />
                </div>
                <p className="text-xs sm:text-sm leading-snug">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Financial calculators carousel */}
        <aside className="lg:col-span-4 h-full mt-6 lg:mt-0">
          <CalculatorCarousel />
        </aside>
      </div>
      {/* Tags/chips row */}
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs font-medium">
                      <span className="text-gray-500">In Focus</span>
                      {tags.map((tag, i) => (
                          <span
                              key={i}
                              className="bg-gray-100 rounded-full px-2 sm:px-3 py-1 whitespace-nowrap cursor-pointer hover:bg-gray-200 text-xs"
                          >
                              {tag}
                          </span>
                      ))}
                  </div>

    </section>
    <section className="w-full px-4 mt-6">
    <div className="relative rounded-lg bg-red-700 text-white flex flex-col sm:flex-row items-center justify-between overflow-hidden p-4 sm:p-6 md:p-7 gap-4 shadow-lg max-w-4xl mx-auto">
      {/* Left part with helmet icon and text */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <div className="bg-white rounded-full p-2 sm:p-3">
            {/* Simple helmet icon - stylized SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-12 sm:w-12 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 3v4m4 9v1a3 3 0 01-6 0v-1m8-4a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <span className="mt-2 font-bold text-sm sm:text-lg leading-none text-yellow-300">जरा बच के</span>
        </div>
      </div>

      {/* Center Text */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-yellow-400 font-extrabold text-lg sm:text-xl md:text-2xl leading-snug">
          राष्ट्रीय सड़क सुरक्षा माह
        </h2>
        <p className="mt-1 text-yellow-200 text-xs sm:text-sm md:text-base">
          (1 जनवरी से 31 जनवरी, 2026 तक)
        </p>
        <p className="mt-2 font-semibold text-yellow-300 text-sm sm:text-base md:text-lg">
          हेलमेट छोड़ा स्टाइल में, यमराज आएंगे स्माइल में
        </p>
      </div>

      {/* Right side biker image (simple stylized) */}
      <div className="hidden sm:flex items-center">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth={2}
            className="text-yellow-300"
          >
            {/* Biker and bike simplified illustration */}
            <circle cx="16" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="yellow" />
            <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="yellow" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 48 L24 32 L40 32 L48 48"
              stroke="currentColor"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 32 L28 20 L36 20 L40 32"
              stroke="currentColor"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M36 20 L32 16"
              stroke="currentColor"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M32 16 L28 12"
              stroke="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}


// import Image from "next/image";
// import { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// /* ================= LEFT DATA (UNCHANGED) ================= */

// const indiaBusinessNews = {
//   lead: {
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
//     title:
//       "Economic Survey 2026: Will India-US trade deal be sealed this year? What the document says",
//   },
//   middleList: [
//     "How rupee became a victim of geopolitics & a strategic power...",
//     "Paradox of 2025: India’s strongest performance in decades has...",
//     "‘We failed our customers’: Why IndiGo CEO says…",
//     "Budget session: PM Modi says 2026 India...",
//   ],
//   bottomCards: [
//     {
//       image:
//         "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80",
//       title: "India–EU FTA: A calculated leap beyond comfort zones",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
//       title: "’India talent will play a key role in designing next-gen...",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1624365169364-0640dd10e180?auto=format&fit=crop&w=1600&q=80",
//       title: "Gold, silver price prediction today: Will gold cross Rs 1.85...",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1616536369008-268db5b2a5f8?auto=format&fit=crop&w=1600&q=80",
//       title: "Silver price breaches record high! White metal crosses Rs 4...",
//     },
//   ],
// };

// /* ================= RIGHT CALCULATOR (FIXED) ================= */

// const calculators = [
//   {
//     title: "EMI Calculator",
//     description: "Determine the monthly installment amount for a loan",
//   },
//   {
//     title: "Mutual Fund Calculator",
//     description: "Estimate the future value of investments",
//   },
//   {
//     title: "FD Calculator",
//     description: "Calculate interest earnings on fixed deposits",
//   },
// ];

// function CalculatorCarousel() {
//   const [active, setActive] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const goTo = (index: number) => {
//     if (!containerRef.current) return;
//     containerRef.current.scrollTo({
//       left: containerRef.current.clientWidth * index,
//       behavior: "smooth",
//     });
//     setActive(index);
//   };

//   return (
//     <div className="h-full rounded-xl bg-white p-4">
//       <h3 className="mb-3 text-base font-semibold">Financial Calculators</h3>

//       <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-50 to-teal-100">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_60%)]" />

//         <div
//           ref={containerRef}
//           className="relative flex snap-x snap-mandatory overflow-hidden"
//         >
//           {calculators.map((item, i) => (
//             <div
//               key={i}
//               className="w-full flex-shrink-0 snap-center px-6 py-10 text-center"
//             >
//               <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   className="h-10 w-10 text-teal-600"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 3v18M7 7h10M7 12h10M7 17h10"
//                   />
//                 </svg>
//               </div>

//               <h4 className="text-lg font-semibold">{item.title}</h4>
//               <p className="mt-2 text-sm text-gray-600">
//                 {item.description}
//               </p>

//               <button className="mt-6 rounded-md border border-red-500 px-6 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
//                 Calculate Now
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4">
//           <button onClick={() => goTo(Math.max(active - 1, 0))}>
//             <ChevronLeft className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//           </button>

//           <div className="flex gap-2">
//             {calculators.map((_, i) => (
//               <span
//                 key={i}
//                 className={`h-2 w-6 rounded-full ${
//                   i === active ? "bg-gray-900" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>

//           <button onClick={() => goTo(Math.min(active + 1, calculators.length - 1))}>
//             <ChevronRight className="h-5 w-5 text-gray-400 hover:text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= PAGE ================= */

// export default function IndiaBusinessNewsSection() {
//   return (
//     <section className="mt-5 max-w-[980px]">
//       <div className="flex items-center gap-2 mb-4">
//         <h2 className="text-sm font-bold">India Business News</h2>
//         <ChevronRight className="h-4 w-4" />
//       </div>

//       <div className="grid grid-cols-12 gap-4">
//         {/* LEFT SIDE — UNCHANGED */}
//         <div className="col-span-12 md:col-span-8">
//           {/* your left content remains exactly the same */}
//         </div>

//         {/* RIGHT SIDE — FIXED */}
//         <aside className="col-span-12 md:col-span-4">
//           <CalculatorCarousel />
//         </aside>
//       </div>
//     </section>
//   );
// }
