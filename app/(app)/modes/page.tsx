import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export default function ModesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Recovery Modes</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Icons.heart className="h-6 w-6 text-emerald-400" />
          <h2 className="mt-4 text-lg font-semibold">Self-Compassion</h2>
          <p className="mt-2 text-sm text-white/80">
            Cultivate kindness and understanding towards yourself
          </p>
        </Card>
        
        <Card className="p-6">
          <Icons.brain className="h-6 w-6 text-emerald-400" />
          <h2 className="mt-4 text-lg font-semibold">Mindfulness</h2>
          <p className="mt-2 text-sm text-white/80">
            Stay present and aware in the moment
          </p>
        </Card>
        
        <Card className="p-6">
          <Icons.meditation className="h-6 w-6 text-emerald-400" />
          <h2 className="mt-4 text-lg font-semibold">Stress Relief</h2>
          <p className="mt-2 text-sm text-white/80">
            Reduce anxiety and find calm
          </p>
        </Card>
      </div>
    </div>
  )
}
