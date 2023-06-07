import React, { PropsWithChildren, useEffect, useCallback } from 'react'
import { supabase } from '@/utils/auth'
import useUserStore from '@/store/userStore'

function SessionWrapper({ children }: PropsWithChildren) {
  useEffect(() => {
    handleAuthStateChange()
  }, [])
  const setSession = useUserStore((state) => state.setSession)

  const handleAuthStateChange = useCallback(() => {
    supabase.auth.onAuthStateChange((authEvent, changedSession) => {
      setSession(changedSession)
    })
  }, [])
  return <>{children}</>
}

export default SessionWrapper
