interface Color {
  main: string
  light: string
  dark: string
  linear?: string
  contrastText: string
}
interface ColorLinear {
  main: string
  dark?: string
}

interface Common {
  white: string
  black: string
}

interface GreyColor {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100: string
  A200: string
  A400: string
  A500: string
  A700: string
}

interface TextColor {
  primary: string
  secondary: string
  disabled: string
}

interface Shadow {
  small: string
  default: string
  large: string
}

interface Palette {
  common: Common
  primary: Color
  secondary: Color
  error: Color
  warning: Color
  info: Color
  success: Color
  bgLinearPrimary: ColorLinear
  bgLinearSecondary: ColorLinear
  grey: GreyColor
  text: TextColor
  background: string
  backgroundSecond: string
}

interface Breakpoints {
  mobileS: string
  mobileM: string
  mobileL: string
  mobileXL: string
  tablet: string
  tabletM: string
  laptop: string
  laptopS: string
  laptopM: string
  laptopL: string
  desktop: string
  desktopM: string
  desktopL: string
}

export interface ThemeType {
  breakpoints: Breakpoints
  palette: Palette
  device: Breakpoints
  shadows: Shadow
}
