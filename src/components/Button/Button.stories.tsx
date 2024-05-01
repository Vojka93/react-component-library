import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    children: 'Click me!',
    size: 'medium',
    color: 'error',
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Click me!',
    color: 'secondary',
    size: 'medium',
    variant: 'outlined',
  },
}

export const Link: Story = {
  args: {
    children: 'Click me!',
    color: 'primary',
    size: 'medium',
    variant: 'link',
  },
}
