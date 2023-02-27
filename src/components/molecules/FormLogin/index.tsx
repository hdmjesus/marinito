import React from 'react'
import { BiKey } from 'react-icons/bi'
import { InputUI } from '@/components/atoms/InputUI'

import { EmailISymbolIcon } from '@/icons/EmailISymbolIcon'
import Theme from '@/styles/theme.styles'

export interface FormLoginProps {}

export const FormLogin: React.FC<FormLoginProps> = (): React.ReactElement => {
  return (
    <>
      <InputUI
        hiddenLabel
        size='medium'
        label='Correo'
        placeholder='Correo'
        type='email'
        border
        fullWidth
        name='email'
        LabelfontSize={{ xs: 13 }}
        iconStart={<EmailISymbolIcon />}
      />
      <InputUI
        placeholder='Contraseña'
        size='medium'
        hiddenLabel
        label='Contraseña'
        type='password'
        border
        fullWidth
        name='password'
        LabelfontSize={{ xs: 13 }}
        iconStart={<BiKey size={25} color={Theme.palette.grey[900]} />}
      />
    </>
  )
}
