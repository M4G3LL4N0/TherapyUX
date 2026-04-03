import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

export function EmotionalMetrics() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold">Emotional Metrics</h2>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">Stress Level</span>
          <span className="text-sm font-medium">Medium</span>
        </div>
        <Progress value={60} className="h-2" />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">Mood</span>
          <span className="text-sm font-medium">Neutral</span>
        </div>
        <Progress value={50} className="h-2" />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80">Energy</span>
          <span className="text-sm font-medium">Low</span>
        </div>
        <Progress value={30} className="h-2" />
      </div>
    </Card>
  )
}
