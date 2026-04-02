import * as React from "react"

export function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 ${className}`}>
      {children}
    </section>
  )
}
