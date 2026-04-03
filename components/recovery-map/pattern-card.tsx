import { RecoveryPattern } from "@/types/recovery-map"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export function RecoveryPatternCard({ pattern }: { pattern: RecoveryPattern }) {
  return (
    <li className="flex items-start gap-4">
      <div className={`p-2 rounded-lg mt-0.5 ${pattern.positive ? 'bg-emerald-900/20' : 'bg-rose-900/20'}`}>
        {pattern.positive ? 
          <Icons.trendUp className="h-4 w-4 text-emerald-400" /> :
          <Icons.trendDown className="h-4 w-4 text-rose-400" />
        }
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{pattern.name}</h3>
        <p className="text-sm text-white/60">{pattern.description}</p>
        <p className="text-xs text-white/40 mt-1">
          Observed in {pattern.dataPoints} sessions
        </p>
      </div>
    </li>
  )
}
