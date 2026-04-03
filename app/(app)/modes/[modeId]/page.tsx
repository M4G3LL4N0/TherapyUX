import { recoveryModes } from "@/types/modes"
import { ModeDetail } from "@/components/modes/mode-detail"
import { notFound } from "next/navigation"

export default function ModePage({
  params,
}: {
  params: { modeId: string }
}) {
  const mode = recoveryModes.find((m) => m.id === params.modeId)
  
  if (!mode) {
    return notFound()
  }

  return (
    <div className="space-y-6">
      <ModeDetail mode={mode} />
    </div>
  )
}
