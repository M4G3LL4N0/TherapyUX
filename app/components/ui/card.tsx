import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white/20 dark:bg-zinc-900/20 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-200 ease-out',
      className
    )}>
      {children}
    </div>
  )
}
