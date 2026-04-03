import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function DailyStatus() {
  return (
    <div className="rounded-lg border border-white/10 bg-black p-6">
      <h2 className="text-lg font-semibold">Daily Recovery Status</h2>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">Emotional Balance</span>
          <span className="text-sm font-medium">72%</span>
        </div>
        <Progress value={72} className="h-2" />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">Mindfulness</span>
          <span className="text-sm font-medium">45%</span>
        </div>
        <Progress value={45} className="h-2" />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">Self-Compassion</span>
          <span className="text-sm font-medium">88%</span>
        </div>
        <Progress value={88} className="h-2" />
      </div>
    </div>
  )
}
