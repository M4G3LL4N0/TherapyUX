export function Header() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tighter">
          <span className="text-primary">Therapy</span>UX
        </h1>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
        </nav>
        <button className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary text-background font-medium hover:bg-primary-hover transition-colors">
          Join Waitlist
        </button>
      </div>
    </header>
  )
}
