import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Fieldset,
  Form,
  Input,
  Option,
  RadioButton,
  Select,
  CheckBox,
} from './Form'

const meta: Meta<typeof Form> = {
  title: 'ReactComponentLibrary/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Form>

export const InputAndSelect: Story = {
  args: {
    children: (
      <>
        <h1>Form Title</h1>
        <Fieldset>
          <Input label="name" name="name" type="text" />
          <Input label="phone" name="phone" type="number" />
          <Select label="type">
            <Option placeholder="Select one..." />
            <Option value="mobile" label="Mobile" />
            <Option value="home" label="Home" />
            <Option value="work" label="Work" />
          </Select>
        </Fieldset>
      </>
    ),
  },
}

export const RadioButtons: Story = {
  args: {
    children: (
      <Fieldset direction="column" legend="Subscription">
        <RadioButton name="subscription" value="free" label="Free" />
        <RadioButton name="subscription" value="basic" label="Basic" />
        <RadioButton name="subscription" value="pro" label="Pro" />
      </Fieldset>
    ),
  },
}

export const CheckBoxs: Story = {
  args: {
    children: (
      <Fieldset>
        <CheckBox
          name="terms-and-conditions"
          label="I agree to the "
          href="#"
          hrefText="terms and conditions"
        />
      </Fieldset>
    ),
  },
}
