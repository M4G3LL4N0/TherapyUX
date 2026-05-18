import { SubpageVisual } from "@/components/SubpageVisual";
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { mockSessions } from "@/lib/mock-sessions"
import Link from "next/link"
import { EmptyState } from "@/components/sessions/empty-state"
import { SessionCard } from "@/components/sessions/session-card"
import { Button } from "@/components/ui/button"

export default function SessionsPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Session History</h1>
          <p className="text-sm text-white/80">
            Review your past therapy sessions and progress
          </p>
        </div>
        <Button asChild>
          <Link href="/app/sessions/new">
            <Icons.plus className="mr-2 h-4 w-4" />
            New Session
          </Link>
        </Button>
      </div>

      {mockSessions.length === 0 ? (
        <EmptyState />
      ) : (
        <Card className="p-6">
          <div className="space-y-4">
            {mockSessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </Card>
      )}
    </div>
  </>
  )
}
