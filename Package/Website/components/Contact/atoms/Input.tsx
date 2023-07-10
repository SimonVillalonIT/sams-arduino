function Input({
  name,
  value,
  type,
  handleChange,
  label,
}: {
  name: string
  type?: string
  value: string
  label: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div
      className={`flex w-full flex-col px-3 pb-3 text-xl font-semibold text-white md:text-lg ${
        type === 'textarea' ? null : 'md:max-w-[50%]'
      }`}
    >
      <label className="mb-1 font-medium text-white" htmlFor={name}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          id={name}
          cols={30}
          rows={5}
          className="rounded-xl bg-slate-100/10 p-4 backdrop-blur-xl"
        ></textarea>
      ) : (
        <input
          className=" rounded-md bg-slate-100/10 p-4 backdrop-blur-xl md:p-0 md:px-2"
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
