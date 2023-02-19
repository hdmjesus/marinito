import { ThemeType } from '@/interfaces/theme.interface'
import { BreakpointSizesType, Sizes } from '@/types/base.type'

type VariantTag = 'default' | 'tab'

export interface TagProps {
  size?: Sizes
  fontWeight?: number
  fontSize?: number | BreakpointSizesType
  startIcon?: React.ReactNode
  fullWidth?: boolean
  sx?: React.CSSProperties
  text?: string | number
  gap?: number
  active?: boolean
  variant: VariantTag
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
  bgColor?: (theme: Pick<ThemeType, 'palette'>) => string
  ShapeTagName?: (size: Sizes) => string
  onClick?: () => void
}
