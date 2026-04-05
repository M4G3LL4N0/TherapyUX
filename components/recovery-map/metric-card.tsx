import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import type { RecoveryMetric } from "@/types/recovery-map"

export function RecoveryMetricCard({
  metric,
}: {
  metric: RecoveryMetric
}) {
  const isUp = metric.trend === "up"
  const isDown = metric.trend === "down"

  return (
    <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            {metric.label}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {metric.score}
          </h3>
        </div>

        <div
          className={`rounded-xl p-2 ${
            isUp
              ? "bg-emerald-900/20"
              : isDown
              ? "bg-rose-900/20"
              : "bg-amber-900/20"
          }`}
        >
          {isUp ? (
            <Icons.trendUp className="h-4 w-4 text-emerald-400" />
          ) : isDown ? (
            <Icons.trendDown className="h-4 w-4 text-rose-400" />
          ) : (
            <Icons.trendNeutral className="h-4 w-4 text-amber-400" />
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-white/65">
        {metric.description}
      </p>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${
            isUp
              ? "bg-emerald-400"
              : isDown
              ? "bg-rose-400"
              : "bg-amber-400"
          }`}
          style={{ width: `${Math.max(0, Math.min(metric.score, 100))}%` }}
        />
      </div>
    </Card>
  )
}
