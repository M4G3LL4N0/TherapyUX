import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/ui/icons"

export function PrivacySection() {
  return (
    <SectionContainer id="privacy">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Badge>Privacy Architecture</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Therapy only works when it's truly private.
          </h2>
          <p className="mt-4 text-white/65">
            Unlike other platforms, TherapyUX is built on three uncompromising principles:
          </p>
          <ul className="mt-6 space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <Icons.lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <span>End-to-end encrypted sessions</span>
            </li>
            <li className="flex items-start gap-3">
              <Icons.shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <span>Zero third-party data sharing</span>
            </li>
            <li className="flex items-start gap-3">
              <Icons.meditation className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <span>On-device processing where possible</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-4">
          <Card className="rounded-2xl border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <Icons.lock className="mt-1 h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="text-base font-medium text-white">
                  Private by design
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Sensitive therapy data should not become the product.
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <Icons.shield className="mt-1 h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="text-base font-medium text-white">
                  Controlled access
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  TherapyUX is designed to minimize exposure and preserve user
                  control.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
