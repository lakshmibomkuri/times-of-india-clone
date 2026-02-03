// import Image from "next/image";
// import { ChevronRight } from "lucide-react";

// const budgetHeadlines = [
//   "History of India's Union Budgets - Some Budgets t...",
//   "Budget 2026: Education experts urge government...",
//   "Budget 2026 for taxpayers: Five fixes that ma...",
//   "Budget 2026: Tata Motors flags pressure on entry-...",
//   "Budget 2026: MAIT seeks customs duty cuts on k...",
// ];

// const budgetNews = [
//   {
//     image: "https://picsum.photos/seed/budget1/150/100",
//     title: "Budget 2026 for real estate: Luxury housing soars,...",
//   },
//   {
//     image: "https://picsum.photos/seed/budget2/150/100",
//     title: "Budget 2026 income tax: What middle class, salaried...",
//   },
//   {
//     image: "https://picsum.photos/seed/budget3/150/100",
//     title: "Union Budget 2026 Aviation Focus: Experts urge...",
//   },
//   {
//     image: "https://picsum.photos/seed/budget4/150/100",
//     title: "Budget 2026: Simpler tax laws may lift FDI flows; experts flag...",
//   },
// ];

// export function BudgetSection() {
//   return (
//     <section className="py-6 border-t border-dashed border-gray-300">
//       <div className="max-w-[980px] mx-auto px-0">
//         <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
//           Budget 2026 <ChevronRight className="w-5 h-5" />
//         </h2>

//         <div className="grid grid-cols-[1fr_300px] gap-8">
//           {/* Main Content */}
//           <div>
//             <div className="grid grid-cols-[280px_1fr] gap-6">
//               {/* Featured Image */}
//               <div className="relative aspect-[4/3] rounded overflow-hidden group cursor-pointer">
//                 <Image
//                   src="https://picsum.photos/seed/budgetfeat/280/200"
//                   alt="Budget 2026"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <h3 className="text-white text-sm font-medium">
//                     Budget 2026: Why standard deduction should be hiked under the new income tax regime - explained
//                   </h3>
//                 </div>
//               </div>

//               {/* Headlines List */}
//               <div className="space-y-3">
//                 {budgetHeadlines.map((headline, idx) => (
//                   <div key={idx} className="flex items-start gap-2 group cursor-pointer">
//                     <span className="text-gray-400 text-xs mt-1">○</span>
//                     <p className="text-sm text-gray-700 group-hover:text-red-600 line-clamp-1">
//                       {headline}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Budget News Cards */}
//             <div className="grid grid-cols-4 gap-4 mt-6">
//               {budgetNews.map((news, idx) => (
//                 <div key={idx} className="group cursor-pointer">
//                   <h3 className="text-xs text-gray-800 group-hover:text-red-600 line-clamp-3">
//                     {news.title}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Advertisement */}
//           <div>
//             <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
//             <div className="bg-gray-100 rounded-lg p-4 text-center">
//               <div className="text-orange-500 font-bold text-2xl mb-2">Optum</div>
//               <p className="text-blue-600 font-semibold mb-2">Now hiring for technology roles</p>
//               <button className="bg-teal-600 text-white px-4 py-2 rounded text-sm">Apply today</button>
//               <div className="mt-4">
//                 <Image
//                   src="https://picsum.photos/seed/ad1/200/150"
//                   alt="Advertisement"
//                   width={200}
//                   height={150}
//                   className="mx-auto rounded"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const budgetHeadlines = [
  "History of India's Union Budgets - Some Budgets t...",
  "Budget 2026: Education experts urge government...",
  "Budget 2026 for taxpayers: Five fixes that ma...",
  "Budget 2026: Tata Motors flags pressure on entry-...",
  "Budget 2026: MAIT seeks customs duty cuts on k...",
];

const budgetNews = [
  {
    image: "https://picsum.photos/seed/budget1/150/100",
    title: "Budget 2026 for real estate: Luxury housing soars,...",
  },
  {
    image: "https://picsum.photos/seed/budget2/150/100",
    title: "Budget 2026 income tax: What middle class, salaried...",
  },
  {
    image: "https://picsum.photos/seed/budget3/150/100",
    title: "Union Budget 2026 Aviation Focus: Experts urge...",
  },
  {
    image: "https://picsum.photos/seed/budget4/150/100",
    title: "Budget 2026: Simpler tax laws may lift FDI flows; experts flag...",
  },
];

export function BudgetSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Budget 2026 <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Main Grid: 1 column on mobile/tablet, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Left: Main Content */}
          <div>
            {/* Featured + Headlines */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
              {/* Featured Image */}
              <div className="relative aspect-[4/3] rounded overflow-hidden group cursor-pointer">
                <Image
                  src="https://picsum.photos/seed/budgetfeat/280/200"
                  alt="Budget 2026"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-medium">
                    Budget 2026: Why standard deduction should be hiked under the new income tax regime - explained
                  </h3>
                </div>
              </div>

              {/* Headlines List */}
              <div className="space-y-3 mt-4 md:mt-0">
                {budgetHeadlines.map((headline, idx) => (
                  <div key={idx} className="flex items-start gap-2 group cursor-pointer">
                    <span className="text-gray-400 text-xs mt-1">○</span>
                    <p className="text-sm text-gray-700 group-hover:text-red-600 line-clamp-1">
                      {headline}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget News Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {budgetNews.map((news, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <h3 className="text-xs text-gray-800 group-hover:text-red-600 line-clamp-3">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Advertisement */}
          <div>
            <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="text-orange-500 font-bold text-2xl mb-2">Optum</div>
              <p className="text-blue-600 font-semibold mb-2">Now hiring for technology roles</p>
              <button className="bg-teal-600 text-white px-4 py-2 rounded text-sm">Apply today</button>
              <div className="mt-4">
                <Image
                  src="https://picsum.photos/seed/ad1/200/150"
                  alt="Advertisement"
                  width={200}
                  height={150}
                  className="mx-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
