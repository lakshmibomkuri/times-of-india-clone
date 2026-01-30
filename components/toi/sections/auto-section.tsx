
// app/components/AutoSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type NewsItem = {
  title: string;
  image?: string;
  category?: string;
  href?: string;
};

const featured: NewsItem = {
  title:
    "Avoid traffic jams ahead of Republic Day: Traffic restrictions, timings to know",
  image: "https://picsum.photos/seed/feature/720/420",
  href: "#",
};

const middleList: NewsItem[] = [
  { title: "2026 Jeep Meridian launched: New price, upgrades explained", href: "#" },
  { title: "Why your electric vehicle and its data could be a target", href: "#" },
  { title: "Hero Vida VXZ e-motorcycle design patented: Details", href: "#" },
  { title: "Skoda Kushaq facelift: Changes, upgrades over the current gen", href: "#" },
  { title: "EV battery maintenance: Tips to extend your electric’s life", href: "#" },
];

const bottomList: NewsItem[] = [
  { title: "Toyota Innova Crysta gets expensive: Check new prices", href: "#" },
  { title: "Nissan’s budget 7-seater Gravite MPV to launch soon: What to expect", href: "#" },
  { title: "Kia Sonet hits 5 lakh sales in India: Success decoded", href: "#" },
  { title: "Tata Punch facelift gets BNCAP crash test results: How safe is it?", href: "#" },
];

const rightList: NewsItem[] = [
  {
    title: "Audi unveils all-new car for the 2026 F1 season: First look, details",
    image: "https://picsum.photos/seed/right1/88/56",
    href: "#",
  },
  {
    title: "Watch Sanjay Dutt in Tesla Cybertruck on Mumbai roads",
    image: "https://picsum.photos/seed/right2/88/56",
    href: "#",
  },
  {
    title: "Vinfast VF6, VF7 BNCAP crash ratings out! Check safety report card",
    image: "https://picsum.photos/seed/right3/88/56",
    href: "#",
  },
  {
    title:
      "Toyota Urban Cruiser Ebella vs Hyundai Creta Electric: range, specs",
    image: "https://picsum.photos/seed/right4/88/56",
    href: "#",
  },
];

export function AutoSection() {
  return (
    <section className="py-6 border-t border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-bold text-[#111]">Auto</h2>
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left + Middle (take 9 cols on lg) */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* Featured (Left) */}
            <div className="col-span-12 md:col-span-7">
              <Link href={featured.href ?? "#"} className="block group">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={featured.image || "/placeholder.svg"}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-[16px] md:text-[18px] font-semibold leading-snug">
                      {featured.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            {/* Middle list with dotted bullets & right divider */}
            <div className="col-span-12 md:col-span-5">
              <div className="h-full md:border-r md:border-gray-200 pr-0 md:pr-6">
                <div className="space-y-4">
                  {middleList.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href ?? "#"}
                      className="flex gap-3 group"
                    >
                      <span className="text-gray-400 text-sm mt-[2px]">○</span>
                      <span className="text-[14px] leading-snug text-[#222] group-hover:text-red-600 line-clamp-2">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom 4 columns under featured+middle */}
            <div className="col-span-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
                {bottomList.map((item, idx) => (
                  <Link key={idx} href={item.href ?? "#"} className="group">
                    <h4 className="text-[14px] leading-snug text-[#222] group-hover:text-red-600 line-clamp-3">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right rail (3 cols on lg) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="space-y-4">
            {rightList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href ?? "#"}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-[88px] h-[56px] rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] leading-snug text-[#222] group-hover:text-red-600 line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
