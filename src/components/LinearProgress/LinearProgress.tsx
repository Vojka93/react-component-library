import React, { useEffect, useRef } from 'react'
import { Color } from '../../types/types'
import './LinearProgress.scss'
import colors from '../../styles/_colors.module.scss'

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

const LinearProgress = ({
  style,
  variant,
  value = 0,
  color = 'primary',
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.style.setProperty('--fill-width', value + '%')
  }, [value])

  useEffect(() => {
    let mainColor = colors[color]
    let lightColor = colors['light-' + color]
    ref.current?.style.setProperty('--bg-color', lightColor)
    ref.current?.style.setProperty('--fill-color', mainColor)
  }, [color])

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
