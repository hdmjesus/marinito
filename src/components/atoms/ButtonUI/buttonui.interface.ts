import {
  BaseColorLinearType,
  BaseColorType,
  ButtonVariantType,
  ShapeType
} from '@/interfaces/base.interface'
import { Sizes } from '@/types/base.type'
import { HTMLAttributes } from 'react'

export interface ButtonUIProps extends HTMLAttributes<HTMLButtonElement> {
  sx?: React.CSSProperties
  bgLinear?: BaseColorLinearType
  label: string
  disabled?: boolean
  fullWidth?: boolean
  endIcon?: React.ReactNode
  children?: React.ReactNode
  btnRef?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
  startIcon?: React.ReactNode
  size?: Sizes
  shape?: ShapeType
  variant?: ButtonVariantType
  color?: BaseColorType
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
