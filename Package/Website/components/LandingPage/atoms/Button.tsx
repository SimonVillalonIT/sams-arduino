import Link from 'next/link'
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
    <Link
      href={href}
      id={id}
      className={`relative z-[99] flex h-14 w-80 items-center justify-center rounded-xl bg-secondary text-center font-medium shadow-2xl ${className}`}
    >
      {' '}
      {text}
      <div className={`absolute ${right ? 'right-8' : 'left-8'} text-2xl`}>
        {children}
      </div>
    </Link>
  ) : (
    <button
      onClick={onClick}
      id={id}
      className={`relative z-[99] flex h-14 w-80 items-center justify-center rounded-xl bg-secondary text-center font-medium shadow-2xl ${className}`}
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
