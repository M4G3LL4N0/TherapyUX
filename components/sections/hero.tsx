import { Button } from '@components/ui/button'
import { SectionContainer } from '@components/ui/section-container'

export function HeroSection() {
  return (
    <SectionContainer className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/20 dark:to-zinc-900/20" />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 text-center min-h-[calc(100vh-80px)]">
        <header className="flex flex-col items-center justify-center gap-6 px-4 md:px-0">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Revolutionizing Digital Therapy
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            The next generation AI-assisted platform for therapists and patients
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
