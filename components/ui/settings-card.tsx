import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SettingsCardProps {
  title: string
  description: string
  children: ReactNode
  className?: string
}

export function SettingsCard({ 
  title, 
  description, 
  children,
  className 
}: SettingsCardProps) {
  return (
    <div className={cn("border border-white/10 rounded-lg p-6", className)}>
      <div className="mb-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}
