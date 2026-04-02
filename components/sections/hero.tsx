import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <SectionContainer className="relative overflow-hidden">
      <div className="glow-effect">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Your Private Mental Recovery OS
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            TherapyUX is an adaptive AI system designed for emotional clarity and recovery. 
            Built with privacy-first architecture, it learns your patterns to provide precise support.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary text-background hover:bg-primary-hover">
              Join Waitlist
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      </div>
    </SectionContainer>
  )
}
