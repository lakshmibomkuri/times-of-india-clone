"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

const sportsHeadlines = [
  { title: "Gully To Glory: Ramandeep Singh's journey from C...", hasVideo: true },
  { title: "Jos Buttler Exclusive Interview: I owe Jayawardene...", hasVideo: true },
  { title: "Too many loopholes: How poor fielding, middle-ov...", hasVideo: false },
  { title: "U19 WC Live: Bangladesh vs New Zealand", isLive: true },
  { title: "U19 WC Live: Australia vs Japan", isLive: true },
  { title: "Gael Monfils bows out in epic farewell at Australia...", hasVideo: false },
  { title: "Coaching all three formats is a tough task: Andy Fl...", hasVideo: false },
  { title: "India vs NZ T20Is: full schedule, squads, timings an...", hasVideo: false },
  { title: "What next for Jadeja, Rohit? Veteran stars had a p...", hasVideo: false },
  { title: "'Tough questions will be asked': Rahane reveals re...", hasVideo: false },
  { title: "Asian Games: Sushi, silence on menu as athletes ...", hasVideo: false },
  { title: "Vijay Hazare Trophy: How 'Make for Vidarbha' kee...", hasVideo: false },
  { title: "SA20: JSK hold nerve in Paarl, set up eliminator re...", hasVideo: false },
  { title: "'Easier said than done': Kohli's brother hits back a...", hasVideo: false },
];

const featuredNews = [
  {
    image: "https://picsum.photos/seed/sport1/200/140",
    title: "Crowd chants 'Gambhir haye haye'; Virat Kohli reacts - WATCH",
  },
  {
    image: "https://picsum.photos/seed/sport2/200/140",
    title: "Tilak Varma update: Batter to reach BCCI CoE today; getting closer to...",
  },
  {
    image: "https://picsum.photos/seed/sport3/200/140",
    title: "'Confidence takes a hit': Ashwin flags Kuldeep's WC challenge after NZ...",
  },
  {
    image: "https://picsum.photos/seed/sport4/200/140",
    title: "BCCI plans central contract overhaul as Virat, Rohit likely to dro...",
  },
];

const esportsGames = [
  { image: "https://picsum.photos/seed/esport1/100/70", title: "Wuthering Waves 3.1..." },
  { image: "https://picsum.photos/seed/esport2/100/70", title: "League of Legends..." },
  { image: "https://picsum.photos/seed/esport3/100/70", title: "Fortnite leaks: Ed Edd n Edd..." },
  { image: "https://picsum.photos/seed/esport4/100/70", title: "How to get Bruno Mars in..." },
  { image: "https://picsum.photos/seed/esport5/100/70", title: "Fortnite 2026 collaboration..." },
  { image: "https://picsum.photos/seed/esport6/100/70", title: "Fortnite leaks: Looney Tunes..." },
  { image: "https://picsum.photos/seed/esport7/100/70", title: "Fortnite Professor..." },
  { image: "https://picsum.photos/seed/esport8/100/70", title: "Fortnite leaks: The Office..." },
  { image: "https://picsum.photos/seed/esport9/100/70", title: "Everything you need to know..." },
];

export function SportsFullSection() {
  return (
    <section className="py-6 border-t border-dashed border-gray-300">
      <div className="max-w-[980px] mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-1">
          Sports <ChevronRight className="w-5 h-5" />
        </h2>

        <div className="grid grid-cols-[1fr_280px] gap-8">
          {/* Main Content */}
          <div>
            <div className="grid grid-cols-[280px_1fr] gap-6">
              {/* Featured Image */}
              <div className="relative aspect-[4/3] rounded overflow-hidden group cursor-pointer">
                <Image
                  src="https://picsum.photos/seed/sportfeat/280/200"
                  alt="Sports news"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-medium">
                    Want Daryl to replicate his ODI performance in T20Is: Santner
                  </h3>
                </div>
              </div>

              {/* Headlines List */}
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {sportsHeadlines.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 group cursor-pointer">
                    {item.isLive ? (
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 animate-pulse" />
                    ) : (
                      <span className="text-gray-400 text-xs mt-1">○</span>
                    )}
                    <p className={`text-sm group-hover:text-red-600 line-clamp-1 ${item.isLive ? "text-red-600 font-medium" : "text-gray-700"}`}>
                      {item.title}
                    </p>
                    {item.hasVideo && <span className="text-red-500 text-xs">▶</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured News Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {featuredNews.map((news, idx) => (
                <div key={idx} className="flex gap-3 group cursor-pointer">
                  <div className="relative w-[120px] h-[85px] flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-sm text-gray-800 group-hover:text-red-600 line-clamp-3">
                    {news.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Esports Sidebar */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">Esports</h3>
            <div className="grid grid-cols-3 gap-2">
              {esportsGames.map((game, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded overflow-hidden mb-1">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-[10px] text-gray-700 group-hover:text-red-600 line-clamp-2">
                    {game.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
