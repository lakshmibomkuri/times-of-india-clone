import Image from "next/image";
import { ChevronRight } from "lucide-react";

const realEstateNewsSection = {
  lead: {
    title: "Real Estate Market Heats Up in 2026 🏘️",
    image:
      "https://picsum.photos/1920/1080?random=102",
  },
  middleList: [
    "Luxury Property Sales Surge in Urban Areas",
    "Affordable Housing Projects Expand Nationwide",
    "Impact of Interest Rates on Mortgage Approvals",
    "Trends in Commercial Real Estate Investment",
  ],
  bottomCards: [
    {
      title:
        "Top Real Estate Developers and Upcoming Mega Projects to Watch",
    },
    {
      title:
        "Residential Property Prices: Key Markets Showing Growth in 2026",
    },
    {
      title:
        "Commercial Leasing Trends: Offices, Retail, and Co-working Spaces",
    },
    {
      title:
        "Sustainable Housing Initiatives: Green Buildings and Eco-friendly Projects",
    },
  ],
};

export default function RealEstateNews() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Real Estate News</h2>
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
                  src={realEstateNewsSection.lead.image}
                  alt={realEstateNewsSection.lead.title}
                  width={700}
                  height={420}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  {realEstateNewsSection.lead.title}
                </p>
              </div>
            </div>

            {/* Middle List */}
            <div className="col-span-5">
              <ul className="space-y-3 text-sm">
                {realEstateNewsSection.middleList.map((item, i) => (
                  <li
                    key={`realestate-middle-${i}`}
                    className={
                      i !== realEstateNewsSection.middleList.length - 1
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
            {realEstateNewsSection.bottomCards.map((card, i) => (
              <div key={`realestate-bottom-${i}`}>
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
              src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=1600&q=80"
              alt="Ad"
              width={300}
              height={180}
              className="rounded mb-2"
            />
            <h3 className="text-sm font-semibold leading-snug mb-1">
              Invest Smart in Real Estate 2026 🏢
            </h3>
            <button className="w-full text-sm bg-green-600 text-white py-1.5 rounded hover:bg-green-700 transition">
              Read More
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
