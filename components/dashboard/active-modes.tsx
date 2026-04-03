import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export function ActiveModes() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold">Active Recovery Modes</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-emerald-900/10 p-4">
          <Icons.heart className="h-6 w-6 text-emerald-400" />
          <h3 className="mt-2 font-medium">Self-Compassion</h3>
          <p className="mt-1 text-sm text-white/80">
            Cultivating kindness towards yourself
          </p>
        </div>
        <div className="rounded-lg bg-emerald-900/10 p-4">
          <Icons.brain className="h-6 w-6 text-emerald-400" />
          <h3 className="mt-2 font-medium">Mindfulness</h3>
          <p className="mt-1 text-sm text-white/80">
            Staying present in the moment
          </p>
        </div>
      </div>
    </Card>
  )
}
