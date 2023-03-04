import styled from 'styled-components'

import { BadgeProps } from './badge.interface'

export const BadgeStyled = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap, startIcon, endIcon }) =>
    gap ? `${gap}px` : (startIcon || endIcon) && '2px'};
  justify-content: center;
  padding: ${({ size }) =>
    size === 'small' ? '4px 8px' : size === 'large' ? '8px 22px' : '0px'};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  background-color: ${({ bgColor, theme, variant = 'contained' }) =>
    bgColor && variant === 'contained' ? bgColor(theme) : 'transparent'};
  border-radius: 0.1875rem;
  border: ${({ theme, variant = 'translucent' }) =>
    variant == 'outlined'
      ? `2px solid ${theme.palette.text.secondary}`
      : 'none'};

  span {
    margin: 0;
    padding: 0;
    display: inherit;
  }
`
