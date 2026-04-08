import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { ProductSection } from "@/components/sections/product"
import { PrivacySection } from "@/components/sections/privacy"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { WaitlistSection } from "@/components/sections/waitlist"
import { Icons } from "@/components/ui/icons"
import { Card, CardProps } from "@/components/ui/card"
import { Badge, BadgeProps } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="flex-1">
        <div className="relative overflow-hidden">
          <HeroSection />
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black" />
          </div>
        </div>

        <FeaturesSection />
        
        <div className="relative py-24 glow-effect">
          <div className="container mx-auto px-4">
            <ProductSection />
            <div className="mt-16 dashboard-grid-responsive">
              <Card className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    Daily Insights
                  </h3>
                  <Badge variant="success" className="bg-emerald-400/10 text-emerald-400 border-emerald-400/20">
                    +8%
                  </Badge>
                </div>
                <p className="mt-2 text-white/70">Track your emotional patterns and recovery progress with detailed analytics</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="metric-item">
                    <div className="metric-value">72%</div>
                    <div className="metric-label">Emotional Balance</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">4.8</div>
                    <div className="metric-label">Mood Score</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">3.2</div>
                    <div className="metric-label">Stress Level</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">82%</div>
                    <div className="metric-label">Clarity</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="recovery-card-header">Secure Journaling</h3>
                <p className="recovery-card-content">Private, encrypted space for your thoughts and reflections with end-to-end encryption</p>
                <div className="mt-4 h-32 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-emerald-400 text-2xl font-medium">3</span>
                    <p className="text-xs text-white/60 mt-1">New Entries</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:border-emerald-400/30 transition-colors duration-300">
                <h3 className="recovery-card-header">
                  Guided Sessions
                  <span className="recovery-trend neutral">0</span>
                </h3>
                <p className="recovery-card-content">Personalized exercises for mental well-being tailored to your recovery journey</p>
                <div className="metric-grid">
                  <div className="metric-item">
                    <div className="metric-value">12</div>
                    <div className="metric-label">Completed</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">3</div>
                    <div className="metric-label">In Progress</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">85%</div>
                    <div className="metric-label">Engagement</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">4.7</div>
                    <div className="metric-label">Avg. Rating</div>
                  </div>
                </div>
              </Card>
              <Card className="col-span-full hover:border-emerald-400/30 transition-colors duration-300">
                <h3 className="recovery-card-header">Weekly Insights</h3>
                <p className="recovery-card-content">
                  View your progress trends over time with detailed weekly reports and actionable insights
                </p>
                <div className="progress-grid mt-6">
                  <div className="progress-card">
                    <div className="progress-header">Emotional Balance</div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: '72%' }} />
                    </div>
                    <div className="progress-label">
                      <span>Last Week</span>
                      <span>72%</span>
                    </div>
                  </div>
                  <div className="progress-card">
                    <div className="progress-header">Stress Management</div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: '64%' }} />
                    </div>
                    <div className="progress-label">
                      <span>Last Week</span>
                      <span>64%</span>
                    </div>
                  </div>
                  <div className="progress-card">
                    <div className="progress-header">Mindfulness</div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: '81%' }} />
                    </div>
                    <div className="progress-label">
                      <span>Last Week</span>
                      <span>81%</span>
                    </div>
                  </div>
                  <div className="progress-card">
                    <div className="progress-header">Self-Compassion</div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: '78%' }} />
                    </div>
                    <div className="progress-label">
                      <span>Last Week</span>
                      <span>78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PrivacySection />
        
        <div className="py-24 bg-gradient-to-b from-black to-emerald-950/10">
          <div className="container mx-auto px-4">
            <HowItWorksSection />
            <div className="mt-16 dashboard-grid-auto gap-4">
              <Card className="hover:border-emerald-400/30 transition-colors duration-300">
                <h3 className="recovery-card-header">Data Security</h3>
                <p className="recovery-card-content">End-to-end encryption ensures your privacy</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Icons.lock className="h-4 w-4 text-emerald-400" />
                    <span>256-bit AES Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80 mt-2">
                    <Icons.shield className="h-4 w-4 text-emerald-400" />
                    <span>Zero-Knowledge Architecture</span>
                  </div>
                </div>
              </div>
              <div className="recovery-card">
                <h3 className="recovery-card-header">AI Assistance</h3>
                <p className="recovery-card-content">Smart insights tailored to your recovery journey</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Icons.brain className="h-4 w-4 text-emerald-400" />
                    <span>Personalized Recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80 mt-2">
                    <Icons.chart className="h-4 w-4 text-emerald-400" />
                    <span>Progress Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WaitlistSection />
      </main>

      <Footer />
    </div>
  )
}
