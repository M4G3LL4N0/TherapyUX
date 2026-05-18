import { SubpageVisual } from "@/components/SubpageVisual";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Icons } from "@/components/ui/icons"

export default function NewSessionPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">New Session</h1>
        <p className="text-sm text-white/80">
          Choose the type of session you'd like to start
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 hover:bg-white/5 transition-colors">
          <div className="flex flex-col items-center text-center">
            <Icons.session className="h-8 w-8 text-emerald-400" />
            <h2 className="mt-4 text-lg font-semibold">Guided Session</h2>
            <p className="mt-2 text-sm text-white/80">
              AI-guided therapy session with voice or text
            </p>
            <Button className="mt-4" asChild>
              <Link href="/app/sessions/new/guided">
                Start
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6 hover:bg-white/5 transition-colors">
          <div className="flex flex-col items-center text-center">
            <Icons.journal className="h-8 w-8 text-emerald-400" />
            <h2 className="mt-4 text-lg font-semibold">Journal</h2>
            <p className="mt-2 text-sm text-white/80">
              Private journaling with AI insights
            </p>
            <Button className="mt-4" asChild>
              <Link href="/app/sessions/new/journal">
                Start
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6 hover:bg-white/5 transition-colors">
          <div className="flex flex-col items-center text-center">
            <Icons.emergency className="h-8 w-8 text-rose-400" />
            <h2 className="mt-4 text-lg font-semibold">Emergency</h2>
            <p className="mt-2 text-sm text-white/80">
              Immediate support for crisis moments
            </p>
            <Button className="mt-4" asChild>
              <Link href="/app/sessions/new/emergency">
                Start
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </>
  )
}
