import { NavItem } from "@/components/ui/nav-item"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export function MobileNav({ className }: { className?: string }) {
  return (
    <nav className={cn("border-b border-white/10 p-4 lg:hidden", className)}>
      <div className="flex items-center justify-between">
        <NavItem icon={<Icons.home />} label="Dashboard" href="/app" />
        <NavItem icon={<Icons.session />} label="Sessions" href="/app/sessions" />
        <NavItem icon={<Icons.progress />} label="Progress" href="/app/progress" />
        <NavItem icon={<Icons.settings />} label="Settings" href="/app/settings" />
      </div>
    </nav>
  )
}
