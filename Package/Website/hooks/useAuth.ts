"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import useAlert from "store/alertStore";

interface form {
  email: string;
  password: string;
}

export default function useAuth() {
  const { setAlert } = useAlert();

  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  async function signIn(form: form) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (!error || data.session) {
      router.refresh();
    }
    if (error) setAlert({ message: error.message, type: "warning" });
  }

  async function signUp(form: form) {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (!error || data.session) {
      setAlert({
        message: "Revisa tu correo para confirmar tu cuenta.",
        type: "info",
      });
    }
    if (error) setAlert({ message: error.message, type: "error" });
  }

  async function signInWithProvider(provider: Provider) {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (!error || data) {
      router.refresh();
    }
    if (error) setAlert({ message: error.message, type: "error" });
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return {
    signIn,
    signUp,
    signInWithProvider,
    signOut,
  };
}
