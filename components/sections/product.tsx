import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/ui/icons"

export function ProductSection() {
  return (
    <SectionContainer>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Badge>Product</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Designed for privacy-sensitive recovery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            TherapyUX helps you move from emotional activation to steady action,
            with a premium calm interface and strict privacy posture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-emerald-900/10 p-3">
                <Icons.shield className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  Privacy-first architecture
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Minimal data exposure by default, with a product roadmap that
                  prioritizes encryption, control, and user agency.
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-emerald-900/10 p-3">
                <Icons.brain className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  Emotionally intelligent UX
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Calm, dark, premium UI that reduces cognitive load during
                  activation and keeps the user in control.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
