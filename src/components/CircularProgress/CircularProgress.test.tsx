import React from 'react'
import { render } from '@testing-library/react'
import CircularProgress from './CircularProgress'

describe('LinearProgress', () => {
  test('renders the LinearProgress component as indeterminate variant', () => {
    render(<CircularProgress value={30} />)
  })
})
