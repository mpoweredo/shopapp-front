import { IIconProps } from '@/atoms/Icon/Icon.type'
import { Icons } from '@/atoms/Icon/Icon.map'
import * as S from './Icon.style'
import { COLORS } from '@/styles/theme'

const Icon = ({ icon, size, color }: IIconProps) => {
  const iconElement = Icons[icon]

  return (
    <S.IconWrapper size={size || '2rem'} color={color || COLORS.black10}>
      <span className='material-icons-round'>{iconElement}</span>
    </S.IconWrapper>
  )
}

export default Icon
