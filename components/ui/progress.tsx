import { cn } from "@/lib/utils"

interface ProgressProps {
  value: number
  className?: string
}

export function Progress({ value, className }: ProgressProps) {
  return (
    <div className={cn("h-2 w-full rounded-full bg-white/10", className)}>
      <div
        className="h-full rounded-full bg-emerald-400 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
