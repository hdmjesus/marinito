import React from 'react'
import { Meta, Story } from '@storybook/react'

import { CarFeatures, CarFeaturesProps } from './index'

const meta: Meta = {
  title: 'Molecules/CarFeatures',
  component: CarFeatures,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<CarFeaturesProps> = args => <CarFeatures {...args} />

export const CarFeaturesDefault = Template.bind({})

CarFeaturesDefault.args = {
  column: 1
}

export const CarFeaturesTwoColumns = Template.bind({})

CarFeaturesTwoColumns.args = {
  column: 2
}
