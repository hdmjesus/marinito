import { SizeType } from '@/interfaces/base.interface'

export interface InputUIProps {
  getInputFontSize?: (size: SizeType) => string
  getInputHeight?: (size: SizeType) => string
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
  size?: SizeType
  border?: boolean
  iconStart?: React.ReactNode
}
