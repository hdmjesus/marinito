import { TextUI } from '../TextUI'
import { BadgeStyled } from './badge.styles'
import { BadgeProps } from './badge.interface'

export const BadgeUI: React.FC<BadgeProps> = ({ ...props }) => {
  return (
    <BadgeStyled {...props} style={props.sx}>
      {props.startIcon && <span>{props.startIcon}</span>}
      {props.text && (
        <TextUI
          sx={{ margin: 0 }}
          fontWeight={props.fontWeight ?? 700}
          fontSize={props.fontSize}
          text={props.text}
          $color={props.$color ? props.$color : props.bgColor}
        />
      )}

      {props.endIcon && <span>{props.endIcon}</span>}
    </BadgeStyled>
  )
}
