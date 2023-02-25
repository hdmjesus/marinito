import React from 'react'

import { Reservation, DetailtCar } from './detaillrentcar.styles'
import { TextUI } from '@/components/atoms/TextUI'
import { ButtonUI } from '@/components/atoms/ButtonUI'
import { DeliveryCarProps } from '@/interfaces/base.interface'

export const DetailsRentCar: React.FC<DeliveryCarProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <DetailtCar>
      <Reservation>
        <TextUI
          tag='p'
          text='Fecha de entrega'
          fontWeight={700}
          fontSize={{
            xs: 14
          }}
          $color={theme => theme.palette.secondary.dark}
        />
        <TextUI
          text={props.dateDelivery}
          tag='p'
          sx={{ margin: 0, marginTop: '4px' }}
          fontWeight={300}
          fontSize={{
            xs: 14
          }}
          $color={theme => theme.palette.common.black}
        />
        <TextUI
          tag='p'
          text='Hora de entrega'
          fontWeight={700}
          sx={{ margin: 0, marginTop: '4px' }}
          fontSize={{
            xs: 14
          }}
          $color={theme => theme.palette.secondary.dark}
        />
        <TextUI
          text={props.timeDelivery}
          tag='p'
          sx={{ margin: 0, marginTop: '4px' }}
          fontWeight={300}
          fontSize={{
            xs: 14
          }}
          $color={theme => theme.palette.common.black}
        />
      </Reservation>
      <ButtonUI
        color='error'
        label='Cancelar reserva'
        onClick={() => {}}
        shape='pill'
        size='small'
      />
    </DetailtCar>
  )
}
