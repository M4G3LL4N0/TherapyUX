export type RecoveryTrend = "up" | "down" | "neutral"

export type RecoveryMetric = {
  id: string
  label: string
  description: string
  score: number
  trend: RecoveryTrend
}

export type TriggerCluster = {
  id: string
  theme: string
  frequency: string
  relatedMetrics: string[]
  intensity: number
}

export type RecoveryPattern = {
  id: string
  title: string
  description: string
  trend: RecoveryTrend
}

export type RecoveryFocus = {
  area: string
  recommendation: string
  description?: string
}
