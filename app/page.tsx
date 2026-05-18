import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { PrivacySection } from "@/components/sections/privacy"
import { ProductSection } from "@/components/sections/product"
import { WaitlistSection } from "@/components/sections/waitlist"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white motion-fade-up">
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProductSection />
        <PrivacySection />
        <WaitlistSection />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <MarketingGraphicsStack />
    </main>
      <Footer />
    </div>
  )
}
