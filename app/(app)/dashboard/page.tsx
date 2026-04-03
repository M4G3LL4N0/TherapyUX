import { WelcomeHeader } from "@/components/dashboard/welcome-header"
import { DailyStatus } from "@/components/dashboard/daily-status"
import { RecentSessions } from "@/components/dashboard/recent-sessions"
import { ActiveModes } from "@/components/dashboard/active-modes"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { PrivacyStatus } from "@/components/dashboard/privacy-status"
import { EmotionalMetrics } from "@/components/dashboard/emotional-metrics"
import { RecoveryStreak } from "@/components/dashboard/recovery-streak"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <WelcomeHeader />
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <DailyStatus />
          <RecentSessions />
          <ActiveModes />
        </div>
        
        <div className="space-y-8">
          <QuickActions />
          <div className="space-y-6">
            <PrivacyStatus />
            <EmotionalMetrics />
            <RecoveryStreak />
          </div>
        </div>
      </div>
    </div>
  )
}
