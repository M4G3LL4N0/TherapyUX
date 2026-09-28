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
          TherapyUX is a design concept for a calmer recovery workspace—modes,
          pattern maps, and private session layout. It is not medical care, not
          a clinic, and not a replacement for licensed treatment.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/waitlist" className="rounded-full px-8">
            Join waitlist
          </Button>
          <Button href="/modes" variant="secondary" className="rounded-full px-8">
            Preview modes
            <Icons.chevronRight className="ml-2 h-4 w-4 opacity-60" />
          </Button>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/45">
          This public page describes a product concept. TherapyUX does not diagnose, treat, or provide crisis care.
        </p>
      </div>
    </SectionContainer>
  )
}
