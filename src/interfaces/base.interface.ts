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

export interface DeliveryCarProps {
  dateDelivery?: string
  timeDelivery?: string
}

export type ShapeType = 'square' | 'rounded' | 'pill'
export type statusCar = 'forRent' | 'rent'
export type ButtonVariantType = 'text' | 'contained' | 'outlined'
export type ButtonShapeType = 'square' | 'rounded' | 'half-pill' | 'pill'
export type ShadownType = 'small' | 'default' | 'large'
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
