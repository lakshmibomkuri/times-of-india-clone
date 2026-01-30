import Image from "next/image";
import { ChevronRight } from "lucide-react";

const opinions = [
  {
    image: "https://picsum.photos/seed/op1/80/80",
    title: "Why Budget 2026 needs to focus on middle class",
    author: "Swaminathan Aiyar",
  },
  {
    image: "https://picsum.photos/seed/op2/80/80",
    title: "India-US relations under the new administration",
    author: "Shashi Tharoor",
  },
  {
    image: "https://picsum.photos/seed/op3/80/80",
    title: "The future of AI regulation in India",
    author: "Nandan Nilekani",
  },
  {
    image: "https://picsum.photos/seed/op4/80/80",
    title: "Climate change: Time for urgent action",
    author: "Sunita Narain",
  },
];

const editorials = [
  "The voice of conscience: Standing up for truth in difficult times",
  "Editorial: Budget expectations and economic realities",
  "Speaking Tree: Finding inner peace in chaotic world",
  "Sunday Times: A week in review",
];

export function OpinionSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Opinion & Features <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-[1fr_300px] gap-8">
          {/* Opinions */}
          <div className="grid grid-cols-2 gap-6">
            {opinions.map((item, idx) => (
              <div key={idx} className="flex gap-3 group cursor-pointer">
                <div className="relative w-[60px] h-[60px] flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm text-gray-800 group-hover:text-red-600 line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Editorials Sidebar */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-3">Editorials</h3>
            <div className="space-y-3">
              {editorials.map((item, idx) => (
                <p key={idx} className="text-sm text-gray-700 hover:text-red-600 cursor-pointer line-clamp-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
