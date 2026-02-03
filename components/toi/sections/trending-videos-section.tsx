// "use client";

// import Link from "next/link";

// export function TrendingVideosSection() {
//   const columns = [
//     ["'Stanford Ranks Us Third': Ash...", "Kolkata Headlines Today — Th...", "IOCL Chairman Says India Is R..."],
//     ["Spain Train Tragedy, PM Modi ...", "Lucknow Headlines Today — ...", "Bachchan, Waugh, Maxwell an..."],
//     ["Trump Lawyer Lindsey Halliga...", "Kajol arrives in Kolkata on Jan...", "Chandigarh Headlines Today ..."],
//     ["Ritabhari Chakraborty", "Donald Trump Says He Stopp...", "EAM Jaishankar Calls For Unit..."],
//     ["'Strong Economy No Good Un...", "Timothy Busfield Walks Free; ...", "500% Tariff Threat Over Russi..."],
//     ["Shubha Mudgal performs in K...", "Noida Headlines Today — The...", "'Is It A Crime?': AIMIM Chief O..."],
//   ];

//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//       <h2 className="text-[15px] font-bold text-gray-900 mb-4">Trending Videos</h2>
//       <div className="border border-gray-200 rounded-lg p-5 bg-white">
//         <div className="grid grid-cols-6 gap-x-6">
//           {columns.map((col, colIdx) => (
//             <div key={colIdx} className="space-y-3">
//               {col.filter(v => v).map((video, idx) => (
//                 <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 block leading-snug">
//                   {video}
//                 </Link>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

export function TrendingVideosSection() {
  const columns = [
    ["'Stanford Ranks Us Third': Ash...", "Kolkata Headlines Today — Th...", "IOCL Chairman Says India Is R..."],
    ["Spain Train Tragedy, PM Modi ...", "Lucknow Headlines Today — ...", "Bachchan, Waugh, Maxwell an..."],
    ["Trump Lawyer Lindsey Halliga...", "Kajol arrives in Kolkata on Jan...", "Chandigarh Headlines Today ..."],
    ["Ritabhari Chakraborty", "Donald Trump Says He Stopp...", "EAM Jaishankar Calls For Unit..."],
    ["'Strong Economy No Good Un...", "Timothy Busfield Walks Free; ...", "500% Tariff Threat Over Russi..."],
    ["Shubha Mudgal performs in K...", "Noida Headlines Today — The...", "'Is It A Crime?': AIMIM Chief O..."],
  ];

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <h2 className="text-[15px] font-bold text-gray-900 mb-4">Trending Videos</h2>
      <div className="border border-gray-200 rounded-lg p-2 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.filter(v => v).map((video, idx) => (
                <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 block leading-snug">
                  {video}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
