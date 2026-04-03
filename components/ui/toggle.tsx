import { cn } from "@/lib/utils"
import { useState } from "react"

export function Toggle({
  defaultChecked = false,
  disabled = false,
}: {
  defaultChecked?: boolean
  disabled?: boolean
}) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <button
      disabled={disabled}
      onClick={() => setChecked(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked ? 'bg-emerald-500' : 'bg-white/10',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  )
}
