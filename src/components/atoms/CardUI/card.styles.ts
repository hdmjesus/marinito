import styled from 'styled-components'

import { CardUIProps } from './card.interface'

export const CardWrapper = styled.div<CardUIProps>`
  width: ${({ width }) => (width ? width : '100%')};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  border-radius: ${({ shape, getCardShape }) =>
    shape && getCardShape && getCardShape(shape)};
  background: ${({ theme, bgColor }) => bgColor && bgColor(theme)};
  border-radius: ${({ shape = 'square', getCardShape }) =>
    shape && getCardShape && getCardShape(shape)};
  box-shadow: ${({ theme, shadown = 'default' }) => theme.shadows[shadown]};
  padding: ${({ padding, getCardPadding }) =>
    padding && getCardPadding ? getCardPadding(padding) : '0'};
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
`

export const CardHeader = styled.div<CardUIProps>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ shape = 'square', getCardShape }) =>
    shape &&
    getCardShape &&
    `${getCardShape(shape)} ${getCardShape(shape)} 0 0`};

  padding: 10px 30px;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.28px;
`
