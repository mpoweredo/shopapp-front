import { TInputElement } from '@/atoms/Input/Input.type'
import { TInputText } from '@/atoms/Input/components/InputText/InputText.type'
import { ChangeEvent } from 'react'
import * as S from './Input.style'

const LENGTH_LIMIT = 1000

const InputText = ({
  name,
  currentValue,
  placeholder,
  setValue,
  onBlur,
  type = 'text',
  isDisabled,
  isClearButton,
  min,
  max,
  postfix,
}: TInputElement<TInputText, string>) => {
  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    console.log(value)
    if (value.length > LENGTH_LIMIT) return

    setValue(value)
  }

  return (
    <S.InputText
      type={type}
      id={name}
      name={name}
      value={currentValue}
      placeholder={placeholder}
      onChange={handleSetValue}
      onBlur={onBlur}
      autoComplete='off'
      disabled={isDisabled}
      min={min}
      max={max}
    />
  )
}

export default InputText
