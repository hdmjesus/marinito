import { LinkContainer } from './link.styles'
import { LinkUIProps } from './link.interface'
import { DefaultTheme } from 'styled-components'

export const LinkUI: React.FC<LinkUIProps> = ({ as, ...props }) => {
  const handleColor = (theme: Pick<DefaultTheme, 'palette'>) => {
    if (props.$textColor) {
      return props.$textColor(theme)
    } else {
      return theme.palette.common.white
    }
  }

  return (
    <LinkContainer
      fontSize={props.fontSize}
      $textColor={
        handleColor as string &
          ((theme: Pick<DefaultTheme, 'palette'>) => string)
      }
      {...props}
    >
      {props.children}
    </LinkContainer>
  )
}
