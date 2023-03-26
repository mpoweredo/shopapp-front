import { ITextProps } from '@/atoms/Text/Text.type'

const Text = ({ children, type, styleType }: ITextProps) => {
  const TypeElement = type
  const elementStyle = styleType || type

  return <TypeElement className={elementStyle}>{children}</TypeElement>
}

export default Text
