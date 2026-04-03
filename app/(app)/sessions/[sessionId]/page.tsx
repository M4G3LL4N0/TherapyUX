import { notFound } from "next/navigation"
import { mockSessions } from "@/types/session"
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
    <div className="space-y-6">
      <SessionDetail session={session} />
    </div>
  )
}
