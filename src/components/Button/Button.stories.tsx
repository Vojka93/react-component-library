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
    color: 'primary',
    variant: 'contained',
    children: 'Click me!',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Click me!',
    color: 'primary',
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

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: '#222222',
    children: 'Click me!',
  },
}

export const Hex: Story = {
  args: {
    color: '#6a5acd',
    children: 'Click me!',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Click me!',
  },
}
