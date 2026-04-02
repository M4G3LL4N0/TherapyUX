import * as React from "react"

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-primary/5 ${className}`}
    >
      {children}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>
    </div>
  )
}
