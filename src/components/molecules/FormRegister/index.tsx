import React from 'react'
import { BiKey, BiUser } from 'react-icons/bi'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

import { InputUI } from '@/components/atoms/InputUI'
import { EmailISymbolIcon } from '@/icons/EmailISymbolIcon'
import Theme from '@/styles/theme.styles'

export interface FormRegisterProps {}

export const FormRegister: React.FC<FormRegisterProps> =
  (): React.ReactElement => {
    return (
      <>
        <InputUI
          hiddenLabel
          size='medium'
          placeholder='Nombre'
          type='text'
          border
          fullWidth
          name='name'
          LabelfontSize={{ xs: 13 }}
          iconStart={<BiUser size={25} />}
        />
        <InputUI
          hiddenLabel
          size='medium'
          placeholder='Apellido'
          type='text'
          border
          fullWidth
          name='lastname'
          LabelfontSize={{ xs: 13 }}
          iconStart={<BiUser size={25} />}
        />
        <InputUI
          hiddenLabel
          size='medium'
          placeholder='Telefono'
          type='number'
          border
          fullWidth
          name='phone'
          LabelfontSize={{ xs: 13 }}
          iconStart={<MdOutlinePhoneAndroid size={25} />}
        />

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
          placeholder='Repetir contraseña'
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
