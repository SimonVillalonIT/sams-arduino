import React from 'react'

interface ButtonProps {
  children?: any
  text: string
  href?: string
  className?: string
  id?: string
  right?: boolean
  onClick?: () => void
}

function Button({
  children,
  href,
  text,
  className,
  id,
  right,
  onClick,
}: ButtonProps) {
  return href ? (
    <a
      href={href}
      id={id}
      className={`z-[99] relative w-80 h-14 bg-secondary rounded-xl font-medium text-center shadow-2xl flex justify-center items-center ${className}`}
    >
      {' '}
      {text}
      <div className={`absolute ${right ? 'right-8' : 'left-8'} text-2xl`}>
        {children}
      </div>
    </a>
  ) : (
    <button
      onClick={onClick}
      id={id}
      className={`z-[99] relative w-80 h-14 bg-secondary rounded-xl font-medium text-center shadow-2xl flex justify-center items-center ${className}`}
    >
      {' '}
      {text}
      <div className={`absolute ${right ? 'right-8' : 'left-8'} text-2xl`}>
        {children}
      </div>
    </button>
  )
}

export default Button
