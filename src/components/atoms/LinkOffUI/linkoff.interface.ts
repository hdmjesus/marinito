import { DefaultTheme } from 'styled-components'

import { BreakpointSizesType } from '@/types/base.type'

export interface LinkOffProps {
  fontSize?: number | BreakpointSizesType
  fontWeight?: number | string
  decoration?: boolean
  children: React.ReactNode
  $textColor?: (theme: Pick<DefaultTheme, 'palette'>) => string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
