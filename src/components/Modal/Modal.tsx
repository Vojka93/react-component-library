import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../types/types'

import './Modal.css'
import { Fieldset, Form } from '../Form'
import Button from '../Button'

interface ModalProps {
  title?: string
  subtitle?: string
  confirmBtn: {
    text?: string
    color?: keyof typeof colors | `#${string}`
    onClick: () => void
  }
  negateBtn: {
    text?: string
    color?: keyof typeof colors | `#${string}`
    onClick: () => void
  }
}

const Modal = ({ title, subtitle, confirmBtn, negateBtn }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null)

  return (
    <>
      <dialog ref={ref!}>
        <article>
          <h2>{title}</h2>
          {subtitle}
        </article>
        <footer>
          <Form method="dialog">
            <Fieldset style={{ justifyContent: 'flex-end' }}>
              <Button
                onClick={negateBtn.onClick}
                color={negateBtn.color}
                variant="outlined"
              >
                {negateBtn.text}
              </Button>
              <Button
                onClick={confirmBtn.onClick}
                color={confirmBtn.color}
                variant="contained"
              >
                {confirmBtn.text}
              </Button>
            </Fieldset>
          </Form>
        </footer>
      </dialog>
      <p>
        Click <a onClick={() => ref.current?.showModal()}>here</a> to open the
        modal
      </p>
    </>
  )
}

export default Modal
