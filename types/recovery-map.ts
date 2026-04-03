export interface RecoveryMetric {
  id: string
  label: string
  description: string
  score: number
  trend: 'up' | 'down' | 'neutral'
  badges?: string[]
}

export interface TriggerCluster {
  id: string
  theme: string
  frequency: string
  relatedMetrics: string[]
  intensity: number // 1-5
}

export interface RecoveryPattern {
  id: string
  name: string
  positive: boolean
  description: string
  dataPoints: number
  relatedTriggers?: string[]
}

export interface RecoveryFocus {
  id: string
  area: string
  priority: 'low' | 'medium' | 'high'
  reason: string
  practice: string
  progress?: number // 0-100
}

export const mockRecoveryMetrics: RecoveryMetric[] = [
  {
    id: 'self_trust',
    label: 'Self-Trust',
    description: 'Confidence in your own thoughts and decisions',
    score: 68,
    trend: 'up',
    badges: ['+12% last month']
  },
  {
    id: 'emotional_regulation',
    label: 'Emotional Regulation',
    description: 'Ability to manage intense emotions effectively',
    score: 55,
    trend: 'neutral'
  },
  {
    id: 'identity_rebuild',
    label: 'Identity Rebuild',
    description: 'Clarity and strength in self-concept',
    score: 42,
    trend: 'up',
    badges: ['+18% last month']
  },
  // ...add other metrics
]

export const mockTriggerClusters: TriggerCluster[] = [
  {
    id: 'work_pressure',
    theme: 'Work performance pressure',
    frequency: '3-5x/week',
    relatedMetrics: ['self_trust', 'stress_recovery'],
    intensity: 4
  },
  // ...add other trigger clusters
]

export const mockRecoveryPatterns: RecoveryPattern[] = [
  {
    id: 'evening_reflection',
    name: 'Evening Reflection',
    positive: true,
    description: 'Journaling at night correlates with better morning mood',
    dataPoints: 24
  },
  // ...add other patterns
]

export const mockRecoveryFocuses: RecoveryFocus[] = [
  {
    id: 'boundaries',
    area: 'Relationship Boundaries',
    priority: 'high',
    reason: 'Improving this area would positively impact 3 other metrics',
    practice: 'Daily boundary affirmation',
    progress: 35
  }
  // ...add other focuses
]
