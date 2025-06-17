"use client"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import CausesSection from "@/components/old-age-home-section"
import ProgramsSection from "@/components/programs-section"
import AwardsSection from "@/components/awards-section"
import TestimonialsSection from "@/components/testimonials-section"
import CallToActionSection from "@/components/call-to-action-section"

export default function Home() {
  return (
    <div className="overflow-hidden mt-5 md:mt-0">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CausesSection />
      <div id="our-sevas">
        <ProgramsSection />
      </div>
      <AwardsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  )
}
