import React from 'react'
import Button from '../Button'

function Contact() {
  return (
    <section className="relative -top-24 flex justify-center">
      <div className="shadow-2xl flex justify-evenly items-center bg-primary/90 rounded-xl backdrop-blur-xl w-10/12 h-52">
        <h2 className="text-center text-2xl text-white font-bold text-shadow">
          Contactanos
        </h2>
        <p className=" max-w-prose text-center text-white font-semibold text-shadow">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          laudantium veniam cupiditate ab excepturi laborum quas nihil autem
          odit?
        </p>
        <Button
          text="Contactanos!"
          href="/contact"
          className="bg-transparent border-secondary border duration-300 hover:bg-secondary hover:text-white text-secondary md:w-fit md:p-4"
        />
      </div>
    </section>
  )
}

export default Contact
