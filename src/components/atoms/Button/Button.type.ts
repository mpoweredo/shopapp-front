import { ReactNode } from 'react'
import { Route } from 'nextjs-routes'

enum EButtonVariants {
  FILLED = 'FILLED',
  OUTLINE = 'OUTLINE',
  BASIC = 'BASIC',
}

interface IButtonProps {
  action?: (() => void) | Route
  variant?: EButtonVariants
  children: ReactNode
  type?: 'button' | 'submit'
  isUnderline?: boolean
}

export { EButtonVariants }
export type { IButtonProps }
