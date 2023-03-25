import { ReactNode } from 'react'
import { GlobalStyles } from '@/styles/global.style'
import { ThemeProvider } from 'styled-components'
import THEME from '@/styles/theme'
interface IStyleProviderProps {
  children: ReactNode
}

const StyleProvider = ({ children }: IStyleProviderProps) => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  )
}

export default StyleProvider
