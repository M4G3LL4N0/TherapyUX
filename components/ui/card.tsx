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
      className={`relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.01] p-6 backdrop-blur-2xl transition-all hover:border-emerald-400/20 hover:shadow-[0_0_20px_-5px_rgba(0,255,159,0.1)] ${className}`}
    >
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-50" />
      {children}
    </div>
  )
}
