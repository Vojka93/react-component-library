import type { Meta, StoryObj } from '@storybook/react'
import LinearProgress from './LinearProgress'

const meta: Meta<typeof LinearProgress> = {
  title: 'ReactComponentLibrary/LinearProgress',
  component: LinearProgress,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof LinearProgress>

export const indeterminate: Story = {
  args: {
    variant: 'indeterminate',
    color: 'primary',
  },
}

export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 60,
    color: 'primary',
  },
}
