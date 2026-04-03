import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { Progress } from "@/components/ui/progress"

export function PrivacyStatus() {
  return (
    <Card className="p-6 bg-gradient-to-r from-emerald-900/10 to-emerald-950/10 border-emerald-900/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icons.lock className="h-6 w-6 text-emerald-400" />
          <div>
            <h2 className="font-medium">Privacy Defender</h2>
            <p className="text-sm text-white/60">
              Maximum protection enabled
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <Icons.shield className="h-4 w-4" />
          <span className="text-sm font-medium">Secure</span>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span>Data Encryption</span>
            <span>100%</span>
          </div>
          <Progress value={100} className="h-1.5" />
        </div>
        
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span>Identity Protection</span>
            <span>93%</span>
          </div>
          <Progress value={93} className="h-1.5" />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-2">
            <span>Session Privacy</span>
            <span>100%</span>
          </div>
          <Progress value={100} className="h-1.5" />
        </div>
      </div>
    </Card>
  )
}
