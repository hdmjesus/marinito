import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Filter, FiltersProps } from './index'
import { FilterList } from '@/components/molecules/FilterList'

const meta: Meta = {
  title: 'Organisms/Filter',
  component: Filter,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FiltersProps> = args => <Filter {...args} />

export const Filters = Template.bind({})

Filters.args = {
  children: (
    <>
      <FilterList
        data={[
          'Todos',
          'Sedan',
          'SUV',
          'Hatchback',
          'Coupe',
          'Convertible',
          'Wagon',
          'Minivan',
          'Pickup',
          'Hybrid',
          'Electric',
          'Diesel',
          'Crossover',
          'Luxury'
        ]}
      />
      <FilterList
        data={['Todos', 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]}
      />
      <FilterList data={['Todos', 'Disponibles', 'No disponibles']} />
    </>
  )
}
