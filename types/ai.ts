// AI type definitions
export interface AIResponse {
  id: string
  content: string
  createdAt: Date
  metadata?: Record<string, unknown>
}

export interface AIPrompt {
  content: string
  context?: Record<string, unknown>
}
