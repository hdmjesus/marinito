import React from 'react'

import { RentView } from '@/View/RentView'
import { Container } from '@/styles/container.styles'
import { FilterSearch } from '../FiltersData/FiltersSearch'
import { RenderListCar } from '@/components/molecules/RenderListCar'
import { SetLocationDate } from '@/components/molecules/SetLocationDate'

export const ExploreCars = ({ ...props }) => {
  return (
    <RentView>
      <FilterSearch />
      <Container>
        <SetLocationDate />
        <RenderListCar listCars={[1, 2, 3, 4]} />
      </Container>
    </RentView>
  )
}
