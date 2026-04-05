import { NavItem } from "@/components/ui/nav-item"
import { Icons } from "@/components/ui/icons"

export function AppSidebar({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
            <Icons.sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">TherapyUX</div>
            <div className="text-xs text-white/45">Private Recovery OS</div>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 px-4 pb-6">
        <NavItem href="/app/dashboard" label="Dashboard" />
        <NavItem href="/app/modes" label="Modes" />
        <NavItem href="/app/recovery-map" label="Recovery Map" />
        <NavItem href="/app/sessions" label="Sessions" />
        <NavItem href="/app/settings" label="Settings" />
      </nav>
    </aside>
  )
}
