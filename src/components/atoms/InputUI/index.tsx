import { useState } from 'react'

import { InputUIProps } from './input.interface'
import { InputContainer, InputWrapper } from './input.styles'

import { TextUI } from '../TextUI'
import { Sizes } from '@/types/base.type'

export const InputUI: React.FC<InputUIProps> = ({ ...props }) => {
  const [passwordType, setPasswordType] = useState('password')

  const getInputFontSize = (size: Sizes) => {
    const options = {
      small: '12px',
      medium: '16px',
      large: '18px'
    }
    return options[size]
  }
  const getInputHeight = (size: Sizes) => {
    const options = {
      small: '25px',
      medium: '35px',
      large: '50px'
    }
    return options[size]
  }

  return (
    <InputContainer
      {...props}
      getInputFontSize={getInputFontSize}
      style={props.sx}
    >
      {!props.hiddenLabel && (
        // <label htmlFor={props.id}>{props.label || 'Label'}</label>
        <label htmlFor={props.id}>
          <TextUI
            text={props.label}
            $color={theme => theme.palette.common.white}
            fontSize={props.LabelfontSize}
          />
        </label>
      )}
      <InputWrapper
        {...props}
        getInputFontSize={getInputFontSize}
        getInputHeight={getInputHeight}
      >
        {props.iconStart && (
          <span style={{ paddingLeft: '8px' }}>{props.iconStart}</span>
        )}
        <input
          type={
            props.type === 'password'
              ? passwordType
              : props.type
              ? props.type
              : 'text'
          }
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
        />
        {props.type === 'password' && (
          <span
            style={{ paddingRight: '13px', cursor: 'pointer' }}
            onClick={() =>
              setPasswordType(passwordType === 'password' ? 'text' : 'password')
            }
          >
            {/* {passwordType === 'text' ? <ClosedEyeIcon /> : <OpenEyeIcon />} */}
          </span>
        )}
      </InputWrapper>
    </InputContainer>
  )
}
