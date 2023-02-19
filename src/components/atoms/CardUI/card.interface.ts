import React, { ReactNode } from 'react'
import { DefaultTheme } from 'styled-components'
import { ShadownType, ShapeType } from '@/interfaces/base.interface'
import { Sizes } from '@/types/base.type'

export interface CardUIProps {
  sx?: React.CSSProperties
  getCardShape?: (shape: ShapeType) => string
  getCardPadding?: (padding: Sizes) => string
  cn?: string
  shape?: ShapeType
  shadown?: ShadownType
  width?: string
  maxWidth?: string
  padding?: Sizes
  marginTop?: string
  children: ReactNode
  marginLeft?: string
  marginRight?: string
  marginBottom?: string
  header?: boolean
  headerTitle?: string
  bgColor?: (theme: Pick<DefaultTheme, 'palette'>) => string
}
