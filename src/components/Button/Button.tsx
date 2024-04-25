import React from 'react'
import './Button.scss'

interface ButtonProps {
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  color?: 'primary' | 'secondary' | 'error' | 'info'
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
