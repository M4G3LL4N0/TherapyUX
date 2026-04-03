export interface Session {
  id: string
  type: 'guided' | 'journal' | 'emergency' | 'check-in'
  modeId?: string
  startedAt: Date
  duration: number // in minutes
  summary: string
  emotionalState: {
    mood: number // 1-10
    stress: number // 1-10
    energy: number // 1-10
  }
  trigger?: string
  thoughtPattern?: string
  intervention?: {
    type: string
    steps: string[]
  }
  outcome?: {
    improvement: number // 1-10
    notes: string
  }
  nextStep?: string
}

export const mockSessions: Session[] = [
  {
    id: '1',
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
      ]
    },
    outcome: {
      improvement: 6,
      notes: 'Significant reduction in physical anxiety symptoms'
    },
    nextStep: 'Schedule follow-up session tomorrow'
  },
  {
    id: '2',
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
