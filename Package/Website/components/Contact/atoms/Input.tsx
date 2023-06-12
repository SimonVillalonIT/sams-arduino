import React from 'react'

function Input({
  name,
  value,
  handleChange,
}: {
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="text-black">
      <label htmlFor={name}>{name}</label>
      <input
        onChange={handleChange}
        value={value}
        id={name}
        type={name}
        name={name}
        autoComplete={name}
        required
      />
    </div>
  )
}

export default Input
