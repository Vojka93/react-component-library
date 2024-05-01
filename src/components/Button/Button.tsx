import React from 'react'
import { Color } from '../types'
import './Button.scss'

interface ButtonProps {
  style?: React.CSSProperties
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  color?: Color
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'big'
  variant: 'outlined' | 'contained' | 'link'
}

const Button = (props: ButtonProps) => {
  let className = `${props.color === undefined ? '' : `btn-${props.color}`}${props.size === undefined ? '' : ` btn-${props.size}`}${props.variant === undefined ? '' : ` btn-${props.variant}`}`

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
