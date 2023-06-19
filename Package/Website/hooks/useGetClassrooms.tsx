import { useState, useEffect } from 'react'
import useUserStore from 'store/userStore'
import { supabase, supabaseFetch } from 'utils/supabase'

interface Classroom {
  classroom: string
  created_at: string
  id: string
  sound_level: number
}

function useGetClassrooms() {
  const { session } = useUserStore((state) => state)
  const [ids, setIds] = useState<string[]>([])
  const [classrooms, setClassrooms] = useState<Classroom[]>([])

  const suscribeToChanges = () => {
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
          filter,
        },
        (payload) => {
          const updatedDevice = payload.new as Classroom
          if (typeof updatedDevice === 'object') setClassrooms([updatedDevice])
          if (typeof updatedDevice !== 'object') {
            setClassrooms(updatedDevice)
          }
        },
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }

  const fetchData = async () => {
    try {
      const { data } = await supabaseFetch.get(
        `/rest/v1/rpc/get_devices_by_user_id?id_user=${session?.user.id}`,
      )
      const updatedIds = data.map(
        (device: { device_id: string }) => device.device_id,
      )
      setIds(updatedIds)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    suscribeToChanges()
  }, [ids])

  return {
    ids,
    setIds,
    classrooms,
    setClassrooms,
  }
}

export default useGetClassrooms
