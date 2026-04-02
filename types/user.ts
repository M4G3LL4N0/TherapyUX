// User type definitions
export interface User {
  id: string
  email: string
  createdAt: Date
  updatedAt: Date
  // Will extend with more fields
}

export interface UserSession {
  user: User
  token: string
  expiresAt: Date
}
