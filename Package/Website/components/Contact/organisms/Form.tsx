'use client'
import { useState } from 'react'
import { Input } from '../atoms'

function Form() {
  const [data, setData] = useState({
    email: '',
    phone: '',
    first: '',
    last: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const response: any = await fetch('/email', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(data),
      })
      if (!response.status) {
        console.log(response)
        throw new Error(`Invalid response: ${response.status}`)
      }
      console.log(response)
      alert('Thanks for contacting us, we will get back to you soon!')
    } catch (err) {
      console.error(err)
      alert("We can't submit the form, try again later?")
    }
  }

  return (
    <form className="container text-white" onSubmit={handleSubmit}>
      <h1>Get in touch</h1>
      <Input name="email" value={data.email} handleChange={handleChange} />
      <Input name="phone" value={data.phone} handleChange={handleChange} />
      <Input name="first" value={data.first} handleChange={handleChange} />
      <Input name="last" value={data.last} handleChange={handleChange} />
      <Input name="message" value={data.message} handleChange={handleChange} />
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default Form
