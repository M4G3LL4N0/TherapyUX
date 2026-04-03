import { RecoveryModes } from "@/components/dashboard/recovery-modes"
import { SessionOverview } from "@/components/dashboard/session-overview"
import { WeeklyProgress } from "@/components/dashboard/weekly-progress"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SessionOverview />
        </div>
        <WeeklyProgress />
      </div>
      <RecoveryModes />
    </div>
  )
}
