import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Session History</h1>
      
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg p-4 hover:bg-white/5">
            <div className="flex items-center gap-4">
              <Icons.session className="h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Morning Reflection</h3>
                <p className="text-sm text-white/80">April 1, 2026</p>
              </div>
            </div>
            <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              Review
            </button>
          </div>
          
          <div className="flex items-center justify-between rounded-lg p-4 hover:bg-white/5">
            <div className="flex items-center gap-4">
              <Icons.session className="h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Evening Wind Down</h3>
                <p className="text-sm text-white/80">March 31, 2026</p>
              </div>
            </div>
            <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              Review
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
