import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card } from "@/components/ui/card"
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
        <HeroSection />
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
          <Card className="grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">Concept preview</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Night spiral, laid out as a workspace.</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                A public mock of how a hard moment could be named and organized. Not a clinical protocol and not medical care.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ["Trigger", "Uncertainty, silence, or a story that is running ahead of the facts."],
                ["Pattern", "Urgency, looping, and the urge to fix it before you can see it."],
                ["Next step", "Pause. Separate facts from fear. This is a layout concept, not treatment."],
              ].map(([label, text]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
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
