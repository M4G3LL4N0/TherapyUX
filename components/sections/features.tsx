import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/ui/icons"

export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>Why TherapyUX Works</Badge>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Built for real mental recovery, not generic advice
        </h2>

        <p className="mt-4 text-white/65">
          TherapyUX adapts to your patterns, protects your data, and helps you
          regain control.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="w-fit rounded-lg bg-emerald-900/10 p-3">
              <Icons.lock className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">
              Beyond HIPAA Private
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Designed so your inner life stays yours. Encryption and minimal
              data exposure are core, not optional.
            </p>
          </Card>

          <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="w-fit rounded-lg bg-emerald-900/10 p-3">
              <Icons.brain className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">
              Adaptive Intelligence
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Learns your triggers, patterns, and emotional responses over time.
            </p>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
