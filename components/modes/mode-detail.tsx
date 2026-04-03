import { RecoveryMode } from "@/types/modes"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"

export function ModeDetail({ mode }: { mode: RecoveryMode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className={`bg-${mode.color}-900/20 p-3 rounded-lg`}>
          <Icons[mode.icon] className={`h-8 w-8 text-${mode.color}-400`} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{mode.name}</h1>
          <p className="text-sm text-white/80">{mode.description}</p>
        </div>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold">When to Use</h2>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              {mode.whenToUse.map((useCase, i) => (
                <li key={i}>• {useCase}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Immediate Stabilization</h2>
            <div className="mt-2 space-y-2">
              {mode.stabilizationSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                  <div className={`bg-${mode.color}-900/20 p-1 rounded-full`}>
                    <Icons.check className={`h-3 w-3 text-${mode.color}-400`} />
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Guided Intervention</h2>
            <div className="mt-2 space-y-4">
              {mode.interventionSteps.map((step, i) => (
                <Card key={i} className="p-4">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{step.description}</p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Next Actions</h2>
            <div className="mt-2 space-y-2">
              {mode.nextActions.map((action, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                  <div className={`bg-${mode.color}-900/20 p-1 rounded-full`}>
                    <Icons.arrowRight className={`h-3 w-3 text-${mode.color}-400`} />
                  </div>
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button variant="solid">
          Start Guided Session
        </Button>
      </div>
    </div>
  )
}
