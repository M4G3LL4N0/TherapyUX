import type {
  RecoveryMetric,
  TriggerCluster,
  RecoveryPattern,
  RecoveryFocus,
} from "@/types/recovery-map"

export const mockRecoveryMetrics: RecoveryMetric[] = [
  {
    id: "self-trust",
    label: "Self-Trust",
    description: "Confidence in your own perception and decisions.",
    score: 68,
    trend: "up",
  },
  {
    id: "regulation",
    label: "Emotional Regulation",
    description: "Ability to stabilize after triggers.",
    score: 54,
    trend: "up",
  },
  {
    id: "identity",
    label: "Identity Rebuild",
    description: "Recovery of internal stability.",
    score: 61,
    trend: "up",
  },
]

export const mockTriggerClusters: TriggerCluster[] = [
  {
    id: "uncertainty",
    theme: "Uncertainty + Silence",
    frequency: "12",
    relatedMetrics: ["self-trust", "stability"],
    intensity: 9,
  },
  {
    id: "conflict",
    theme: "Conflict Residue",
    frequency: "8",
    relatedMetrics: ["regulation"],
    intensity: 6,
  },
  {
    id: "rejection",
    theme: "Perceived Rejection",
    frequency: "10",
    relatedMetrics: ["identity"],
    intensity: 8,
  },
]

export const mockRecoveryPatterns: RecoveryPattern[] = [
  {
    id: "pattern-1",
    title: "Faster stabilization",
    description: "Returning to baseline quicker",
    trend: "up",
  },
  {
    id: "pattern-2",
    title: "Less catastrophic thinking",
    description: "Negative interpretation loops are losing intensity",
    trend: "up",
  },
  {
    id: "pattern-3",
    title: "Relationship sensitivity",
    description: "Attachment triggers still create instability",
    trend: "down",
  },
]

export const mockRecoveryFocus: RecoveryFocus = {
  area: "Attachment-trigger recovery",
  recommendation: "Use Night Spiral before reacting.",
  description: "Reduce urgency after ambiguous social cues.",
}
