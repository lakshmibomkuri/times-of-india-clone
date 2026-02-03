"use client"
import { useState } from "react"
import { Header } from "@/components/toi/header"
import { LeftSidebar } from "@/components/toi/left-sidebar"
import { MainContent } from "@/components/toi/main-content"
import { RightSidebar } from "@/components/toi/right-sidebar"
import { Footer } from "@/components/toi/footer"
import { SharedAdStrips } from "@/components/toi/shared-ad-strips"
// Import all sections in order
import { TechEducationSection } from "@/components/toi/sections/tech-education-section"
import { EntertainmentSection } from "@/components/toi/sections/entertainment-section"
import { WorldOfStarsSection } from "@/components/toi/sections/world-of-stars-section"
import { YouMayLikeSection } from "@/components/toi/sections/you-may-like-section"
import { BudgetSection } from "@/components/toi/sections/budget-section"
import { CityCrimeSection } from "@/components/toi/sections/city-crime-section"
import { HealthSection } from "@/components/toi/sections/health-section"
import { WorldSection } from "@/components/toi/sections/world-section"
import { SportsSection } from "@/components/toi/sections/sports-section"
import { InternationalSportsSection } from "@/components/toi/sections/international-sports-section"
import { WPLSection } from "@/components/toi/sections/wpl-section"
import { LegalSection } from "@/components/toi/sections/legal-section"
import { CitySection } from "@/components/toi/sections/city-section"
import { LifestyleSection } from "@/components/toi/sections/lifestyle-section"
import { SponsoredCardsSection } from "@/components/toi/sections/sponsored-cards-section"
import { TrendingSection } from "@/components/toi/sections/trending-section"
import { VideosSection } from "@/components/toi/sections/videos-section"
import { AstrologySection } from "@/components/toi/sections/astrology-section"
import { BusinessSection } from "@/components/toi/sections/business-section"
import { TechnologySection } from "@/components/toi/sections/technology-section"
import { EducationSection } from "@/components/toi/sections/education-section"
import { DefenceSection } from "@/components/toi/sections/defence-section"
import { FromAcrossTOISection } from "@/components/toi/sections/from-across-toi-section"
import { TravelSection } from "@/components/toi/sections/travel-section"
import { RecipesSection } from "@/components/toi/sections/recipes-section"
import { OpinionFeaturesSection } from "@/components/toi/sections/opinion-features-section"
import { MoreSectionsGrid } from "@/components/toi/sections/more-sections"
import { MediawireSection } from "@/components/toi/sections/mediawire-section"
import { PodcastsSection } from "@/components/toi/sections/podcasts-section"
import { CartoonsSection } from "@/components/toi/sections/cartoons-section"
import { OpinionsSection } from "@/components/toi/sections/opinions-section"
import { TOIPlusSection } from "@/components/toi/sections/toi-plus-section"
import { TOISliderSection } from "@/components/toi/sections/toi-slider-section"
import { VoiceOfConscienceSection } from "@/components/toi/sections/voice-of-conscience-section"
import { SponsoredAdsSection } from "@/components/toi/sections/sponsored-ads-section"
import { AutoSection } from "@/components/toi/sections/auto-section"
import { ExploredGlobeSection } from "@/components/toi/sections/explored-globe-section"
import { TimesOfIndiaSection } from "@/components/toi/sections/times-of-india-section"
import { HotOnWebSection } from "@/components/toi/sections/hot-on-web-section"
import { TrendingTopicsSection } from "@/components/toi/sections/trending-topics-section"
import { PopularCategoriesSection } from "@/components/toi/sections/popular-categories-section"
import { TrendingVideosSection } from "@/components/toi/sections/trending-videos-section"
import { LatestNewsSection } from "@/components/toi/sections/latest-news-section"
import { Play, X } from 'lucide-react';
import {Entertainment} from "@/components/toi/sections/Entertainment"
export default function HomePage() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  return (
    
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Shared Ad Strips for all pages */}
      {/* <SharedAdStrips /> */}

      {/* Main Content Area */}
      <div className="xl:ml-[140px] xl:mr-[145px]">
        <Header />
        
        <main className="bg-white">
        {/* Now Playing Banner - Responsive */}
        <div className="flex items-center bg-red-600 text-white px-2 sm:px-4 py-2 mx-2 sm:mx-0 rounded-xl">
          {/* Left label */}
          <div className="flex items-center bg-white px-2 sm:px-3 py-1 rounded mr-2 sm:mr-4 text-[10px] sm:text-[12px] font-semibold text-red-500">
            <Play size={12} className="mr-1 text-red-500 sm:w-[14px] sm:h-[14px]" />
            <span className="hidden sm:inline">Now Playing</span>
            <span className="sm:hidden">Live</span>
          </div>

          {/* Scrolling text */}
          <div className="relative overflow-hidden flex-1">
            <div className="font-medium text-[12px] sm:text-[14px] truncate sm:block">
              Kolkata Warehouse Fire Kills 7, India-EU FTA, Severe Winter Storm In US
              <span className="hidden sm:inline"> And More</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            className="ml-2 sm:ml-4 hover:opacity-80 flex-shrink-0"
          >
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

          {/* 1. Main 3-column layout (responsive) */}
          <div className="max-w-[980px] mx-auto px-2 sm:px-4 lg:px-0 py-4">
            {/* Mobile: Single column */}
            <div className="flex flex-col gap-3 md:hidden">
              <div className="w-full">
                <MainContent />
              </div>
              <div className="w-full">
                <LeftSidebar />
              </div>
              <div className="w-full">
                <RightSidebar />
              </div>
            </div>
            
            {/* Tablet: Left sidebar full width, then main + right in 2 columns */}
            <div className="hidden md:flex lg:hidden flex-col gap-3">
              <div className="w-full">
                <LeftSidebar />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <MainContent />
                </div>
                <div className="w-[300px] flex-shrink-0">
                  <RightSidebar />
                </div>
              </div>
            </div>
            
            {/* Desktop: Original 3-column layout */}
            <div className="hidden lg:flex gap-5">
              <div className="w-[190px] flex-shrink-0">
                <LeftSidebar />
              </div>
              <div className="flex-1 min-w-0">
                <MainContent />
              </div>
              <div className="w-[300px] flex-shrink-0">
                <RightSidebar />
              </div>
            </div>
          </div>

          {/* All Full-Width Sections - Responsive container */}
          <div className="max-w-[980px] mx-auto px-2 sm:px-4 lg:px-0">
            
            {/* Sponsored Cards - 3 promotional images (moved after first section) */}
            <SponsoredCardsSection />

            {/* Technology, Education, Also In News - all three in one row */}
            <TechEducationSection />

            {/* Entertainment with right side photo stories section */}
            <EntertainmentSection />

            {/* World of Stars */}
            {/* <WorldOfStarsSection /> */}

            {/* You May Like */}
            <YouMayLikeSection />

            {/* Budget 2026 */}
            <BudgetSection />

            {/* City Crime */}
            <CityCrimeSection />

            {/* Health */}
            <HealthSection />

            {/* World */}
            <WorldSection />

            {/* Sports */}
            <SportsSection />

            {/* International Sports */}
            {/* <InternationalSportsSection /> */}

            {/* Women Premier League 2026 */}
            <WPLSection />

            {/* Legal */}
            <LegalSection />

            {/* City */}
            <CitySection />

            {/* Lifestyle (beauty, parenting, food, travel, astrology, real estate) */}
            <LifestyleSection />

            {/* Ad Section after Lifestyle */}
            <SponsoredAdsSection />

            {/* Trending */}
            <TrendingSection />

            {/* Videos */}
            <VideosSection />

            {/* Ad Section after Videos */}
            <SponsoredCardsSection />

            {/* Astrology + Astrology News */}
            <AstrologySection />
            <Entertainment/>

            {/* Business */}
            <BusinessSection />

            {/* Technology (with comparison category) */}
            <TechnologySection />

            {/* Education */}
            <EducationSection />

            {/* Defence */}
            <DefenceSection />

            {/* From Across TOI */}
            <FromAcrossTOISection />

            {/* Travel */}
            <TravelSection />

            {/* Recipes & Food News */}
            <RecipesSection />

            {/* Opinion and Features */}
            <OpinionFeaturesSection />

            {/* Blogs, NRI, Women, Science, Astrology, Obituaries, Environment, Speaking Tree, Sunday Times, Tech Tips, Good News, iTimes Espanol - 6 cols per row */}
            <MoreSectionsGrid />

            {/* Mediawire */}
            <MediawireSection />

            {/* Podcasts */}
            <PodcastsSection />

            {/* Cartoons */}
            <CartoonsSection />

            {/* Opinions */}
            <OpinionsSection />

            {/* TOI+ Premium Content */}
            <TOIPlusSection />

            {/* TOI with image sliders */}
            <TOISliderSection />

            {/* The Voice of Conscience */}
            <VoiceOfConscienceSection />

            {/* Sponsored Stories */}
            <SponsoredAdsSection />

            {/* Auto */}
            <AutoSection />

            {/* Explored Every Corner Across the Globe */}
            <ExploredGlobeSection />

            {/* The Times of India */}
            {/* <TimesOfIndiaSection /> */}

            {/* Hot on the Web */}
            <HotOnWebSection />

            {/* Trending Topics */}
            <TrendingTopicsSection />

            {/* Popular Categories */}
            <PopularCategoriesSection />

            {/* Trending Videos */}
            <TrendingVideosSection />

            {/* Latest News */}
            <LatestNewsSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
