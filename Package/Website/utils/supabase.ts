import { createClient } from '@supabase/supabase-js'
import axios from 'axios'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_APIKEY!

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true },
})

export const supabaseFetch = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_APIKEY}`,
    apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_APIKEY}`,
  },
})
