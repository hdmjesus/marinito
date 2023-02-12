import { ThemeType } from '../interfaces/theme.interface'

const colors = {
  common: {
    black: '#081A2F',
    white: '#FFFFFF'
  },
  primary: {
    main: '#A682FF',
    light: '#D0BDFF',
    dark: '#7963FF'
  },
  bgLinearPrimary: {
    main: 'linear-gradient(190deg, rgba(171,137,255,1) 11%, rgba(121,99,255,1) 81%)',
    dark: 'linear-gradient(190deg, rgba(171,137,255,1) 40%, rgba(121,99,255,1) 91%)'
  },
  bgLinearSecondary: {
    main: 'linear-gradient(190deg, rgba(16,46,74,1) 11%, rgba(51,104,154,1) 81%)',
    dark: 'linear-gradient(190deg, rgba(16,46,74,1) 31%, rgba(51,104,154,1) 90%)'
  },

  secondary: {
    main: '#102E4A',
    light: '#3C72A5',
    dark: '#0B3F71'
  },
  error: {
    main: '#DF3860',
    light: '#E34A6E',
    dark: '#DE305A'
  },
  warning: {
    main: '#F4B15B',
    light: '#F8B35E',
    dark: '#F4AB4D'
  },
  info: {
    main: '#34A9DB',
    light: '#45B0DE',
    dark: '#25A0D5'
  },
  success: {
    main: '#509253',
    light: '#1DDAB8',
    dark: '#3EB27D'
  },
  grey: {
    50: '#F9F9F9',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D3D3D3',
    400: '#9CA3AF',
    500: '#797979',
    600: '#4B5563',
    700: '#4A4A4A',
    800: '#1F2A37',
    900: '#342C2C',
    A100: '#5F5D7E',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A500: '#55576A',
    A700: '#616161'
  }
}

const shadows = {
  small:
    '0px 2px 2px -2px rgba(31, 27, 45, 0.08), 0px 4px 12px rgba(31, 27, 45, 0.08)',
  default:
    '0px 2px 8px -4px rgba(31, 27, 45, 0.12), 0px 4px 16px rgba(31, 27, 45, 0.12)',
  large:
    '0px 4px 12px -6px rgba(31, 27, 45, 0.2), 0px 8px 16px rgba(31, 27, 45, 0.16)'
}

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '560px',
  tablet: '768px',
  tabletM: '900px',
  laptop: '1024px',
  laptopS: '1150px',
  laptopM: '1260px',
  laptopL: '1440px',
  desktop: '1650px',
  desktopM: '1950px',
  desktopL: '2560px'
}

const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  mobileXL: `(min-width: ${breakpoints.mobileXL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  tabletM: `(min-width: ${breakpoints.tabletM})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopS: `(min-width: ${breakpoints.laptopS})`,
  laptopM: `(min-width: ${breakpoints.laptopM})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopM: `(min-width: ${breakpoints.desktopM})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`
}

const Theme: ThemeType = {
  breakpoints,
  palette: {
    ...colors,
    primary: {
      ...colors.primary,
      contrastText: '#FFFFFF'
    },
    secondary: {
      ...colors.secondary,
      contrastText: '#FFFFFF'
    },
    error: {
      ...colors.error,
      contrastText: '#FFFFFF'
    },
    warning: {
      ...colors.warning,
      contrastText: '#FFFFFF'
    },
    info: {
      ...colors.info,
      contrastText: '#FFFFFF'
    },
    success: {
      ...colors.success,
      contrastText: '#FFFFFF'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#878FB8',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    background:
      'linear-gradient(190deg, rgba(171,137,255,1) 11%, rgba(121,99,255,1) 81%)',
    backgroundSecond:
      'linear-gradient(190deg, rgba(16,46,74,1) 11%, rgba(51,104,154,1) 81%)'
  },
  shadows: shadows,
  device: device
}

export default Theme
