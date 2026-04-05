import Link from "next/link"

export function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-sm text-white/70 hover:text-white">
      {label}
    </Link>
  )
}
