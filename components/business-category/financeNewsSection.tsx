import Image from "next/image";
import { ChevronRight } from "lucide-react";

const financeNewsSection = {
  lead: {
    title: "Personal Finance Tips for a Wealthy 2026 💰",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
  middleList: [
    "Budgeting Techniques for Every Income Group",
    "Investing in Mutual Funds and Stocks Safely",
    "Tax Planning Strategies for Maximum Savings",
    "Retirement Planning and Pension Options",
  ],
  bottomCards: [
    {
      title: "Top Financial Advisors Share Smart Money Moves",
    },
    {
      title: "Personal Loan and Credit Card Trends in 2026",
    },
    {
      title: "Insurance Options: Choosing the Right Policy",
    },
    {
      title: "Side Hustles and Passive Income Opportunities",
    },
  ],
};

export default function PersonalFinanceNews() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Personal Finance News</h2>
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
                  src={financeNewsSection.lead.image}
                  alt={financeNewsSection.lead.title}
                  width={700}
                  height={420}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                  {financeNewsSection.lead.title}
                </p>
              </div>
            </div>

            {/* Middle List */}
            <div className="col-span-5">
              <ul className="space-y-3 text-sm">
                {financeNewsSection.middleList.map((item, i) => (
                  <li
                    key={`finance-middle-${i}`}
                    className={
                      i !== financeNewsSection.middleList.length - 1
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
            {financeNewsSection.bottomCards.map((card, i) => (
              <div key={`finance-bottom-${i}`}>
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
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1600&q=80"
              alt="Ad"
              width={300}
              height={180}
              className="rounded mb-2"
            />
            <h3 className="text-sm font-semibold leading-snug mb-1">
              Grow Your Wealth with Smart Investments 💸
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
