import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { SectionContainer } from "@/components/ui/section-container"

export function HeroSection() {
  return (
    <SectionContainer className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase">
          Private mental recovery operating system
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
          Your mind is yours.
          <span className="block text-white/70">Your therapy should be too.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
          TherapyUX helps people process emotional pain, regain control, and
          understand their patterns through guided support, structured recovery,
          and privacy-first design.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="bg-emerald-400 text-black hover:bg-emerald-300">
            Join Waitlist
          </Button>

          <Button
            variant="outline"
            className="group border-white/15 text-white hover:bg-white/8"
          >
            <span className="inline-flex items-center gap-2">
              How It Works
              <Icons.chevronRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
            </span>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
