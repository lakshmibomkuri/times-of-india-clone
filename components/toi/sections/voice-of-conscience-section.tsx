// "use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1605637079912-97c3810a11a4",
//     title:
//       "Found in a German soldier’s album, this 1941 photograph titled “The Last Jew in Vinnitsa” captures an Einsatzgruppe D member executing a Ukrainian man.",
//     description:
//       "This chilling image documents the Holocaust in Ukraine, where nearly one million Jews were murdered by Nazi forces, including the German Army and auxiliary groups.",
//     caption: "’The last Jew in Vinnitsa’",
//     year: "1941",
//     published: "Jan 21, 2026",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
//     title: "A satellite’s unlikely ride",
//     description: "The unexpected journey of a satellite into orbit.",
//     caption: "A satellite’s unlikely ride",
//     year: "1981",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
//     title: "When courage spoke louder than orders",
//     description:
//       "Acts of bravery during wartime that changed the course of history.",
//     caption: "Voices of resistance",
//     year: "1943",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
//     title: "The brave souls who stood for justice and freedom.",
//     description: "A testament to courage and resilience.",
//     caption: "Bravery and resilience",
//     year: "1944",
//   },
// ];

// export function VoiceOfConscienceSection() {
//   const [page, setPage] = useState(0);
//   const slidesPerPage = 2; // 2 slides visible at once
//   const totalPages = Math.ceil(slides.length / slidesPerPage);

//   const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
//   const next = () => setPage((p) => (p + 1) % totalPages);

//   return (
//     <section className="py-8 bg-white">
//        <div className="max-w-[980px] mx-auto px-0">
//       <div className="flex items-center gap-2 mb-6 max-w-7xl mx-auto select-none">
//         <h2 className="text-xl font-bold text-gray-900">
//           The Voice Of Conscience
//         </h2>
//         <ChevronRight className="w-5 h-5 text-gray-400" />
//       </div>

//       {/* Carousel */}
//       <div className="relative max-w-7xl mx-auto overflow-hidden">
//         <div
//           className="flex gap-6 transition-transform duration-500"
//           style={{
//             transform: `translateX(-${page * 50}%)`,
//             width: `${(slides.length / slidesPerPage) * 100}%`,
//           }}
//         >
//           {slides.map((slide, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-1/2 flex gap-6 bg-gray-100 p-3 rounded-xl"
//               style={{ minWidth: "20%" }} // Each slide takes 50% of the carousel
//             >
//               {/* Left image - 30% */}
//               <div className="relative flex-[0_0_30%] aspect-[4/3] overflow-hidden">
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>

//               {/* Right content - 70% */}
//               <div className="flex-[0_0_45%] flex flex-col justify-between">
//                 <div className="flex justify-between mb-3 text-xs text-gray-500 font-normal select-none">
//                   <span>{slide.caption}</span>
//                   <span>{slide.year}</span>
//                 </div>
//                 <p className="text-gray-900 text-[15px] leading-relaxed">
//                   {slide.title} {slide.description}
//                 </p>
//                 {slide.published && (
//                   <div className="mt-2 text-xs text-gray-500 select-none">
//                     Published on: {slide.published}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <div className="flex justify-between items-center mt-6">
//           {/* Pagination dots */}
//           <div className="flex gap-2">
//             {Array.from({ length: totalPages }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setPage(i)}
//                 aria-label={`Go to page ${i + 1}`}
//                 className={`h-1 rounded-full transition-all duration-300 focus:outline-none ${
//                   i === page ? "w-8 bg-black" : "w-2 bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Arrows */}
//           <div className="flex gap-4">
//             <button
//               onClick={prev}
//               aria-label="Previous"
//               className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={next}
//               aria-label="Next"
//               className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1605637079912-97c3810a11a4",
    title:
      "Found in a German soldier’s album, this 1941 photograph titled “The Last Jew in Vinnitsa” captures an Einsatzgruppe D member executing a Ukrainian man.",
    description:
      "This chilling image documents the Holocaust in Ukraine, where nearly one million Jews were murdered by Nazi forces, including the German Army and auxiliary groups.",
    caption: "’The last Jew in Vinnitsa’",
    year: "1941",
    published: "Jan 21, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    title: "A satellite’s unlikely ride",
    description: "The unexpected journey of a satellite into orbit.",
    caption: "A satellite’s unlikely ride",
    year: "1981",
  },
  {
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    title: "When courage spoke louder than orders",
    description:
      "Acts of bravery during wartime that changed the course of history.",
    caption: "Voices of resistance",
    year: "1943",
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    title: "The brave souls who stood for justice and freedom.",
    description: "A testament to courage and resilience.",
    caption: "Bravery and resilience",
    year: "1944",
  },
];

export function VoiceOfConscienceSection() {
  const [page, setPage] = useState(0);
  const slidesPerPage = 2; // 2 slides visible at once
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-center gap-2 mb-6 select-none">
          <h2 className="text-xl font-bold text-gray-900">
            The Voice Of Conscience
          </h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${page * 50}%)`,
              width: `${(slides.length / slidesPerPage) * 100}%`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-1/2 gap-4 bg-gray-100 p-3 rounded-xl flex flex-col md:flex-row"
              >
                {/* Left image - full width on mobile, 30% on desktop */}
                <div className="relative w-full md:flex-[0_0_30%] aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Right content - full width on mobile, 70% on desktop */}
                <div className="mt-3 md:mt-0 md:flex-[0_0_65%] flex flex-col justify-between">
                  <div className="flex justify-between mb-3 text-xs text-gray-500 font-normal select-none">
                    <span>{slide.caption}</span>
                    <span>{slide.year}</span>
                  </div>
                  <p className="text-gray-900 text-[15px] leading-relaxed">
                    {slide.title} {slide.description}
                  </p>
                  {slide.published && (
                    <div className="mt-2 text-xs text-gray-500 select-none">
                      Published on: {slide.published}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-6">
            {/* Pagination dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 focus:outline-none ${
                    i === page ? "w-8 bg-black" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
