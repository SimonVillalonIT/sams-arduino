import React, { PropsWithChildren } from 'react'

function Link({link, text,title}:any) {
  return (
    <a className='text-left' title={title} href={link}>{text}</a>
  )
}

export default Link