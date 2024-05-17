import React, { useEffect, useRef } from 'react'
import { colors } from '../../types/types'
import './Button.css'
import { isValidHexaCode } from '../../utils/generalFunctions'

interface ButtonProps {
  style?: React.CSSProperties
  disabled?: boolean
  name?: string
  children?: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  color?: keyof typeof colors | `#${string}`
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'big'
  variant?: 'outlined' | 'contained' | 'link' | 'ghost'
  onClick?: () => void
  autoFocus?: boolean
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
  onClick,
  autoFocus = false,
}: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  let className = `button ${variant} ${size}`

  useEffect(() => {
    if (
      color === 'primary' ||
      color === 'secondary' ||
      color === 'error' ||
      color === 'info'
    ) {
      ref.current?.style.setProperty('--color', colors[color])
    }

    if (isValidHexaCode(color)) {
      ref.current?.style.setProperty('--color', color)
    }
  }, [color])

  return (
    <button
      ref={ref!}
      style={style}
      className={className}
      disabled={disabled}
      name={name}
      type={type}
      onClick={onClick}
      autoFocus={autoFocus}
    >
      {children}
    </button>
  )
}

export default Button
