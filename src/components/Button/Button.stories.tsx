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
export const HelloWorld: Story = {
  args: {
    children: 'Hello World',
    color: 'secondary',
  },
}

export const ClickMe: Story = {
  args: {
    children: 'Click me!',
    color: 'primary',
    disabled: false,
  },
}
