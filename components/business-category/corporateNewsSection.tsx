import Image from "next/image";
import { ChevronRight } from "lucide-react";

const corporateNewsSection = {
  lead: {
    title: "Corporate Giants Expand Globally 🌍",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
  middleList: [
    "Mergers & Acquisitions Update",
    "CEO Interviews: Market Insights",
    "Corporate Social Responsibility Initiatives",
    "Stock Market Impact on Corporations",
  ],
  bottomCards: [
    {
      title: "Top 10 Corporates to Watch This Quarter as They Drive Innovation",
    },
    {
      title: "How Leading Companies Are Implementing Green Initiatives",
    },
    {
      title: "Tech Startups Disrupting Industries with Cutting-edge Technologies",
    },
    {
      title: "Global Expansion Strategies Explained: Navigating Challenges",
    },
  ],


};

export default function CorporateNews() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      {/* TITLE */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Corporate News</h2>
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
                  src={corporateNewsSection.lead.image}
                  alt={corporateNewsSection.lead.title}
                  width={700}
                  height={420}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  {corporateNewsSection.lead.title}
                </p>
              </div>
            </div>

            {/* Middle List */}
            <div className="col-span-5">
              <ul className="space-y-3 text-sm">
                {corporateNewsSection.middleList.map((item, i) => (
                  <li key={`corporate-middle-${i}`} className={i !== corporateNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Cards */}
          {/* Bottom Cards — CONTENT ONLY */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {corporateNewsSection.bottomCards.map((card, i) => (
              <div
                key={`corporate-bottom-${i}`}
              // className="border rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer"
              >
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
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Sponsored</p>
            <Image
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80"
              alt="Ad"
              width={300}
              height={180}
              className="rounded mb-2"
            />
            <h3 className="text-sm font-semibold leading-snug mb-1">Invest Smart This Quarter 💼</h3>
            <button className="w-full text-sm bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
