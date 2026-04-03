import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">Account</h2>
              <p className="text-sm text-white/80">
                Manage your account settings
              </p>
            </div>
            <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              Edit
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">Privacy</h2>
              <p className="text-sm text-white/80">
                Control your privacy settings
              </p>
            </div>
            <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              Edit
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">Notifications</h2>
              <p className="text-sm text-white/80">
                Manage notification preferences
              </p>
            </div>
            <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              Edit
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
