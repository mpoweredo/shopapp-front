import { FocusEventHandler, FunctionComponent } from 'react'
import { FieldHelperProps } from 'formik'
import { TInputText } from '@/atoms/Input/components/InputText/InputText.type'

enum EInputMapKeys {
  TEXT = 'text',
}

type TInputMap = Record<EInputMapKeys, FunctionComponent<any>>

type TInputGenerator<Type, InputProps> = {
  id?: number
  type: Type
  label?: string
  inputProps: InputProps
  helperText?: string

  value: any
  error?: any
  touched?: boolean
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  setValue: FieldHelperProps<any>['setValue']
  setTouched?: FieldHelperProps<any>['setTouched']
}

type TInput = TInputGenerator<EInputMapKeys.TEXT, TInputText>
// | TInputGenerator<EInputMapKeys.TEXTAREA, TInputTextarea>
// | TInputGenerator<EInputMapKeys.PASSWORD, TInputPassword>
// | TInputGenerator<EInputMapKeys.CHECKBOX, TInputCheckbox>
// | TInputGenerator<EInputMapKeys.RADIO, TInputRadio>

type TFormInput = Omit<
  TInput,
  | 'onBlur'
  | 'value'
  | 'multiple'
  | 'error'
  | 'touched'
  | 'setValue'
  | 'setTouched'
>

type TFormikInputProps<CurrentValue> = {
  currentValue: CurrentValue
  setValue: FieldHelperProps<any>['setValue']
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  setTouched?: FieldHelperProps<any>['setTouched']
  isError?: boolean
}

type TInputElement<T, CurrentValue> = TFormikInputProps<CurrentValue> & T

export { EInputMapKeys }
export type { TInput, TFormInput, TInputMap, TInputElement }
