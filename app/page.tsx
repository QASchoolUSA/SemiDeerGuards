import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TruckBrandFilter from '@/components/home/TruckBrandFilter'
import TrustBadges from '@/components/home/TrustBadges'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import HowItWorks from '@/components/home/HowItWorks'
import StatsBanner from '@/components/home/StatsBanner'
import Testimonials from '@/components/home/Testimonials'
import FAQSection from '@/components/home/FAQSection'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'SemiDeerGuards — Premium Deer Guards for Semi Trucks',
  description: 'Heavy-duty deer guards engineered for Volvo, Kenworth, Freightliner, Peterbilt, and Mack semi trucks. CAS-compatible, Made in USA, 3-year warranty. Free freight shipping on orders over $500.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <TruckBrandFilter />
      <TrustBadges />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  )
}
