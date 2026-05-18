import * as React from "react"

type SectionContainerProps = React.ComponentPropsWithoutRef<"section">

export function SectionContainer({
  children,
  className = "",
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 py-20 ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
