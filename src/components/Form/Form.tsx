import React, { FormHTMLAttributes, HTMLInputTypeAttribute } from 'react'
// import { colors } from '../../types/types'

import './Form.css'

interface CheckBoxProps {
  name?: string
  label?: string
  href?: string
  hrefText?: string
}

interface RadioButtonProps {
  name?: string
  value?: string
  label?: string
}

interface OptionProps {
  value?: string
  placeholder?: string
  label?: string
}

interface SelectProps {
  style?: React.CSSProperties
  disabled?: boolean
  label?: string
  name?: string
  autoFocus?: boolean
  children?: React.ReactNode
}

interface InputProps {
  style?: React.CSSProperties
  disabled?: boolean
  label?: string
  type?: HTMLInputTypeAttribute
  name?: string
  autoFocus?: boolean
}

interface FieldsetProps {
  style?: React.CSSProperties
  children?: React.ReactNode
  legend?: string
  direction?: 'column' | 'row'
}

interface FormProps {
  method?: string | undefined
  style?: React.CSSProperties
  children?: React.ReactNode
}

const CheckBox = ({ name, label, href, hrefText }: CheckBoxProps) => {
  return (
    <label className="checkbox">
      <input type="checkbox" name={name} />
      <span>
        {label}
        <a href={href}>{hrefText}</a>
      </span>
    </label>
  )
}

const RadioButton = ({ name, value, label }: RadioButtonProps) => {
  return (
    <label className="radio">
      <input type="radio" name={name} value={value} />
      {label}
    </label>
  )
}

const Option = ({ value, placeholder, label }: OptionProps) => {
  if (placeholder) {
    return (
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
    )
  }

  return <option value={value} label={label} />
}

const Select = ({ disabled, label, name, children }: SelectProps) => {
  return (
    <label>
      {label}
      <select disabled={disabled} name={name}>
        {children}
      </select>
    </label>
  )
}

const Input = ({ disabled, label, type, name, autoFocus }: InputProps) => {
  return (
    <label>
      {label}
      <input
        disabled={disabled}
        type={type}
        required
        name={name}
        autoFocus={autoFocus}
      />
    </label>
  )
}

const Fieldset = ({ style, legend, children, direction }: FieldsetProps) => {
  return (
    <fieldset
      style={style}
      className={direction === 'column' ? 'vertical' : ''}
    >
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  )
}

const Form = ({ method, children }: FormProps) => {
  return <form method={method}>{children}</form>
}

export { Form, Fieldset, Input, Select, Option, RadioButton, CheckBox }
