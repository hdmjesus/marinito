import { GetServerSidePropsContext } from 'next'

export interface RedirectInterface {
  ctx: GetServerSidePropsContext
  location: string
  status?: number
}

export interface IconProps {
  iconSize?: string | number
  fill?: string
  stroke?: string
  height?: string | number
  width?: string | number
}

export type SizeType = 'small' | 'medium' | 'large'
export type ShapeType = 'square' | 'rounded' | 'pill'
export type ButtonVariantType = 'text' | 'contained' | 'outlined' | 'borders'
export type ButtonShapeType = 'square' | 'rounded' | 'half-pill' | 'pill'
export type BaseColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

export type BaseColorLinearType =
  | 'bgLinearPrimary'
  | 'bgLinearSecondary'
  | 'null'
