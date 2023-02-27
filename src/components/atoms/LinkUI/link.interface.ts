import { LinkProps } from 'next/link'
import { DefaultTheme } from 'styled-components'

import { BreakpointSizesType } from '@/types/base.type'

export interface LinkUIProps extends LinkProps {
  children: React.ReactNode
  target?: React.HTMLAttributeAnchorTarget
  fontSize?: number | BreakpointSizesType
  fontWeight?: number | string
  decoration?: boolean
  $textColor?: (theme: Pick<DefaultTheme, 'palette'>) => string
}
