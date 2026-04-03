import { supabase } from './client'
import type { Database } from '@/types/supabase'

export async function addToWaitlist(email: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert({ email })
    .select()
  
  if (error) throw error
  return data[0]
}

export async function getWaitlist() {
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
  
  if (error) throw error
  return data
}

/* Future data methods to scaffold:
- Session CRUD operations
- User settings CRUD
- Recovery logs
*/
