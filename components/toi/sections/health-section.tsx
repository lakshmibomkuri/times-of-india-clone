import Image from "next/image";
import { ChevronRight } from "lucide-react";

const healthNews = [
  {
    image: "https://picsum.photos/seed/health1/160/110",
    title: "Thyroid cancer often hides in plain sight: Doctor urges women, those with...",
  },
  {
    image: "https://picsum.photos/seed/health2/160/110",
    title: "Cervical cancer can be silent in stage 1: Doctors explain how it can be...",
  },
  {
    image: "https://picsum.photos/seed/health3/160/110",
    title: "'My Rs 50 lakh policy ditched me in the darkest hour': Why your health...",
  },
  {
    image: "https://picsum.photos/seed/health4/160/110",
    title: "Twice a cancer survivor, invites her doctor to her 50th wedding anniversar...",
  },
  {
    image: "https://picsum.photos/seed/health5/160/110",
    title: "Not baby fat: Extra weight can harm a child's liver, warns doctor",
  },
  {
    image: "https://picsum.photos/seed/health6/160/110",
    title: "Ever cracked an egg with a red egg white? Here's what it means and how t...",
  },
];

export function HealthSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto p-0">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Health+ <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-6 gap-4">
          {healthNews.map((item, idx) => (
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
