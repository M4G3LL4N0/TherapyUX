import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article 
      className={cn(
        'bg-white/20 dark:bg-zinc-900/20 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-200 ease-out',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}
import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white/20 dark:bg-zinc-900/20 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-200 ease-out',
      className
    )}>
      {children}
    </div>
  )
}
