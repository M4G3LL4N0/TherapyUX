type EmotionalStateLike = unknown

function getNumber(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback
}

function getLabel(value: unknown, fallback: string) {
  return typeof value === "string" ? value : fallback
}

function normalizeEmotionalState(emotionalState: EmotionalStateLike) {
  if (typeof emotionalState === "string") {
    return {
      label: emotionalState,
      mood: 5,
      anxiety: 5,
      clarity: 5,
    }
  }

  if (emotionalState && typeof emotionalState === "object") {
    const data = emotionalState as Record<string, unknown>

    return {
      label:
        getLabel(data.label, "") ||
        getLabel(data.name, "") ||
        getLabel(data.value, "") ||
        "Current state",
      mood: getNumber(data.mood, 5),
      anxiety: getNumber(data.anxiety, 5),
      clarity: getNumber(data.clarity, 5),
    }
  }

  return {
    label: "Current state",
    mood: 5,
    anxiety: 5,
    clarity: 5,
  }
}

function MetricBar({
  label,
  value,
  colorClass,
}: {
  label: string
  value: number
  colorClass: string
}) {
  const safeValue = Math.max(0, Math.min(10, value))
  const width = `${safeValue * 10}%`

  return (
    <div>
      <div className="mb-1 flex justify-between text-sm text-white/70">
        <span>{label}</span>
        <span>{safeValue}/10</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${colorClass}`} style={{ width }} />
      </div>
    </div>
  )
}

export function EmotionalStateChart({
  emotionalState,
}: {
  emotionalState: EmotionalStateLike
}) {
  const state = normalizeEmotionalState(emotionalState)

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">
          Recorded state
        </p>
        <p className="mt-2 text-sm text-white/75">{state.label}</p>
      </div>

      <MetricBar label="Mood" value={state.mood} colorClass="bg-emerald-400" />
      <MetricBar label="Anxiety" value={state.anxiety} colorClass="bg-rose-400" />
      <MetricBar label="Clarity" value={state.clarity} colorClass="bg-cyan-400" />
    </div>
  )
}
