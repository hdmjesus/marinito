import React from 'react'

import { TextUI } from '@/components/atoms/TextUI'
import { BadgeUI } from '@/components/atoms/BadgeUI'
import { IconAvailable } from '@/icons/IconAvailable'
import { AvailableWrapper } from './carAvailable.styles'
import { IconNotAvailable } from '@/icons/IconNotAvailable'
import { ParagraphUI } from '@/components/atoms/ParagraphUI'
import { CarAvailableProps } from './carAvailable.interface'

export const CarAvailable: React.FC<CarAvailableProps> = ({ ...props }) => {
  return (
    <AvailableWrapper>
      <TextUI
        text={props.modelCar}
        fontWeight={700}
        fontSize={{ xs: 18 }}
        $color={theme => theme.palette.common.black}
      />
      <ParagraphUI sx={{ marginTop: '10px' }}>
        <TextUI
          sx={{ marginRight: '5px' }}
          text={props.yearCar}
          fontSize={{ xs: 14 }}
          $color={theme => theme.palette.common.black}
        />
        {props.available ? (
          <BadgeUI
            startIcon={<IconAvailable />}
            text='Disponible'
            fontWeight={300}
            $color={theme => theme.palette.common.black}
            fontSize={{ xs: 10 }}
          />
        ) : (
          <BadgeUI
            startIcon={<IconNotAvailable />}
            text='No disponible'
            fontWeight={300}
            $color={theme => theme.palette.common.black}
            fontSize={{ xs: 10 }}
          />
        )}
      </ParagraphUI>
    </AvailableWrapper>
  )
}
