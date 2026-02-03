"use client";
import { useState } from "react";
import { Header } from "@/components/toi/header";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TOIFooter from "@/components/author-footer-section";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext
} from "@/components/ui/pagination"; // Import your Pagination components

const author = {
  name: "Duvvuri Subbarao",
  bio: "The writer is a former governor of the Reserve Bank of India",
  image: "/Duvvuri-Subbarao.avif",
};


const articles = [
  {
    id: 1,
    title: "Letter to finance minister",
    date: "January 27, 2026, 6:30 AM IST",
    excerpt: "Among things that budget can fix, are rules for capital gains tax & withholding tax. FM must make these simple & predictable. Foreign investors, who have been taking their money out, value clarity. Dear finance...",
    tags: ["TOI Edit Page", "Business", "Economy", "Edit Page", "India", "TOI"],
    fromPrint: true,
  },
  {
    id: 2,
    title: "Why Freebies Signal A Collapse Of Political Ambition",
    date: "November 26, 2025, 7:11 AM IST",
    excerpt: "Handouts may win elections, but they don't build nations. We need a national code that prescribes how much can be spent on such largesse and compels parties to show where the money will come from...",
    tags: ["TOI Edit Page", "Edit Page", "India", "TOI"],
    fromPrint: true,
  },
  {
    id: 3,
    title: "One nation, one election: Why the promise doesn't add up",
    date: "October 16, 2025, 7:38 AM IST",
    excerpt: "Advantages of having a clubbed election with states and Centre together are minimal compared to the costs. Regional voices and the federal compact are sacrificed for suspect macroeconomic gains. The High-Level Committee on \"One...",
    tags: ["TOI Edit Page", "Edit Page", "politics", "TOI"],
    fromPrint: true,
  },
  {
    id: 4,
    title: "The central thing about our Central bank",
    date: "July 31, 2025, 6:45 AM IST",
    excerpt: "Last week, Trump did something that was unusual even by his standards – he paid a visit to US Federal Reserve, just four blocks from the White House, ostensibly to inspect what he called an...",
    tags: ["TOI Edit Page", "India", "TOI"],
    fromPrint: false,
  },
  {
    id: 5,
    title: "Modinomics: Good, Bad, Wobbly",
    date: "June 30, 2025, 8:45 AM IST",
    excerpt: "Eleven years ago, Modi inherited an economy in dire straits. Growth was slowing, inflation was high, the rupee was volatile, fiscal and current account deficits were unsustainably high, and a bad loan problem was erupting...",
    tags: ["TOI Edit Page", "India", "TOI"],
    fromPrint: false,
  },
  {
    id: 6,
    title: "India needs UPSC 2.0",
    date: "May 28, 2025, 7:32 AM IST",
    excerpt: "Civil service exam needs two reforms. One, reduce max age & number of attempts at entry level. Two, an annual competitive test allowing 40-somethings to enter IAS. The civil service results for 2024 are out...",
    tags: ["TOI Edit Page", "Edit Page", "India", "TOI"],
    fromPrint: true,
  },
    {
      id: 7,
      title: "Why inflation targeting still anchors India’s economy",
      date: "April 12, 2025, 7:10 AM IST",
      excerpt: "Amid calls to prioritise growth at any cost, inflation targeting continues to provide a credible anchor for monetary policy. Diluting it risks undoing years of hard-won stability...",
      tags: ["TOI Edit Page", "Economy", "Monetary Policy", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 8,
      title: "Fiscal prudence is not a luxury, it is a necessity",
      date: "March 18, 2025, 6:55 AM IST",
      excerpt: "High growth cannot be sustained on borrowed money forever. Fiscal realism, not populism, is essential to protect macroeconomic stability and investor confidence...",
      tags: ["TOI Edit Page", "Fiscal Policy", "Economy", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 9,
      title: "Central banks cannot solve political problems",
      date: "February 22, 2025, 7:40 AM IST",
      excerpt: "Expecting central banks to compensate for political indecision is both unfair and dangerous. Monetary policy has limits that policymakers must acknowledge...",
      tags: ["TOI Edit Page", "RBI", "Central Banks", "Economy", "TOI"],
      fromPrint: false,
    },
    {
      id: 10,
      title: "India’s banking reforms are only half complete",
      date: "January 9, 2025, 6:20 AM IST",
      excerpt: "While balance sheets have improved, governance and risk management in public sector banks remain unresolved challenges that threaten long-term stability...",
      tags: ["TOI Edit Page", "Banking", "Economy", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 11,
      title: "Growth without institutions is a fragile promise",
      date: "December 3, 2024, 7:05 AM IST",
      excerpt: "Undermining regulatory independence for short-term gains weakens the foundations of sustainable growth. Institutions matter more than headlines...",
      tags: ["TOI Edit Page", "Governance", "Institutions", "India", "TOI"],
      fromPrint: false,
    },
    {
      id: 12,
      title: "Lessons from global monetary tightening",
      date: "October 21, 2024, 6:50 AM IST",
      excerpt: "As advanced economies grapple with aggressive rate hikes, India must draw lessons on policy calibration, communication and credibility...",
      tags: ["TOI Edit Page", "Global Economy", "Monetary Policy", "TOI"],
      fromPrint: true,
    },
    {
      id: 13,
      title: "Why policy predictability matters more than incentives",
      date: "September 14, 2024, 7:30 AM IST",
      excerpt: "Investors value clarity and consistency more than short-term incentives. Frequent policy changes undermine trust and raise the cost of capital...",
      tags: ["TOI Edit Page", "Policy", "Investment", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 14,
      title: "Populism today, pain tomorrow",
      date: "August 8, 2024, 6:40 AM IST",
      excerpt: "Unfunded promises may win elections, but they weaken fiscal discipline and constrain future governments. The costs are real, even if delayed...",
      tags: ["TOI Edit Page", "Politics", "Economy", "India", "TOI"],
      fromPrint: false,
    },
    {
      id: 15,
      title: "India’s debt trajectory needs honest debate",
      date: "July 19, 2024, 7:15 AM IST",
      excerpt: "Debt sustainability is not an abstract concern. Ignoring arithmetic today only increases adjustment costs tomorrow...",
      tags: ["TOI Edit Page", "Fiscal Policy", "Debt", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 16,
      title: "What RBI independence really means",
      date: "June 11, 2024, 6:25 AM IST",
      excerpt: "Central bank independence does not imply lack of accountability. It means freedom from short-term political pressures in pursuit of long-term stability...",
      tags: ["TOI Edit Page", "RBI", "Institutions", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 17,
      title: "Financial stability is a continuous process",
      date: "May 6, 2024, 7:05 AM IST",
      excerpt: "The absence of crisis should not breed complacency. Financial stability requires constant vigilance, strong regulation and credible supervision...",
      tags: ["TOI Edit Page", "Banking", "Financial Stability", "TOI"],
      fromPrint: false,
    },
    {
      id: 18,
      title: "Why reforms slow down after the first mile",
      date: "April 2, 2024, 6:50 AM IST",
      excerpt: "Structural reforms often lose momentum after early wins. The hardest changes are those that challenge entrenched interests...",
      tags: ["TOI Edit Page", "Reforms", "Economy", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 19,
      title: "Managing expectations in an election year",
      date: "March 9, 2024, 7:35 AM IST",
      excerpt: "Economic management becomes harder when expectations run ahead of capacity. Prudence matters most in politically charged times...",
      tags: ["TOI Edit Page", "Politics", "Economy", "India", "TOI"],
      fromPrint: false,
    },
    {
      id: 20,
      title: "India’s growth story needs stronger foundations",
      date: "February 1, 2024, 6:30 AM IST",
      excerpt: "High growth numbers are encouraging, but sustaining them requires attention to productivity, jobs and institutional quality...",
      tags: ["TOI Edit Page", "Economy", "Growth", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 21,
      title: "The limits of monetary stimulus",
      date: "January 10, 2024, 7:00 AM IST",
      excerpt: "Easy money cannot substitute for structural reform. Over-reliance on monetary stimulus risks financial imbalances...",
      tags: ["TOI Edit Page", "Monetary Policy", "Economy", "TOI"],
      fromPrint: false,
    },
    {
      id: 22,
      title: "Why credibility is a policymaker’s greatest asset",
      date: "December 6, 2023, 6:45 AM IST",
      excerpt: "Credibility takes years to build and moments to lose. Clear communication and consistent action are its cornerstones...",
      tags: ["TOI Edit Page", "Policy", "Governance", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 23,
      title: "Public sector banks still need deeper reform",
      date: "November 11, 2023, 7:20 AM IST",
      excerpt: "Capital infusion alone cannot fix public sector banks. Governance reform and professional autonomy remain essential...",
      tags: ["TOI Edit Page", "Banking", "India", "TOI"],
      fromPrint: false,
    },
    {
      id: 24,
      title: "Macroeconomic stability is not negotiable",
      date: "October 4, 2023, 6:55 AM IST",
      excerpt: "Stable inflation, sustainable deficits and a credible policy framework are prerequisites for long-term growth...",
      tags: ["TOI Edit Page", "Macroeconomy", "India", "TOI"],
      fromPrint: true,
    },
    {
      id: 25,
      title: "Why long-term thinking is in short supply",
      date: "September 1, 2023, 7:10 AM IST",
      excerpt: "Short political cycles discourage long-term policymaking. India must find ways to institutionalise strategic thinking...",
      tags: ["TOI Edit Page", "Policy", "Institutions", "India", "TOI"],
      fromPrint: false,
    },  
];

const topVoices = [
  {
    name: "Dia Mirza",
    role: "TOI Edit Page, Voices",
    image: "/dia-mirza-1-150x150.avif"
  },
  {
    name: "Bachi Karkaria",
    role: "Erratica, TOI Edit Page",
    image: "/bachi-karkaria.avif"
  },
  {
    name: "Jug Suraiya",
    role: "Juggle-Bandhi, TOI Edit Page",
    image: "/jug-150x150.avif"
    // use Wikimedia instead of timescontent
  },
  {
    name: "Speaking Tree",
    role: "TOI Voices (Spiritual Section)",
    image: "/TREE-150x150.avif"
    // Speaking Tree is a section, not a person → use symbolic image
  }
];



const topEditorials = [
  { num: 1, title: "UGC, please do the math" },
  { num: 2, title: "India's midnight economy!" },
  { num: 3, title: "Razia Sultan and Noor Jahan: What girls lose when queens are erased" },
];

export default function AuthorPage() {
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const articlesPerPage = 5; // Number of articles per page

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get current articles based on the page
  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Shared Ad Strips */}
      {/* <SharedAdStrips /> */}

      {/* Main Content Area */}
      <div className="xl:ml-[145px] xl:mr-[145px]">
        <Header />

        <main className="bg-white md:p-4 sm:p-4 px-2 lg:px-0">
          <div className="max-w-[980px] w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-4">
              <Link href="/" className="hover:text-red-600">NEWS</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="#" className="hover:text-red-600">VOICES</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-700">{author.name}</span>
            </div>

            {/* Author Header Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div className="flex-1 order-2 sm:order-1">
                <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-2">ABOUT THE AUTHOR</p>
                <h1 className="text-[24px] sm:text-[32px] font-serif font-bold text-gray-900 mb-3">{author.name}</h1>
                <p className="text-red-600 text-[13px]">{author.bio}</p>
              </div>
              <div className="flex-shrink-0 order-1 sm:order-2 self-center sm:self-start">
                <Image
                  src={author.image || "/placeholder.svg"}
                  alt={author.name}
                  width={120}
                  height={120}
                  className="rounded sm:w-[150px] sm:h-[150px]"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Main Content - Left Column */}
              <div className="flex-1">
                {/* Section Header */}
                <h2 className="text-[14px] font-bold text-gray-900 uppercase tracking-wide mb-6">
                  {author.name.toUpperCase()} VOICES
                </h2>

                {/* Articles List */}
                <div className="space-y-6">
                  {articles.map((article) => (
                    <div
                      key={article.id}
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6 border-b border-gray-100"
                    >


                      {/* Left: Avatar + Author Name */}
                      {/* Left: Avatar + Author Name (same line) */}
                      <div className="flex-shrink-0 sm:w-[140px]">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-100 rounded-full overflow-hidden w-[35px] h-[35px]">
                            <img
                              src="/Duvvuri-Subbarao.avif"
                              alt="Duvvuri Subbarao"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-[12px] font-semibold text-gray-900 leading-tight">
                            Duvvuri<br className="hidden sm:block" /><span className="sm:hidden"> </span>Subbarao
                          </p>
                        </div>
                      </div>


                      {/* Right: Article Content */}
                      <div className="flex-1">
                        {article.fromPrint && (
                          <p className="text-[10px] text-red-600 font-medium mb-1">
                            FROM TOI PRINT EDITION
                          </p>
                        )}

                        <Link href={`/article/${article.id}`}>
                          <h3 className="text-[14px] sm:text-[16px] font-bold text-gray-900 hover:text-red-600 mb-1 leading-tight">
                            {article.title}
                          </h3>
                        </Link>

                        <p className="text-[11px] text-gray-500 mb-2">{article.date}</p>

                        <p className="text-[12px] text-gray-600 mb-2 leading-relaxed line-clamp-3 sm:line-clamp-none">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {article.tags.map((tag, idx) => (
                            <Link
                              key={idx}
                              href="#"
                              className="text-[10px] text-blue-600 hover:underline"
                            >
                              {tag}{idx < article.tags.length - 1 ? " , " : ""}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                  ))}
                </div>
                 {/* Pagination Section */}
                <Pagination className="mb-3">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>

                    {/* Dynamically render page numbers */}
                    {[...Array(totalPages)].map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          isActive={currentPage === index + 1}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
         
              {/* Right Sidebar */}
              <aside className="w-full lg:w-[300px] flex-shrink-0">
                {/* Write for TOI Voices Button */}
                <Link
                  href="#"
                  className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-2.5 px-4 rounded mb-6 text-[13px] font-medium"
                >
                  WRITE FOR TOI VOICES
                </Link>

                {/* Advertisement */}
                <div className="mb-6">
                  <p className="text-[10px] text-gray-400 text-center mb-2">ADVERTISEMENT</p>
                  <div className="bg-black rounded overflow-hidden">
                    <div className="p-4 text-white text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-[8px] font-bold">K</span>
                        </div>
                        <span className="text-[10px]">kotak</span>
                      </div>
                      <h3 className="text-[14px] font-bold leading-tight mb-2">Financial<br />Backing<br />for the<br />Bold.</h3>
                      <p className="text-[9px] text-gray-400 mb-2">Get a Kotak<br />Credit Card today.</p>
                      <p className="text-[10px] text-red-400 italic">Hausla hai toh<br /><span className="text-red-500 font-semibold not-italic">ho jayega.</span></p>
                      <button className="bg-red-600 text-white text-[10px] px-4 py-1.5 mt-3 rounded">Apply Now</button>
                    </div>
                  </div>
                </div>

                {/* Top Voices */}
                <div className="mb-6">
                  <h3 className="text-[13px] font-bold text-black uppercase mb-4">TOP VOICES</h3>
                  <div className="space-y-3">
                    {topVoices.map((voice, idx) => (
                      <Link key={idx} href="#" className="flex items-center gap-3 group">
                        <Image
                          src={voice.image || "/placeholder.svg"}
                          alt={voice.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="text-[12px] font-bold text-blue-600 group-hover:underline">{voice.name}</h4>
                          <p className="text-[10px] text-gray-500">{voice.role}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Advertisement 2 */}
                <div className="mb-6">
                  <p className="text-[10px] text-gray-400 text-center mb-2">ADVERTISEMENT</p>
                  <div className="bg-gradient-to-b from-amber-100 to-amber-50 border border-amber-200 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">SC</span>
                      </div>
                      <span className="text-[11px] font-bold text-gray-800">Standard Chartered</span>
                    </div>
                    <p className="text-[13px] font-bold text-gray-900 mb-1">Earn up to 5 Air Miles per $100 spent</p>
                    <p className="text-[10px] text-gray-600 mb-2">with Standard Chartered credit card</p>
                    <p className="text-[10px] text-red-600 italic">Hausla hai toh</p>
                    <button className="bg-red-600 text-white text-[10px] px-4 py-1.5 mt-2 rounded w-full">Apply Now</button>
                  </div>
                </div>

                {/* Top Editorials */}
                <div className="mb-6">
                  <h3 className="text-[13px] font-bold text-black uppercase mb-4">TOP EDITORIALS</h3>
                  <div className="space-y-3">
                    {topEditorials.map((editorial) => (
                      <Link key={editorial.num} href="#" className="flex items-start gap-3 group">
                        <span className="text-[18px] font-bold text-red-600">{editorial.num}</span>
                        <p className="text-[12px] text-gray-700 group-hover:text-red-600 leading-tight pt-1">
                          {editorial.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
        <TOIFooter/>
      </div>
    </div>
  );
}
