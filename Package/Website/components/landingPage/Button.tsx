import React from 'react'

interface ButtonProps {
  children?: any
  text: string
  href: string
  className?: string
  id?: string
}

function Button({ children, href, text, className, id }: ButtonProps) {
  return (
    <a
      href={href}
      id={id}
      className={`z-[99] relative w-80 h-14 bg-secondary rounded-xl text-white font-medium text-center shadow-2xl flex justify-center items-center ${className}`}
    >
      {' '}
      {text}
      <div className="absolute right-8 text-2xl">{children}</div>
    </a>
  )
}

export default Button
