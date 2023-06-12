import { Form } from 'components/Contact/organisms'
import React from 'react'

function page() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-[75%] py-12">
        <h1 className="  text-center text-2xl font-semibold text-white">
          Unete a nosotros para crear entornos de aprendizaje optimos
        </h1>
        <p className="mt-8 text-center text-white/70">
          Contáctanos hoy mismo para obtener más información sobre nuestra
          solución y cómo puede beneficiar a tu institución.
        </p>
      </div>
      <Form />
    </main>
  )
}

export default page
