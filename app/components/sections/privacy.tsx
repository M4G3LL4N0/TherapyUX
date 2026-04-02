import { SectionContainer } from '../ui/section-container'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

export function PrivacySection() {
  return (
    <SectionContainer id="privacy" className="bg-gradient-to-b from-white/50 to-white/20 dark:from-zinc-900/50 dark:to-zinc-900/20 backdrop-blur-lg">
      <div className="text-center">
        <Badge variant="primary" className="mb-4">
          Privacy First
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Military-Grade Privacy
        </h2>
        <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Your mental health data belongs to you - we've built our system to keep it that way.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-8">
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold">Zero-Trust Design</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Built with zero-trust architecture, we never access your data without explicit consent.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/50 flex items-center justify-center">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold">Encrypted Vault</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Your memories and thoughts are encrypted end-to-end.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-lg bg-pink-50 dark:bg-pink-900/50 flex items-center justify-center">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold">No Data Training</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              We never use your data to train our models.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900/50 flex items-center justify-center">
              {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold">Transparent Control</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              Full visibility and control over your data at all times.
            </p>
          </div>
        </Card>
      </div>
    </SectionContainer>
  )
}
