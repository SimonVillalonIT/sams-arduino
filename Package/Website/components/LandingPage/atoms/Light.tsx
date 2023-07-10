import React from 'react'

interface lights {
  className: string
}

function Light({ className }: lights) {
  return (
    <div
      className={`absolute hidden  h-72 w-72 blur-[200px] md:flex ${className}`}
    ></div>
  )
}

export default Light
