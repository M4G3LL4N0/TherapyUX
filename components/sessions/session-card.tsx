import Link from "next/link"
import { format } from "date-fns"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

type SessionLike = {
  id: string
  type?: string
  mode?: string
  title?: string
  name?: string
  summary?: string
  description?: string
  emotionalState?: unknown
  state?: unknown
  createdAt?: string
  date?: string
  timestamp?: string
}

function getTypeIcon(type?: string) {
  if (type === "guided") return <Icons.session className="h-5 w-5" />
  if (type === "voice") return <Icons.mic className="h-5 w-5" />
  if (type === "checkin") return <Icons.sparkles className="h-5 w-5" />
  if (type === "journal") return <Icons.journal className="h-5 w-5" />
  return <Icons.session className="h-5 w-5" />
}

function getDisplayTitle(session: SessionLike) {
  return session.title || session.name || "Untitled Session"
}

function getDisplaySummary(session: SessionLike) {
  return session.summary || session.description || "No summary available yet."
}

function readMaybeString(value: unknown): string | null {
  if (typeof value === "string") return value
  if (typeof value === "number" || typeof value === "boolean") return String(value)
  return null
}

function getDisplayEmotion(session: SessionLike) {
  const value = session.emotionalState ?? session.state

  const direct = readMaybeString(value)
  if (direct) return direct

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>

    return (
      readMaybeString(record.label) ||
      readMaybeString(record.name) ||
      readMaybeString(record.primary) ||
      readMaybeString(record.value) ||
      "Unspecified"
    )
  }

  return "Unspecified"
}

function getDisplayDate(session: SessionLike) {
  const raw = session.createdAt || session.date || session.timestamp

  if (!raw) return "No date"

  const parsed = new Date(raw)
  if (Number.isNaN(parsed.getTime())) return "No date"

  return format(parsed, "MMM d, yyyy")
}

export function SessionCard({ session }: { session: SessionLike }) {
  return (
    <Link
      href={`/app/sessions/${session.id}`}
      className="block rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
            {getTypeIcon(session.type)}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-white">
                {getDisplayTitle(session)}
              </h3>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]",
                  session.mode
                    ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20"
                    : "bg-white/8 text-white/55 ring-1 ring-white/10"
                )}
              >
                {session.mode || "General"}
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/65">
              {getDisplaySummary(session)}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/45">
              <span>{getDisplayDate(session)}</span>
              <span>•</span>
              <span>{getDisplayEmotion(session)}</span>
            </div>
          </div>
        </div>

        <Icons.chevronRight className="mt-1 h-5 w-5 text-white/30" />
      </div>
    </Link>
  )
}
