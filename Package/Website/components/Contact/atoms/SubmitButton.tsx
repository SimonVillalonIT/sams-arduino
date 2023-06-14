import React, { useRef } from 'react'
import './Button.scss'

function SubmitButton({ state }: { state: boolean | undefined }) {
  const button = useRef(null) as any

  const successMessage = () => {
    button.current?.classList.add('loading-btn--pending')
    setTimeout(() => {
      button.current?.classList.remove('loading-btn--pending')
      button.current?.classList.add('loading-btn--success')
    }, 2000)
  }

  const errorMessage = () => {
    button.current?.classList.add('loading-btn--pending')
    setTimeout(() => {
      button.current?.classList.remove('loading-btn--pending')
      button.current?.classList.add('loading-btn--fail')
    }, 2000)
  }
  state !== undefined && state === true ? errorMessage() : null
  state !== undefined && state === false ? successMessage() : null

  return (
    <span className="loading-btn-wrapper">
      <button ref={button} className="loading-btn">
        <span className="loading-btn__text">Submit</span>
      </button>
    </span>
  )
}

export default SubmitButton
