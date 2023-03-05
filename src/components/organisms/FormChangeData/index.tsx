import React from 'react'

import { BiKey } from 'react-icons/bi'
import Theme from '@/styles/theme.styles'
import { InputUI } from '@/components/atoms/InputUI'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { ButtonUI } from '@/components/atoms/ButtonUI'
import { ChangeDateForm } from './formChangeData.styles'
import { FormChangeDataProps } from './formChangeData.interface'

export const FormChangeData: React.FC<FormChangeDataProps> = ({ ...props }) => {
  return (
    <ChangeDateForm>
      <InputUI
        hiddenLabel
        size='medium'
        label='Telefono'
        placeholder='Telefono'
        type='number'
        border
        fullWidth
        name='phone'
        LabelfontSize={{ xs: 13 }}
        iconStart={<MdOutlinePhoneAndroid />}
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
      <InputUI
        placeholder='Confirmar contraseña'
        size='medium'
        hiddenLabel
        type='password'
        border
        fullWidth
        name='passwordConfirm'
        LabelfontSize={{ xs: 13 }}
        iconStart={<BiKey size={25} color={Theme.palette.grey[900]} />}
      />

      <ButtonUI
        fullWidth
        shape='pill'
        bgLinear='bgLinearSecondary'
        label='Guardar'
        onClick={() => {}}
      />
    </ChangeDateForm>
  )
}
