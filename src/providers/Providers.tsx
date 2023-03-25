import { ReactNode } from 'react'
import StyleProvider from './StyleProvider/StyleProvider'

interface IProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
  return <StyleProvider>{children}</StyleProvider>
}

export default Providers
