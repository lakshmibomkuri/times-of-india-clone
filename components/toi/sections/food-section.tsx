import Image from "next/image";
import { ChevronRight } from "lucide-react";

const foodNews = [
  {
    image: "https://picsum.photos/seed/food1/160/110",
    title: "Easy winter recipes to keep you warm",
  },
  {
    image: "https://picsum.photos/seed/food2/160/110",
    title: "Street food guide: Best places in Delhi",
  },
  {
    image: "https://picsum.photos/seed/food3/160/110",
    title: "Healthy breakfast ideas for busy mornings",
  },
  {
    image: "https://picsum.photos/seed/food4/160/110",
    title: "Traditional recipes for Makar Sankranti",
  },
  {
    image: "https://picsum.photos/seed/food5/160/110",
    title: "Quick dinner recipes under 30 minutes",
  },
  {
    image: "https://picsum.photos/seed/food6/160/110",
    title: "Restaurant review: New openings in Bangalore",
  },
];

export function FoodSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Recipes & Food News <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-6 gap-4">
          {foodNews.map((item, idx) => (
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
