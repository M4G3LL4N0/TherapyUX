import { SectionContainer } from "../ui/section-container"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"

export function FeaturesSection() {
  return (
    <SectionContainer>
      <div className="mb-8">
        <Badge>Features</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Precision support for hard moments
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-medium text-white">Adaptive support</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            TherapyUX learns patterns, triggers, and recovery loops over time.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-medium text-white">Privacy-first design</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Built to minimize exposure and keep sensitive inner-life data controlled.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-medium text-white">Multimodal care</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Text, voice, guided exercises, and visual breakdowns in one system.
          </p>
        </Card>
      </div>
    </SectionContainer>
  )
}
