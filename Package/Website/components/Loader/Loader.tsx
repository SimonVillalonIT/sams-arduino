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
        <div className="fixed w-full min-h-[100vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default Loader
