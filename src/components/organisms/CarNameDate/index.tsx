import React from 'react'
import styled from 'styled-components'

import { SetLocationDate } from '@/components/molecules/SetLocationDate'

export interface CarNameDateProps {
  children: React.ReactNode
}

export const CarNameDate: React.FC<CarNameDateProps> = ({ ...props }) => {
  return (
    <NameDateWrapper>
      <CarName>{props.children}</CarName>
      <SetLocationDate />
    </NameDateWrapper>
  )
}

const NameDateWrapper = styled.section``
const CarName = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 20px;
`
