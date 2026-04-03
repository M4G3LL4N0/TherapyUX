import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export function RecoveryStreak() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Icons.flame className="h-6 w-6 text-emerald-400" />
        <div>
          <h2 className="text-lg font-semibold">Recovery Streak</h2>
          <p className="text-sm text-white/80">
            12 days of consistent recovery
          </p>
        </div>
      </div>
    </Card>
  )
}
