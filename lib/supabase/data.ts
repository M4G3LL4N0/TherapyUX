import { createClient } from "@/lib/supabase/client"

type WaitlistRow = {
  email: string
}

export async function addToWaitlist(email: string) {
  const supabase = createClient()

  const { data, error } = await (supabase as any)
    .from("waitlist")
    .insert([{ email } satisfies WaitlistRow])
    .select()

  if (error) throw error

  return data
}

export async function getWaitlistEntries() {
  const supabase = createClient()

  const { data, error } = await (supabase as any)
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error

  return data ?? []
}
