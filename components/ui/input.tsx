export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-white"
    />
  )
}
