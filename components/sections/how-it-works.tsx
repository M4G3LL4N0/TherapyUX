import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/ui/icons"

export function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Badge>How it works</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            A recovery OS, not a chatbot
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Name the moment, separate facts from fear, and keep a private map of
            what helped. A concept for layout and language—not a treatment protocol.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="w-fit rounded-lg bg-emerald-900/10 p-3">
              <Icons.sparkles className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">
              Stabilize first
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Slow the moment down: name the trigger, wait before acting, and
              keep the next step small. Educational framing only.
            </p>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="w-fit rounded-lg bg-emerald-900/10 p-3">
              <Icons.session className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">
              Structure the moment
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Each session captures trigger, thought pattern, intervention, and
              outcome—so progress is legible and repeatable.
            </p>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="w-fit rounded-lg bg-emerald-900/10 p-3">
              <Icons.chart className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">
              Learn your patterns
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Recovery Map turns sessions into pattern intelligence: clusters,
              trends, and next focus—quietly, privately.
            </p>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
