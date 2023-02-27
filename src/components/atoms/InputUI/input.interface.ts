import { BreakpointSizesType, Sizes } from '@/types/base.type'

export interface InputUIProps {
  getInputFontSize?: (size: Sizes) => string
  getInputHeight?: (size: Sizes) => string
  LabelfontSize?: number | BreakpointSizesType
  hiddenLabel?: boolean
  label?: string
  type?: React.HTMLInputTypeAttribute
  name?: string
  id?: string
  placeholder?: string
  disabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number | readonly string[]
  fullWidth?: boolean
  size?: Sizes
  border?: boolean
  iconStart?: React.ReactNode
}
