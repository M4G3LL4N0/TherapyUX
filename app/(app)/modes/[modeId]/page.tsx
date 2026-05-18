import { redirect } from "next/navigation"

export default function ModePage({
  params,
}: {
  params: { modeId: string }
}) {
  redirect(`/app/modes/${params.modeId}`)
}
