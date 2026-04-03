import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SettingsRowProps {
  title: string
  description: string
  action: ReactNode
  className?: string
}

export function SettingsRow({
  title,
  description,
  action,
  className,
}: SettingsRowProps) {
  return (
    <div className={cn("flex items-center justify-between py-4", className)}>
      <div className="flex-1 mr-4">
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-white/60">{description}</p>
      </div>
      {action}
    </div>
  )
}
