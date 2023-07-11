"use client"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase } from 'utils/supabase'
import { Provider, Session } from '@supabase/supabase-js'

interface UserStoreState {
  loggedIn: boolean
  session: Session | null
  setLoggedIn: (value: any) => void
  setSession: (value: any) => void
  signIn: (provider: Provider) => void
  signOut: () => void
}

const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      session: null,
      loggedIn: false,
      setSession: (value) => set(() => ({ session: value })),
      setLoggedIn: (value) => set(() => ({ loggedIn: value })),
      signIn: async (provider) => {
        await supabase.auth.signInWithOAuth({
          provider: provider,
          options: {
            redirectTo: `${location.origin}/home`,
          },
        })
      },
      signOut: () => {
        get().setLoggedIn(false)
        get().setSession(null)
      },
    }),
    {
      name: 'user-storage',
    },
  ),
)

export default useUserStore
