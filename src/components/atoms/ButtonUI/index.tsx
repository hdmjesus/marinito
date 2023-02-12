import { FC, ReactElement } from 'react'

import { ButtonUIProps } from './buttonui.interface'
import { ButtonContainer } from './buttonui.styles'

export const ButtonUI: FC<ButtonUIProps> = ({
  children,
  ...props
}): ReactElement => {
  return (
    <ButtonContainer {...props}>
      {props.startIcon && (
        <span className='button-startIcon'>{props.startIcon}</span>
      )}
      {props.label}
      {props.endIcon && <span className='button-endIcon'>{props.endIcon}</span>}
    </ButtonContainer>
  )
}
