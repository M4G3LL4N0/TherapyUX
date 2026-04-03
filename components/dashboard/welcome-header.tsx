import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export function WelcomeHeader() {
  return (
    <div className="rounded-lg bg-gradient-to-r from-emerald-900/50 to-emerald-950/50 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Joshua</h1>
          <p className="mt-2 text-sm text-white/80">
            Today is a good day for recovery. Let's make progress.
          </p>
        </div>
        <Button variant="solid" className="hidden sm:flex">
          <Icons.plus className="mr-2 h-4 w-4" />
          Start Session
        </Button>
      </div>
    </div>
  )
}
