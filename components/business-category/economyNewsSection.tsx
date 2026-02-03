import Image from "next/image";
import { ChevronRight } from "lucide-react";

const economyNewsSection = {
  lead: {
    title: "Global Economy Shows Signs of Recovery 📈",
    image: "https://images.unsplash.com/photo-1616536369008-268db5b2a5f8?auto=format&fit=crop&w=1600&q=80",
  },
  middleList: [
    "Inflation Rates and Market Predictions",
    "Central Bank Policies Explained",
    "Impact of Trade Wars on Growth",
    "Employment Trends in 2026",
  ],
  bottomCards: [
    {
      title: "Top Economists Share Insights on Emerging Global Market Trends",
    },
    {
      title: "Global Trade Update: Navigating Challenges and Opportunities",
    },
    {
      title: "Cryptocurrency Market Overview: Latest Developments, Risks",
    },
    {
      title: "Economic Indicators to Watch This Quarter for Better Investment",
    },
  ],
  
};

export default function EconomyNews() {
  return (
    <section className="mt-5 rounded-lg w-full">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Economy News</h2>
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
                  src={economyNewsSection.lead.image}
                  alt={economyNewsSection.lead.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 41vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  {economyNewsSection.lead.title}
                </p>
              </div>
            </div>

            {/* Middle List */}
            <div className="md:col-span-5">
              <ul className="space-y-3 text-sm">
                {economyNewsSection.middleList.map((item, i) => (
                  <li key={`economy-middle-${i}`} className={i !== economyNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4">
            {economyNewsSection.bottomCards.map((card, i) => (
              <div key={`economy-bottom-${i}`}>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className="lg:col-span-4 mt-6 lg:mt-0">
          <div className="border rounded-lg p-3 bg-white shadow-sm">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Sponsored</p>
            <div className="relative w-full h-[150px] sm:h-[180px] rounded overflow-hidden mb-2">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                alt="Ad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <h3 className="text-sm font-semibold leading-snug mb-1">Stay Ahead of Market Trends 📈</h3>
            <button className="w-full text-sm bg-yellow-600 text-white py-1.5 rounded hover:bg-yellow-700 transition">
              Read More
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
