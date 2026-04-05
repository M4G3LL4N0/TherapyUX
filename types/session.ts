export type SessionType = "guided" | "voice" | "checkin" | "journal"

export type EmotionalState =
  | string
  | {
      label?: string
      name?: string
      value?: string
    }

export type Session = {
  id: string
  type: SessionType
  mode?: string
  title?: string
  summary?: string
  emotionalState?: EmotionalState
  createdAt?: string
}

export const mockSessions: Session[] = [
  {
    id: "sess_01",
    type: "guided",
    mode: "Abandonment",
    title: "Night spiral recovery",
    summary: "Reduced emotional escalation after trigger",
    emotionalState: { label: "anxious" },
    createdAt: new Date().toISOString(),
  },
  {
    id: "sess_02",
    type: "voice",
    mode: "Panic",
    title: "Rapid stabilization",
    summary: "Short intervention reduced panic spike",
    emotionalState: { label: "overwhelmed" },
    createdAt: new Date().toISOString(),
  },
]
