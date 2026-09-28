import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"

export function WaitlistSection() {
  return (
    <SectionContainer
      id="waitlist"
      className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight">Join the waitlist</h2>
        <p className="mb-6 text-white/80">
          Early access for a privacy-first recovery workspace concept. Not medical care.
        </p>
        <Button href="/waitlist">Open waitlist</Button>
      </div>
    </SectionContainer>
  )
}
