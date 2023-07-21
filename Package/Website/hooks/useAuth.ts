"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface data {
  email: string;
  password: string;
}

export default function useAuth() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  async function signIn(form: data) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    console.log(data, error);
    router.refresh();
  }

  async function signUp(data: data) {
    await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  }

  async function signInWithProvider(provider: Provider) {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
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
