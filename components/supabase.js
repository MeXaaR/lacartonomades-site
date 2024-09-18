import { createClient } from '@supabase/supabase-js'
import * as config from "./envConfig"
// Create a single supabase client for interacting with your database
export const supabase = createClient(config.NEXT_PUBLIC_SUPABASE_URL, config.NEXT_PUBLIC_SUPABASE_KEY)