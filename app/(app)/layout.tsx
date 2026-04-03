import { UserSession } from "@/types/user"
import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { MobileNav } from "@/components/layout/mobile-nav"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <AppSidebar className="hidden lg:block" />
      <div className="flex-1">
        <AppHeader />
        <MobileNav className="lg:hidden" />
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
