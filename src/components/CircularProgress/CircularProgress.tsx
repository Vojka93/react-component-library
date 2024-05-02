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
  style,
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
      ref={ref!}
      style={style}
      className="circular-progress"
      data-value={value >= 100 ? 100 : value}
    />
  )
}

export default CircularProgress
