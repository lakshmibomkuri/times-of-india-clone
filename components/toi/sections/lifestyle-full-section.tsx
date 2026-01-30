import Image from "next/image";
import { ChevronRight } from "lucide-react";

const lifestyleNews = [
  {
    image: "https://picsum.photos/seed/life1/160/110",
    title: "10 tips to maintain work-life balance in 2026",
  },
  {
    image: "https://picsum.photos/seed/life2/160/110",
    title: "Morning routines of successful entrepreneurs",
  },
  {
    image: "https://picsum.photos/seed/life3/160/110",
    title: "How to build healthy relationships in digital age",
  },
  {
    image: "https://picsum.photos/seed/life4/160/110",
    title: "Mindfulness practices for busy professionals",
  },
  {
    image: "https://picsum.photos/seed/life5/160/110",
    title: "Fashion trends that will dominate 2026",
  },
  {
    image: "https://picsum.photos/seed/life6/160/110",
    title: "Home decor ideas on a budget",
  },
];

export function LifestyleFullSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Lifestyle <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-6 gap-4">
          {lifestyleNews.map((item, idx) => (
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
