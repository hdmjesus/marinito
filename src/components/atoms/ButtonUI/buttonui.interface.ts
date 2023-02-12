import { BaseColorLinearType, BaseColorType, ButtonVariantType, ShapeType, SizeType } from '@/interfaces/base.interface'
import { HTMLAttributes } from 'react'


  export interface ButtonUIProps extends HTMLAttributes<HTMLButtonElement> {
    sx?: React.CSSProperties;
    bgLinear?: BaseColorLinearType
    label:string,
    disabled?: boolean
    fullWidth?: boolean
    endIcon?: React.ReactNode
    children?: React.ReactNode
    btnRef?:
      | ((instance: HTMLButtonElement | null) => void)
      | React.RefObject<HTMLButtonElement>
      | null
    startIcon?: React.ReactNode
    size?: SizeType
    shape?: ShapeType
    variant?: ButtonVariantType
    color?: BaseColorType
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }
  
}