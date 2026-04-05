import Link from "next/link"
import { format } from "date-fns"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { EmotionalStateChart } from "@/components/sessions/emotional-state-chart"

type SessionLike = Record<string, unknown> & {
  id: string
}

function readMaybeString(value: unknown): string | null {
  if (typeof value === "string") return value
  if (typeof value === "number" || typeof value === "boolean") return String(value)
  return null
}

function readRichField(value: unknown, fallback: string): string {
  const direct = readMaybeString(value)
  if (direct) return direct

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>
    return (
      readMaybeString(record.label) ||
      readMaybeString(record.name) ||
      readMaybeString(record.title) ||
      readMaybeString(record.summary) ||
      readMaybeString(record.description) ||
      readMaybeString(record.value) ||
      readMaybeString(record.text) ||
      readMaybeString(record.primary) ||
      fallback
    )
  }

  return fallback
}

function getString(session: SessionLike, ...keys: string[]) {
  for (const key of keys) {
    const value = readMaybeString(session[key])
    if (value) return value
  }
  return ""
}

function getDisplayTitle(session: SessionLike) {
  return getString(session, "title", "name") || "Untitled Session"
}

function getDisplayDate(session: SessionLike) {
  const raw =
    getString(session, "createdAt", "date", "timestamp") || ""

  if (!raw) return "No date"

  const parsed = new Date(raw)
  if (Number.isNaN(parsed.getTime())) return "No date"

  return format(parsed, "MMMM d, yyyy")
}

function getDisplayEmotion(session: SessionLike) {
  return readRichField(session.emotionalState ?? session.state, "Unspecified")
}

export function SessionDetail({ session }: { session: unknown }) {
  const s = (session ?? {}) as SessionLike

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/app/sessions"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            <Icons.chevronLeft className="h-4 w-4" />
            Back to sessions
          </Link>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {getDisplayTitle(s)}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-white/50">
            <span>{getDisplayDate(s)}</span>
            <span>•</span>
            <span>{getString(s, "type") || "general"}</span>
            <span>•</span>
            <span>{getString(s, "mode") || "General"}</span>
          </div>
        </div>

        <Button variant="outline">Resume Flow</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold text-white">Session breakdown</h2>

          <div className="mt-6 grid gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Trigger
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {readRichField(
                  s.trigger,
                  "A moment of emotional activation was captured, but no specific trigger was saved."
                )}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Thought pattern
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {readRichField(
                  s.thoughtPattern,
                  "Pattern analysis will appear here as sessions become more structured."
                )}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Intervention
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {readRichField(
                  s.intervention,
                  "No formal intervention was recorded for this session yet."
                )}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {readRichField(
                  s.outcome,
                  "Outcome details will appear once the session is completed and summarized."
                )}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Suggested next step
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {readRichField(
                  s.nextStep,
                  "Return to your dashboard and continue with the next recommended recovery mode."
                )}
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">
              Emotional state
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Current recorded state: {getDisplayEmotion(s)}
            </p>
            <div className="mt-6">
              <EmotionalStateChart emotionalState={(s.emotionalState ?? s.state) as never} />
            </div>
          </Card>

          <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Privacy status</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              This session is stored in your private recovery workspace and is
              ready for future encrypted persistence.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
