import { BreakpointSizesType } from '@/types/base.type'
import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components'

export interface AvatarProps {
  size?: number | BreakpointSizesType
  imgUrl?: string
}

export const AvatarUI: FC<AvatarProps> = ({ size }): ReactElement => {
  return <Avatar size={size}>{/* Colocar aca el componente IMAGE */}</Avatar>
}

const Avatar = styled.div<AvatarProps>`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: #d9d9d9;

  ${({ theme, size }) =>
    typeof size !== 'number' &&
    css`
      width: ${size?.xs && `${size.xs}px`};
      height: ${size?.xs && `${size.xs}px`};
      @media (min-width: ${theme.breakpoints.mobileXL}) {
        width: ${size?.sm && `${size.sm}px`};
        height: ${size?.sm && `${size.sm}px`};
      }
      @media (min-width: ${theme.breakpoints.tabletM}) {
        width: ${size?.md && `${size.md}px`};
        height: ${size?.md && `${size.md}px`};
      }
      @media (min-width: ${theme.breakpoints.laptopM}) {
        height: ${size?.lg && `${size.lg}px`};
        width: ${size?.lg && `${size.lg}px`};
      }
      @media (min-width: ${theme.breakpoints.desktop}) {
        width: ${size?.xl && `${size.xl}px`};
        height: ${size?.xl && `${size.xl}px`};
      }
    `}
`
