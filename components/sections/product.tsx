import { Badge } from '@/components/ui/badge'
import { SectionContainer } from '@/components/ui/section-container'
import { Card } from '@/components/ui/card'

export function ProductSection() {
  return (
    <SectionContainer className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      </div>
      <div className="text-center relative z-10">
        <Badge variant="secondary" className="mb-4">
          Clinical-Grade UX
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Designed for Therapeutic Impact
        </h2>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-zinc-400">
          We've reimagined digital therapy interfaces to reduce dropout rates and increase engagement while preserving clinical integrity.
        </p>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold text-white">3x Higher Engagement</h3>
            <p className="mt-2 text-zinc-400">Our interfaces maintain 75%+ completion rates</p>
          </Card>
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold text-white">40% Faster Onboarding</h3>
            <p className="mt-2 text-zinc-400">Patients start therapy faster with intuitive flows</p>
          </Card>
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold text-white">90% Satisfaction</h3>
            <p className="mt-2 text-zinc-400">Both clinicians and patients love the experience</p>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
