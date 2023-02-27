import { MdLocationOn } from 'react-icons/md'
import { FaCalendarAlt } from 'react-icons/fa'
import React from 'react'

import { ButtonUI } from '@/components/atoms/ButtonUI'

import styled from 'styled-components'

export interface setLocationProps {}

export const SetLocationDate: React.FC<setLocationProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Location>
      <ButtonUI
        label='Entrega y devolución'
        size='small'
        onClick={() => {}}
        startIcon={<MdLocationOn color='#434343' size={20} />}
        variant='outlined'
        shape='pill'
      />
      <ButtonUI
        label='Fecha'
        size='small'
        onClick={() => {}}
        startIcon={<FaCalendarAlt color='#434343' size={20} />}
        variant='outlined'
        shape='pill'
      />
    </Location>
  )
}

const Location = styled.div`
  display: flex;
  gap: 10px;
`
