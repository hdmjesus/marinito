import styled, { css } from 'styled-components'

import { LinkOffProps } from './linkoff.interface'

export const LinkOffWrapper = styled.div<LinkOffProps>`
  cursor: pointer;
  color: ${({ theme, $textColor: textColor }) => textColor && textColor(theme)};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : `${fontSize?.xs}px`};
  text-decoration: none;
  ${({ decoration }) =>
    decoration &&
    css`
      text-decoration: underline;
    `};
  :hover {
    color: ${({ theme, $textColor: textColor }) =>
      textColor && textColor(theme) === theme.palette.common.white
        ? theme.palette.secondary.main
        : theme.palette.common.white};
  }

  a {
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
  }
`
