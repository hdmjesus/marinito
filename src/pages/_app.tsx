import { ThemeProvider } from 'styled-components'
import { Nunito } from '@next/font/google'
import type { AppProps } from 'next/app'

import { Providers } from '@/contexts/Providers'
import { GlobalStyle } from '@/styles/globals.styles'
import Theme from '@/styles/theme.styles'

const nunito = Nunito({ subsets: ['latin'] })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Providers>
        <style jsx global>
          {`
            html {
              font-family: ${nunito.style.fontFamily};
            }
          `}
        </style>
        <GlobalStyle />
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  )
}
