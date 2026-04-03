import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function RecoveryMapPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Recovery Map</h1>
      
      <Card className="p-6">
        <div className="h-96 rounded-lg bg-white/5">
          {/* Map visualization will go here */}
        </div>
      </Card>
    </div>
  )
}
