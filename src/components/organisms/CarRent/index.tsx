import React from 'react'

import Img from 'react-cool-img'

import { FeaturesCar } from '../FeaturesCar'
import { DetailsRentCar } from '../DetailsRentCar'
import { CardUI } from '@/components/atoms/CardUI'
import { TextUI } from '@/components/atoms/TextUI'
import { CarRentProps } from './carrent.interface'
import { Car, CardFigure, CarWrapper, Content } from './carrent.styles'

export const CarRent: React.FC<CarRentProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <CarWrapper>
      <CardUI shape='rounded' padding='medium'>
        <Content>
          <Car>
            <CardFigure>
              <Img src={props.image} />
            </CardFigure>
            <TextUI
              tag='p'
              sx={{ margin: 0, marginTop: '10px' }}
              fontWeight={700}
              fontSize={{
                xs: 14
              }}
              $color={theme => theme.palette.common.black}
              text='Honda Civic'
            />
            <TextUI
              tag='p'
              fontSize={{
                xs: 12
              }}
              sx={{ marginTop: '3px' }}
              text='Año 2015'
              $color={theme => theme.palette.common.black}
            />
          </Car>

          {props.variant === 'forRent' ? (
            <FeaturesCar {...props} />
          ) : (
            <DetailsRentCar
              dateDelivery={props.dateDelivery}
              timeDelivery={props.timeDelivery}
            />
          )}
        </Content>
      </CardUI>
    </CarWrapper>
  )
}
