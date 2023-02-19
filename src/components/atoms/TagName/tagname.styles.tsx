import styled, { css } from 'styled-components'

import { TagProps } from './tagname.interface'

export const TagWrapper = styled.div<TagProps>`
  padding: ${({ ShapeTagName, size = 'small' }) =>
    ShapeTagName && ShapeTagName(size)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.palette.text.secondary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
  &:hover p {
    color: ${({ theme, variant, active }) =>
      variant == 'tab' && !active && theme.palette.grey.A400};
  }

  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ active }) =>
    active &&
    css`
      background-color: rgba(2, 255, 161, 0.1);
    `}
`
