import { useState, useEffect } from 'react'

// Placeholder for user session management
export function useUserSession() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Will implement session loading
    setLoading(false)
  }, [])

  return { user, loading }
}
