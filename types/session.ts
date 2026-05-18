export type SessionType = "guided" | "voice" | "checkin" | "journal"

export type EmotionalState =
  | string
  | {
      label: string
      intensity?: number
    }

export type Session = {
  id: string
  type: SessionType
  mode: string
  title: string
  summary: string
  emotionalState: EmotionalState
  createdAt: string
}
