import type { Meta, StoryObj } from '@storybook/react'
import CircularProgress from './CircularProgress'

const meta: Meta<typeof CircularProgress> = {
  title: 'ReactComponentLibrary/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof CircularProgress>

export const Determinate: Story = {
  args: {
    value: 80,
    color: 'blue',
  },
}
