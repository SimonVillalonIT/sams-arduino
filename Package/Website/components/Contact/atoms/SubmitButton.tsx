import React, { useRef } from 'react'
import './Button.scss'

function SubmitButton({ state }: { state: string }) {
  const button = useRef(null) as any

  const successMessage = () => {
    setTimeout(() => {
      button.current?.classList.remove('loading-btn--pending')
      button.current?.classList.add('loading-btn--success')
    }, 2000)
  }
  const errorMessage = () => {
    setTimeout(() => {
      button.current?.classList.remove('loading-btn--pending')
      button.current?.classList.add('loading-btn--fail')
    }, 2000)
  }
  state === 'loading'
    ? button.current?.classList.add('loading-btn--pending')
    : null
  state === 'true' ? errorMessage() : null
  state === 'false' ? successMessage() : null

  return (
    <span className="loading-btn-wrapper my-8">
      <button ref={button} className="loading-btn bg-secondary p-6">
        <span className="loading-btn__text font-bold">Enviar</span>
      </button>
    </span>
  )
}

export default SubmitButton
