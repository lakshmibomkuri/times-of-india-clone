"use client";
import { useRef, useState } from "react";
import { Header } from "@/components/toi/header";
import { Footer } from "@/components/toi/footer";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Clock, TrendingUp } from "lucide-react";
import { useParams } from "next/navigation";
import { TenninsSection } from "@/components/category/tennis-new-section";
import OtherSportsNews from "@/components/category/OtherSportsNews";
import { PopularSportsSection } from "@/components/category/PopularSportsSection";
import MoreSportsNews from "@/components/category/MoreSportsNews";
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section";
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section";
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section";
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section";
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section";
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section";

const categoryData: Record<string, { title: string; description: string; color: string }> = {
  india: { title: "India News", description: "Latest news from across India", color: "bg-orange-600" },
  world: { title: "World News", description: "International news and global affairs", color: "bg-blue-600" },
  business: { title: "Business", description: "Markets, economy and corporate news", color: "bg-green-600" },
  sports: { title: "Sports", description: "Cricket, football and all sports coverage", color: "bg-red-600" },
  entertainment: { title: "Entertainment", description: "Bollywood, Hollywood and celebrity news", color: "bg-purple-600" },
  tech: { title: "Technology", description: "Tech news, gadgets and reviews", color: "bg-cyan-600" },
  lifestyle: { title: "Lifestyle", description: "Health, fashion and living", color: "bg-pink-600" },
  education: { title: "Education", description: "Education news and updates", color: "bg-indigo-600" },
};

const featuredArticle = {
  title: "Stock market crash: Nifty50 ends below 25,250; BSE Sensex down over 1,000 points - top reasons",
  subtitle: "Indian stock markets experienced a significant crash driven by a sharp selloff in technology stocks",
  image: "https://picsum.photos/seed/featured/800/450",
  author: "Rajesh Kumar",
  date: "Jan 20, 2026",
  readTime: "5 min"
};

const articles = [
  { id: 1, title: "Budget 2026: What middle class wants from FM Sitharaman", date: "Jan 20, 2026", image: "https://picsum.photos/seed/cat1/300/200", views: "125K", readTime: "7 min" },
  { id: 2, title: "FII selling continues: Rs 5,000 crore outflow in January", date: "Jan 19, 2026", image: "https://picsum.photos/seed/cat2/300/200", views: "98K", readTime: "4 min" },
  { id: 3, title: "8th Pay Commission: How much will your salary increase?", date: "Jan 18, 2026", image: "https://picsum.photos/seed/cat3/300/200", views: "234K", readTime: "6 min" },
  { id: 4, title: "Gold prices hit all-time high amid market volatility", date: "Jan 17, 2026", image: "https://picsum.photos/seed/cat4/300/200", views: "89K", readTime: "4 min" },
  { id: 5, title: "Oracle HQ plan faces pushback from employees", date: "Jan 16, 2026", image: "https://picsum.photos/seed/cat5/300/200", views: "45K", readTime: "5 min" },
  { id: 6, title: "Trump threatens 100% tariffs over Greenland deal", date: "Jan 15, 2026", image: "https://picsum.photos/seed/cat6/300/200", views: "112K", readTime: "6 min" },
  { id: 7, title: "Rupee falls to all-time low against US dollar", date: "Jan 14, 2026", image: "https://picsum.photos/seed/cat7/300/200", views: "156K", readTime: "3 min" },
  { id: 8, title: "RBI likely to cut rates in February meeting", date: "Jan 13, 2026", image: "https://picsum.photos/seed/cat8/300/200", views: "78K", readTime: "5 min" },
  { id: 9, title: "Top 10 stocks to watch this week", date: "Jan 12, 2026", image: "https://picsum.photos/seed/cat9/300/200", views: "145K", readTime: "8 min" },
];
const cricketNewsSection = {
  lead: {
    image: "https://picsum.photos/seed/cricket-main/500/300",
    title:
      "‘It’s been chaos’: New Zealand bowling coach on facing Abhishek Sharma, Suryakumar...",
  },

  middleList: [
    "‘He deserves another chance’: Ex-India captain sends...",
    "‘You are like Yuvraj Singh’: Vaibhav Sooryavanshi’s priceless...",
    "‘Politics should be eradicated’: Former Pakistan cricketer...",
    "‘Can’t accommodate…’: ICC on 80–90 Bangladeshi med...",
    "Kane Richardson retires from professional cricket at 34",
  ],

  rightStories: [
    {
      image: "https://picsum.photos/seed/right1/100/70",
      title:
        "Didn’t have much control over my lengths last season: Ravi Bishnoi...",
    },
    {
      image: "https://picsum.photos/seed/right2/100/70",
      title:
        "Jasprit Bumrah Insurance: India’s pace ace remains safest bet in T20s",
    },
    {
      image: "https://picsum.photos/seed/right3/100/70",
      title:
        "WPL: Nat Sciver-Brunt makes history as MI edge RCB in thriller",
    },
    {
      image: "https://picsum.photos/seed/right4/100/70",
      title:
        "‘Pakistan is provoking Bangladesh’: BCCI VP Rajeev Shukla hits out...",
    },
    {
      image: "https://picsum.photos/seed/right5/100/70",
      title:
        "Bangladesh’s last-minute replacement, Scotland name squad for T20 WC...",
    },
    {
      image: "https://picsum.photos/seed/right6/100/70",
      title:
        "‘We do feel for Bangladesh players’: Scotland admit T20 WC entry was...",
    },
  ],

  bottomCards: [
    {
      image: "https://picsum.photos/seed/bot1/300/180",
      title:
        "‘Just quit when the time comes’: KL Rahul opens up on injuries, mental battles...",
    },
    {
      image: "https://picsum.photos/seed/bot2/300/180",
      title:
        "Major League Cricket: Cameron White takes charge as San Francisco...",
    },
    {
      image: "https://picsum.photos/seed/bot3/300/180",
      title:
        "‘Just a matter of time’: Scotland confident visas will clear for T20 World Cup...",
    },
    {
      image: "https://picsum.photos/seed/bot4/300/180",
      title:
        "‘I am only just getting started’: Hardik Pandya reflects on decade-long journey...",
    },
  ],
};
const footballNewsSection = {
  lead: {
    image:
      "https://images.pexels.com/photos/1595396/pexels-photo-1595396.jpeg?auto=compress&cs=tinysrgb&w=700",
    title: "Manchester United stuns Liverpool in a thrilling 3-2 victory",
  },
  middleList: [
    "Real Madrid beats Barcelona 2-1 in El Clasico",
    "Messi sets new goal-scoring record in La Liga",
    "Premier League title race heats up as City draws with Chelsea",
    "Cristiano Ronaldo scores twice as Al Nassr wins",
    "Arsenal climbs to top 4 after a 4-0 victory",
  ],
  bottomCards: [
    {
      image:
        "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Top 5 transfers that shook European football this season",
    },
    {
      image:
        "https://images.pexels.com/photos/1058958/pexels-photo-1058958.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Champions League quarter-finals: Teams to watch",
    },
    {
      image:
        "https://images.pexels.com/photos/209769/pexels-photo-209769.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "World Cup 2026: Qualifiers underway across continents",
    },
    {
      image:
        "https://images.pexels.com/photos/1100765/pexels-photo-1100765.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Top young football talents to watch this year",
    },
  ],
};
const nflNewsSection = {
  lead: {
    image:
      "https://images.pexels.com/photos/4214035/pexels-photo-4214035.jpeg?auto=compress&cs=tinysrgb&w=700",
    title: "Kansas City Chiefs edge past Buffalo Bills in overtime thriller",
  },
  middleList: [
    "Super Bowl 2026 predictions: Who will make it to the big game?",
    "Tom Brady announces retirement from NFL at age 45",
    "Rookie quarterbacks making waves in Week 4",
    "NFL playoff picture: Teams fighting for top seeds",
    "Defensive stars dominating the league this season",
  ],
  bottomCards: [
    {
      image:
        "https://images.pexels.com/photos/4226120/pexels-photo-4226120.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Top 10 NFL plays of the week you can’t miss",
    },
    {
      image:
        "https://images.pexels.com/photos/59944/american-football-sport-football-field-59944.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Rivalry games heating up the NFL season",
    },
    {
      image:
        "https://images.pexels.com/photos/1058966/pexels-photo-1058966.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Injury updates: Key players out this week",
    },
    {
      image:
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "NFL draft 2026: Prospects to watch",
    },
  ],
  rightSideCards: [
    {
      image:
        "https://images.pexels.com/photos/1255147/pexels-photo-1255147.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "NFL legend discusses top strategies for upcoming season",
    },
    {
      image:
        "https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Fans celebrate big wins across stadiums this week",
    },
    {
      image:
        "https://images.pexels.com/photos/267335/pexels-photo-267335.jpeg?auto=compress&cs=tinysrgb&w=300",
      title: "Top defensive plays that turned the game around",
    },
  ],
};

