import React from 'react'
import styled from 'styled-components'

interface ListHorizontalProps {
  renderItem: ({ item, index }: { item: any; index: number }) => React.ReactNode
  data: any[]
}

export const ListHorizontal: React.FC<ListHorizontalProps> = ({
  renderItem,
  data
}) => {
  return <List>{data?.map((item, index) => renderItem({ item, index }))}</List>
}

const List = styled.div`
  display: flex;
  gap: 5px;
  white-space: nowrap;
  width: 100%;
  position: relative;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
