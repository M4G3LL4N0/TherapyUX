import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

const sessionTypes = [
  {
    title: "Guided Session",
    description: "AI-guided therapy session with voice or text",
    href: "/app/sessions/new/guided",
    icon: <Icons.session className="h-8 w-8 text-emerald-400" />,
  },
  {
    title: "Voice Session",
    description: "Talk through what happened and get structured support",
    href: "/app/sessions/new/voice",
    icon: <Icons.mic className="h-8 w-8 text-emerald-400" />,
  },
  {
    title: "Quick Check-In",
    description: "Log your state, trigger, and next best action",
    href: "/app/sessions/new/checkin",
    icon: <Icons.sparkles className="h-8 w-8 text-emerald-400" />,
  },
]

export default function NewSessionPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
          New Session
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
          Choose a session type
        </h1>
        <p className="mt-4 text-white/65">
          Start a new recovery flow based on how you want to process the moment.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sessionTypes.map((item) => (
          <Card
            key={item.title}
            className="rounded-3xl border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <h2 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-300 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
