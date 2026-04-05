import { createClient } from "@/lib/supabase/server"

export async function addToWaitlist(email: string) {
  const supabase = createClient()
  return supabase.from('waitlist').insert({ email })
}

export async function isOnWaitlist(email: string) {
  const supabase = createClient()
  const { data } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single()
  
  return !!data
}
