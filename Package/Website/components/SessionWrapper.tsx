'use client'
import React, { PropsWithChildren, useEffect, useCallback } from 'react'
import { supabase } from 'utils/supabase'
import useUserStore from 'store/userStore'
import { useRouter } from 'next/navigation'

function SessionWrapper({ children }: PropsWithChildren) {
  const { loggedIn, setSession, setLoggedIn } = useUserStore((state) => state)
  const router = useRouter()

  const handleAuthStateChange = useCallback(() => {
    supabase.auth.onAuthStateChange((authEvent, changedSession) => {
      if (changedSession) {
        setSession(changedSession)
        setLoggedIn(true)
      }
    })
  }, [setSession])

  useEffect(() => {
    if (!loggedIn) {
      router.push('/')
    }
  })

  useEffect(() => {
    handleAuthStateChange()
  }, [handleAuthStateChange])

  return <>{children}</>
}

export default SessionWrapper
