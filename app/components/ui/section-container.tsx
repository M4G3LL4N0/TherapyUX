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
        'py-20 md:py-28 lg:py-36',
        className
      )}
    >
      <div className="px-4 mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  )
}
