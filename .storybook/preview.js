import { ThemeProvider } from 'styled-components'
import Theme from '../src/styles/theme.styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  )
]
