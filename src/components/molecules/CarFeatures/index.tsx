import React from 'react'
import styled from 'styled-components'
import { GiGearStickPattern } from 'react-icons/gi'

import { KmIcon } from '@/icons/KmIcon'
import { CarClean } from '@/icons/CarClean'
import { BadgeUI } from '@/components/atoms/BadgeUI'

export interface CarFeaturesProps {
  column?: number
}

export const CarFeatures: React.FC<CarFeaturesProps> = ({ ...props }) => {
  return (
    <Features column={props.column}>
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
    </Features>
  )
}

export const Features = styled.div<CarFeaturesProps>`
  display: grid;
  width: 100%;
  max-width: 200px;
  gap: 10px;
  grid-row-gap: 0px;
  grid-template-columns: ${({ theme, column = 1 }) =>
    column == 1 ? '1fr' : column == 2 ? '1fr 1fr' : '1fr'}; ;
`
