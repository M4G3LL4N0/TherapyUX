import { Icons } from "@/components/ui/icons"

function readString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback
}

export function RecoveryPatternCard({ pattern }: { pattern: unknown }) {
  const data = (pattern ?? {}) as Record<string, unknown>

  const direction =
    readString(data.trend) ||
    readString(data.direction) ||
    (typeof data.positive === "boolean"
      ? data.positive
        ? "up"
        : "down"
      : "")

  const isPositive = direction === "up" || direction === "positive"

  const title =
    readString(data.title) ||
    readString(data.name) ||
    readString(data.label) ||
    "Recovery pattern"

  const description =
    readString(data.description) ||
    readString(data.summary) ||
    readString(data.detail) ||
    "Pattern insight unavailable."

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
