import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qkdpnukollzlmnvcecib.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrZHBudWtvbGx6bG1udmNlY2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NTMxNjYsImV4cCI6MjA2NTAyOTE2Nn0.PZR495GVu56hXoCoHUco_09SdC295VXtU3QVNcBE9Ro'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
