import { NavItem } from "@/components/ui/nav-item"
import { Icons } from "@/components/ui/icons"

export function AppSidebar() {
  return (
    <aside className="w-64 border-r border-white/10">
      <nav className="space-y-1 p-4">
        <NavItem icon={<Icons.home />} label="Dashboard" href="/app" />
        <NavItem icon={<Icons.session />} label="Sessions" href="/app/sessions" />
        <NavItem icon={<Icons.progress />} label="Progress" href="/app/progress" />
        <NavItem icon={<Icons.settings />} label="Settings" href="/app/settings" />
      </nav>
    </aside>
  )
}
