import { EmotionalState } from "@/types/session"
import { cn } from "@/lib/utils"

export function EmotionalStateChart({ emotionalState }: { emotionalState: EmotionalState }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Mood</span>
          <span>{emotionalState.mood}/10</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-400" 
            style={{ width: `${emotionalState.mood * 10}%` }}
          />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Stress</span>
          <span>{emotionalState.stress}/10</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-rose-400" 
            style={{ width: `${emotionalState.stress * 10}%` }}
          />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Energy</span>
          <span>{emotionalState.energy}/10</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-400" 
            style={{ width: `${emotionalState.energy * 10}%` }}
          />
        </div>
      </div>
    </div>
  )
}
