import { Badge } from '@components/ui/badge'
import { SectionContainer } from '@components/ui/section-container'
import { Card } from '@components/ui/card'
import { Button } from '@components/ui/button'

const steps = [
  { 
    num: 1, 
    title: "Request Access", 
    desc: "Join our waitlist for early access",
    icon: "📩"
  },
  { 
    num: 2, 
    title: "Onboard Your Practice", 
    desc: "We handle all technical setup and training",
    icon: "🛠️"
  },
  { 
    num: 3, 
    title: "Transform Outcomes", 
    desc: "See improved engagement and results",
    icon: "📈"
  }
]

export function HowItWorksSection() {
  return (
    <SectionContainer className="bg-gradient-to-b from-transparent to-zinc-900/10">
      <div className="text-center">
        <Badge variant="default" className="mb-4">
          Implementation
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Seamless Integration
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-zinc-400">
          We make adoption effortless with white-glove onboarding and support
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.num} className="p-8 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-3xl mb-4">{step.icon}</div>
              <div className="text-2xl font-bold text-white mb-2">{step.title}</div>
              <p className="text-zinc-400">{step.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="primary" size="lg" className="px-8">
          Schedule Demo
        </Button>
      </div>
    </SectionContainer>
  )
}
