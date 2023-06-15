'use client'
import useForm from 'hooks/useForm'
import { Input, SubmitButton } from '../atoms'
import { data as FormData } from 'data/ContactPage'

function Form() {
  const { handleSubmit, handleChange, data, error } = useForm()
  return (
    <form
      className="container flex flex-wrap justify-center rounded-xl bg-slate-700/50 px-8 py-4 text-white backdrop-blur-2xl md:max-w-[40%] "
      onSubmit={handleSubmit}
    >
      {FormData.inputs.map((input) => (
        <Input
          {...input}
          handleChange={handleChange}
          value={data[input.name as keyof typeof data]}
        />
      ))}
      <SubmitButton state={error} />
    </form>
  )
}
export default Form