const nbaNewsSection = {
  lead: {
    image: "https://images.pexels.com/photos/70274/pexels-photo-70274.jpeg?auto=compress&cs=tinysrgb&w=700",
    title:
      "LeBron James leads Lakers to a thrilling overtime win against the Warriors",
  },

  middleList: [
    "Stephen Curry scores 40 points to push Golden State past Suns",
    "Bucks dominate the Nets in a high-scoring clash",
    "Anthony Davis shines as Lakers secure back-to-back victories",
    "Top rookies making their mark early this NBA season",
    "Eastern Conference standings heating up as playoffs approach",
  ],

  rightStories: [
    {
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Kevin Durant discusses his playoff mindset ahead of Finals",
    },
    {
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Luka Doncic dazzles fans with triple-double against Rockets",
    },
    {
      image: "https://images.pexels.com/photos/1099196/pexels-photo-1099196.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "NBA trade rumors heat up as deadline approaches",
    },
    {
      image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Celtics’ defense proves unstoppable in latest matchup",
    },
    {
      image: "https://images.pexels.com/photos/1100774/pexels-photo-1100774.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Top 10 dunks of the week: NBA highlights",
    },
    {
      image: "https://images.pexels.com/photos/1100765/pexels-photo-1100765.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Injury report: Key players to watch for upcoming games",
    },
  ],

  bottomCards: [
    {
      image: "https://images.pexels.com/photos/3953092/pexels-photo-3953092.jpeg?auto=compress&cs=tinysrgb&w=300",
      title:
        "Inside the locker room: How top NBA teams prepare for playoff intensity",
    },
    {
      image: "https://images.pexels.com/photos/4214036/pexels-photo-4214036.jpeg?auto=compress&cs=tinysrgb&w=300",
      title:
        "NBA All-Star voting heats up as fan favorites battle for a spot",
    },
    {
      image: "https://images.pexels.com/photos/3885790/pexels-photo-3885790.jpeg?auto=compress&cs=tinysrgb&w=300",
      title:
        "Rising stars: 5 young players changing the NBA landscape this season",
    },
    {
      image: "https://images.pexels.com/photos/1457367/pexels-photo-1457367.jpeg?auto=compress&cs=tinysrgb&w=300",
      title:
        "Coaching spotlight: Strategies behind the league’s best defensive teams",
    },
  ],
};
const badmintonNewsSection = {
  lead: {
    image: "https://picsum.photos/seed/cricket-main/500/300",
    title:
      "‘It’s been chaos’: New Zealand bowling coach on facing Abhishek Sharma, Suryakumar...",
  },

  middleList: [
    "‘He deserves another chance’: Ex-India captain sends...",
    "‘You are like Yuvraj Singh’: Vaibhav Sooryavanshi’s priceless...",
    "‘Politics should be eradicated’: Former Pakistan cricketer...",
    "‘Can’t accommodate…’: ICC on 80–90 Bangladeshi med...",
    "Kane Richardson retires from professional cricket at 34",
  ],

  rightStories: [
    {
      image: "https://picsum.photos/seed/right1/100/70",
      title:
        "Didn’t have much control over my lengths last season: Ravi Bishnoi...",
    },
    {
      image: "https://picsum.photos/seed/right2/100/70",
      title:
        "Jasprit Bumrah Insurance: India’s pace ace remains safest bet in T20s",
    },
    {
      image: "https://picsum.photos/seed/right3/100/70",
      title:
        "WPL: Nat Sciver-Brunt makes history as MI edge RCB in thriller",
    },
    {
      image: "https://picsum.photos/seed/right4/100/70",
      title:
        "‘Pakistan is provoking Bangladesh’: BCCI VP Rajeev Shukla hits out...",
    },
    {
      image: "https://picsum.photos/seed/right5/100/70",
      title:
        "Bangladesh’s last-minute replacement, Scotland name squad for T20 WC...",
    },
    {
      image: "https://picsum.photos/seed/right6/100/70",
      title:
        "‘We do feel for Bangladesh players’: Scotland admit T20 WC entry was...",
    },
  ],

  bottomCards: [
    {
      image: "https://picsum.photos/seed/bot1/300/180",
      title:
        "‘Just quit when the time comes’: KL Rahul opens up on injuries, mental battles...",
    },
    {
      image: "https://picsum.photos/seed/bot2/300/180",
      title:
        "Major League Cricket: Cameron White takes charge as San Francisco...",
    },
    {
      image: "https://picsum.photos/seed/bot3/300/180",
      title:
        "‘Just a matter of time’: Scotland confident visas will clear for T20 World Cup...",
    },
    {
      image: "https://picsum.photos/seed/bot4/300/180",
      title:
        "‘I am only just getting started’: Hardik Pandya reflects on decade-long journey...",
    },
  ],
};

