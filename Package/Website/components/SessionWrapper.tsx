import React, { PropsWithChildren, useEffect, useCallback } from 'react'
import { supabase } from '@/utils/auth'
import useUserStore from '@/store/userStore'
import { useRouter } from 'next/navigation'

function SessionWrapper({ children }: PropsWithChildren) {
  const { loggedIn,session, setSession } = useUserStore((state) => state)
  const router = useRouter()

  const handleAuthStateChange = useCallback(() => {
    supabase.auth.onAuthStateChange((authEvent, changedSession) => {
      setSession(changedSession)
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
