import { Meta, Story } from '@storybook/react'

import { CarRent } from '.'
import { CarRentProps } from './carrent.interface'

const meta: Meta = {
  title: 'Organisms/CarRent',
  args: {
    image: 'https://picsum.photos/400/300?car'
  }
}

export default meta

const Template: Story<CarRentProps> = args => <CarRent {...args} />

export const CarRentForRent = Template.bind({})

CarRentForRent.args = {
  name: 'Honda Civic',
  year: '2015',
  price: 100,
  daysRent: 5,
  variant: 'forRent'
}

export const carRentNow = Template.bind({})

carRentNow.args = {
  name: 'Honda Civic',
  year: '2015',
  dateDelivery: '12/12/2021',
  timeDelivery: '12:00',
  variant: 'rent'
}
