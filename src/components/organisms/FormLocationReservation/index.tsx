import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

import { InputUI } from '@/components/atoms/InputUI'
import { TextUI } from '@/components/atoms/TextUI'
import { ButtonUI } from '@/components/atoms/ButtonUI'

export interface FormLocationReservationProps {}

export const FormLocationReservation: React.FC<FormLocationReservationProps> =
  () => {
    return (
      <FormLocation>
        <FormContainter>
          <TextUI
            text='Lugar de entrega y devolución'
            fontSize={{ xs: 20 }}
            sx={{ marginBottom: '20px' }}
            $color={theme => theme.palette.common.white}
            fontWeight={700}
          />
          <InputUI
            size='medium'
            label='Lugar de entrega'
            type='text'
            border
            fullWidth
            name='date'
            LabelfontSize={{ xs: 13 }}
            iconStart={<MdLocationOn color='#434343' size={20} />}
          />

          <InputUI
            size='medium'
            label='Lugar de devolución'
            type='text'
            border
            fullWidth
            name='date'
            LabelfontSize={{ xs: 13 }}
            iconStart={<MdLocationOn color='#434343' size={20} />}
          />
        </FormContainter>
        <ButtonUI
          sx={{ fontWeight: '700' }}
          color='secondary'
          label='Hecho'
          onClick={() => {}}
          shape='pill'
        />
      </FormLocation>
    )
  }

const FormLocation = styled.div`
  display: flex;
  flex: 1;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
`

const FormContainter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
