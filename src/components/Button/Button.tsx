import React from 'react'
import './Button.scss'

type Color =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'green'
  | 'orange'
  | 'purple'
  | 'gray'

interface ButtonProps {
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  color?: Color
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'big'
  variant?: 'outlined' | 'contained' | 'link'
  style: React.CSSProperties
}

const Button = (props: ButtonProps) => {
  let className = `btn${props.color === undefined ? '' : ` ${props.color}`}${props.size === undefined ? '' : ` ${props.size}`}${props.variant === undefined ? '' : ` ${props.variant}`}`

  return (
    <button
      style={props.style}
      className={className}
      disabled={props.disabled}
      name={props.name}
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default Button
