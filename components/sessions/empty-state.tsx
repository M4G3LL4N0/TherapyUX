import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/5 bg-white/2.5 p-12 text-center backdrop-blur-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10">
        <Icons.session className="h-8 w-8 text-emerald-400" />
      </div>
      <h3 className="mt-6 text-xl font-medium text-white">No sessions yet</h3>
      <p className="mt-2 text-sm text-white/70">
        Start your first session to begin your recovery journey
      </p>
      <Button className="mt-8" asChild>
        <Link href="/app/sessions/new">
          <Icons.plus className="mr-2 h-4 w-4" />
          Start New Session
        </Link>
      </Button>
    </div>
  )
}
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-white/10 p-12 text-center">
      <Icons.session className="h-10 w-10 text-white/40" />
      <h3 className="mt-4 text-lg font-medium text-white">No sessions yet</h3>
      <p className="mt-2 text-sm text-white/60">
        Start your first session to begin your recovery journey
      </p>
      <Button className="mt-6" asChild>
        <Link href="/app/sessions/new">
          <Icons.plus className="mr-2 h-4 w-4" />
          Start New Session
        </Link>
      </Button>
    </div>
  )
}
