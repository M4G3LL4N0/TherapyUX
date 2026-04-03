import { cn } from "@/lib/utils"

interface SelectProps {
  defaultValue?: string
  options: { value: string; label: string }[]
  className?: string
}

export function Select({ defaultValue, options, className }: SelectProps) {
  return (
    <select
      defaultValue={defaultValue}
      className={cn(
        "bg-black border border-white/10 rounded-md px-3 py-1.5 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-emerald-500/30",
        className
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
