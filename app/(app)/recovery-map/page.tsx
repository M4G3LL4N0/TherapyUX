import { RecoveryMap } from "@/components/recovery-map/recovery-map"

export default function RecoveryMapPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Recovery Map</h1>
        <p className="text-sm text-white/60">
          Your psychological landscape - track patterns and progress across therapy dimensions
        </p>
      </div>

      <RecoveryMap />
    </div>
  )
}
