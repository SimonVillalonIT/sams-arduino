'use client'
import SessionWrapper from 'components/SessionWrapper'
import useUserStore from 'store/userStore'

import { supabase } from 'utils/auth'
import { useEffect, useState } from 'react'
import WelcomeCards from '../molecules/WelcomeCards'

function Home() {
  interface Devices {
    device_id: string
    device_classroom: string
    sound_level: number
    user_device_id: string
    user_id: string
  }
  const { session } = useUserStore((state) => state)
  const [ids, setIds] = useState<string[]>([])
  const [devices, setDevices] = useState<
    { classroom: string; created_at: string; id: string; sound_level: number }[]
  >([])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/rest/v1/rpc/get_devices_by_user_id?id_user=${session?.user.id}`,
        {
          headers: {
            Accept: 'application/json',
            apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_APIKEY}`,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_APIKEY}`,
          },
        },
      )
      const data = await response.json()
      const updatedIds = data.map((device: Devices) => device.device_id)
      setIds(updatedIds)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (ids.length === 0) return
    const filter = `id=in.(${ids.join(',')})`
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'device',
          filter: filter,
        },
        (payload) => {
          const updatedDevice = payload.new as any
          if (typeof updatedDevice === 'object') setDevices([updatedDevice])
          if (typeof updatedDevice !== 'object') setDevices(updatedDevice)
        },
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [ids])

  return (
    <main className="z-[99] flex flex-col items-center">
      <SessionWrapper>
        {devices.length > 0 ? (
          <div>
            {devices.map((device, i) => {
              return (
                <div className="rounded-2xl bg-slate-200/30 p-20 text-white backdrop-blur-3xl">
                  <h1 className="text-3xl">{device.classroom}</h1>
                  <p className="text-xl" key={i}>
                    {device.sound_level}
                  </p>
                </div>
              )
            })}
          </div>
        ) : (
          <WelcomeCards />
        )}
      </SessionWrapper>
    </main>
  )
}

export default Home
