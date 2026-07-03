import { createClient } from '@supabase/supabase-js'

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseUrl = (rawUrl && rawUrl !== "your_supabase_url_here") ? rawUrl : "https://placeholder-url.supabase.co";

const rawKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;
const supabaseKey = (rawKey && rawKey !== "your_supabase_service_role_key_here") ? rawKey : "placeholder-key-here";

console.log("supbase Url:", supabaseUrl)
console.log("supbase Key (present):", !!supabaseKey)

export const supabaseClient = createClient(supabaseUrl, supabaseKey)
export default supabaseClient