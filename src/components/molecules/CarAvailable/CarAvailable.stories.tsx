import { Meta, Story } from '@storybook/react'

import { CarAvailable } from '.'
import { CarAvailableProps } from './carAvailable.interface'

const meta: Meta = {
  title: 'Molecules/CarAvailable',
  component: CarAvailable
}
export default meta

const Template: Story<CarAvailableProps> = args => <CarAvailable {...args} />

export const CarAvailableForRent = Template.bind({})

CarAvailableForRent.args = {
  modelCar: 'Audi A3',
  yearCar: '2019',
  available: true
}

export const CarNotAvailable = Template.bind({})

CarNotAvailable.args = {
  modelCar: 'Audi A3',
  yearCar: '2019',
  available: false
}
