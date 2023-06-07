import React, { PropsWithChildren, useEffect, useCallback } from 'react'
import { supabase } from '@/utils/auth'
import useUserStore from '@/store/userStore'

function SessionWrapper({ children }: PropsWithChildren) {
  const { setSession} = useUserStore((state) => state)
  
  const handleAuthStateChange = useCallback(() => {
    supabase.auth.onAuthStateChange((authEvent, changedSession) => {
      setSession(changedSession)
    })
  }, [setSession])

  useEffect(() => {
    handleAuthStateChange()
  },[handleAuthStateChange])

  return <>{children}</>
}

export default SessionWrapper
