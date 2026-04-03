import { RecoveryMetricCard } from "./metric-card"
import { TriggerClusterCard } from "./trigger-cluster-card"
import { RecoveryPatternCard } from "./pattern-card"
import { RecoveryFocusCard } from "./focus-card"
import { 
  mockRecoveryMetrics, 
  mockTriggerClusters,
  mockRecoveryPatterns,
  mockRecoveryFocuses
} from "@/types/recovery-map"

export function RecoveryMap() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold">Core Recovery Metrics</h2>
        <p className="text-sm text-white/60 mb-4">
          Your psychological foundation across key therapy dimensions
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockRecoveryMetrics.map(metric => (
            <RecoveryMetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Trigger Clusters</h2>
        <p className="text-sm text-white/60 mb-4">
          Patterns in situations that challenge your recovery
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {mockTriggerClusters.map(trigger => (
            <TriggerClusterCard key={trigger.id} trigger={trigger} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold">Recurring Patterns</h2>
          <Card className="p-6 mt-4">
            <ul className="space-y-6">
              {mockRecoveryPatterns.map(pattern => (
                <RecoveryPatternCard key={pattern.id} pattern={pattern} />
              ))}
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Recommended Focus</h2>
          <Card className="p-6 mt-4">
            <ul className="space-y-6">
              {mockRecoveryFocuses.map(focus => (
                <RecoveryFocusCard key={focus.id} focus={focus} />
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  )
}
