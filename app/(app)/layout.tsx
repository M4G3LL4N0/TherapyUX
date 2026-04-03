import { UserSession } from "@/types/user"
import { AppHeader } from "@/components/layout/app-header"
import { AppSidebar } from "@/components/layout/app-sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <AppSidebar />
      <div className="flex-1">
        <AppHeader />
        <main className="p-8">{children}</main>
      </div>
    </div>
  )
}
