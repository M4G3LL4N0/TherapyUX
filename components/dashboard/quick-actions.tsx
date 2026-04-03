import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export function QuickActions() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold">Quick Actions</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-24">
          <Icons.plus className="mr-2 h-4 w-4" />
          New Session
        </Button>
        <Button variant="outline" className="h-24">
          <Icons.journal className="mr-2 h-4 w-4" />
          Journal
        </Button>
        <Button variant="outline" className="h-24">
          <Icons.meditation className="mr-2 h-4 w-4" />
          Meditate
        </Button>
        <Button variant="outline" className="h-24">
          <Icons.breath className="mr-2 h-4 w-4" />
          Breathe
        </Button>
      </div>
    </Card>
  )
}
