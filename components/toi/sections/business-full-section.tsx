import Image from "next/image";
import { ChevronRight, TrendingDown, TrendingUp } from "lucide-react";

const stockData = [
  { name: "SENSEX", value: "76,190.46", change: "-1,048.90", changePercent: "-1.36%", isUp: false },
  { name: "NIFTY 50", value: "23,024.65", change: "-345.55", changePercent: "-1.48%", isUp: false },
  { name: "NIFTY BANK", value: "48,540.20", change: "-890.30", changePercent: "-1.80%", isUp: false },
  { name: "GOLD", value: "78,450", change: "+120", changePercent: "+0.15%", isUp: true },
];

const businessNews = [
  {
    image: "https://picsum.photos/seed/biz1/160/110",
    title: "Stock market crash: Why Sensex, Nifty fell sharply today",
  },
  {
    image: "https://picsum.photos/seed/biz2/160/110",
    title: "RBI likely to cut rates in February policy meet",
  },
  {
    image: "https://picsum.photos/seed/biz3/160/110",
    title: "IT stocks under pressure amid global uncertainty",
  },
  {
    image: "https://picsum.photos/seed/biz4/160/110",
    title: "Rupee hits record low against US dollar",
  },
  {
    image: "https://picsum.photos/seed/biz5/160/110",
    title: "Auto sales decline for third consecutive month",
  },
  {
    image: "https://picsum.photos/seed/biz6/160/110",
    title: "FIIs continue selling streak in Indian markets",
  },
];

export function BusinessFullSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Business <ChevronRight className="w-5 h-5" />
        </h2>

        {/* Stock Ticker */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-4 gap-4">
            {stockData.map((stock, idx) => (
              <div key={idx} className="text-center">
                <p className="text-gray-400 text-xs mb-1">{stock.name}</p>
                <p className="text-white font-bold text-lg">{stock.value}</p>
                <div className={`flex items-center justify-center gap-1 text-sm ${stock.isUp ? "text-green-500" : "text-red-500"}`}>
                  {stock.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span>{stock.change}</span>
                  <span>({stock.changePercent})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-6 gap-4">
          {businessNews.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-2 overflow-hidden rounded">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xs leading-tight text-gray-800 group-hover:text-red-600 line-clamp-3">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
