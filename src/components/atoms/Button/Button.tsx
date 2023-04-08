import { EButtonVariants, IButtonProps } from '@/atoms/Button/Button.type'
import * as S from './Button.style'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Button = ({
  variant,
  action,
  children,
  type = 'button',
  isUnderline,
}: IButtonProps) => {
  const router = useRouter()

  const handleButtonClick = () => {
    if (typeof action === 'object') return router.push(action)
    if (typeof action === 'function') action()

    return null
  }

  const renderContent = () => {
    if (typeof action === 'object') return <Link href={action}>{children}</Link>

    return (
      <S.Button
        variant={variant || EButtonVariants.FILLED}
        type={type}
        onClick={handleButtonClick}
      >
        {children}
      </S.Button>
    )
  }

  return renderContent()
}

export default Button
