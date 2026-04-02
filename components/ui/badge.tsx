import { cn } from '@/lib/utils'

export interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'secondary'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
      variant === 'default' && 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100',
      variant === 'primary' && 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
      variant === 'secondary' && 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
      className
    )}>
      {children}
    </span>
  )
}
