import clsx from "clsx"

import './Button.css'

export default function Button(props) {
  const {
    variant,
    onClick,
    ariaLabel,
    children
  } = props

  return (
    <button 
      className={
        clsx(
          'button', 
          `button--${variant}`
        )
      }
      aria-label={ariaLabel}
      onClick={onClick}
    >
      { children }
    </button>
  )
}