// import original module declarations
import 'styled-components'
import { ThemeType } from '@/interfaces/theme.interface'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
