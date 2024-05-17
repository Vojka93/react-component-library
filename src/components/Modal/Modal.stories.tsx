import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'ReactComponentLibrary/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const simpleModal: Story = {
  args: {
    title: 'Warning',
    subtitle: 'Are you absolutely sure?',
    confirmBtn: {
      text: 'Yes',
      color: 'secondary',
      onClick: () => console.log('confirm'),
    },
    negateBtn: {
      text: 'No',
      color: 'secondary',
      onClick: () => console.log('negate'),
    },
  },
}
