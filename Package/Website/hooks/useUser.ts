import { useEffect, useState, createContext, useContext } from 'react'
import { supabase } from '@/utils/auth'
import userStore from '@/store/userStore'

export const UserContext = createContext(undefined)

export const UserContextProvider = (props) => {
  const {
    session,
    user,
    userDetails,
    userLoaded,
    subscription,
    setSession,
    setSubscription,
    setUser,
    setUserDetails,
    setUserLoaded,
    signIn,
    signOut,
    signUp,
  } = userStore()

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? null)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      },
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  const getUserDetails = () => supabase.from('users').select('*').single()

  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0]

        if (userDetailsPromise.status === 'fulfilled')
          setUserDetails(userDetailsPromise.value.data)

        setUserLoaded(true)
      })
    }
  }, [user])

  const value = {
    session,
    user,
    userDetails,
    userLoaded,
    subscription,
    signIn: () =>
      supabase.auth.signIn({
        provider: 'google',
      }),
    signUp: () =>
      supabase.auth.signUp({
        provider: 'google',
      }),
    signOut: () => {
      setUserDetails(null)
      setSubscription(null)
      return supabase.auth.signOut()
    },
  }

  return <UserContext.Provider value={value} {...props} />
}
export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
