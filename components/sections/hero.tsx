import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"

export function HeroSection() {
  return (
    <SectionContainer className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase shadow-[0_0_20px_-5px_rgba(0,255,159,0.3)]">
          Private mental recovery operating system
        </div>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Precision mental care
          </span>
          <br />
          built around your needs
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
          TherapyUX helps you process emotional pain, regain control, and
          understand your patterns through adaptive support, structured recovery,
          and uncompromising privacy.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="bg-emerald-400 text-black hover:bg-emerald-300 shadow-[0_0_20px_-5px_rgba(0,255,159,0.5)]">
            Join Waitlist
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/30"
          >
            Learn More
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
