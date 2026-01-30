import Image from "next/image";
import { ChevronRight } from "lucide-react";

const defenceNews = [
  {
    image: "https://picsum.photos/seed/def1/160/110",
    title: "Op Sindoor On Kartavya Path: IAF To Showcase How India Fights Modern Wars",
  },
  {
    image: "https://picsum.photos/seed/def2/160/110",
    title: "Indian Navy receives first indigenously built submarine",
  },
  {
    image: "https://picsum.photos/seed/def3/160/110",
    title: "DRDO successfully tests new missile system",
  },
  {
    image: "https://picsum.photos/seed/def4/160/110",
    title: "Army Chief reviews preparedness at LAC",
  },
  {
    image: "https://picsum.photos/seed/def5/160/110",
    title: "India-US defence partnership strengthens",
  },
  {
    image: "https://picsum.photos/seed/def6/160/110",
    title: "HAL delivers first batch of Tejas fighters",
  },
];

export function DefenceSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-0">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Defence <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-6 gap-4">
          {defenceNews.map((item, idx) => (
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
