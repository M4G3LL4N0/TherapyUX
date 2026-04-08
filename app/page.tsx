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
          <div className="container mx-auto px-4">
            <ProductSection />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">Daily Insights</h3>
                <p className="text-white/80">Track your emotional patterns and recovery progress</p>
              </div>
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">Secure Journaling</h3>
                <p className="text-white/80">Private, encrypted space for your thoughts and reflections</p>
              </div>
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">Guided Sessions</h3>
                <p className="text-white/80">Personalized exercises for mental well-being</p>
              </div>
            </div>
          </div>
        </div>

        <PrivacySection />
        
        <div className="py-24 bg-gradient-to-b from-black to-emerald-950/10">
          <div className="container mx-auto px-4">
            <HowItWorksSection />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">Data Security</h3>
                <p className="text-white/80">End-to-end encryption ensures your privacy</p>
              </div>
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">AI Assistance</h3>
                <p className="text-white/80">Smart insights tailored to your recovery journey</p>
              </div>
            </div>
          </div>
        </div>

        <WaitlistSection />
      </main>

      <Footer />
    </div>
  )
}
