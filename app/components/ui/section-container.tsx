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
        'py-20 md:py-28 lg:py-36 scroll-mt-20',
        className
      )}
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'normal',
        scrollMarginTop: '80px'
      }}
    >
      <div className="px-4 mx-auto max-w-7xl relative">
        <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent to-white/50 dark:to-zinc-900/50 pointer-events-none" />
        <div className="absolute inset-x-0 -bottom-16 h-32 bg-gradient-to-t from-transparent to-white/50 dark:to-zinc-900/50 pointer-events-none" />
        {children}
      </div>
    </section>
  )
}