const nhlNewsSection = {
  lead: {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    title: "Bruins edge past Canadiens in a nail‑biter overtime showdown",
  },

  middleList: [
    "Stars’ power play shines in victory over Predators",
    "Ovechkin reaches career milestone with 800th goal",
    "Rangers’ goalie posts shutout in crucial divisional game",
    "Lightning trade update: roster moves shake up standings",
    "Golden Knights maintain unbeaten home stretch",
  ],

  rightStories: [
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      title:
        "Top defensive plays from last night’s NHL action",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=90",
      title:
        "Goalie spotlight: making sense of elite netminding performances",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      title:
        "Rookie forward’s breakout game electrifies fans",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      title:
        "Injury updates: key players expected back soon",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      title:
        "Historic rivalry renews with dramatic confrontation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      title:
        "Stat leaders: who’s topping NHL charts this week",
    },
  ],

  bottomCards: [
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80",
      title:
        "Islanders stun Penguins with late third‑period goal",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80",
      title:
        "Preview: Can the Avalanche keep their winning streak alive?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
      title:
        "Coach interview: adjusting strategy mid‑season",
    },
    {
      image:
        "https://images.unsplash.com/photo-1490150395788-1fe12b141fa5?auto=format&fit=crop&w=400&q=80",
      title:
        "Fan reactions: best moments from last weekend",
    },
  ],
};
const EsportsNewsSection = {
  lead: {
    image: "https://picsum.photos/seed/cricket-main/500/300",
    title:
      "‘It’s been chaos’: New Zealand bowling coach on facing Abhishek Sharma, Suryakumar...",
  },

  middleList: [
    "‘He deserves another chance’: Ex-India captain sends...",
    "‘You are like Yuvraj Singh’: Vaibhav Sooryavanshi’s priceless...",
    "‘Politics should be eradicated’: Former Pakistan cricketer...",
    "‘Can’t accommodate…’: ICC on 80–90 Bangladeshi med...",
    "Kane Richardson retires from professional cricket at 34",
  ],

  rightStories: [
    {
      image: "https://picsum.photos/seed/right1/100/70",
      title:
        "Didn’t have much control over my lengths last season: Ravi Bishnoi...",
    },
    {
      image: "https://picsum.photos/seed/right2/100/70",
      title:
        "Jasprit Bumrah Insurance: India’s pace ace remains safest bet in T20s",
    },
    {
      image: "https://picsum.photos/seed/right3/100/70",
      title:
        "WPL: Nat Sciver-Brunt makes history as MI edge RCB in thriller",
    },
    {
      image: "https://picsum.photos/seed/right4/100/70",
      title:
        "‘Pakistan is provoking Bangladesh’: BCCI VP Rajeev Shukla hits out...",
    },
    {
      image: "https://picsum.photos/seed/right5/100/70",
      title:
        "Bangladesh’s last-minute replacement, Scotland name squad for T20 WC...",
    },
    {
      image: "https://picsum.photos/seed/right6/100/70",
      title:
        "‘We do feel for Bangladesh players’: Scotland admit T20 WC entry was...",
    },
  ],

  bottomCards: [
    {
      image: "https://picsum.photos/seed/bot1/300/180",
      title:
        "‘Just quit when the time comes’: KL Rahul opens up on injuries, mental battles...",
    },
    {
      image: "https://picsum.photos/seed/bot2/300/180",
      title:
        "Major League Cricket: Cameron White takes charge as San Francisco...",
    },
    {
      image: "https://picsum.photos/seed/bot3/300/180",
      title:
        "‘Just a matter of time’: Scotland confident visas will clear for T20 World Cup...",
    },
    {
      image: "https://picsum.photos/seed/bot4/300/180",
      title:
        "‘I am only just getting started’: Hardik Pandya reflects on decade-long journey...",
    },
  ],
};
const wweNewsSection = {
  lead: {
    image:
      "https://images.unsplash.com/photos/a-couple-of-people-that-are-wrestling-in-a-ring-tpFAubPKw7Y?auto=format&fit=crop&w=800&q=80",
    title:
      "Epic wrestling showdown electrizes crowd with unforgettable finishing move",
  },

  middleList: [
    "Championship defended in dramatic main event",
    "Veteran returns to the ring after long absence",
    "Tag team heel turn shocks wrestling universe",
    "Rising star dominates live crowd match",
    "Heroic comeback earns standing ovation",
  ],

  rightStories: [
    {
      image:
        "https://images.unsplash.com/photos/a-couple-of-people-that-are-wrestling-in-a-ring-tpFAubPKw7Y?auto=format&fit=crop&w=200&q=80",
      title: "High‑impact action thrills live arena audience",
    },
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-in-a-wrestling-match-with-a-crowd-watching-uHx-_x-WaJs?auto=format&fit=crop&w=200&q=80",
      title: "Two wrestlers clash intensely in crowd match",
    },
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-grappling-intensely-on-a-mat-D100o5TDCys?auto=format&fit=crop&w=200&q=80",
      title: "Grappling duel becomes instant highlight reel",
    },
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-in-a-wrestling-match-with-a-crowd-watching-uHx-_x-WaJs?auto=format&fit=crop&w=200&q=80",
      title: "Crowd roars as rivals trade signature moves",
    },
    {
      image:
        "https://images.unsplash.com/photos/a-couple-of-people-that-are-wrestling-in-a-ring-tpFAubPKw7Y?auto=format&fit=crop&w=200&q=80",
      title: "Arena erupts with chant after thrilling twist",
    },
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-grappling-intensely-on-a-mat-D100o5TDCys?auto=format&fit=crop&w=200&q=80",
      title: "Tactical takedown heats up mid‑show segment",
    },
  ],

  bottomCards: [
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-in-a-wrestling-match-with-a-crowd-watching-uHx-_x-WaJs?auto=format&fit=crop&w=400&q=80",
      title:
        "Backstage insights: Wrestler strategies ahead of title defense",
    },
    {
      image:
        "https://images.unsplash.com/photos/a-couple-of-people-that-are-wrestling-in-a-ring-tpFAubPKw7Y?auto=format&fit=crop&w=400&q=80",
      title:
        "Match recap: Best moments from last night’s main event",
    },
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-grappling-intensely-on-a-mat-D100o5TDCys?auto=format&fit=crop&w=400&q=80",
      title:
        "Analyst breakdown: key moves that defined the bout",
    },
    {
      image:
        "https://images.unsplash.com/photos/two-wrestlers-in-a-wrestling-match-with-a-crowd-watching-uHx-_x-WaJs?auto=format&fit=crop&w=400&q=80",
      title:
        "Fan reactions: crowd highlights you might have missed",
    },
  ],
};
const mlbNewsSection = {
  lead: {
    image:
      "https://images.unsplash.com/photos/people-playing-baseball-on-field-during-daytime-Jxr2dJZ656Q?auto=format&fit=crop&w=800&q=80",
    title: "Thrilling MLB matchup sees walk‑off victory in late inning showdown",
  },

  middleList: [
    "Dodgers extend winning streak behind dominant pitching performance",
    "Star slugger belts 2 home runs in explosive offensive showing",
    "Yankees rally late to clinch key divisional game",
    "MLB lockout rumors swirl as owners push for new salary cap talks",
    "Field of Dreams game returns with cinematic matchup excitement", // based on news context :contentReference[oaicite:1]{index=1}
  ],

  rightStories: [
    {
      image:
        "https://images.unsplash.com/photos/baseball-players-playing-baseball-on-baseball-field-ZpQqbXGZD5o?auto=format&fit=crop&w=200&q=80",
      title: "Epic double play electrifies crowd and halts rally",
    },
    {
      image:
        "https://images.unsplash.com/photos/baseball-players-on-field-KhVKQWINFvQ?auto=format&fit=crop&w=200&q=80",
      title: "Pitcher duels for complete game in gritty mound performance",
    },
    {
      image:
        "https://images.unsplash.com/photos/people-playing-baseball-on-field-during-daytime-tz_mvwuJGWs?auto=format&fit=crop&w=200&q=80",
      title: "Crowd cheers as bat cracks fresh off big hit",
    },
    {
      image:
        "https://images.unsplash.com/photos/baseball-players-on-field-KhVKQWINFvQ?auto=format&fit=crop&w=200&q=80",
      title: "Defensive gem saves run, sparks team momentum",
    },
    {
      image:
        "https://images.unsplash.com/photos/people-playing-baseball-on-field-during-daytime-Jxr2dJZ656Q?auto=format&fit=crop&w=200&q=80",
      title: "Starter exits with career‑high strikeouts",
    },
    {
      image:
        "https://images.unsplash.com/photos/baseball-players-on-field-KhVKQWINFvQ?auto=format&fit=crop&w=200&q=80",
      title: "Bullpen shines in critical relief appearance",
    },
  ],

  bottomCards: [
    {
      image:
        "https://images.unsplash.com/photos/people-playing-baseball-on-field-during-daytime-Jxr2dJZ656Q?auto=format&fit=crop&w=400&q=80",
      title:
        "MLB midseason outlook: teams jockeying for playoff positioning",
    },
    {
      image:
        "https://images.unsplash.com/photos/baseball-players-playing-baseball-on-baseball-field-ZpQqbXGZD5o?auto=format&fit=crop&w=400&q=80",
      title:
        "All‑Star Game previews: top talents selected from around the league",
    },
    {
      image:
        "https://images.unsplash.com/photos/people-playing-baseball-on-field-during-daytime-tz_mvwuJGWs?auto=format&fit=crop&w=400&q=80",
      title:
        "Roster moves and trades shaking up the pennant races",
    },
    {
      image:
        "https://images.unsplash.com/photos/baseball-players-on-field-KhVKQWINFvQ?auto=format&fit=crop&w=400&q=80",
      title:
        "World Series champions look to defend title in another dominant run",
    },
  ],
};
const mmaNewsSection = {
  lead: {
    image: "https://picsum.photos/seed/cricket-main/500/300",
    title:
      "‘It’s been chaos’: New Zealand bowling coach on facing Abhishek Sharma, Suryakumar...",
  },

  middleList: [
    "‘He deserves another chance’: Ex-India captain sends...",
    "‘You are like Yuvraj Singh’: Vaibhav Sooryavanshi’s priceless...",
    "‘Politics should be eradicated’: Former Pakistan cricketer...",
    "‘Can’t accommodate…’: ICC on 80–90 Bangladeshi med...",
    "Kane Richardson retires from professional cricket at 34",
  ],

  rightStories: [
    {
      image: "https://picsum.photos/seed/right1/100/70",
      title:
        "Didn’t have much control over my lengths last season: Ravi Bishnoi...",
    },
    {
      image: "https://picsum.photos/seed/right2/100/70",
      title:
        "Jasprit Bumrah Insurance: India’s pace ace remains safest bet in T20s",
    },
    {
      image: "https://picsum.photos/seed/right3/100/70",
      title:
        "WPL: Nat Sciver-Brunt makes history as MI edge RCB in thriller",
    },
    {
      image: "https://picsum.photos/seed/right4/100/70",
      title:
        "‘Pakistan is provoking Bangladesh’: BCCI VP Rajeev Shukla hits out...",
    },
    {
      image: "https://picsum.photos/seed/right5/100/70",
      title:
        "Bangladesh’s last-minute replacement, Scotland name squad for T20 WC...",
    },
    {
      image: "https://picsum.photos/seed/right6/100/70",
      title:
        "‘We do feel for Bangladesh players’: Scotland admit T20 WC entry was...",
    },
  ],

  bottomCards: [
    {
      image: "https://picsum.photos/seed/bot1/300/180",
      title:
        "‘Just quit when the time comes’: KL Rahul opens up on injuries, mental battles...",
    },
    {
      image: "https://picsum.photos/seed/bot2/300/180",
      title:
        "Major League Cricket: Cameron White takes charge as San Francisco...",
    },
    {
      image: "https://picsum.photos/seed/bot3/300/180",
      title:
        "‘Just a matter of time’: Scotland confident visas will clear for T20 World Cup...",
    },
    {
      image: "https://picsum.photos/seed/bot4/300/180",
      title:
        "‘I am only just getting started’: Hardik Pandya reflects on decade-long journey...",
    },
  ],
};




