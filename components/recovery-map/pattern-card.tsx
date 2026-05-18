import { Icons } from "@/components/ui/icons"
import type { RecoveryPattern } from "@/types/recovery-map"

export function RecoveryPatternCard({ pattern }: { pattern: RecoveryPattern }) {
  const isPositive = pattern.trend === "up"
  const title = pattern.title
  const description = pattern.description

  return (
    <li className="flex items-start gap-4">
      <div
        className={`mt-0.5 rounded-lg p-2 ${
          isPositive ? "bg-emerald-900/20" : "bg-rose-900/20"
        }`}
      >
        {isPositive ? (
          <Icons.trendUp className="h-4 w-4 text-emerald-400" />
        ) : (
          <Icons.trendDown className="h-4 w-4 text-rose-400" />
        )}
      </div>

      <div>
        <h3 className="text-sm font-medium text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/65">{description}</p>
      </div>
    </li>
  )
}
