import styled, { css } from 'styled-components'

import { TextProps } from './text.interface'

export const TextStyled = styled('h1')<TextProps>`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ $color: color, theme }) => color && color(theme)};
  text-transform: ${({ textTransform }) => textTransform};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize?.xs}px`};
  line-height: ${({ lineHeight }) => lineHeight && `${lineHeight}px`};
  text-decoration: ${({ textDecoration }) => textDecoration && textDecoration};

  ${({ theme, fontSize }) =>
    typeof fontSize !== 'number' &&
    css`
      @media (min-width: ${theme.breakpoints.mobileXL}) {
        font-size: ${fontSize?.sm && `${fontSize.sm}px`};
      }
      @media (min-width: ${theme.breakpoints.tabletM}) {
        font-size: ${fontSize?.md && `${fontSize.md}px`};
      }
      @media (min-width: ${theme.breakpoints.laptopM}) {
        font-size: ${fontSize?.lg && `${fontSize.lg}px`};
      }
      @media (min-width: ${theme.breakpoints.desktop}) {
        font-size: ${fontSize?.xl && `${fontSize.xl}px`};
      }
    `}
`
