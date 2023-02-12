import { ThemeType } from '@/interfaces/theme.interface'
import { BreakpointSizesType, HtmlTags } from '@/types/base.type'



export interface TextProps {
  cn?: string
  tag?: HtmlTags
  textAlign?: string
  lineHeight?: number
  textTransform?: string
  textDecoration?: string
  sx?: React.CSSProperties
  text?: string | number
  fontWeight?: string | number
  fontSize?: number | BreakpointSizesType
  $color?: (theme: Pick<ThemeType, 'palette'>) => string
}

export type TextStyledProps = Omit<TextProps, 'cn' | 'sx'>
