import * as React from "react"

export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 ${className}`}
    >
      {children}
    </span>
  )
}
