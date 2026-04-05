import { SectionContainer } from "../ui/section-container"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"

export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Badge>Why TherapyUX Works</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Therapists don't see what you see daily. We help you connect the dots.
          </h2>
          <p className="mt-4 text-white/65 max-w-2xl mx-auto">
            Clinical tools weren't built for independent thinkers who need raw, private
            access to their patterns without institutional filters.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className="rounded-lg bg-emerald-900/10 p-3 w-fit">
                <Icons.lock className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Beyond HIPAA Private</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                End-to-end encryption means zero exposure to employees, AI training, or third parties. Your data never leaves your devices unencrypted.
              </p>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className="rounded-lg bg-emerald-900/10 p-3 w-fit">
                <Icons.brain className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Pattern Mapping</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Surface hidden connections between triggers, mental states, and behaviors through adaptive journaling and structured reflection.
              </p>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className="rounded-lg bg-emerald-900/10 p-3 w-fit">
                <Icons.cpu className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">Personal Algorithms</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                As you use TherapyUX, it tunes interventions to your unique psychology - no generic coping strategies.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
