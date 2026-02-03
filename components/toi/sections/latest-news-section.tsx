// "use client";

// import Link from "next/link";

// export function LatestNewsSection() {
//   const columns = [
//     [
//       "Gauri Ganesha Chaturthi 2026: Date, madhyahna muhurat, avoid moon sighting time, puja rituals and significance",
//       "Elon Musk and Sam Altman fight over who 'killed' more; both warn ...",
//       "Raising IVF babies: What do experts say",
//       "A night to remember: Papon mesmerizes Pune with soulful live concert; Fans embrace nostalgia and connect deeply with the...",
//       "IPL 2026 schedule on hold as BCCI awaits election dates; seeks clarity on RCB, RR venues",
//       "Adolescence's Stephen Graham reveals how he lost his first-ever Golden Globe award just hours after winning",
//     ],
//     [
//       "Centre revises norms to address land value disputes in transmission line projects",
//       "'O Romeo' star Shahid Kapoor shares daily fitness routine and healthy lifestyle tips: Breathe, train, eat light, rest well",
//       "MPCB signs MoU with Osaka city to strengthen pollution control framework",
//       "Dilip Prabhavakar: Did 'Hasva Fasvi' for my growth and learning– Exclusive",
//       "Chinna Marumagai: Everything about the family drama starring Navin Kumar and Swetha",
//       "Travel planning on the rise as 73% start in January; new tools and insights aim to ease decision-making",
//     ],
//     [
//       "Teacher shares her incredible fight against endometrial adenocarcinoma, a cancer of the reproductive system",
//       "'Drishyam 3': Santhi Mayadevi dubs for Mohanlal-Jeethu Joseph film",
//       "Buried oceans of magma may be protecting alien planets from destruction",
//       "Karnataka shocker: Pilgrim killed in leopard attack near MM hills; safety measures reviewed",
//       "Who owns victory? How a century-old battle in Haifa exposed the afterlife of colonial erasure",
//       "It's very important to be adaptable when you work in TV: Digvijay Purohit",
//     ],
//   ];
//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">

//       <h2 className="text-[15px] font-bold text-gray-900 mb-4">Latest News</h2>
//       <div className="grid grid-cols-3 gap-x-8">
//         {columns.map((col, colIdx) => (
//           <div key={colIdx} className="space-y-4">
//             {col.map((news, idx) => (
//               <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 block leading-relaxed">
//                 {news}
//               </Link>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

export function LatestNewsSection() {
  const columns = [
    [
      "Gauri Ganesha Chaturthi 2026: Date, madhyahna muhurat, avoid moon sighting time, puja rituals and significance",
      "Elon Musk and Sam Altman fight over who 'killed' more; both warn ...",
      "Raising IVF babies: What do experts say",
      "A night to remember: Papon mesmerizes Pune with soulful live concert; Fans embrace nostalgia and connect deeply with the...",
      "IPL 2026 schedule on hold as BCCI awaits election dates; seeks clarity on RCB, RR venues",
      "Adolescence's Stephen Graham reveals how he lost his first-ever Golden Globe award just hours after winning",
    ],
    [
      "Centre revises norms to address land value disputes in transmission line projects",
      "'O Romeo' star Shahid Kapoor shares daily fitness routine and healthy lifestyle tips: Breathe, train, eat light, rest well",
      "MPCB signs MoU with Osaka city to strengthen pollution control framework",
      "Dilip Prabhavakar: Did 'Hasva Fasvi' for my growth and learning– Exclusive",
      "Chinna Marumagai: Everything about the family drama starring Navin Kumar and Swetha",
      "Travel planning on the rise as 73% start in January; new tools and insights aim to ease decision-making",
    ],
    [
      "Teacher shares her incredible fight against endometrial adenocarcinoma, a cancer of the reproductive system",
      "'Drishyam 3': Santhi Mayadevi dubs for Mohanlal-Jeethu Joseph film",
      "Buried oceans of magma may be protecting alien planets from destruction",
      "Karnataka shocker: Pilgrim killed in leopard attack near MM hills; safety measures reviewed",
      "Who owns victory? How a century-old battle in Haifa exposed the afterlife of colonial erasure",
      "It's very important to be adaptable when you work in TV: Digvijay Purohit",
    ],
  ];
  
  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <h2 className="text-[15px] font-bold text-gray-900 mb-4">Latest News</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="space-y-4">
            {col.map((news, idx) => (
              <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 block leading-relaxed">
                {news}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

