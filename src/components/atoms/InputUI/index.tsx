import { useState } from 'react'

import { InputUIProps } from './input.interface'
import { InputContainer, InputWrapper } from './input.styles'
import { SizeType } from '@/interfaces/base.interface'
import { MdSearch } from 'react-icons/md'

export const InputUI: React.FC<InputUIProps> = ({ ...props }) => {
  const [passwordType, setPasswordType] = useState('password')

  const getInputFontSize = (size: SizeType) => {
    const options = {
      small: '12px',
      medium: '16px',
      large: '18px'
    }
    return options[size]
  }
  const getInputHeight = (size: SizeType) => {
    const options = {
      small: '25px',
      medium: '35px',
      large: '50px'
    }
    return options[size]
  }

  return (
    <InputContainer {...props} getInputFontSize={getInputFontSize}>
      {!props.hiddenLabel && (
        <label htmlFor={props.id}>{props.label || 'Label'}</label>
      )}
      <InputWrapper
        {...props}
        getInputFontSize={getInputFontSize}
        getInputHeight={getInputHeight}
      >
        {props.iconStart && (
          <span style={{ paddingLeft: '8px' }}>
            <MdSearch size={20} />
          </span>
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
