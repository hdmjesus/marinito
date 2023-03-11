import React from 'react'
import styled from 'styled-components'

import { CarRent } from '@/components/organisms/CarRent'

export interface RenderListCarProps {
  listCars: any
}

export const RenderListCar: React.FC<RenderListCarProps> = ({ ...props }) => {
  return (
    <ListWrapper>
      {props.listCars?.map((car, idx) => (
        <CarRent key={idx} variant='forRent' price={20} daysRent={5} />
      ))}
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin-top: 15px;
`
