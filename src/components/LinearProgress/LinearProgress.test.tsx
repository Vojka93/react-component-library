import React from 'react'
import { render } from '@testing-library/react'
import LinearProgress from './LinearProgress'

describe('LinearProgress', () => {
  test('renders the LinearProgress component as indeterminate variant', () => {
    render(<LinearProgress variant="indeterminate" />)
  })

  test('renders the LinearProgress component as determinate variant', () => {
    render(<LinearProgress variant="determinate" value={30} />)
  })
})
