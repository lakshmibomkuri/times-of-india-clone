"use client";

import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function SportsMainSection() {
  const headlines = [
    { title: "Gully To Glory: Ramandeep Singh's journey from C...", hasVideo: true },
    { title: "Jos Buttler Exclusive Interview: I owe Jayawarde...", hasVideo: true },
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
    { title: "'Easier said than done': Kohli's brother hits back a...", hasVideo: false }
  ];

  const esportsGames = [
    { title: "Wuthering Waves 3.1...", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=120&h=80&fit=crop" },
    { title: "League of Legends...", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=120&h=80&fit=crop" },
    { title: "Fortnite leaks: Ed Edd n Edd...", image: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=120&h=80&fit=crop" },
    { title: "How to get Bruno Mars in...", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=120&h=80&fit=crop" },
    { title: "Fortnite 2026 collaboration...", image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=120&h=80&fit=crop" },
    { title: "Fortnite leaks: Looney Tunes...", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&h=80&fit=crop" },
    { title: "Fortnite Professor...", image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=120&h=80&fit=crop" },
    { title: "Fortnite leaks: The Office...", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b41?w=120&h=80&fit=crop" },
    { title: "Everything you need to know...", image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=120&h=80&fit=crop" }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Sports</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Featured */}
            <div>
              <div className="group cursor-pointer mb-4">
                <div className="relative aspect-video rounded overflow-hidden mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop"
                    alt="Sports"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <span className="text-white text-sm font-medium">Want Daryl to replicate his ODI performance in T20Is: Santner</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded overflow-hidden mb-2">
                    <Image src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
                  </div>
                  <h3 className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">Crowd chants 'Gambhir haye haye'; Virat Kohli reacts - WATCH</h3>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded overflow-hidden mb-2">
                    <Image src="https://images.unsplash.com/photo-1580099004229-bdf58ddb93c1?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
                  </div>
                  <h3 className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">Tilak Varma update: Batter to reach BCCI CoE today; getting closer to...</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded overflow-hidden mb-2">
                    <Image src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
                  </div>
                  <h3 className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">'Confidence takes a hit': Ashwin flags Kuldeep's WC challenge after NZ...</h3>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video rounded overflow-hidden mb-2">
                    <Image src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=200&h=120&fit=crop" alt="" fill className="object-cover" />
                  </div>
                  <h3 className="text-xs text-gray-700 group-hover:text-red-600 line-clamp-2">BCCI plans central contract overhaul as Virat, Rohit likely to dro...</h3>
                </div>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              {headlines.map((headline, i) => (
                <p key={i} className="text-xs text-gray-700 hover:text-red-600 cursor-pointer flex items-center gap-2">
                  {headline.isLive ? (
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  ) : (
                    <span className="text-gray-400">○</span>
                  )}
                  {headline.title}
                  {headline.hasVideo && <Play className="w-3 h-3 text-red-500 fill-red-500" />}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Esports Sidebar */}
        <div className="lg:col-span-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Esports</h3>
          <div className="grid grid-cols-3 gap-2">
            {esportsGames.map((game, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded overflow-hidden mb-1">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                </div>
                <p className="text-[10px] text-gray-700 group-hover:text-red-600 line-clamp-2">{game.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
