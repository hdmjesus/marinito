import { LinkOffWrapper } from './linkoff.styles'

import { DefaultTheme } from 'styled-components'
import { LinkOffProps } from './linkoff.interface'

export const LinkOffUI: React.FC<LinkOffProps> = ({ as, ...props }) => {
  const handleColor = (theme: Pick<DefaultTheme, 'palette'>) => {
    if (props.$textColor) {
      return props.$textColor(theme)
    } else {
      return theme.palette.common.white
    }
  }

  return (
    <LinkOffWrapper
      fontSize={props.fontSize}
      $textColor={
        handleColor as string &
          ((theme: Pick<DefaultTheme, 'palette'>) => string)
      }
      {...props}
    >
      {props.children}
    </LinkOffWrapper>
  )
}
