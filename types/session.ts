export type SessionType = 'guided' | 'journal' | 'emergency' | 'check-in'

export interface EmotionalState {
  mood: number // 1-10
  stress: number // 1-10
  energy: number // 1-10
}

export interface Intervention {
  type: string
  steps: string[]
  duration?: number
}

export interface SessionOutcome {
  improvement: number // 1-10
  notes: string
  insights?: string[]
}

export interface Session {
  id: string
  type: SessionType
  modeId?: string
  startedAt: Date
  duration: number // in minutes
  summary: string
  emotionalState: EmotionalState
  trigger?: string
  thoughtPattern?: string
  intervention?: Intervention
  outcome?: SessionOutcome
  nextStep?: string
  transcript?: string // For future AI integration
}

export const mockSessions: Session[] = [
  {
    id: 'sess_01H9J5WX3Q',
    type: 'guided',
    modeId: 'panic',
    startedAt: new Date('2026-04-01T09:30:00'),
    duration: 15,
    summary: 'Morning anxiety relief session',
    emotionalState: {
      mood: 3,
      stress: 8,
      energy: 4
    },
    trigger: 'Work deadline approaching',
    thoughtPattern: 'Catastrophizing about failing',
    intervention: {
      type: 'Breathing & Grounding',
      steps: [
        '4-7-8 breathing exercise',
        '5 senses grounding technique'
      ],
      duration: 8
    },
    outcome: {
      improvement: 6,
      notes: 'Significant reduction in physical anxiety symptoms',
      insights: [
        'Tendency to catastrophize under pressure',
        'Breathing exercises are particularly effective'
      ]
    },
    nextStep: 'Schedule follow-up session tomorrow'
  },
  {
    id: 'sess_01H9J5WX3R',
    type: 'journal',
    startedAt: new Date('2026-03-31T20:15:00'),
    duration: 10,
    summary: 'Evening reflection and gratitude',
    emotionalState: {
      mood: 7,
      stress: 4,
      energy: 5
    },
    outcome: {
      improvement: 2,
      notes: 'Gained perspective on daily challenges'
    }
  }
]
