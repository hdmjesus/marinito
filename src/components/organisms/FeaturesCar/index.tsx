import React from 'react'

import { GiGearStickPattern } from 'react-icons/gi'

import { TextUI } from '@/components/atoms/TextUI'
import { KmIcon } from '@/icons/KmIcon'
import { BadgeUI } from '@/components/atoms/BadgeUI'
import { CarClean } from '@/icons/CarClean'
import { ParagraphUI } from '@/components/atoms/ParagraphUI'
import { priceTotal } from '@/functions/CarRent'
import { FeaturesCarProps } from './featurescar.interface'
import { CarFeatures, DetailtCar, PriceCar } from './fetaurescar.styles'

export const FeaturesCar: React.FC<FeaturesCarProps> = ({
  ...props
}): React.ReactElement => {
  const totalPrice = priceTotal(props.price, props.daysRent)

  return (
    <DetailtCar>
      <CarFeatures>
        <BadgeUI
          $color={theme => theme.palette.common.black}
          fontSize={{
            xs: 10
          }}
          fontWeight={300}
          size='small'
          startIcon={<KmIcon />}
          text='Kilometros ilimitados'
        />
        <BadgeUI
          $color={theme => theme.palette.common.black}
          fontSize={{
            xs: 10
          }}
          fontWeight={300}
          size='small'
          startIcon={<CarClean />}
          text='Limpieza profesional'
        />
        <BadgeUI
          $color={theme => theme.palette.common.black}
          fontSize={{
            xs: 10
          }}
          fontWeight={300}
          size='small'
          startIcon={<GiGearStickPattern size={17} />}
          text='Automatico'
        />
      </CarFeatures>

      <PriceCar>
        <ParagraphUI>
          <TextUI
            tag='p'
            fontWeight={700}
            fontSize={{
              xs: 24
            }}
            text={`$${props.price}`}
            $color={theme => theme.palette.primary.main}
          />
          <TextUI
            fontSize={{
              xs: 12
            }}
            sx={{ marginLeft: '3px' }}
            tag='p'
            text='por dia'
            $color={theme => theme.palette.common.black}
          />
        </ParagraphUI>

        <ParagraphUI>
          <TextUI
            tag='p'
            fontSize={{
              xs: 12
            }}
            text='5 dias'
            $color={theme => theme.palette.common.black}
          />
          <TextUI
            fontSize={{
              xs: 12
            }}
            fontWeight={700}
            tag='p'
            text={`$${totalPrice}`}
            $color={theme => theme.palette.primary.main}
          />
          <TextUI
            tag='p'
            fontSize={{
              xs: 12
            }}
            text='total'
            $color={theme => theme.palette.common.black}
          />
        </ParagraphUI>
      </PriceCar>
    </DetailtCar>
  )
}
