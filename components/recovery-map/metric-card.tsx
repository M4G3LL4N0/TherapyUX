import { RecoveryMetric } from "@/types/recovery-map"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export function RecoveryMetricCard({ metric }: { metric: RecoveryMetric }) {
  const trendIcon = metric.trend === 'up' ? 
    <Icons.trendUp className="h-4 w-4 text-emerald-400" /> :
    metric.trend === 'down' ? 
    <Icons.trendDown className="h-4 w-4 text-rose-400" /> :
    <Icons.trendNeutral className="h-4 w-4 text-amber-400" />

  return (
    <Card className="p-6 hover:bg-white/5 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{metric.label}</h3>
          <p className="text-sm text-white/60">{metric.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tighter">
            {metric.score}/100
          </span>
          {trendIcon}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="overflow-hidden rounded-full bg-white/10 h-2">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            style={{ width: `${metric.score}%` }}
          />
        </div>
      
        {metric.badges && (
          <div className="flex gap-2">
            {metric.badges.map((badge, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-emerald-900/20 text-emerald-400">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
