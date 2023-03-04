import React from 'react'
import Img from 'react-cool-img'

import { CardUI } from '@/components/atoms/CardUI'
import { TextUI } from '@/components/atoms/TextUI'
import { FigureCar, NotWrapper } from './carNotAvailable.styles'
import { CarNotAvailableProps } from './carNotAvailable.interface'

export const CarNotAvailable: React.FC<CarNotAvailableProps> = ({
  ...props
}) => {
  return (
    <NotWrapper>
      <CardUI shape='rounded' padding='medium'>
        <TextUI
          text='No disponible'
          $color={theme => theme.palette.common.black}
          fontWeight={700}
          fontSize={{ xs: 17 }}
          textAlign='center'
        />
        <FigureCar>
          <Img src={props.image} alt='Car' />
        </FigureCar>

        <TextUI
          sx={{ marginTop: '15px' }}
          tag='p'
          text={`Actualmente este vehiculo no se encuentra disponible , estara disponible para el dia 26 de febrero.`}
          $color={theme => theme.palette.common.black}
          fontWeight={300}
          fontSize={{ xs: 14 }}
        />
      </CardUI>
    </NotWrapper>
  )
}
