import { Sizes } from '@/types/base.type'
import { TextUI } from '../TextUI'
import { TagProps } from './tagname.interface'
import { TagWrapper } from './tagname.styles'

export const TagName: React.FC<TagProps> = ({ ...props }) => {
  const ShapeTagName = (size: Sizes) => {
    const options = {
      small: '3px 7px',
      medium: '4px 8px',
      large: '8px 10px'
    }
    return options[size]
  }
  return (
    <TagWrapper {...props} style={props.sx} ShapeTagName={ShapeTagName}>
      {props.startIcon && <span>{props.startIcon}</span>}
      <TextUI
        tag='p'
        sx={{ margin: 0, userSelect: 'none' }}
        fontWeight={props.fontWeight ?? 700}
        fontSize={props.fontSize}
        text={props.text}
        $color={
          props.$color ? props.$color : theme => theme.palette.common.white
        }
      />
    </TagWrapper>
  )
}
