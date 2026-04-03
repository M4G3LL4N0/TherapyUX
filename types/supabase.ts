export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string
          email: string
          created_at: string
          referred_by: string | null
          campaign: string | null
        }
        Insert: {
          email: string
          referred_by?: string | null
          campaign?: string | null
        }
        Update: {
          email?: string
          referred_by?: string | null
          campaign?: string | null
        }
      }
      // Will add other tables (sessions, users, etc) later
    }
    Views: {
      // Can define views here when needed
    }
    Functions: {
      // Can define database functions here
    }
  }
}
