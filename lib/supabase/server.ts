import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'

export const createSupabaseServerClient = () => {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}

/* Usage examples:
- Auth: const { data: { user } } = await supabase.auth.getUser()
- Data: const { data: waitlist } = await supabase.from('waitlist').select('*')
*/
