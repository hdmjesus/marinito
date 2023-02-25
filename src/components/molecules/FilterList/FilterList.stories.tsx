import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FilterList, FilterListProps } from './index'

const meta: Meta = {
  title: 'Molecules/FilterList',
  component: FilterList,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FilterListProps> = args => <FilterList {...args} />

export const FilterListDefault = Template.bind({})

FilterListDefault.args = {
  data: [
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
  ]
}
