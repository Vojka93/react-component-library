import React, { useEffect, useRef } from 'react'
import { Color } from '../../types/types'
import './CircularProgress.scss'
import colors from '../../styles/_colors.module.scss'

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
    let mainColor = colors[color]
    let lightColor = colors['light-' + color]

    ref.current?.style.setProperty('--bg-color', mainColor)
    ref.current?.style.setProperty('--fill-color', lightColor)
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
