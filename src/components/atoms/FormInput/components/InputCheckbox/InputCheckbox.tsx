import { TInputCheckbox } from './InputCheckbox.type'
import { IInputProps } from '../../FormInput.type'
import React from 'react'

const InputCheckbox = React.forwardRef(
  (
    { onBlur, name, onChange, isError, isChecked }: IInputProps<TInputCheckbox>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return <div>asd</div>
  }
)

export default InputCheckbox
