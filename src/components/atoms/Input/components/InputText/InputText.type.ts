type TInputText = {
  name: string
  initialValue?: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  type?: 'text' | 'textarea' | 'number' | 'password' | 'email'
  isClearButton?: boolean
  min?: number
  max?: number
  postfix?: string
}

export type { TInputText }
