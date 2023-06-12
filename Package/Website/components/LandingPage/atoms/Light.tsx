import React from 'react'

interface lights {
  className: string
}

function Light({ className }: lights) {
  return (
    <div
      className={`absolute h-72  w-72 opacity-0 blur-[200px] md:opacity-100 ${className}`}
    ></div>
  )
}

export default Light
