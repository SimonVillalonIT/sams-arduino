'use client'
import SessionWrapper from '@/components/SessionWrapper'
import useUserStore from '@/store/userStore'
import React from 'react'

function Home() {
  const { session } = useUserStore((state) => state)

  return (
    <SessionWrapper>
      <div>{session?.user.user_metadata.full_name}</div>
    </SessionWrapper>
  )
}

export default Home
