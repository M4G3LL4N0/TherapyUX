import Link from 'next/link'
import { Button } from '@components/ui/button'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/50 dark:bg-zinc-900/50 border-b border-white/20 dark:border-zinc-800/50">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link href="/" className="font-bold text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            TherapyUX
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#privacy">Privacy</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
