// supabase.js
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
// Use hard coded supabase credentials below if .env is not allowing you to log into your account. 
// Comment out the above const SUPABASE_URL = process.env.SUPABASE_URL and const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
//const SUPABASE_URL = 'your_supabase_url_here'
//const SUPABASE_ANON_KEY = 'your_anon_key_here'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
