"use client"

import Link from "next/link"

const destinations = [
  "Travis Kelce",
  "Taylor Swift Legal Contro...",
  "John Harbaugh",
  "Subject Ranking 2026",
  "Moradabad Honour Killing",
  "Gold Silver Prediction",
  "Budget 2026 Expectatio...",
  "Gracie Hunt",
  "RSSB Rajasthan Grade 4 ...",
  "IIT Suicides",
  "Board of Peace",
  "Greenland Tariffs",
  "Canada PM Speech",
  "Trump Davos Live",
  "Dubai gold price",
  "Dubai maternity leave",
  "Ramadan 2026",
  "Iran Protest",
  "UAE Visa",
  "Barron Trump",
  "IIT delhi",
  "UGC 2026",
  "NTA NIFTEE 2026",
  "Delhi MCD commissioner",
  "Alex De Minaur and Katie...",
  "Clat 2026 Counselling",
  "Bangladesh T20 World C...",
  "Trump at WEF Davos",
  "Mumbai Mayor",
  "T20 World Cup 2026 Sc...",
]
const livingLinks = [
  ["Cricbuzz", "Newspaper Subscription", "TV", "Travel Destinations", "ETimes", "Times Pets"],
  ["Lifestyle", "Food News", "Times Prime", "Whats Hot", "Times Life", "MyLifeXP"],
];

const serviceLinks = [
  ["CouponDunia", "TimesJobs", "Times Mobile", "Times Events", "Colombia"],
  ["TechGig", "Bollywood News", "Gadgets", "Work with Us", "TOI Global"],
];
export function ExploredGlobeSection() {
  return (
    <section
      className="py-6 border-t border-dashed border-gray-300"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[15px] font-bold text-gray-900 border-r border-gray-600 pr-2">
          Explore Every Corner
        </h2>
        <span className="text-[13px] text-gray-700">Across The Globe</span>
      </div>

      {/* Links grid */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 text-[12px] text-gray-700 leading-tight">
          {destinations.map((title, idx) => (
            <Link
              key={idx}
              href="#"
              className="block truncate hover:text-red-600 transition-colors"
              title={title}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      <div className="py-6 max-w-[960px]">

{/* Header Row: Logo + 2 Headers, equal width each */}
<div className="grid grid-cols-12 items-center mb-4">

  {/* Left: Logo + Title in col-span-12 for mobile */}
  <div className="col-span-12 sm:col-span-4 flex items-center gap-3">
    <svg
      className="w-12 h-12 text-gray-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
    </svg>
    <div>
      <div className="text-[9px] text-gray-500 tracking-wide">Bennett &amp; Coleman</div>
      <div
        className="text-[18px] font-bold text-gray-900 tracking-tight"
        style={{ fontFamily: "Georgia, serif" }}
      >
        THE TIMES OF INDIA
      </div>
    </div>
  </div>

  {/* Center header in col-span-12 for mobile */}
  <h3 className="col-span-12 sm:col-span-4 text-center text-[15px] font-bold text-gray-900">
    Living and Entertainment
  </h3>

  {/* Right header in col-span-12 for mobile */}
  <h3 className="col-span-12 sm:col-span-4 text-center text-[15px] font-bold text-gray-900">
    Services
  </h3>
</div>

{/* Content Row: 3 Equal Columns */}
<div className="grid grid-cols-12 gap-8">

  {/* Left Content - col-span-12 for mobile */}
  <div className="col-span-12 sm:col-span-4">
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {[
          "About us",
          "Create Your Own Ad",
          "Terms of Use and Grievanc...",
          "Privacy policy",
          "Advertise with us",
          "RSS",
          "Newsletter",
          "Feedback",
          "ePaper",
          "Sitemap",
          "Archives",
        ].map((link, idx) => (
          <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-snug">
            {link}
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Center Content - col-span-12 for mobile */}
  <div className="col-span-12 sm:col-span-4">
    <div className="border border-gray-200 rounded-lg p-2">
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {livingLinks.flat().map((link, idx) => (
          <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-snug">
            {link}
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Right Content - col-span-12 for mobile */}
  <div className="col-span-12 sm:col-span-4">
    <div className="border border-gray-200 rounded-lg p-2">
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {serviceLinks.flat().map((link, idx) => (
          <Link key={idx} href="#" className="text-[11px] text-gray-700 hover:text-red-600 leading-snug">
            {link}
          </Link>
        ))}
      </div>
    </div>
  </div>

</div>
</div>


    </section>

  )
}
