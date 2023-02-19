import styled from 'styled-components'

import { InputUIProps } from './input.interface'

export const InputContainer = styled.div<InputUIProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  label {
    color: ${({ theme }) => theme.palette.grey[600]};
    font-weight: 700;
    font-size: ${({ size = 'medium', getInputFontSize }) =>
      getInputFontSize(size)};
  }
`

export const InputWrapper = styled.div<InputUIProps>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.palette.common.white};
  height: ${({ size = 'medium', getInputHeight }) =>
    getInputHeight && getInputHeight(size)};
  border: ${({ theme, border }) =>
    border && `2px solid ${theme.palette.primary.main}`};
  font-size: ${({ size = 'medium', getInputFontSize }) =>
    getInputFontSize && getInputFontSize(size)};

  input {
    color: ${({ theme }) => theme.palette.grey.A100};
    font-weight: 700;
    opacity: 0.58;
    border: none;
    border-radius: inherit;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
`
