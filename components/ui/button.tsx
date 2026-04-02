export function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
