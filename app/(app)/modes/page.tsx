import { recoveryModes } from "@/types/modes"
import { ModeCard } from "@/components/modes/mode-card"

export default function ModesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Recovery Modes</h1>
        <p className="text-sm text-white/80">
          Select a mode to stabilize and recover from difficult emotional states
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recoveryModes.map((mode) => (
          <ModeCard key={mode.id} mode={mode} />
        ))}
      </div>
    </div>
  )
}
