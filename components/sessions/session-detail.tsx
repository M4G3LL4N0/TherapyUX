import { Session } from "@/types/session"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SessionDetail({ session }: { session: Session }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Session Details</h1>
          <p className="text-sm text-white/80">
            {format(new Date(session.startedAt), 'MMMM d, yyyy')} • {session.duration} minutes
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/app/sessions">
            Back to Sessions
          </Link>
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="mt-2 text-sm text-white/80">{session.summary}</p>
          </section>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section>
              <h2 className="text-lg font-semibold">Emotional State</h2>
              <div className="mt-2 space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Mood:</span>
                  <span>{session.emotionalState.mood}/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Stress:</span>
                  <span>{session.emotionalState.stress}/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Energy:</span>
                  <span>{session.emotionalState.energy}/10</span>
                </div>
              </div>
            </section>

            {session.trigger && (
              <section>
                <h2 className="text-lg font-semibold">Trigger</h2>
                <p className="mt-2 text-sm text-white/80">{session.trigger}</p>
              </section>
            )}
          </div>

          {session.thoughtPattern && (
            <section>
              <h2 className="text-lg font-semibold">Thought Pattern</h2>
              <p className="mt-2 text-sm text-white/80">{session.thoughtPattern}</p>
            </section>
          )}

          {session.intervention && (
            <section>
              <h2 className="text-lg font-semibold">Intervention</h2>
              <div className="mt-2 space-y-2">
                <h3 className="font-medium">{session.intervention.type}</h3>
                <ul className="space-y-1 text-sm text-white/80">
                  {session.intervention.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icons.check className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {session.outcome && (
            <section>
              <h2 className="text-lg font-semibold">Outcome</h2>
              <div className="mt-2 space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Improvement:</span>
                  <span>{session.outcome.improvement}/10</span>
                </div>
                <p>{session.outcome.notes}</p>
              </div>
            </section>
          )}

          {session.nextStep && (
            <section>
              <h2 className="text-lg font-semibold">Next Step</h2>
              <p className="mt-2 text-sm text-white/80">{session.nextStep}</p>
            </section>
          )}
        </div>
      </Card>
    </div>
  )
}
import { Session } from "@/types/session"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EmotionalStateChart } from "@/components/sessions/emotional-state-chart"

export function SessionDetail({ session }: { session: Session }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Session Details</h1>
          <p className="text-sm text-white/80">
            {format(new Date(session.startedAt), 'MMMM d, yyyy')} • {session.duration} minutes
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/app/sessions">
            Back to Sessions
          </Link>
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="mt-2 text-sm text-white/80">{session.summary}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Emotional State</h2>
            <div className="mt-4">
              <EmotionalStateChart emotionalState={session.emotionalState} />
            </div>
          </section>

          {session.trigger && (
            <section>
              <h2 className="text-lg font-semibold">Trigger</h2>
              <p className="mt-2 text-sm text-white/80">{session.trigger}</p>
            </section>
          )}

          {session.thoughtPattern && (
            <section>
              <h2 className="text-lg font-semibold">Thought Pattern</h2>
              <p className="mt-2 text-sm text-white/80">{session.thoughtPattern}</p>
            </section>
          )}

          {session.intervention && (
            <section>
              <h2 className="text-lg font-semibold">Intervention</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{session.intervention.type}</h3>
                  {session.intervention.duration && (
                    <span className="text-sm text-white/60">
                      {session.intervention.duration} minutes
                    </span>
                  )}
                </div>
                <ul className="space-y-2 text-sm text-white/80">
                  {session.intervention.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icons.check className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {session.outcome && (
            <section>
              <h2 className="text-lg font-semibold">Outcome</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Improvement</span>
                  <span className="text-sm font-medium">
                    {session.outcome.improvement}/10
                  </span>
                </div>
                <p className="text-sm text-white/80">{session.outcome.notes}</p>
                
                {session.outcome.insights && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Insights</h4>
                    <ul className="space-y-1 text-sm text-white/80">
                      {session.outcome.insights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icons.insight className="h-4 w-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {session.nextStep && (
            <section>
              <h2 className="text-lg font-semibold">Next Step</h2>
              <p className="mt-2 text-sm text-white/80">{session.nextStep}</p>
            </section>
          )}
        </div>
      </Card>
    </div>
  )
}
