import { Badge } from '@/components/ui/badge'
import { SectionContainer } from '@/components/ui/section-container'

export function PrivacySection() {
  return (
    <SectionContainer id="privacy" className="bg-gradient-to-b from-white/50 to-white/20 dark:from-zinc-900/50 dark:to-zinc-900/20">
      <div className="text-center">
        <Badge variant="primary" className="mb-4">
          Privacy First
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
          Bank-Grade Security
        </h2>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Your data never leaves your control. We built TherapyUX with zero-knowledge architecture.
        </p>
      </div>
    </SectionContainer>
  )
}
