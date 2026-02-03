import Image from "next/image";
import { ChevronRight } from "lucide-react";

const aviationNewsSection = {
  lead: {
    title: "Aviation Industry Soars with Next-Gen Aircraft ✈️",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=340&fit=crop",
  },
  middleList: [
    "Airline Safety Updates and Innovations",
    "Global Flight Traffic Trends in 2026",
    "Impact of Fuel Prices on Airlines",
    "Airport Expansion and Infrastructure Projects",
  ],
  bottomCards: [
    {
      title: "Top Airlines Adopting Eco-Friendly Aircraft",
    },
    {
      title: "Passenger Experience Enhancements in Modern Airports",
    },
    {
      title: "Air Cargo Market Insights and Forecast",
    },
    {
      title: "Regulatory Changes Affecting Global Aviation",
    },
  ],
};

export default function AviationNews() {
  return (
    <section className="mt-5 rounded-lg w-full">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Aviation News</h2>
        <ChevronRight className="w-4 h-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* LEFT SIDE */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Featured */}
            <div className="md:col-span-7">
              <div className="relative rounded-lg overflow-hidden h-[200px] sm:h-[250px] md:h-[280px]">
                <Image
                  src={aviationNewsSection.lead.image}
                  alt={aviationNewsSection.lead.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 41vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  {aviationNewsSection.lead.title}
                </p>
              </div>
            </div>

            {/* Middle List */}
            <div className="md:col-span-5">
              <ul className="space-y-3 text-sm">
                {aviationNewsSection.middleList.map((item, i) => (
                  <li
                    key={`aviation-middle-${i}`}
                    className={i !== aviationNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                  >
                    <span className="block line-clamp-2">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4">
            {aviationNewsSection.bottomCards.map((card, i) => (
              <div key={`aviation-bottom-${i}`}>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className="lg:col-span-4 mt-6 lg:mt-0">
          <div className="border rounded-lg p-3 bg-white shadow-sm">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
              Sponsored
            </p>
            <div className="relative w-full h-[150px] sm:h-[180px] rounded overflow-hidden mb-2">
              <Image
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=340&fit=crop"
                alt="Ad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <h3 className="text-sm font-semibold leading-snug mb-1">
              Explore the Future of Aviation Technology ✈️
            </h3>
            <button className="w-full text-sm bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </aside>
      </div>

      {/* Bottom border for separation */}
      <div className="mt-6 border-t border-gray-300"></div>
    </section>
  );
}
