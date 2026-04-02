import * as React from "react"

export function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  )
}
