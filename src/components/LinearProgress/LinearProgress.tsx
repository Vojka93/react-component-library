import React, { useEffect, useRef } from 'react'
import { colors } from '../../types/types'
import './LinearProgress.css'

interface CommonProps {
  style?: React.CSSProperties
  color?: keyof typeof colors
  width?: number
  height?: number
}

type ConditionalProps =
  | {
      variant: 'indeterminate'
      value?: never
    }
  | {
      variant: 'determinate'
      value: number
    }

type Props = CommonProps & ConditionalProps

const LinearProgress = ({
  style,
  variant,
  value = 0,
  color = 'primary',
  width = 200,
  height = 8,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.style.setProperty('--fill-width', value + '%')
  }, [value])

  useEffect(() => {
    ref.current?.style.setProperty('--color', colors[color])
  }, [color])

  useEffect(() => {
    ref.current?.style.setProperty('--width', `${width}px`)
  }, [width])

  useEffect(() => {
    ref.current?.style.setProperty('--height', `${height}px`)
  }, [height])

  return (
    <div
      ref={ref!}
      style={style}
      className="linear-progress"
      data-variant={variant}
      data-value={value != undefined && value >= 100 ? 100 : value}
    />
  )
}

export default LinearProgress
