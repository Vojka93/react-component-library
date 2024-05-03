import React from 'react'
import { Color } from '../../types/types'
import './Button.scss'
import { globalTheme } from '../../variables'

interface ButtonProps {
  style?: React.CSSProperties
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  color?: Color
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'big'
  variant?: 'outlined' | 'contained' | 'link'
}

const Button = ({
  style,
  disabled,
  name,
  children,
  type,
  color = 'primary',
  size = 'medium',
  variant = 'contained',
}: ButtonProps) => {
  let className = `btn-${color} btn-${size} btn-${variant}`

  return (
    <button
      style={style}
      className={className}
      disabled={disabled}
      name={name}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
