import {
  FieldPath,
  FieldValues,
  Noop,
  UseControllerProps,
} from 'react-hook-form'
import { TInputText } from '@/atoms/FormInput/components/InputText/InputText.type'
import { TInputCheckbox } from '@/atoms/FormInput/components/InputCheckbox/InputCheckbox.type'
import React from 'react'

enum EInputMapKeys {
  TEXT = 'text',
  CHECKBOX = 'checkbox',
}

type TInputPropsMap = {
  [EInputMapKeys.TEXT]: TInputText
  [EInputMapKeys.CHECKBOX]: TInputCheckbox
}

type TInputsProps = {
  isError: boolean
  onBlur: Noop
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type IInputProps<TInputProps> = TInputsProps & TInputProps

interface IFormInputProps<
  InputType extends EInputMapKeys,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  label?: string
  type: InputType
  controllerProps: UseControllerProps<TFieldValues, TName>
  inputProps?: Omit<TInputPropsMap[InputType], keyof TInputsProps>
}

export { EInputMapKeys }
export type { IFormInputProps, TInputPropsMap, IInputProps, TInputsProps }
