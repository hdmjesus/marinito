import styled from 'styled-components'
import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FaCalendarAlt } from 'react-icons/fa'

import { ButtonUI } from '@/components/atoms/ButtonUI'
import { ModalUI } from '@/components/atoms/ModalUI'
import { FormLocationDate } from '@/containers/Rent/FormLocationDate'

export interface setLocationProps {}

export const SetLocationDate: React.FC<setLocationProps> = ({
  ...props
}): React.ReactElement => {
  const [openModal, setModalOpen] = useState(false)
  const [formType, setForm] = useState('')
  return (
    <Location>
      <ButtonUI
        label='Entrega y devolución'
        size='small'
        onClick={() => {
          setModalOpen(true)
          setForm('location')
        }}
        startIcon={<MdLocationOn color='#434343' size={20} />}
        variant='outlined'
        shape='pill'
      />
      <ButtonUI
        label='Fecha'
        size='small'
        onClick={() => {
          setModalOpen(true)
          setForm('date')
        }}
        startIcon={<FaCalendarAlt color='#434343' size={20} />}
        variant='outlined'
        shape='pill'
      />
      {openModal && (
        <ModalUI
          onClose={() => setModalOpen(false)}
          open={openModal}
          titleModal=''
        >
          <FormLocationDate formType={formType} />
        </ModalUI>
      )}
    </Location>
  )
}

const Location = styled.div`
  display: flex;
  gap: 10px;
`
