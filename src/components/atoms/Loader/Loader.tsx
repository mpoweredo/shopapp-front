import * as S from './Loader.style'
import { ILoaderProps } from './Loader.type'

const Loader = ({ size }: ILoaderProps) => {
  return (
    <S.LoaderWrapper size={size || '3.5rem'}>
      <svg className='ring' viewBox='25 25 50 50' strokeWidth='5'>
        <circle cx='50' cy='50' r='20' />
      </svg>
    </S.LoaderWrapper>
  )
}

export default Loader
