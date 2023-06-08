'use client'
import SessionWrapper from 'components/SessionWrapper'
import useUserStore from 'store/userStore'
import React from 'react'

function Home() {
  const { session, signOut } = useUserStore((state) => state)

  return (
    <SessionWrapper>
      <div>{session?.user.user_metadata.full_name}</div>
      <button onClick={signOut}>Log out</button>
    </SessionWrapper>
  )
}

export default Home
