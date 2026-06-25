-- Remove insecure email-based admin auto-grant on signup.
-- Admin roles must be assigned manually via the Supabase dashboard (service role).

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
