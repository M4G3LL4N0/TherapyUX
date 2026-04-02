import { SectionContainer } from '../ui/section-container'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <div className="text-center">
        <Badge variant="primary" className="mb-4">
          Features
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Designed for Better Outcomes
        </h2>
        <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Our platform combines clinical expertise with intuitive design to create therapeutic experiences that work.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-8">
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold">Personalized Therapy</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Tailored interventions based on individual needs and progress.
            </p>
          </div>
        </Card>
        
        {/* Add more feature cards */}
      </div>
    </SectionContainer>
  )
}
