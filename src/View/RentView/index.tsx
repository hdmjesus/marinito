import { ExploreCars } from '@/containers/Rent/ExploreCars'
import React from 'react'
import styled from 'styled-components'

interface RentViewProps {
  children: React.ReactNode
}
export const RentView: React.FC<RentViewProps> = ({ ...props }) => {
  return <ViewWrapper>{props.children}</ViewWrapper>
}

const ViewWrapper = styled.div``
