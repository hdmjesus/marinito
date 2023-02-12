import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/theme.styles'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
