import { createClient as createSupabaseClient } from "@supabase/supabase-js"

export function createClient() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co"
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key"

  // Keep compilation/build safe even when env vars are injected only at runtime (e.g. Vercel).
  // Supabase client construction does not network until used.
  return createSupabaseClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })
}
