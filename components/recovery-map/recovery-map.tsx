import { Card } from "@/components/ui/card"
import { RecoveryMetricCard } from "./metric-card"
import { TriggerClusterCard } from "./trigger-cluster-card"
import { RecoveryPatternCard } from "./pattern-card"
import { RecoveryFocusCard } from "./focus-card"
import {
  mockRecoveryMetrics,
  mockTriggerClusters,
  mockRecoveryPatterns,
  mockRecoveryFocus,
} from "@/lib/mock-recovery-map"

export function RecoveryMap() {
  return (
    <div className="space-y-10">
      <section>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
            Recovery Map
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Your pattern intelligence dashboard
          </h1>
          <p className="mt-4 text-white/65">
            Track emotional regulation, self-trust, clarity, and the recurring
            loops shaping your recovery.
          </p>
        </div>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockRecoveryMetrics.map((metric) => (
            <RecoveryMetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-xl font-semibold text-white">Trigger Clusters</h2>
          <div className="mt-4 space-y-4">
            {mockTriggerClusters.map((cluster) => (
              <TriggerClusterCard key={cluster.id} trigger={cluster} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">Next Focus</h2>
          <div className="mt-4">
            <RecoveryFocusCard focus={mockRecoveryFocus} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Recurring Patterns</h2>
        <Card className="mt-4 p-6">
          <ul className="space-y-6">
            {mockRecoveryPatterns.map((pattern) => (
              <RecoveryPatternCard key={pattern.id} pattern={pattern} />
            ))}
          </ul>
        </Card>
      </section>
    </div>
  )
}
