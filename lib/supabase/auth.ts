import { supabase } from './client'

export async function signUpWithEmail(email: string, password: string) {
  // Will implement actual auth flow later
  return { user: null, error: 'Not implemented' }
}

export async function signInWithEmail(email: string, password: string) {
  // Will implement actual auth flow later
  return { user: null, error: 'Not implemented' }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

/* Future auth methods to add:
- Password reset flows
- Magic links
- OAuth providers 
*/
