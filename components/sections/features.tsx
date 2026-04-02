import { Badge } from '@components/ui/badge'
import { Card } from '@components/ui/card'
import { SectionContainer } from '@components/ui/section-container'

const features = [
  {
    title: "AI-Powered Insights",
    description: "Advanced algorithms analyze session dynamics to provide real-time insights"
  },
  {
    title: "Secure Environment",
    description: "End-to-end encryption ensures HIPAA compliance and client confidentiality"
  },
  {
    title: "Progress Tracking",
    description: "Visual timeline of treatment milestones and client progress"
  }
]

export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <div className="text-center">
        <Badge variant="primary" className="mb-4">
          Features
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Enterprise-Grade Precision
        </h2>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Designed by therapists for therapists, with tools that adapt to your workflow
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}
