import { SubpageVisual } from "@/components/SubpageVisual";
import { notFound } from "next/navigation"
import { mockSessions } from "@/lib/mock-sessions"
import { SessionDetail } from "@/components/sessions/session-detail"

export default function SessionPage({
  params,
}: {
  params: { sessionId: string }
}) {
  const session = mockSessions.find((s) => s.id === params.sessionId)
  
  if (!session) {
    return notFound()
  }

  return (
    <>
    <SubpageVisual variant="default" />
      <div className="space-y-6">
      <SessionDetail session={session} />
    </div>
  </>
  )
}
