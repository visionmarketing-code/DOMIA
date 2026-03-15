import { createBrowserClient } from '@supabase/ssr'

// This creates a Supabase client that can be used directly in Client Components
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
