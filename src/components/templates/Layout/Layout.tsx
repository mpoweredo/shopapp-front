import * as S from '@/templates/Layout/Layout.style'
import { ILayoutProps } from '@/templates/Layout/Layout.type'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({ subsets: ['latin'] })

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.LayoutWrapper className={publicSans.className}>
      <main>{children}</main>
    </S.LayoutWrapper>
  )
}

export default Layout
