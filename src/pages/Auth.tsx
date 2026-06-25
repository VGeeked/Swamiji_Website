import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { AUTH_ERROR_MESSAGE, loginSchema } from "@/lib/authValidation";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { session, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const redirectTo =
    (location.state as { from?: string } | null)?.from ?? "/gallery";

  useEffect(() => {
    if (!loading && session) {
      navigate(redirectTo, { replace: true });
    }
  }, [loading, session, navigate, redirectTo]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      toast({
        title: "Invalid input",
        description: parsed.error.errors[0]?.message ?? "Check your email and password.",
        variant: "destructive",
      });
      setBusy(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword(parsed.data);
      if (error) throw error;
      toast({ title: "Welcome back" });
      navigate(redirectTo, { replace: true });
    } catch {
      toast({
        title: "Authentication failed",
        description: AUTH_ERROR_MESSAGE,
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="eyebrow text-accent/70">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto max-w-md px-6 py-20">
        <h1 className="font-serif text-4xl text-foreground mb-2 text-center">Sign In</h1>
        <p className="eyebrow text-accent/70 text-center mb-10">Admin access only</p>
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="eyebrow text-accent/70 block mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-accent/20 bg-background text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="eyebrow text-accent/70 block mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              minLength={12}
              maxLength={128}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-accent/20 bg-background text-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 bg-primary text-primary-foreground eyebrow hover:opacity-90 disabled:opacity-50"
          >
            {busy ? "Please wait..." : "Sign In"}
          </button>
        </form>
        <p className="mt-6 text-sm text-accent/70 text-center">
          Accounts are created by an administrator. Contact the site owner if you need access.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
