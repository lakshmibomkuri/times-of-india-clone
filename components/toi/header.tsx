"use client"

import { Search, Menu, ChevronDown, X, ChevronRight, MapPin, Play } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation";
const menuData: Record<string, { columns?: { title?: string; items: string[] }[]; items?: string[] }> = {
  "City": {
    columns: [
      { title: "METRO CITIES", items: ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Kolkata", "Chennai"] },
      { title: "OTHER CITIES", items: ["Agra", "Ahmedabad", "Amritsar", "Bareilly", "Bhopal", "Bhubaneswar", "Chandigarh", "Coimbatore", "Cuttack", "Dehradun", "Erode", "Faridabad", "Ghaziabad", "Goa", "Gurgaon", "Guwahati", "Hubballi", "Imphal", "Indore", "Itanagar", "Jaipur", "Jammu", "Jamshedpur", "Jodhpur", "Kanpur", "Kochi", "Kohima", "Kolhapur", "Kozhikode", "Lucknow", "Ludhiana", "Madurai", "Mangaluru", "Meerut", "Mumbai Region", "Mysuru", "Nagpur", "Nashik", "Navi Mumbai", "Noida", "Patna", "Prayagraj", "Puducherry", "Pune", "Raipur", "Rajkot", "Ranchi", "Salem", "Shillong", "Shimla", "Srinagar", "Surat", "Thane", "Thiruvananthapuram", "Trichy", "Udaipur", "Vadodara", "Varanasi", "Vijayawada", "Visakhapatnam"] },
      { title: "", items: ["Crime News", "Photos", "Web Stories"] }
    ]
  },
  "India": {
    columns: [
      { title: "FEATURED", items: ["Digital Arrest", "Operation Sindoor", "Cancel Patriarchy", "Web Stories"] },
      { title: "STATES", items: ["Uttar Pradesh", "Maharashtra", "Gujarat", "Tripura", "Uttarakhand", "Chhattisgarh", "Jammu Kashmir", "Karnataka", "Rajasthan", "Bihar", "Nagaland", "Telangana", "Punjab", "Kerala", "Jharkhand", "West Bengal", "Odisha", "Assam", "Meghalaya", "Tamil Nadu", "Andhra Pradesh", "Madhya Pradesh", "Haryana", "Arunachal Pradesh", "Himachal Pradesh", "Manipur"] }
    ]
  },
  "World": {
    columns: [
      { items: ["US", "Pakistan", "South Asia", "UK", "Europe", "China", "Middle East", "Rest Of World"] },
      { items: ["Times Evoke", "US Streamers", "Mad, Mad World", "Videos"] }
    ]
  },
  "Business": {
    columns: [
      { items: ["Markets", "Budget 2026", "Mutual Funds", "Infrastructure", "India Business", "International Business"] },
      { items: ["Gold Rates Today", "Silver Rates Today", "Platinum Rates Today", "Financial Calculators", "Financial Literacy", "IFSC Code"] },
      { items: ["Don't Get Scammed", "Cybersecurity", "Videos", "Financial Summit"] }
    ]
  },
  "Tech": {
    columns: [
      { items: ["News & Reviews", "Mobile & Tabs", "Laptops & PC", "Tech Tips", "Tech News", "Gaming"] },
      { items: ["AI News", "Wearables", "Social", "Audio", "Reviews", "Appliances", "Gadgets", "Videos"] },
      { items: ["Hack Of Day", "Electronics Reviews", "Visual Stories"] }
    ]
  },
  "Cricket": {
    columns: [
      { items: ["Live Cricket Score", "IPL 2025", "T20 World Cup", "T20 World Cup Schedule", "WPL", "Ashes", "IND Vs NZ", "IND Vs SA", "Asia Cup 2025"] },
      { items: ["Schedule", "Teams", "Stats", "Standings", "Results", "Records"] }
    ]
  },
  "Sports": {
    columns: [
      { items: ["Cricket", "Football", "Tennis", "Badminton", "Hockey", "MMA", "Athletics", "Wrestling", "Boxing", "Chess", "Shooting"] },
      { items: ["NFL", "NBA", "NHL", "MLB", "WWE", "Racing", "Formula E", "College Football", "MLC"] },
      { items: ["Esports", "International Sports", "Videos", "Games"] }
    ]
  },
  "Entertainment": {
    columns: [
      { title: "LANGUAGES", items: ["Hindi", "English", "Marathi", "Bhojpuri", "Gujarati", "Tamil", "Telugu", "Malayalam", "Kannada", "Bengali", "Punjabi"] },
      { items: ["Movie Reviews", "Music", "Cinema", "TV", "Web Series", "Beauty Pageants"] },
      { items: ["Photos", "Videos", "Visual Stories", "TV Visual Stories"] }
    ]
  },
  "Astro": {
    columns: [
      { items: ["Horoscope", "Moon Phase Today", "Daily Horoscope", "Daily Lal Kitab Horoscope", "Daily Shani Predictions"] },
      { items: ["Planets & Transits", "Compatibility Calculator", "Kundali Dasha & Remedies", "Vastu and Feng shui"] },
      { items: ["Ancient Devi Mantras", "Zodiac Signs", "Quote of the day from Bhagavad Gita"] }
    ]
  },
  "Budget 2026": {
    columns: [
      { title: "SECTOR IMPACT", items: ["Real Estate", "Healthcare", "Tech/Consumer Products", "Auto", "Infrastructure", "Travel", "Education"] },
      { items: ["Budget And You", "Experts Speak", "Economy"] }
    ]
  },
  "TV": {
    items: ["TV News", "TV Reviews", "TV Schedule", "Web Series", "Visual Stories"]
  },
  "Education": {
    columns: [
      { items: ["News", "Jobs", "Board Exams", "Entrance Exam", "Exam Results", "Admission"] },
      { items: ["CBSE", "Study Abroad", "MBA", "Education News"] }
    ]
  }
}

const navItems = [
  { label: "TOI Games", hasDropdown: true, isNew: true },
  { label: "Live Videos", hasDropdown: false, route: "/videos" },
  { label: "Photostories", hasDropdown: false, route: "/photostory" },
  { label: "Business", hasDropdown: true, route: "/business" },
  { label: "Sports", hasDropdown: true, route: "/category" },
  { label: "City", hasDropdown: true },
  { label: "India", hasDropdown: true },
  { label: "World", hasDropdown: true },
  { label: "Tech", hasDropdown: true },
  { label: "Cricket", hasDropdown: true },
  { label: "Entertainment", hasDropdown: true },
  { label: "Astro", hasDropdown: true },
  { label: "Budget 2026", hasDropdown: true },
  { label: "TV", hasDropdown: true },
  { label: "Education", hasDropdown: true },
  { label: "Author", hasDropdown: true, route: "/author/slug" },
  { label: "Tag", hasDropdown: true, route: "/tag/slug" },
]

const toiGamesMenu = ["Connect", "Loop The Loop", "Location Guesser", "Mini Crossword", "Daily Crossword", "Classic Sudoku"]

const inTheNews = [
  { text: "Live Cricket Score", isNew: false },
  { text: "First Step By Pronamel", isNew: true },
  { text: "Toyota Urban Cruiser", isNew: false },
  { text: "UP Transformation Dialogues", isNew: false },
  { text: "T20 World Cup 2026 Schedule", isNew: false },
  { text: "Uttarakhand At 25", isNew: true },
  { text: "Jana Naya", isNew: false },
]

const fullMenuData = {
  "News Home": { items: ["City", "Liveblogs", "India", "TOI Newsletters", "Elections 2025", "World", "NRI", "Headlines", "Podcasts"] },
  "Entertainment": { items: ["Movie Reviews", "Music", "Cinema", "TV", "Web Series", "Visual Stories", "TV Visual Stories"] },
  "Lifestyle": { items: ["Health+", "Times Pets", "Femina", "Women", "Travel", "Blogs", "Recipes", "Hack of Day"] },
  "Opinion": { items: ["Cartoons", "Editorials", "TOI Editorials"] },
  "Technology": { items: ["Mobile & Tabs", "Laptops & PC", "AI News", "Tech Tips", "Tech News", "Gaming"] },
  "Astrology": { items: ["Horoscope", "Planets & Transits", "Compatibility Calculator", "Kundali Dasha & Remedies", "Vastu and Feng shui"] },
  "Sports": { items: ["Cricket", "Games", "Football", "NFL", "NBA", "NHL", "International Sports", "Asia Cup 2025"] },
  "Business": { items: ["Markets", "Times Reviews", "Gold Rates Today", "Platinum Rates Today", "Silver Rates Today", "Financial Literacy", "India Business", "Financial Calculators", "Bank Holidays"] },
  "TOI Games": { items: ["Connect", "Loop The Loop", "Location Guesser", "Mini Crossword", "Daily Crossword", "Classic Sudoku"] },
  "Speaking Tree": { items: ["Daily Ecstasy", "Yoga & Meditation", "Videos", "Careers", "Learning with TOI"] },
  "Religion": { items: ["Rituals & Puja", "Festivals"] },
  "Real Estate": { items: ["HOUSING"] },
  "Auto": { items: ["News", "Videos", "Cars", "Bikes", "Electric Cars", "Electric Bikes"] },
  "Education": { items: ["Study Abroad", "Education News"] },
  "More": { items: ["Mediawire", "Epaper", "Newspaper Subscription", "Archives", "Times Events", "Sunday Times", "Trending News", "Public Holidays", "Weather"] }
}

const searchSuggestions = ["Latest News", "Videos", "Photos", "India Vs England", "H1B Visa", "Budget 2026", "Cricket Score", "Bollywood News"]

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [fullMenuOpen, setFullMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showTicker, setShowTicker] = useState(true)
  const searchRef = useRef<HTMLInputElement>(null)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  const handleMenuEnter = (label: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
    }
    setActiveMenu(label)
  }

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  return (
    <>
      <header className="bg-white sticky top-0 z-50" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
        {/* Top Bar - Responsive */}
        <div className="bg-[#f8f8f8] border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-2 sm:px-4">
            <div className="flex items-center justify-between h-[28px] sm:h-[32px]">
              {/* Left side - Responsive */}
              <div className="flex items-center gap-1 sm:gap-3 text-[10px] sm:text-[11px] text-gray-600">
                <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-gray-800">
                  <span>Edition</span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/23px-Flag_of_India.svg.png" alt="India" className="w-4 h-3" />
                  <span>IN</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-gray-800">
                  <span>English</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <span className="hidden md:inline text-gray-400">|</span>
                <span className="text-[9px] sm:text-[11px] truncate">Tue, Jan 20, 2026 | Updated 06.31PM IST</span>
                <span className="hidden lg:inline text-gray-400">|</span>
                <div className="hidden lg:flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  <span>Hyderabad</span>
                  <span className="text-gray-400">☁</span>
                  <span>26.1°C</span>
                </div>
              </div>

              {/* Right side - Responsive social icons */}
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Link href="#" className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </Link>
                  <Link href="#" className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </Link>
                  <Link href="#" className="hidden sm:flex w-5 h-5 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg className="w-2.5 h-2.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 17.5v-11l8 5.5-8 5.5z" /></svg>
                  </Link>
                  <Link href="#" className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full bg-[#ff0000] text-white">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </Link>
                  <Link href="#" className="hidden sm:flex w-5 h-5 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg className="w-2.5 h-2.5" fill="url(#instagram-gradient)" viewBox="0 0 24 24"><defs><linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFDC80" /><stop offset="25%" stopColor="#F77737" /><stop offset="50%" stopColor="#E1306C" /><stop offset="75%" stopColor="#C13584" /><stop offset="100%" stopColor="#833AB4" /></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </Link>
                  <Link href="#" className="hidden md:flex w-5 h-5 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                    <svg className="w-2.5 h-2.5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section - Responsive */}
        <div className="bg-white py-1 sm:py-2">
          <div className="max-w-[1200px] mx-auto px-3 text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-serif text-black tracking-tight" style={{ fontFamily: 'Times New Roman, Georgia, serif' }}>
                THE TIMES OF INDIA
              </h1>
            </Link>
          </div>
        </div>

        {/* Main Navigation - Responsive */}
        <nav className="border-b-3 border-black bg-gray-100 relative m-0">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between h-[36px] sm:h-[40px]">
              {/* Nav items - Horizontal scroll on mobile */}
              <ul className="flex items-center gap-1 sm:gap-2 lg:gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide px-2 sm:px-0">
                <li>
                  <Link
                    href="#"
                    className="flex items-center px-1 sm:px-2 py-1.5 text-[11px] sm:text-[13px] text-black flex-shrink-0"
                  >
                    TOI
                    <span className="ml-0.5 text-[12px] sm:text-[14px] font-bold text-[#e53935]">+</span>
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => item.hasDropdown && handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <Link
                      href={item.route ? item.route : "#"}
                      className={`flex items-center text-[11px] sm:text-[13px] hover:text-[#e53935] transition-colors whitespace-nowrap px-1 sm:px-0 ${activeMenu === item.label ? 'text-[#e53935]' : 'text-gray-800'}`}
                    >
                      {item.label}
                      {item.isNew && (
                        <span className="text-[8px] sm:text-[9px] text-[#e53935] font-medium ml-0.5 -mt-2 sm:-mt-3">New</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Search and Menu buttons - Responsive */}
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-0">
                <button
                  className="hover:bg-gray-100 rounded p-1"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                </button>
                <button
                  className="hover:bg-gray-100 rounded p-1"
                  aria-label="Full Menu"
                  onClick={() => setFullMenuOpen(!fullMenuOpen)}
                >
                  <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown Menus - Responsive positioning */}
          {activeMenu && (
            <div
              className="absolute left-0 right-0 top-full bg-white border-b-3 border-black shadow-lg z-[100]"
              onMouseEnter={() => handleMenuEnter(activeMenu)}
              onMouseLeave={handleMenuLeave}
            >
              <div className="max-w-[1200px] mx-auto px-2 sm:px-3 py-3 sm:py-4">
                {activeMenu === "TOI Games" ? (
                  <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-6">
                    {toiGamesMenu.map((game) => (
                      <Link key={game} href="#" className="text-[12px] sm:text-[13px] text-gray-700 hover:text-[#e53935] py-1">
                        {game}
                      </Link>
                    ))}
                  </div>
                ) : menuData[activeMenu]?.columns ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 sm:gap-6 lg:gap-8">
                    {menuData[activeMenu].columns?.map((col, idx) => (
                      <div key={idx} className="min-w-[150px]">
                        {col.title && <h4 className="text-[10px] sm:text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide">{col.title}</h4>}
                        <div className={`${col.items.length > 15 ? 'grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-4' : ''}`}>
                          {col.items.map((subItem) => (
                            <Link key={subItem} href="#" className="block py-1 text-[12px] sm:text-[13px] text-gray-700 hover:text-[#e53935]">
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : menuData[activeMenu]?.items ? (
                  <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-6">
                    {menuData[activeMenu].items?.map((subItem) => (
                      <Link key={subItem} href="#" className="text-[12px] sm:text-[13px] text-gray-700 hover:text-[#e53935] py-1">
                        {subItem}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </nav>

        {/* Full Menu Dropdown - Responsive */}
        {fullMenuOpen && (
          <div className="absolute left-0 right-0 bg-white border-b border-black shadow-lg z-[100]">
            <div className="max-w-[1200px] mx-auto px-2 sm:px-3 py-3 sm:py-4">
              <div className="flex justify-end mb-3">
                <button onClick={() => setFullMenuOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {Object.entries(fullMenuData).map(([category, data]) => (
                  <div key={category}>
                    <h4 className="text-[11px] sm:text-[12px] font-bold text-gray-800 mb-2 flex items-center">
                      {category}
                      <ChevronRight className="w-3 h-3 ml-1 text-gray-400" />
                    </h4>
                    <ul>
                      {data.items.map((item) => (
                        <li key={item}>
                          <Link href="#" className="block py-0.5 text-[10px] sm:text-[11px] text-gray-600 hover:text-[#e53935]">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Secondary Navigation - In The News - Responsive */}
        <div className="border-b border-gray-200 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-2 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-4 py-1.5 text-[11px] sm:text-[12px]">
              <span className="text-[#e53935] flex-shrink-0 font-medium text-[10px] sm:text-[12px]">In The News</span>
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
                {inTheNews.map((topic, i) => (
                  <Link key={i} href="#" className="text-gray-700 hover:text-[#e53935] flex-shrink-0 whitespace-nowrap flex items-center text-[10px] sm:text-[12px]">
                    {topic.text}
                    {topic.isNew && <span className="text-[8px] sm:text-[9px] text-[#e53935] font-medium ml-0.5 -mt-1 sm:-mt-2">New</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Overlay - Responsive */}
        {searchOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-[200] px-2 sm:px-0"
            onClick={() => setSearchOpen(false)}
          >
            <div
              className="bg-white w-full max-w-[900px] mt-[60px] sm:mt-[90px] mx-auto border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar - Responsive */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-gray-200">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Latest News, Videos, Photos"
                  className="flex-1 h-[34px] sm:h-[38px] px-3 border border-gray-300 text-[13px] sm:text-[14px] focus:outline-none focus:border-[#e53935]"
                />

                <button className="h-[34px] sm:h-[38px] px-4 sm:px-6 bg-[#e53935] text-white text-[12px] sm:text-[13px] font-semibold">
                  SEARCH
                </button>

                <button
                  onClick={() => setSearchOpen(false)}
                  className="ml-1 sm:ml-2 text-gray-500 hover:text-black text-[18px] sm:text-[20px]"
                >
                  ×
                </button>
              </div>

              {/* Trending - Responsive */}
              <div className="px-3 sm:px-4 py-3">
                <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-gray-700 mb-2">
                  <span className="inline-block w-4 h-4 rounded-full border border-gray-400 text-[9px] sm:text-[10px] flex items-center justify-center">
                    ↗
                  </span>
                  TRENDING
                </div>

                <ul className="text-[13px] sm:text-[14px]">
                  {searchSuggestions.map((item) => (
                    <li
                      key={item}
                      className="py-2 border-t border-gray-200 text-gray-800 hover:text-[#e53935] cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}


        {/* Mobile Menu */}
        {/* {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="max-w-[1200px] mx-auto px-3 py-3">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href="#" className="block py-1.5 text-[13px] text-gray-700 hover:text-[#e53935]">
                      {item.label}
                      {item.isNew && <span className="text-[9px] text-[#e53935] font-medium ml-1">New</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )} */}
      </header>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  )
}
