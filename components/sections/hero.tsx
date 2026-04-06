import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { SectionContainer } from "@/components/ui/section-container"

export function HeroSection() {
  return (
    <SectionContainer className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-emerald-300 uppercase">
          Private Mental OS
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          Psychological recovery,
          <span className="block bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
            rebuilt private.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
          TherapyUX is a private operating system for emotional recovery -
          combining structured therapy techniques with military-grade privacy 
          to help you regain control of your inner world.
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
