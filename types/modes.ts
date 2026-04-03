export interface RecoveryMode {
  id: string
  name: string
  description: string
  icon: string
  color: string
  whenToUse: string[]
  stabilizationSteps: string[]
  interventionSteps: {
    title: string
    description: string
  }[]
  nextActions: string[]
}

export const recoveryModes: RecoveryMode[] = [
  {
    id: "panic",
    name: "Panic Mode",
    description: "For moments of intense anxiety or panic attacks",
    icon: "panic",
    color: "rose",
    whenToUse: [
      "When feeling overwhelmed by anxiety",
      "During panic attacks",
      "When experiencing physical symptoms of panic"
    ],
    stabilizationSteps: [
      "Find a safe, quiet space",
      "Practice 4-7-8 breathing",
      "Use grounding techniques"
    ],
    interventionSteps: [
      {
        title: "Breathing Exercise",
        description: "Follow the guided 4-7-8 breathing pattern"
      },
      {
        title: "Grounding Technique",
        description: "Identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste"
      },
      {
        title: "Self-Compassion",
        description: "Repeat affirmations of self-compassion and safety"
      }
    ],
    nextActions: [
      "Journal about the experience",
      "Schedule a follow-up session",
      "Practice mindfulness exercises"
    ]
  },
  {
    id: "shame",
    name: "Shame Mode",
    description: "For moments of intense self-criticism or shame",
    icon: "shame",
    color: "amber",
    whenToUse: [
      "When feeling worthless or inadequate",
      "After making a mistake",
      "When experiencing self-loathing"
    ],
    stabilizationSteps: [
      "Acknowledge the feeling without judgment",
      "Practice self-compassion",
      "Remind yourself of your inherent worth"
    ],
    interventionSteps: [
      {
        title: "Self-Compassion Break",
        description: "Practice a guided self-compassion exercise"
      },
      {
        title: "Reframe the Narrative",
        description: "Challenge negative self-talk with evidence"
      },
      {
        title: "Connect with Values",
        description: "Identify and connect with your core values"
      }
    ],
    nextActions: [
      "Write a self-compassion letter",
      "Practice self-forgiveness",
      "Engage in a values-aligned activity"
    ]
  },
  // Add other modes following the same structure
]
