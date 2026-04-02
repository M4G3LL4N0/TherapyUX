import { Badge } from '@components/ui/badge'
import { SectionContainer } from '@components/ui/section-container'
import { Card } from '@components/ui/card'

const steps = [
  { num: 1, title: "Sign Up", desc: "Join our waitlist to get early access" },
  { num: 2, title: "Onboard", desc: "Complete the guided setup process" },
  { num: 3, title: "Engage", desc: "Start using TherapyUX with your clients" }
]

export function HowItWorksSection() {
  return (
    <SectionContainer>
      <div className="text-center">
        <Badge variant="default" className="mb-4">
          How It Works
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple Yet Powerful
        </h2>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Get started in minutes, not weeks
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <Card key={step.num} className="p-6 text-center relative overflow-hidden">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xl font-bold mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-zinc-500 dark:text-zinc-400">{step.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}
