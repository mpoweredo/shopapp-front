import { EInputMapKeys, IInputProps, TInputPropsMap } from './FormInput.type'
import InputText from '@/atoms/FormInput/components/InputText/InputText'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import InputCheckbox from '@/atoms/FormInput/components/InputCheckbox/InputCheckbox'

const formInputMap = {
  [EInputMapKeys.TEXT]: InputText,
  [EInputMapKeys.CHECKBOX]: InputCheckbox,
} as {
  [key in EInputMapKeys]: ForwardRefExoticComponent<
    IInputProps<Partial<TInputPropsMap[key]>> & RefAttributes<HTMLInputElement>
  >
}

export { formInputMap }
