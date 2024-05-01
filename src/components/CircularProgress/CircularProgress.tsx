import React, { useEffect, useRef } from 'react'
import { Color } from '../types'
import './CircularProgress.scss'
import colors from './../_variables.module.scss'

interface CircularProgressProps {
  style?: React.CSSProperties
  value: number
  color?: Color
}

const CircularProgress = ({
  value = 0,
  color = 'primary',
}: CircularProgressProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.style.setProperty('--progress', value + '%')
  }, [value])

  useEffect(() => {
    let selectedColor = colors[`${color}`]
    let lightenColor = colors[`light-${color}`]
    ref.current?.style.setProperty('--bg-color', selectedColor)
    ref.current?.style.setProperty('--fill-color', lightenColor)
  }, [color])

  return (
    <div
      ref={ref}
      className="circular-progress"
      data-value={value >= 100 ? 100 : value}
    />
  )
}

export default CircularProgress
