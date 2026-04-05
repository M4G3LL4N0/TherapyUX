import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"

export function HeroSection() {
  return (
    <SectionContainer className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase shadow-[0_0_20px_-5px_rgba(0,255,159,0.3)]">
          Private Mental Operating System ∙ Coming 2025
        </div>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Your mind is yours.
          </span>
          <br />
          Your therapy should be too.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
          TherapyUX helps emotionally intense builders process pain privately,
          identify destructive patterns, and rewire reactions through
          personalized, research-backed tools that belong solely to you.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="bg-emerald-400 text-black hover:bg-emerald-300 shadow-[0_0_20px_-5px_rgba(0,255,159,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,255,159,0.6)] transition-all duration-300">
            Join Early Access
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 group"
          >
            <span className="inline-flex items-center gap-2">
              How It Works
              <Icons.chevronRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </span>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
