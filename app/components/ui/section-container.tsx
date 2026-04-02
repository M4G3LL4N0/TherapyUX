import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-24 md:py-32 lg:py-40',
        className
      )}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  )
}
