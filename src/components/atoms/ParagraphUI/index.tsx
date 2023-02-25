import React from 'react'
import styled from 'styled-components'

type ParagraphProps = {
  children: React.ReactNode
}

export const ParagraphUI: React.FC<ParagraphProps> = ({ children }) => {
  return <ParagraphUIWrapper>{children}</ParagraphUIWrapper>
}

const ParagraphUIWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
