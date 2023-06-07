import React from 'react'

interface lights {
  className: string
}

function Light({ className }: lights) {
  return <div className={`w-72 h-72 absolute blur-[200px] ${className}`}></div>
}

export default Light
