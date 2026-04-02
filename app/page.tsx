import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { ProductSection } from '@/components/sections/product'
import { PrivacySection } from '@/components/sections/privacy'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { WaitlistSection } from '@/components/sections/waitlist'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black" style={{
      scrollBehavior: 'smooth',
      scrollSnapType: 'y mandatory'
    }}>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <ProductSection />
        <PrivacySection />
        <HowItWorksSection />
        <WaitlistSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
