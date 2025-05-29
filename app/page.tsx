import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import CausesSection from "@/components/causes-section"
import ProgramsSection from "@/components/programs-section"
import UpiPaymentSection from "@/components/upi-payment-section"
import TestimonialsSection from "@/components/testimonials-section"
import CallToActionSection from "@/components/call-to-action-section"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CausesSection />
      <ProgramsSection />
      <UpiPaymentSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  )
}
