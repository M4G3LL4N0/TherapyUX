import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export function EmptyState() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <Icons.session className="h-8 w-8 text-white/40" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        No sessions yet
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
        Start your first guided recovery session to begin tracking emotional
        patterns, triggers, and next-step interventions.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/app/modes">
          <Button className="bg-emerald-400 text-black hover:bg-emerald-300">
            Explore Recovery Modes
          </Button>
        </Link>
        <Link href="/app/dashboard">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
