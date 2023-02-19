import { ShapeType } from '@/interfaces/base.interface'
import { Sizes } from '@/types/base.type'
import { DefaultTheme } from 'styled-components'
import { CardUIProps } from './card.interface'
import { CardHeader, CardWrapper } from './card.styles'

export const getCardPadding = (size: Sizes) => {
  const options = {
    small: '4px 10px',
    medium: '27px 24px',
    large: '35px 25px'
  }
  return options[size]
}

export const getCardShape = (shape: ShapeType) => {
  const options = {
    pill: '40px',
    rounded: '10px',
    square: '0'
  }
  return options[shape]
}

export const CardUI: React.FC<CardUIProps> = ({ ...props }) => {
  const handleColor = (theme: Pick<DefaultTheme, 'palette'>) => {
    if (props.bgColor) {
      return props.bgColor(theme)
    } else {
      return theme.palette.common.white
    }
  }

  return (
    <CardWrapper
      getCardShape={getCardShape}
      getCardPadding={getCardPadding}
      style={props.sx}
      className={props.cn}
      bgColor={
        handleColor as string &
          ((theme: Pick<DefaultTheme, 'palette'>) => string)
      }
      {...props}
    >
      {props.header && (
        <CardHeader
          getCardShape={getCardShape}
          getCardPadding={getCardPadding}
          {...props}
        >
          {props.headerTitle || 'Título'}
        </CardHeader>
      )}
      {props.children}
    </CardWrapper>
  )
}
