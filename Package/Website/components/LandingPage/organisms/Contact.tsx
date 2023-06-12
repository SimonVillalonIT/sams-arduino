import React from 'react'
import Button from '../atoms/Button'

function Contact() {
  return (
    <section className="relative -top-36 flex justify-center">
      <div className="flex w-10/12 flex-col items-center justify-evenly rounded-xl bg-primary/90 py-6 shadow-2xl backdrop-blur-xl md:flex-row">
        <h2 className="text-shadow text-center text-2xl font-bold text-white">
          Contactanos
        </h2>
        <p className="text-shadow max-w-prose py-8 text-center font-semibold text-white sm:py-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          laudantium veniam cupiditate ab excepturi laborum quas nihil autem
          odit?
        </p>
        <Button
          text="Contactanos!"
          href="/contact"
          className="border border-secondary bg-transparent text-secondary duration-300 hover:bg-secondary hover:text-white md:w-fit md:p-4"
        />
      </div>
    </section>
  )
}

export default Contact
