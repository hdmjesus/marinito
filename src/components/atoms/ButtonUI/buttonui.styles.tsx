import { ButtonUIProps } from './buttonui.interface'
import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button<ButtonUIProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: ${({
    theme,
    bgLinear = null,
    color = 'primary',
    variant = 'contained'
  }) =>
    variant == 'contained'
      ? bgLinear == 'bgLinearPrimary'
        ? theme.palette[bgLinear].main
        : bgLinear == 'bgLinearSecondary'
        ? theme.palette[bgLinear].main
        : bgLinear == null
        ? theme.palette[color].main
        : 'transparent'
      : 'transparent'};

  color: ${({ theme, variant = 'contained', color = 'primary' }) =>
    variant === 'text'
      ? theme.palette[color].main
      : variant === 'outlined'
      ? theme.palette.grey.A100
      : theme.palette.common.white};
  font-weight: 500;
  font-size: ${({ size }) =>
    size == 'small' ? '12px' : size == 'large' ? '0.9375rem' : '0.875rem'};
  line-height: 1.75;
  letter-spacing: 0.02857em;
  padding: ${({ size }) =>
    size == 'small' ? '4px 10px' : size == 'large' ? '8px 22px' : '6px 16px'};
  min-width: 64px;
  text-transform: capitalize;
  border: ${({ theme, bgLinear, color = 'primary', variant = 'contained' }) =>
    variant === 'contained'
      ? bgLinear
        ? 'none'
        : `2px solid ${theme.palette[color].main}`
      : `2px solid ${theme.palette[color].main}`};
  border-radius: ${({ shape }) =>
    shape == 'pill' ? '40px' : shape == 'rounded' ? '4px' : '0px'};
  cursor: pointer;

  &:hover {
    background: ${({
      theme,
      bgLinear = null,
      color = 'primary',
      variant = 'contained'
    }) =>
      variant == 'contained'
        ? bgLinear == 'bgLinearPrimary'
          ? theme.palette[bgLinear].dark
          : bgLinear == 'bgLinearSecondary'
          ? theme.palette[bgLinear].dark
          : bgLinear == null
          ? theme.palette[color].dark
          : 'transparent'
        : 'transparent'};

    color: ${({ theme, variant }) =>
      variant === 'outlined'
        ? theme.palette.grey[800]
        : theme.palette.common.white};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grey[400]};
    cursor: not-allowed;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  .button-startIcon {
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-endIcon {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