// const sportsData = {
//   liveMatches: [
//     {
//       series: "3rd ODI • England tour of Sri Lanka",
//       teamA: { code: "ENG", flag: "https://flagcdn.com/w40/gb.png" },
//       teamB: { code: "SL", flag: "https://flagcdn.com/w40/lk.png" },
//       score: "ENG 275/3",
//       status: "LIVE",
//       time: "45.2 overs",
//     },
//     {
//       series: "1st T20I • West Indies tour of South Africa",
//       teamA: { code: "SA", flag: "https://flagcdn.com/w40/za.png" },
//       teamB: { code: "WI", flag: "https://flagcdn.com/w40/jm.png" },
//       score: "Starts at 7:00 PM",
//       status: "UPCOMING",
//       time: "Today",
//     },
//     {
//       series: "4th T20I • New Zealand tour of India",
//       teamA: { code: "IND", flag: "https://flagcdn.com/w40/in.png" },
//       teamB: { code: "NZ", flag: "https://flagcdn.com/w40/nz.png" },
//       score: "IND won by 6 wkts",
//       status: "COMPLETED",
//     },
//     {
//       series: "2nd Test • Australia tour of Pakistan",
//       teamA: { code: "AUS", flag: "https://flagcdn.com/w40/au.png" },
//       teamB: { code: "PAK", flag: "https://flagcdn.com/w40/pk.png" },
//       score: "PAK 145/4",
//       status: "LIVE",
//       time: "Day 2 • Session 3",
//     },
//     {
//       series: "Final • Big Bash League",
//       teamA: { code: "SYD", flag: "https://flagcdn.com/w40/au.png" },
//       teamB: { code: "MEL", flag: "https://flagcdn.com/w40/au.png" },
//       score: "Match starts in 2h",
//       status: "UPCOMING",
//       time: "7:30 PM AEST",
//     },
//     {
//       series: "Semi-Final • ICC U19 World Cup 2026",
//       teamA: { code: "IND", flag: "https://flagcdn.com/w40/in.png" },
//       teamB: { code: "BAN", flag: "https://flagcdn.com/w40/bd.png" },
//       score: "IND won by 42 runs",
//       status: "COMPLETED",
//     },
//     {
//       series: "Qualifier • SA20 League",
//       teamA: { code: "JSK", flag: "https://flagcdn.com/w40/za.png" },
//       teamB: { code: "SEC", flag: "https://flagcdn.com/w40/za.png" },
//       score: "JSK 112/2",
//       status: "LIVE",
//       time: "13.4 overs",
//     },
//   ],
//   lead: {
//     image: "https://picsum.photos/seed/lead/600/360",
//     title: "U19 WC: Vihaan Malhotra slams century vs Zimbabwe",
//     desc:
//       "India vs Zimbabwe Live Score, U19 World Cup 2026: Zimbabwe won the toss...",
//   },

