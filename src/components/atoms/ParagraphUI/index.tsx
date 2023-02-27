import React from 'react'
import styled from 'styled-components'

type ParagraphProps = {
  children: React.ReactNode
  sx?: React.CSSProperties
}

export const ParagraphUI: React.FC<ParagraphProps> = ({ ...props }) => {
  return (
    <ParagraphUIWrapper style={props.sx}>{props.children}</ParagraphUIWrapper>
  )
}

const ParagraphUIWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
