import { ReactNode } from 'react'
import StyleProvider from './StyleProvider/StyleProvider'
import QueryProvider from './QueryProvider/QueryProvider'

interface IProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <QueryProvider>
      <StyleProvider>{children}</StyleProvider>
    </QueryProvider>
  )
}

export default Providers
