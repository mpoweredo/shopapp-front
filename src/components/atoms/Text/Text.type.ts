import { ReactNode } from 'react'

type TTextTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'

interface ITextProps {
  children: ReactNode
  type: TTextTypes
  styleType?: TTextTypes
}

export type { ITextProps }
