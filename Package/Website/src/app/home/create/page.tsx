'use client'
import React, { useState } from 'react'
import useUserStore from 'store/userStore'

function Create() {
  const { session } = useUserStore((state) => state)

  const [data, setData] = useState({
    name: '',
    'device-id': '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    try {
      const body = {
        classroomname: data.name,
        deviceid: data['device-id'],
        uid: session?.user.id,
      }

      const response = await fetch(
        `${process.env
          .NEXT_PUBLIC_SUPABASE_PROJECT_URL!}/rest/v1/rpc/create_classroom`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_APIKEY!}`,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_APIKEY!}`,
          },
          body: JSON.stringify(body),
        },
      )
      const result = await response.status
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1>Crea una nueva aula</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={data.name}
          placeholder="Nombre"
        />
        <input
          onChange={handleChange}
          type="text"
          value={data['device-id']}
          name="device-id"
          placeholder="ID del dispositivo"
        />
        <button className="bg-white">Crear aula</button>
      </form>
    </div>
  )
}

export default Create
