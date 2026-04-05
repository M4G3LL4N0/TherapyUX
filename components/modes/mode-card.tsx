import { RecoveryMode } from "@/types/modes"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import Link from "next/link"

export function ModeCard({ mode }: { mode: RecoveryMode }) {
  return (
    <Link href={`/app/modes/${mode.id}`}>
      <Card className="hover:bg-white/5 transition-colors">
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div className={`bg-${mode.color}-900/20 p-3 rounded-lg`}>
              <Icons.session className={`h-6 w-6 text-${mode.color}-400`} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{mode.name}</h2>
              <p className="mt-1 text-sm text-white/80">{mode.description}</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <h3 className="text-sm font-medium text-white/80">When to use:</h3>
            <ul className="text-sm text-white/60">
              {mode.whenToUse.slice(0, 2).map((useCase, i) => (
                <li key={i} className="truncate">• {useCase}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </Link>
  )
}
