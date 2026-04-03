import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export function PrivacyStatus() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Icons.lock className="h-6 w-6 text-emerald-400" />
        <div>
          <h2 className="text-lg font-semibold">Privacy Status</h2>
          <p className="text-sm text-white/80">
            Your data is encrypted and secure
          </p>
        </div>
      </div>
    </Card>
  )
}
