import React, { useEffect, useRef } from 'react'
import { colors } from '../../types/types'
import './CircularProgress.css'

interface CircularProgressProps {
  style?: React.CSSProperties
  value: number
  color?: keyof typeof colors
}

const CircularProgress = ({
  style,
  value = 0,
  color = 'primary',
}: CircularProgressProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.style.setProperty('--progress', value + '%')
  }, [value])

  useEffect(() => {
    ref.current?.style.setProperty('--color', colors[color])
  }, [color])

  return (
    <div
      ref={ref!}
      style={style}
      className="circular-progress"
      data-value={value >= 100 ? 100 : value}
    />
  )
}

export default CircularProgress
