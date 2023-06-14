'use client'
import { useState } from 'react'
import { Input, SubmitButton } from '../atoms'

function Form() {
  const [data, setData] = useState({
    email: '',
    phone: '',
    first: '',
    last: '',
    message: '',
  })
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    try {
      const formData = {
        service_id: 'service_zgj5haf',
        template_id: 'template_bxg2miu',
        user_id: 'S4cEkUuIYWHJmqsT6',
        template_params: { ...data },
      }
      setError('loading')
      const query = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = query.ok
      result ? setError('false') : setError('true')
    } catch (error) {
      console.log(error)
    }
    console.log('click')
  }

  return (
    <form
      className="container flex flex-wrap justify-center text-white"
      onSubmit={handleSubmit}
    >
      <Input
        label="Nombre*"
        name="first"
        value={data.first}
        handleChange={handleChange}
      />
      <Input
        label="Apellido*"
        name="last"
        value={data.last}
        handleChange={handleChange}
      />
      <Input
        label="Numero de telefono*"
        name="phone"
        type="tel"
        value={data.phone}
        handleChange={handleChange}
      />
      <Input
        label="Correo electronico*"
        name="email"
        type="email"
        value={data.email}
        handleChange={handleChange}
      />
      <Input
        label="Mensaje*"
        name="message"
        type="textarea"
        value={data.message}
        handleChange={handleChange}
      />
      <SubmitButton state={error} />
    </form>
  )
}
export default Form
