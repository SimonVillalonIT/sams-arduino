import { useState } from 'react'

export default function useForm() {
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

  return {
    data,
    handleChange,
    handleSubmit,
    error,
  }
}
