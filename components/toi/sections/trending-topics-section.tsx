// "use client";

// import Link from "next/link";

// export function TrendingTopicsSection() {
//   const columns = [
//     ["Gautam Gambhir", "CBSE Affiliation Rules", "Telangana District Court Recr...", "Mumbai fire", "Silver price today", "Who was Wilbur Wood", "Toyota Urban Cruiser EV"],
//     ["Vikas Kohli", "Budget 2026", "AISSEE Answer Key", "Sabarimala gold case", "Lebron James", "Skoda Kushaq Facelift", "Bill Gates"],
//     ["Donald Cerrone Net Worth", "NTA NIFTEE 2026 Application", "Rohit Sharma", "Pune civic poll", "Victor Wembanyama", "Jeff Bezos", "Elon Musk"],
//     ["Virat Kohli", "DSSSB Result 2026", "RRB Group D Recruitment", "Karnataka DGP", "Anthony Joshua", "Jensen Huang", "Mark Zuckerberg"],
//     ["Saina Nehwal", "KEA Exam Schedule", "BCCI Central Contract", "Budget 2026", "IShowSpeed", "Nyt Connections", "iQoo 15R"],
//     ["Ramiz Raza", "SSC CGL Tier II Exam Answer ...", "Tilak Varma", "TN Governor", "Nikola Jokic", "Sam Altman", "Wordle Today"],
//   ];

//   return (
//     <section className="py-5">
//       <h2 className="text-[15px] font-bold text-gray-900 mb-4">Trending Topics</h2>
//       <div className="bg-white rounded-xl shadow-sm p-4">
//         <div className="grid grid-cols-6 gap-x-8">
//           {columns.map((col, colIdx) => (
//             <div key={colIdx} className="space-y-3">
//               {col.map((topic, idx) => (
//                 <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 block leading-snug">
//                   {topic}
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

export function TrendingTopicsSection() {
  const columns = [
    ["Gautam Gambhir", "CBSE Affiliation Rules", "Telangana District Court Recr...", "Mumbai fire", "Silver price today", "Who was Wilbur Wood", "Toyota Urban Cruiser EV"],
    ["Vikas Kohli", "Budget 2026", "AISSEE Answer Key", "Sabarimala gold case", "Lebron James", "Skoda Kushaq Facelift", "Bill Gates"],
    ["Donald Cerrone Net Worth", "NTA NIFTEE 2026 Application", "Rohit Sharma", "Pune civic poll", "Victor Wembanyama", "Jeff Bezos", "Elon Musk"],
    ["Virat Kohli", "DSSSB Result 2026", "RRB Group D Recruitment", "Karnataka DGP", "Anthony Joshua", "Jensen Huang", "Mark Zuckerberg"],
    ["Saina Nehwal", "KEA Exam Schedule", "BCCI Central Contract", "Budget 2026", "IShowSpeed", "Nyt Connections", "iQoo 15R"],
    ["Ramiz Raza", "SSC CGL Tier II Exam Answer ...", "Tilak Varma", "TN Governor", "Nikola Jokic", "Sam Altman", "Wordle Today"],
  ];

  return (
    <section className="py-5">
      <h2 className="text-[15px] font-bold text-gray-900 mb-4">Trending Topics</h2>
      <div className="bg-white rounded-xl shadow-sm p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.map((topic, idx) => (
                <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 block leading-snug">
                  {topic}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