//   middle: [
//     {
//       image: "https://picsum.photos/seed/m1/300/180",
//       title:
//         "The day Djokovic broke Federer–Nadal duopoly — and began rewriting tennis history",
//     },
//     {
//       image: "https://picsum.photos/seed/m2/300/180",
//       title:
//         "Politics should be eradicated: Ex-Pakistan cricketer issues blunt warning",
//     },
//   ],

//   rightAd: {
//     image: "https://picsum.photos/seed/ad/300/600",
//   },

//   bottom: [
//     {
//       image: "https://picsum.photos/seed/b1/300/200",
//       title: "ICC U19 World Cup 2026 Live Score: Pakistan vs New Zealand",
//     },
//     {
//       image: "https://picsum.photos/seed/b2/300/200",
//       title: "It’s been chaos: NZ bowling coach on facing Abhishek Sharma",
//     },
//     {
//       image: "https://picsum.photos/seed/b3/300/200",
//       title: "He deserves another chance: Ex-India captain backs youngster",
//     },
//   ],
// };

const sportsData = {
  liveMatches: [
    {
      series: "3rd ODI • England tour of Sri Lanka",
      teamA: { code: "ENG", flag: "https://flagcdn.com/w40/gb.png" },
      teamB: { code: "SL", flag: "https://flagcdn.com/w40/lk.png" },
      score: "ENG 275/3",
      status: "LIVE",
      time: "45.2 overs",
    },
    {
      series: "1st T20I • West Indies tour of South Africa",
      teamA: { code: "SA", flag: "https://flagcdn.com/w40/za.png" },
      teamB: { code: "WI", flag: "https://flagcdn.com/w40/jm.png" },
      score: "Starts at 7:00 PM",
      status: "UPCOMING",
      time: "Today",
    },
    {
      series: "4th T20I • New Zealand tour of India",
      teamA: { code: "IND", flag: "https://flagcdn.com/w40/in.png" },
      teamB: { code: "NZ", flag: "https://flagcdn.com/w40/nz.png" },
      score: "IND 180/4 • NZ 154/7 • IND won by 26 runs",
      status: "COMPLETED",
    },
    {
      series: "2nd Test • Australia tour of Pakistan",
      teamA: { code: "AUS", flag: "https://flagcdn.com/w40/au.png" },
      teamB: { code: "PAK", flag: "https://flagcdn.com/w40/pk.png" },
      score: "PAK 145/4",
      status: "LIVE",
      time: "Day 2 • Session 3",
    },
    {
      series: "Final • Big Bash League",
      teamA: { code: "SYD", flag: "https://flagcdn.com/w40/au.png" },
      teamB: { code: "MEL", flag: "https://flagcdn.com/w40/au.png" },
      score: "Match starts in 2h",
      status: "UPCOMING",
      time: "7:30 PM AEST",
    },
    {
      series: "Semi-Final • ICC U19 World Cup 2026",
      teamA: { code: "IND", flag: "https://flagcdn.com/w40/in.png" },
      teamB: { code: "BAN", flag: "https://flagcdn.com/w40/bd.png" },
      score: "IND 188/6 • BAN 146/9 • IND won by 42 runs",
      status: "COMPLETED",
    },
    {
      series: "Qualifier • SA20 League",
      teamA: { code: "JSK", flag: "https://flagcdn.com/w40/za.png" },
      teamB: { code: "SEC", flag: "https://flagcdn.com/w40/za.png" },
      score: "JSK 112/2",
      status: "LIVE",
      time: "13.4 overs",
    },
  ],

  lead: {
    image: "https://picsum.photos/seed/lead/600/360",
    title: "U19 WC: Vihaan Malhotra slams century vs Zimbabwe",
    desc:
      "India vs Zimbabwe Live Score, U19 World Cup 2026: Zimbabwe won the toss...",
  },

  middle: [
    {
      image: "https://picsum.photos/seed/m1/300/180",
      title:
        "The day Djokovic broke Federer–Nadal duopoly — and began rewriting tennis history",
    },
    {
      image: "https://picsum.photos/seed/m2/300/180",
      title:
        "Politics should be eradicated: Ex-Pakistan cricketer issues blunt warning",
    },
  ],

  rightAd: {
    image: "https://picsum.photos/seed/ad/300/600",
  },

  bottom: [
    {
      image: "https://picsum.photos/seed/b1/300/200",
      title: "ICC U19 World Cup 2026 Live Score: Pakistan vs New Zealand",
    },
    {
      image: "https://picsum.photos/seed/b2/300/200",
      title: "It’s been chaos: NZ bowling coach on facing Abhishek Sharma",
    },
    {
      image: "https://picsum.photos/seed/b3/300/200",
      title: "He deserves another chance: Ex-India captain backs youngster",
    },
  ],
};

