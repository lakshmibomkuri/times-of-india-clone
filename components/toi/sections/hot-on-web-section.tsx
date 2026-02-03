// "use client";

// import Link from "next/link";

// export function HotOnWebSection() {
//   const columns = [
//     ["Suniel Shetty", "Jana Nayagan", "Dhurandhar 2", "Palash Muchchal", "William Shakespeare", "Moon Lake"],
//     ["Priyanka Chopra", "World Largest Railway Station", "Baby Names", "Queen Of The Arabian See", "Dhurandhar Movie Collection", "River That Flows Backwards", "Lara Trump"],
//     ["Shah Rukh Khan", "Priyanka Chopra", "F Scott Fitzgerald", "Snake Eggs", "Satyam Kumar", "World Largest Beaver Dam", "Baby Dinosaur Fossils Found i..."],
//     ["Fake Sweet Potato", "AR Rahman", "Suniel Shetty", "US Visa", "Mana ShankaraVaraprasad G...", "Snake Plant Benefits", "Apollo 14"],
//     ["Ranveer Singh", "The Great Indian Kapil Show", "US Visa", "John Abraham", "Dhurandhar Movie Review", "Quote Of The Day By Thomas...", "Nasa Confirms Artemis ii Lau..."],
//     ["Varanasi", "Khushi Mukherjee", "Ram Gopal Varma", "The Raja Saab Box Office Coll...", "Best Mystery Thrillers OTT", "Longest Venomous King Cobra"],
//   ];

//   return (
//     <section className="py-5 border-t border-dashed border-gray-300">
//       <h2 className="text-[15px] font-bold text-gray-900 mb-4">Hot on the Web</h2>
//       <div className="bg-white rounded-xl shadow-sm p-4">
//         <div className="grid grid-cols-7 gap-x-8">
//           {columns.map((col, colIdx) => (
//             <div key={colIdx} className="space-y-3">
//               {col.map((link, idx) => (
//                 <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 block leading-snug">
//                   {link}
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

export function HotOnWebSection() {
  const columns = [
    ["Suniel Shetty", "Jana Nayagan", "Dhurandhar 2", "Palash Muchchal", "William Shakespeare", "Moon Lake"],
    ["Priyanka Chopra", "World Largest Railway Station", "Baby Names", "Queen Of The Arabian See", "Dhurandhar Movie Collection", "River That Flows Backwards", "Lara Trump"],
    ["Shah Rukh Khan", "Priyanka Chopra", "F Scott Fitzgerald", "Snake Eggs", "Satyam Kumar", "World Largest Beaver Dam", "Baby Dinosaur Fossils Found i..."],
    ["Fake Sweet Potato", "AR Rahman", "Suniel Shetty", "US Visa", "Mana ShankaraVaraprasad G...", "Snake Plant Benefits", "Apollo 14"],
    ["Ranveer Singh", "The Great Indian Kapil Show", "US Visa", "John Abraham", "Dhurandhar Movie Review", "Quote Of The Day By Thomas...", "Nasa Confirms Artemis ii Lau..."],
    ["Varanasi", "Khushi Mukherjee", "Ram Gopal Varma", "The Raja Saab Box Office Coll...", "Best Mystery Thrillers OTT", "Longest Venomous King Cobra"],
  ];

  return (
    <section className="py-5 border-t border-dashed border-gray-300">
      <h2 className="text-[15px] font-bold text-gray-900 mb-4">Hot on the Web</h2>
      <div className="bg-white rounded-xl shadow-sm p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.map((link, idx) => (
                <Link key={idx} href="#" className="text-[12px] text-gray-700 hover:text-red-600 block leading-snug">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
