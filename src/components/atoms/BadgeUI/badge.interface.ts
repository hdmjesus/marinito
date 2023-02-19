import { Sizes } from '@/types/base.type'
import { ThemeType } from '@/interfaces/theme.interface'
import { ShapeType } from '@/interfaces/base.interface'
import { BreakpointSizesType } from '@/types/base.type'

export type VariantsBadge = 'contained' | 'outlined' | 'translucent'

export interface BadgeProps {
  size?: Sizes
  shape?: ShapeType
  fontWeight?: number
  fontSize?: number | BreakpointSizesType
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  fullWidth?: boolean
  sx?: React.CSSProperties
  text?: string | number
  gap?: number
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
  variant?: VariantsBadge
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string
}
