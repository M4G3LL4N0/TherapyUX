import { TriggerCluster } from "@/types/recovery-map"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function TriggerClusterCard({ trigger }: { trigger: TriggerCluster }) {
  return (
    <Card className="p-6 hover:bg-white/5 transition-colors">
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="font-medium">{trigger.theme}</h3>
          <div className="flex justify-between text-sm text-white/60">
            <span>{trigger.frequency}</span>
            <span>{'⚠️'.repeat(trigger.intensity)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-wider text-white/60">
            Related Metrics
          </h4>
          <div className="flex flex-wrap gap-2">
            {trigger.relatedMetrics.map((metric, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5">
                {metric.replace('_', ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
