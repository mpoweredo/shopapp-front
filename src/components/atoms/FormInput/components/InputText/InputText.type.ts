type TInputText = {
  placeholder?: string
  isDisabled?: boolean
  type?: 'text' | 'textarea' | 'number' | 'password' | 'email'
  min?: number
  max?: number
  postfix?: string
}

export type { TInputText }
