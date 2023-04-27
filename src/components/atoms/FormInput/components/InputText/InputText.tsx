import { TInputText } from '@/atoms/FormInput/components/InputText/InputText.type'
import React, { ChangeEvent } from 'react'
import * as S from './InputText.style'
import { IInputProps } from '../../FormInput.type'

const LENGTH_LIMIT = 1000

const InputText = React.forwardRef(
  (
    {
      placeholder,
      type = 'text',
      isDisabled,
      min,
      max,
      postfix,
      onChange,
      onBlur,
      name,
      isError,
    }: IInputProps<TInputText>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <S.InputText
        isError={isError}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete='off'
        type={type}
        disabled={isDisabled}
        min={min}
        max={max}
        onBlur={onBlur}
        name={name}
        ref={ref}
      />
    )
  }
)

export default InputText
