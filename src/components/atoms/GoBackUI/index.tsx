import React from 'react'
import styled from 'styled-components'
import { MdArrowBackIosNew } from 'react-icons/md'
import { TextUI } from '../TextUI'

export interface GoBackUIProps {
  nameSection: string
}

export const GoBackUI: React.FC<GoBackUIProps> = ({ ...props }) => {
  return (
    <GoBackWrapper>
      <Icon>
        <MdArrowBackIosNew size={30} color='#fff' />
      </Icon>
      <TextUI text={props.nameSection} fontWeight={700} fontSize={{ xs: 20 }} />
    </GoBackWrapper>
  )
}

const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  user-select: none;
  cursor: pointer;
`
const Icon = styled.div``
