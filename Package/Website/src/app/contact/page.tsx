import { Form } from 'components/Contact/organisms'
import { data } from 'data/ContactPage'
import React from 'react'

function page() {
  return (
    <main className="flex flex-col items-center md:flex-row md:items-start md:justify-evenly md:p-8">
      <div className="max-w-[75%] md:max-w-[40%]">
        <h1 className="  text-center text-2xl font-semibold text-white">
          {data.title}
        </h1>
        <p className="mt-8 text-center text-white/70">{data.paragraph}</p>
      </div>
      <Form />
    </main>
  )
}

export default page
