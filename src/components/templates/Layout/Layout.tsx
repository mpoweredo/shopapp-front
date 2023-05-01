import * as S from '@/templates/Layout/Layout.style'
import { ILayoutProps } from '@/templates/Layout/Layout.type'
import { Public_Sans } from 'next/font/google'
import { useGetGeneralAuthData } from './Layout.api'
import Loader from '@/atoms/Loader/Loader'
import { useRouter } from 'next/router'

const publicSans = Public_Sans({ subsets: ['latin'] })

const Layout = ({ children }: ILayoutProps) => {
  const { isFetching } = useGetGeneralAuthData()

  return (
    <S.LayoutWrapper className={publicSans.className}>
      {isFetching ? (
        <S.LoaderWrapper>
          <Loader />
        </S.LoaderWrapper>
      ) : (
        <main>{children}</main>
      )}
    </S.LayoutWrapper>
  )
}

export default Layout
