import Image from "next/image";
import { ChevronRight } from "lucide-react";

const telecomNewsSection = {
  lead: {
    title: "Telecom Industry Adapts to 5G Expansion 📶",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  middleList: [
    "5G Rollout Updates Across Major Cities",
    "Telecom Mergers and Acquisitions in 2026",
    "Data Privacy Regulations Affecting ISPs",
    "Telecom Service Plans and Pricing Trends",
  ],
  bottomCards: [
    {
      title: "Top Telecom Companies Leading 5G Innovation",
    },
    {
      title: "Consumer Insights: Popular Data Plans in 2026",
    },
    {
      title: "Regulatory Updates Impacting Mobile Networks",
    },
    {
      title: "IoT and Smart City Initiatives Powered by Telecom",
    },
  ],
};

export default function TelecomNews() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Telecom News</h2>
        <ChevronRight className="w-4 h-4" />
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Featured */}
            <div className="col-span-7">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={telecomNewsSection.lead.image}
                  alt={telecomNewsSection.lead.title}
                  width={700}
                  height={420}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  {telecomNewsSection.lead.title}
                </p>
              </div>
            </div>

            {/* Middle List */}
            <div className="col-span-5">
              <ul className="space-y-3 text-sm">
                {telecomNewsSection.middleList.map((item, i) => (
                  <li
                    key={`telecom-middle-${i}`}
                    className={
                      i !== telecomNewsSection.middleList.length - 1
                        ? "border-b pb-2 truncate"
                        : "truncate"
                    }
                  >
                    <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {telecomNewsSection.bottomCards.map((card, i) => (
              <div key={`telecom-bottom-${i}`}>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className="col-span-12 lg:col-span-4 space-y-4">
          <div className="border rounded-lg p-3 bg-white shadow-sm">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
              Sponsored
            </p>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
              alt="Ad"
              width={300}
              height={180}
              className="rounded mb-2"
            />
            <h3 className="text-sm font-semibold leading-snug mb-1">
              Explore the Latest 5G Plans and Offers 📡
            </h3>
            <button className="w-full text-sm bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
