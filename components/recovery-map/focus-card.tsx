import { Card } from "@/components/ui/card"

function readString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback
}

export function RecoveryFocusCard({ focus }: { focus: unknown }) {
  const data = (focus ?? {}) as Record<string, unknown>

  const title =
    readString(data.title) ||
    readString(data.area) ||
    readString(data.label) ||
    "Recommended next focus"

  const description =
    readString(data.description) ||
    readString(data.summary) ||
    readString(data.detail) ||
    "This is the next highest-leverage area for improving recovery."

  const recommendation =
    readString(data.recommendation) ||
    readString(data.action) ||
    readString(data.nextStep) ||
    "Continue with the suggested protocol and monitor pattern changes."

  return (
    <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
        Recommended next focus
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/70">
        {description}
      </p>

      <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
          Recommendation
        </p>
        <p className="mt-2 text-sm leading-6 text-white/80">
          {recommendation}
        </p>
      </div>
    </Card>
  )
}
