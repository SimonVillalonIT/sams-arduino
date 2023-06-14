import React from 'react'

function Input({
  name,
  value,
  type,
  handleChange,
}: {
  name: string
  type?: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="text-white flex flex-col px-8 w-full">
      <label className='text-white font-semibold' htmlFor={name}>{name}</label>
      {type === 'textarea' ? (
        <textarea name={name} id={name} cols={30} rows={10} className=" rounded-xl bg-slate-100/10 backdrop-blur-xl"></textarea>
      ) : (
        <input
        className='p-4 bg-slate-100/10 backdrop-blur-xl rounded-xl'
          onChange={handleChange}
          value={value}
          id={name}
          type={type ? type : 'text'}
          name={name}
          required
        />
      )}
    </div>
  )
}

export default Input
