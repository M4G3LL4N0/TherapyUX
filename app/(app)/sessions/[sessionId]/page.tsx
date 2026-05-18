import { redirect } from "next/navigation"

export default function SessionPage({
  params,
}: {
  params: { sessionId: string }
}) {
  redirect(`/app/sessions/${params.sessionId}`)
}
