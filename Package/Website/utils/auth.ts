import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_APIKEY!

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true },
})
