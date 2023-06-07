import { create } from 'zustand'
import { supabase } from '@/utils/auth'
import { Provider, Session } from '@supabase/supabase-js'

interface UserStoreState {
  session: Session | null // replace 'any' with the appropriate type for session
  setSession: (value: any) => void // replace 'any' with the appropriate type for session
  signIn: (provider: Provider) => void
  signOut: () => void
}

const useUserStore = create<UserStoreState>((set, get) => ({
  session: null,

  setSession: (value) => set(() => ({ session: value })),

  signIn: async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: 'http://localhost:3000/home',
      },
    })
    localStorage.setItem('error', JSON.stringify(error))
    localStorage.setItem('data', JSON.stringify(data))
  },
  signOut: () => {
    get().setSession(null)
  },
}))

export default useUserStore
