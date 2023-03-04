import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FeaturesCar } from './index'
import { FeaturesCarProps } from './featurescar.interface'

const meta: Meta = {
  title: 'Organisms/FeaturesCar',
  component: FeaturesCar,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FeaturesCarProps> = args => <FeaturesCar {...args} />

export const CarFeaturesDefault = Template.bind({})

CarFeaturesDefault.args = {
  price: 100,
  daysRent: 5
}
