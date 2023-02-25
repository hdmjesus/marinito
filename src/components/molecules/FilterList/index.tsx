import React from 'react'

import { TagName } from '@/components/atoms/TagName'
import { ListHorizontal } from '@/components/atoms/ListHorinzontal'

export interface FilterListProps {
  data?: any[]
  changeFilter?: (filter: string) => void
  filterCurrent?: string
}

export const FilterList: React.FC<FilterListProps> = ({
  data = []
}): React.ReactElement => {
  const renderItem = ({ item, index }: any) => (
    <TagName
      key={index}
      variant='default'
      fontWeight={700}
      fontSize={{
        xs: 14
      }}
      onClick={() => {}}
      size='medium'
      text={item}
    />
  )

  return <ListHorizontal data={data} renderItem={renderItem} />
}