type Video = {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
};
const videos: Video[] = [
  {
    id: 1,
    title:
      "Why Gautam Gambhir is not the ONLY problem | Greenstone Lobo predicts India",
    duration: "07:13",
    thumbnail:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title:
      "Why Gautam Gambhir is not the ONLY problem | Greenstone...",
    duration: "07:13",
    thumbnail:
      "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title:
      "Why Tilak Varma will miss T20Is vs New Zealand | Comeback...",
    duration: "03:51",
    thumbnail:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title:
      "Unreal scenes after Sunrisers Eastern Cape win third SA20 title",
    duration: "20:00",
    thumbnail:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title:
      "Keshav Maharaj press conference: Distraught Pretoria Capitals...",
    duration: "03:54",
    thumbnail:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title:
      "Ravi Bishnoi press conference: on reading conditions, bowling...",
    duration: "05:01",
    thumbnail:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title:
      "Rachin Ravindra press conference: on adapting in India &...",
    duration: "06:43",
    thumbnail:
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=800&q=80",
  },
];
export default function CategoryPage() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const CARD_WIDTH = 296; // min-w + gap

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
    setActive(index);
  };

  const next = () => scrollTo(Math.min(active + 1, sportsData.liveMatches.length - 1));
  const prev = () => scrollTo(Math.max(active - 1, 0));
  const params = useParams();
  const categorySlug = params.category as string;
  const category = categoryData[categorySlug] || { title: categorySlug, description: "", color: "bg-gray-600" };
  const quickLinks = [
    "WPL POINTS TABLE 2026",
    "WPL 2026 PURPLE CAP",
    "WPL 2026 TEAMS",
    "NBA LATEST NEWS",
    "WPL 2026 ORANGE CAP",
    "WPL LIVE SCORE",
    "NFL LATEST NEWS",
    "WPL 2026 SCHEDULE",
    "WPL 2026 RESULTS",
    "WPL 2026 STATS",
    "ICC MENS T20 WORLD CUP…",
    "WPL 2026",
  ];
  const youMayLikeData = [
    {
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "3, 4 BHK from ₹1.40 Cr* by Tridasa Realty",
      title: (
        <>
          3, 4 BHK from{" "}
          <span className="underline cursor-pointer">₹1.40 Cr*</span> by Tridasa Realty
        </>
      ),
      description: (
        <>
          Swimming pool, gym, badminton court, squash court, mini{" "}
          <span className="underline cursor-pointer">theatre</span>
        </>
      ),
      brand: "Tridasa Realty Private Limited",
    },
    {
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Urbanrise 3 BHK at 84 Lakhs* (All Incl.)",
      title: "Urbanrise 3 BHK at 84 Lakhs* (All Incl.)",
      description: "Avail the No-GST on ready-to-move-in 2 and 3 BHK residences",
      brand: "Urbanrise",
    },
    {
      img: "https://images.pexels.com/photos/1181631/pexels-photo-1181631.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Only 2% Traders Know this Powerful Intraday Strategy",
      title: "Only 2% Traders Know this Powerful Intraday Strategy",
      description: "Learn elite scalping strategy from Mr. Pankaj — 6+ years market expert.",
      brand: "TradeWise",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Left Ad Strip */}
      {/* <div className="fixed left-0 top-0 w-[120px] h-full bg-black z-40 hidden xl:block">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-white text-center p-3">
            <h3 className="text-sm font-bold leading-tight">Financial<br />Backing<br />for the<br />Bold.</h3>
            <button className="bg-red-500 text-white text-[10px] px-3 py-1 mt-3 rounded">Apply Now</button>
          </div>
        </div>
      </div> */}

      {/* Right Ad Strip */}
      {/* <div className="fixed right-0 top-0 w-[120px] h-full bg-black z-40 hidden xl:block">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-white text-center p-3">
            <h3 className="text-sm font-bold leading-tight">Financial<br />Backing<br />for the<br />Bold.</h3>
            <button className="bg-red-500 text-white text-[10px] px-3 py-1 mt-3 rounded">Apply Now</button>
          </div>
        </div>
      </div> */}

      {/* Main Content Area */}
      <div className="xl:mx-[145px]">
        <Header />

        <main className="bg-white">
          <div>
            {/* main live new curosol */}
            <section className="mt-5 rounded-lg max-w-[980px]">

              {/* ================= TITLE ================= */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-m font-bold tracking-wide">
                  SPORTS NEWS
                </h2>
              </div>

              {/* ================= LIVE MATCH STRIP ================= */}
              <div className="relative mb-6 rounded-xl overflow-hidden p-3">

                {/* BLUE–BLACK BANNER */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-black" />

                <div className="relative">

                  {/* SCROLL AREA */}
                  <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-hidden scroll-smooth p-3"
                  >
                    {sportsData.liveMatches.map((m, i) => (
                      <div
                        key={i}
                        className={`min-w-[300px] rounded-lg overflow-hidden text-white border border-white/10 shadow-md${m.status === "LIVE"
                          ? "bg-pink-600"
                          : m.status === "COMPLETED"
                            ? "bg-green-600"
                            : "bg-red-600"
                          }`}
                      >
                        {/* CARD BODY */}
                        <div className="p-4">

                          {/* STATUS BADGE */}
                          <span className="text-[10px] px-2 py-[2px] rounded font-bold inline-block bg-white/30">
                            {m.status}
                          </span>

                          {/* TEAMS */}
                          <div className="flex items-center gap-3 mt-3">
                            <div className="flex items-center gap-2">
                              <Image src={m.teamA.flag} alt="" width={24} height={16} />
                              <span className="font-semibold">{m.teamA.code}</span>
                            </div>

                            <span className="text-xs text-white/70">vs</span>

                            <div className="flex items-center gap-2">
                              <Image src={m.teamB.flag} alt="" width={24} height={16} />
                              <span className="font-semibold">{m.teamB.code}</span>
                            </div>
                          </div>

                          {/* SCORE / TIME */}
                          <p className="text-lg font-bold mt-2">{m.score}</p>
                          <p className="text-xs mt-1">{m.series}</p>
                          {m.time && <p className="text-xs text-white/80 mt-1">{m.time}</p>}
                        </div>

                        {/* ACTION BAR */}
                        <div className="bg-white px-4 py-2 flex justify-between items-center text-xs text-black font-semibold">
                          {m.status === "UPCOMING" && (
                            <button className="hover:underline">Match Cards</button>
                          )}
                          {m.status === "COMPLETED" && (
                            <button className="hover:underline">View Scorecard</button>
                          )}
                          {m.status === "LIVE" && (
                            <div className="flex gap-2">
                              <button className="hover:underline">Live</button>
                              <button className="hover:underline">View Scorecard</button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                  </div>

                  {/* DOTS */}
                  <div className="flex justify-center gap-2 mt-4">
                    {sportsData.liveMatches.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={`w-2 h-2 rounded-full ${active === i ? "bg-white" : "bg-white/40"
                          }`}
                      />
                    ))}
                  </div>
                </div>
                {/* ARROWS (BOTTOM RIGHT) */}
                <div className="absolute bottom-2 right-4 flex gap-2">
                    <button
                      onClick={prev}
                      className="bg-white/90 text-black rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className="bg-white/90 text-black rounded-full w-8 h-8 flex items-center justify-center"
                    >
                      ›
                    </button>
                  </div>
              </div>


              {/* ================= MAIN CONTENT ================= */}
              <div className="grid grid-cols-12 gap-6">

                {/* ===== LEFT SIDE ===== */}
                <div className="col-span-9">

                  <div className="grid grid-cols-12 gap-6">

                    {/* BIG STORY */}
                    <div className="col-span-7">
                      <Image
                        src={sportsData.lead.image}
                        alt=""
                        width={700}
                        height={400}
                        className="rounded-lg mb-3"
                      />
                      <h3 className="text-[18px] font-bold leading-snug mb-2">
                        {sportsData.lead.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {sportsData.lead.desc}
                      </p>
                    </div>

                    {/* MIDDLE STACK */}
                    <div className="col-span-5 space-y-4">
                      {sportsData.middle.map((item, i) => (
                        <div key={i}>
                          <Image
                            src={item.image}
                            alt=""
                            width={400}
                            height={240}
                            className="rounded mb-2"
                          />
                          <p className="text-sm font-semibold leading-snug">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* ===== RIGHT SIDE AD ===== */}
                <div className="col-span-3">
                  <Image
                    src={sportsData.rightAd.image}
                    alt=""
                    width={300}
                    height={600}
                  />
                </div>

                {/* ===== BOTTOM STORIES ===== */}
                <div className="grid grid-cols-3 gap-4 mt-6 col-span-12">
                  {sportsData.bottom.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={120}
                        height={80}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </section>
            {/* videoes section */}
            <section className="bg-black px-6 py-6 text-white mt-5">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  Sports Videos <span className="opacity-60">›</span>
                </h2>

                <div className="flex gap-6 text-sm text-gray-400">
                  <button className="font-semibold text-white">Featured</button>
                  <button className="hover:text-white">Cricket</button>
                  <button className="hover:text-white">Football</button>
                  <button className="hover:text-white">Tennis</button>
                  <button className="hover:text-white">Top Tennis Videos</button>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-[1.4fr_1fr] gap-6">
                {/* Featured Video */}
                <div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={videos[0].thumbnail}
                      alt={videos[0].title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <span className="absolute bottom-2 left-2 rounded bg-red-600 px-2 py-1 text-xs font-semibold">
                      ▶ {videos[0].duration}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug">
                    {videos[0].title}
                  </h3>
                </div>

                {/* Right Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {videos.slice(1).map((video) => (
                    <div key={video.id}>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <span className="absolute bottom-1 left-1 rounded bg-red-600 px-1.5 py-0.5 text-[11px] font-semibold">
                          ▶ {video.duration}
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-snug text-gray-200">
                        {video.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* cricket news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">CRICKET NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={cricketNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {cricketNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {cricketNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== cricketNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {cricketNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {cricketNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>
            {/* foot ball news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">FOOT BALL NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={footballNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-[250px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {footballNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {footballNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== footballNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {footballNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {/* Sponsored Ad */}
                  <div className="border rounded-lg p-3 bg-white shadow-sm">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
                      Sponsored
                    </p>

                    <Image
                      src="/ads/cricket-ad.jpg" // dummy ad image
                      alt="Ad"
                      width={300}
                      height={180}
                      className="rounded mb-2"
                    />

                    <h3 className="text-sm font-semibold leading-snug mb-1">
                      Win Big This IPL Season 🏏
                    </h3>

                    <p className="text-xs text-gray-600 mb-2">
                      Join millions playing fantasy cricket. Cash prizes every match.
                    </p>

                    <button className="w-full text-sm bg-green-600 text-white py-1.5 rounded hover:bg-green-700 transition">
                      Play Now
                    </button>
                  </div>
                </aside>

              </div>
            </section>

            {/* nlf news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">NLF NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={nflNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-[250px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {nflNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {nflNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== nflNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {nflNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full h-[100px]"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {nflNewsSection.rightSideCards.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            {/* nba news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">NBA NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={nbaNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {nbaNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {nbaNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== nbaNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {nbaNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full h-[100px]"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {nbaNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0 h-[60px]"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>
            <TenninsSection />
            {/* add section */}
            <section className="max-w-full bg-[#dca6a4] rounded-lg overflow-hidden relative select-none">
              <div className="flex items-center px-4 py-2 gap-4 max-w-[1200px] mx-auto">

                {/* Left: Cartoon farmer in speech bubble */}
                <div className="relative flex-shrink-0 w-36">
                  {/* Speech bubble */}
                  <div className="absolute -top-6 left-10 bg-white rounded-full px-4 py-2 shadow-sm text-sm font-semibold text-[#b85b5b] z-10">
                    किसान ध्यान दें
                  </div>
                  <Image
                    src="https://i.ibb.co/fHzNzyh/farmer-cartoon.png"
                    alt="Cartoon Farmer"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>

                {/* Middle: Main text */}
                <div className="flex-grow text-center text-white font-semibold">
                  <p className="text-lg md:text-xl">राष्ट्रीय कृषि सुरक्षा अभियान</p>
                  <p className="text-sm md:text-base mt-1">(1 फरवरी से 28 फरवरी 2026 तक)</p>

                  <p className="text-yellow-300 font-bold text-2xl md:text-3xl mt-2">
                    सही समय पर बीज बोओ, खुशहाली लाओ
                  </p>
                </div>

                {/* Right: Farmer on tractor image */}
                <div className="relative flex-shrink-0 w-36">
                  <Image
                    src="https://i.ibb.co/87y4qrs/farmer-tractor.png"
                    alt="Farmer on tractor"
                    width={120}
                    height={120}
                    className="rounded"
                  />
                  {/* Small overlay warning text */}
                  <div className="absolute bottom-0 right-0 bg-red-700 bg-opacity-80 text-xs text-white px-1 rounded-tl">
                    कीटनाशक सही मात्रा में लगाएं
                  </div>
                </div>
              </div>

              {/* Bottom branding bar */}
              <div className="bg-[#a82c2c] text-white text-xs py-1 px-4 flex items-center justify-between max-w-[1200px] mx-auto">
                <span>कृषि विभाग, उत्तर प्रदेश</span>
                <span className="opacity-60">सुरक्षा एवं जागरूकता अभियान 2026</span>
              </div>
            </section>

            {/* batmiton news */}
            <section className="mt-5">
              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">BADMINTON NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={badmintonNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {badmintonNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {badmintonNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== badmintonNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {badmintonNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {badmintonNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            {/* nhl news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">NHL NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={nhlNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {nhlNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {nhlNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== nhlNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {nhlNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {nhlNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            {/* esports news */}

            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">ESPORTS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={EsportsNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {EsportsNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {EsportsNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== EsportsNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {EsportsNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {EsportsNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            {/* www news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">WWW NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={wweNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {wweNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {wweNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== wweNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {wweNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {wweNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            {/* mlb news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">MLB NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={mlbNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {mlbNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {mlbNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== mlbNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {mlbNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {mlbNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>


            {/* formula e news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">FORMULA E NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={cricketNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {cricketNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {cricketNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== cricketNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {cricketNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {cricketNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            {/* f1 news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">F1 NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={cricketNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {cricketNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {cricketNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== cricketNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {cricketNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {cricketNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>
            {/* mma news */}
            <section className="mt-5">

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold tracking-wide">MMA NEWS</h2>
                <ChevronRight className="w-4 h-4" />
              </div>

              {/* MAIN TWO-COLUMN LAYOUT */}
              <div className="grid grid-cols-12 gap-4">

                {/* ================= LEFT SIDE (8 COLS) ================= */}
                <div className="col-span-8">

                  {/* TOP ROW: FEATURED + MIDDLE */}
                  <div className="grid grid-cols-12 gap-4">

                    {/* FEATURED */}
                    <div className="col-span-7">
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={mmaNewsSection.lead.image}
                          alt=""
                          width={700}
                          height={420}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                          {mmaNewsSection.lead.title}
                        </p>
                      </div>
                    </div>

                    {/* MIDDLE LIST */}
                    <div className="col-span-5">
                      <ul className="space-y-3 text-sm">
                        {mmaNewsSection.middleList.map((text, i) => (
                          <li
                            key={i}
                            className={i !== mmaNewsSection.middleList.length - 1 ? "border-b pb-2" : ""}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* BOTTOM ROW: 4 CARDS (LEFT ONLY) */}
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    {mmaNewsSection.bottomCards.map((card, i) => (
                      <div key={i}>
                        <Image
                          src={card.image}
                          alt=""
                          width={300}
                          height={180}
                          className="mb-2 rounded w-full"
                        />
                        <p className="text-sm leading-snug">
                          {card.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ================= RIGHT SIDE (4 COLS) ================= */}
                <aside className="col-span-4 space-y-4">
                  {mmaNewsSection.rightStories.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={100}
                        height={70}
                        className="rounded flex-shrink-0"
                      />
                      <p className="text-sm leading-snug">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </aside>

              </div>
            </section>

            <OtherSportsNews />
            <PopularSportsSection />
            <MoreSportsNews />
            <section className="mt-5">
              {/* Section Title */}
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1 mb-4">
                You May Like <ChevronRight className="w-5 h-5" />
              </h2>

              {/* Cards Container */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {youMayLikeData.map(({ img, alt, title, description, brand }, idx) => (
                  <article
                    key={idx}
                    className="flex flex-col overflow-hidden max-w-sm flex-1 rounded-md"
                  >
                    <div className="relative w-full h-40 md:h-48">
                      <Image src={img} alt={alt} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-1 flex flex-col flex-grow">
                      <h3 className="font-bold text-base leading-tight mb-1">{title}</h3>
                      <p className="text-xs text-gray-700 mb-1 leading-snug">{description}</p>
                      <p className="text-xs font-medium text-gray-500 mb-4">{brand}</p>
                      <div className="mt-auto self-end">
                        <button className="px-3 py-1 text-xs border border-gray-700 rounded hover:bg-gray-100 transition">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>


              {/* Dotted line */}
              <hr className="border-dotted border-gray-300 border-t mb-6" />

              {/* Quick Links */}
              <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 text-xs text-gray-600">
                {quickLinks.map((link) => (
                  <a key={link} href="#" className="hover:underline cursor-pointer text-[10px]">
                    {link}
                  </a>
                ))}
              </nav>


              {/* Bottom paragraph */}
              <div className="bg-gray-100 p-4 mt-6 text-xs text-gray-700 leading-relaxed rounded">
                The Times of India’s sports section is dedicated to bringing you the latest updates,
                scores, and highlights from the world of sports, covering a wide range of disciplines
                including cricket, football, nfl, nba, wwe, nhl, f1, mma, tennis, basketball, and more.
                Stay informed and never miss a beat with our real-time coverage of ongoing matches and
                tournaments. From exciting cricket clashes to thrilling football showdowns, we provide
                minute-by-minute updates, ensuring you’re always at the heart of the action, no matter
                where you are. Our team of expert sports journalists delivers insightful analysis and
                commentary to give you a deeper understanding of the games you love.In addition to live
                scores and match updates, The Times of India’s sports section also features exclusive
                interviews with top athletes, coaches, and industry insiders. Gain valuable insights
                into the strategies, training routines, and mindsets of your favorite sports stars,
                and get an inside look at their journey to success.
              </div>
            </section>
          </div>
        </main>
        <ExploredGlobeSection />
        <HotOnWebSection />
        <TrendingTopicsSection />
        <PopularCategoriesSection />
        <TrendingVideosSection />
        <LatestNewsSection />
        <Footer />
      </div>
    </div>
  );
}
