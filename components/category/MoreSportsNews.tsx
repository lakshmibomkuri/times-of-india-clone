import { useState } from "react";
import Image from "next/image";
import { ChevronRight,ChevronDown } from "lucide-react";

const allNewsItems = [
    // First 20 items (sample, extend with your real data)
    ...Array(20).fill(null).map((_, i) => ({
        image: `https://picsum.photos/id/${237 + i}/400/220`,
        title: `Sample news headline #${i + 1} — exciting sports event details...`,
    })),

    // Next 30 items
    ...Array(30).fill(null).map((_, i) => ({
        image: `https://picsum.photos/id/${257 + i}/400/220`,
        title: `Additional news headline #${i + 21} — more thrilling sports updates...`,
    })),
];

export default function MoreSportsNews() {
    const [visibleCount, setVisibleCount] = useState(20);

    function loadMore() {
        setVisibleCount((count) => Math.min(count + 10, allNewsItems.length));
    }

    return (
        <section className="py-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
                More Sports News
                <ChevronRight className="w-5 h-5" />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {allNewsItems.slice(0, visibleCount).map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group rounded-lg overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={220}
                            className="w-full h-[140px] sm:h-[160px] md:h-[140px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            priority={idx < 6} // prioritize first few for performance
                        />
                        <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold leading-snug line-clamp-3 drop-shadow-lg">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < allNewsItems.length && (
                <div className="mt-6 text-center border border-gray-300 rounded w-[165px] mx-auto flex">
                    <button
                        onClick={loadMore}
                        className="inline-block px-1 py-1 bg-white text-red-500 rounded"
                    >
                        Load More Stories
                    </button>
                    <div className="flex justify-center mt-2">
                        <ChevronDown className="w-6 h-6 text-red-500" />
                    </div>
                </div>

            )}
        </section>
    );
}
