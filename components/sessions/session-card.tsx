import { Session } from "@/types/session"
import { Icons } from "@/components/ui/icons"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function SessionCard({ session }: { session: Session }) {
  return (
    <Link href={`/app/sessions/${session.id}`}>
      <div className="flex items-center justify-between rounded-lg p-4 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-4">
          <Icons.session className="h-5 w-5 text-emerald-400" />
          <div>
            <h3 className="font-medium">
              {session.type === 'guided' && 'Guided: '}
              {session.type === 'journal' && 'Journal: '}
              {session.type === 'emergency' && 'Emergency: '}
              {session.type === 'check-in' && 'Check-in: '}
              {session.summary}
            </h3>
            <p className="text-sm text-white/80">
              {format(new Date(session.startedAt), 'MMM d, yyyy h:mm a')} • {session.duration} min
            </p>
          </div>
        </div>
        <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
          Review
        </button>
      </div>
    </Link>
  )
}
