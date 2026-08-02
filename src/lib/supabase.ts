import { createClient } from '@supabase/supabase-js';

// Access variables from Vite environment or fallback to project configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://reqebtmporhgrkkihfaq.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcWVidG1wb3JoZ3Jra2loZmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2MTgwMjQsImV4cCI6MjEwMTE5NDAyNH0.Sx7GYUwtLBWJJ0dmY8n6uVoyfJ8bRsSpPNCRmeWXghA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
