import { Badge } from '../ui/badge'
import { SectionContainer } from '../ui/section-container'

export function ProductSection() {
  return (
    <SectionContainer>
      <div className="text-center">
        <Badge variant="secondary" className="mb-4">
          Product
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Designed Thoughtfully
        </h2>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          A seamless experience that respects the therapeutic relationship while enhancing outcomes
        </p>
      </div>
    </SectionContainer>
  )
}
