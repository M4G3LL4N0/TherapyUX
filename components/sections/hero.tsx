import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { SectionContainer } from "@/components/ui/section-container"

export function HeroSection() {
  return (
    <SectionContainer className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
          Your mind is yours. Your therapy should be too.
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          Private mental recovery,
          <span className="block bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-100 bg-clip-text text-transparent">
            built like an OS.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
          TherapyUX is a privacy-first operating system for triggers, shame,
          panic, overthinking, and attachment spirals—designed to help you
          stabilize faster and learn your patterns without turning your inner
          life into someone else's dataset.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 px-8 text-slate-950 shadow-[0_14px_48px_rgba(52,211,153,0.28)] hover:from-emerald-200 hover:to-teal-200"
            size="lg"
          >
            <a href="#waitlist">Join Waitlist</a>
          </Button>

          <Button
            variant="outline"
            className="group rounded-full border-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md hover:bg-white/10"
            size="lg"
            asChild
          >
            <a href="#how-it-works" className="inline-flex items-center gap-2">
              How It Works
              <Icons.chevronRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
            </a>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
