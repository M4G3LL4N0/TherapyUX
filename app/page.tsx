import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { ProductSection } from "@/components/sections/product"
import { PrivacySection } from "@/components/sections/privacy"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { WaitlistSection } from "@/components/sections/waitlist"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductSection />
        <PrivacySection />
        <HowItWorksSection />
        <WaitlistSection />
      </main>

      <Footer />
    </div>
  )
}
