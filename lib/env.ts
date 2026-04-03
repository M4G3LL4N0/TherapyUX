export function getSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY // Server-only
  }
}

export function verifyEnv() {
  const config = getSupabaseConfig()
  if (process.env.NODE_ENV === 'production') {
    if (!config.url || !config.anonKey) {
      throw new Error('Missing required Supabase environment variables')
    }
  }
  return config
}
