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

      <main className="flex-1">
        <div className="relative overflow-hidden">
          <HeroSection />
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black" />
          </div>
        </div>

        <FeaturesSection />
        
        <div className="relative py-24 glow-effect">
          <ProductSection />
        </div>

        <PrivacySection />
        
        <div className="py-24 bg-gradient-to-b from-black to-emerald-950/10">
          <HowItWorksSection />
        </div>

        <WaitlistSection />
      </main>

      <Footer />
    </div>
  )
}
