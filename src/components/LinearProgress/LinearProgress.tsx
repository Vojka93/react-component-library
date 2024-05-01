import React, { useEffect, useRef } from 'react'
import { Color } from '../types'
import './LinearProgress.scss'
import colors from './../_variables.module.scss'

interface CommonProps {
  style?: React.CSSProperties
  color?: Color
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

const LinearProgress = ({ style, variant, value, color }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.style.setProperty('--fill-width', value + '%')
  }, [value])

  useEffect(() => {
    let selectedColor = colors[`${color}`]
    let lightenColor = colors[`light-${color}`]
    ref.current?.style.setProperty('--bg-color', lightenColor)
    ref.current?.style.setProperty('--fill-color', selectedColor)
  }, [color])

  return (
    <div
      ref={ref}
      style={style}
      className="linear-progress"
      data-variant={variant}
      data-value={value != undefined && value >= 100 ? 100 : value}
    />
  )
}

export default LinearProgress
