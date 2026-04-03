import { UserAvatar } from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 px-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Icons.menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">TherapyUX</h1>
      </div>
      <UserAvatar />
    </header>
  )
}
