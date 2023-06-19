'use client'
import './Loader.css'
import Spinner from './Spinner'
import { PropsWithChildren, useEffect, useState } from 'react'

function Loader({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <div className="fixed flex min-h-[calc(100vh-90px)] w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default Loader
