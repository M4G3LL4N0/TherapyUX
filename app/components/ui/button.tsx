import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.98] active:brightness-95',
        secondary: 'bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-white/20 dark:hover:bg-black/20 hover:border-white/30 active:scale-[0.98]',
        glass: 'bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md border border-white/30 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-white/30 dark:hover:bg-zinc-900/30 hover:border-white/40 active:scale-[0.98]'
      },
      size: {
        sm: 'h-9 px-4 py-2',
        md: 'h-10 px-6 py-3',
        lg: 'h-12 px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
