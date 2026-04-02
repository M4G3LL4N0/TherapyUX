import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white/50 dark:bg-zinc-800/50 backdrop-blur-md rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow',
      className
    )}>
      {children}
    </div>
  )
}
