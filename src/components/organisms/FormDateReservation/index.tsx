import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

import Theme from '@/styles/theme.styles'
import { TextUI } from '@/components/atoms/TextUI'
import { InputUI } from '@/components/atoms/InputUI'
import { ButtonUI } from '@/components/atoms/ButtonUI'
import { FormWrapper } from './formdatereservation.styles'
import { FormReservationProps } from './formdatereservation.interface'

export const FormDateReservation: React.FC<FormReservationProps> = ({
  ...props
}) => {
  return (
    <FormWrapper>
      <TextUI
        text='Fecha'
        fontSize={{ xs: 20 }}
        $color={theme => theme.palette.common.white}
        fontWeight={700}
      />
      <InputUI
        size='large'
        label='Fecha de retiro'
        type='date'
        border
        fullWidth
        name='date'
        LabelfontSize={{ xs: 13 }}
        iconStart={<FaCalendarAlt color={Theme.palette.grey[400]} />}
      />

      <InputUI
        size='large'
        label='Fecha de entrega'
        type='date'
        border
        fullWidth
        name='date'
        LabelfontSize={{ xs: 13 }}
        iconStart={<FaCalendarAlt color={Theme.palette.grey[400]} />}
      />

      <InputUI
        size='large'
        label='Hora de retiro'
        type='time'
        border
        fullWidth
        name='date'
        LabelfontSize={{ xs: 13 }}
        iconStart={<FaClock color={Theme.palette.grey[400]} />}
      />
      <InputUI
        placeholder='Hora'
        size='large'
        label='Hora de entrega'
        type='time'
        border
        fullWidth
        name='date'
        LabelfontSize={{ xs: 13 }}
        iconStart={<FaClock color={Theme.palette.grey[400]} />}
      />

      <ButtonUI
        sx={{ marginTop: '20px', fontWeight: '700' }}
        color='secondary'
        label='Hecho'
        onClick={() => {}}
        shape='pill'
      />
    </FormWrapper>
  )
}
