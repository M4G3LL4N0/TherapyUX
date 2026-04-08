import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { ProductSection } from "@/components/sections/product"
import { PrivacySection } from "@/components/sections/privacy"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { WaitlistSection } from "@/components/sections/waitlist"

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
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="recovery-card">
                <h3 className="recovery-card-header">
                  Daily Insights
                  <span className="recovery-trend up">+8%</span>
                </h3>
                <p className="recovery-card-content">Track your emotional patterns and recovery progress with detailed analytics</p>
                <div className="metric-grid">
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
              </div>
              <div className="recovery-card">
                <h3 className="recovery-card-header">Secure Journaling</h3>
                <p className="recovery-card-content">Private, encrypted space for your thoughts and reflections with end-to-end encryption</p>
                <div className="mt-4 h-32 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-emerald-400 text-2xl font-medium">3</span>
                    <p className="text-xs text-white/60 mt-1">New Entries</p>
                  </div>
                </div>
              </div>
              <div className="recovery-card">
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
              </div>
              <div className="recovery-card dashboard-grid-wide">
                <h3 className="recovery-card-header">Weekly Insights</h3>
                <p className="recovery-card-content">
                  View your progress trends over time with detailed weekly reports and actionable insights
                </p>
                <div className="mt-4 h-48 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-emerald-400 text-2xl font-medium">+15%</span>
                    <p className="text-xs text-white/60 mt-1">Recovery Progress</p>
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
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">Data Security</h3>
                <p className="text-white/80">End-to-end encryption ensures your privacy</p>
              </div>
              <div className="recovery-card">
                <h3 className="text-xl font-semibold mb-4">AI Assistance</h3>
                <p className="text-white/80">Smart insights tailored to your recovery journey</p>
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
