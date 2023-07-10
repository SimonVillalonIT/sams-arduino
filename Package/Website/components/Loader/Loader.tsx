'use client'
import useLoadingStore from 'store/loading.store'
import './Loader.css'
import Spinner from './Spinner'
import { PropsWithChildren, useEffect } from 'react'

function Loader({ children }: PropsWithChildren) {
  const { loading, setLoading } = useLoadingStore((state) => state)
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
