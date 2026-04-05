import * as React from "react"

type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "destructive"
  | "secondary"

type ButtonSize = "default" | "sm" | "lg" | "icon"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  children: React.ReactNode
}

export function Button({
  children,
  className = "",
  variant = "solid",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition disabled:pointer-events-none disabled:opacity-50"

  const variants: Record<ButtonVariant, string> = {
    solid: "bg-white text-black hover:bg-white/90",
    outline: "border border-white/15 bg-transparent text-white hover:bg-white/8",
    ghost: "bg-transparent text-white hover:bg-white/8",
    secondary: "bg-white/10 text-white hover:bg-white/15",
    destructive: "bg-red-500 text-white hover:bg-red-400",
  }

  const sizes: Record<ButtonSize, string> = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 py-2 text-sm",
    lg: "h-11 px-6 py-3 text-base",
    icon: "h-10 w-10",
  }

  const combinedClassName =
    `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  if (asChild && React.isValidElement(children)) {
    const child = React.Children.only(children) as React.ReactElement<{
      className?: string
    }>

    return React.cloneElement(child, {
      className: `${combinedClassName} ${child.props.className ?? ""}`.trim(),
    })
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
