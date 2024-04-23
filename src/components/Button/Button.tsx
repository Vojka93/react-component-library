import React from 'react'
import './Button.scss'

interface ButtonProps {
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  type: 'button' | 'reset' | 'submit'
  color?: 'primary' | 'secondary'
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.color}`}
      disabled={props.disabled}
      name={props.name}
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default Button
