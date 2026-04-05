import { NavItem } from "@/components/ui/nav-item"

export function MobileNav({ className = "" }: { className?: string }) {
  return (
    <div
      className={`border-b border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl ${className}`}
    >
      <div className="flex flex-wrap gap-3">
        <NavItem href="/app/dashboard" label="Dashboard" />
        <NavItem href="/app/modes" label="Modes" />
        <NavItem href="/app/recovery-map" label="Recovery Map" />
        <NavItem href="/app/sessions" label="Sessions" />
        <NavItem href="/app/settings" label="Settings" />
      </div>
    </div>
  )
}
