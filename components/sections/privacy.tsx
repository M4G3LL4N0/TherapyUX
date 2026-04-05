import { SectionContainer } from "@/components/ui/section-container"

export function PrivacySection() {
  return (
    <SectionContainer id="privacy">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-900/30 to-emerald-950/50 p-8 backdrop-blur-xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <Badge>Security</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Therapy shouldn't require trust
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                We designed TherapyUX from first principles so you never have to rely on company policies, employee integrity, or medical ethics for privacy.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icons.shield className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Zero-knowledge encryption</h4>
                    <p className="mt-1 text-sm text-white/60">
                      Your data is encrypted before leaving your device and only you hold the keys.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icons.serverOff className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">No server processing</h4>
                    <p className="mt-1 text-sm text-white/60">
                      All AI processing happens locally - no cloud exposure of your sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/50 p-6">
              <h3 className="text-lg font-medium text-white">Our privacy guarantees</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Icons.check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>No data sold or shared, ever</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>No third-party trackers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Open source cryptography</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Auditable security model</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>Delete all data anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
