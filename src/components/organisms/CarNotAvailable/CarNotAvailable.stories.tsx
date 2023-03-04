import { Meta, Story } from '@storybook/react'

import { CarNotAvailable } from '.'
import { CarNotAvailableProps } from './carNotAvailable.interface'

const meta: Meta = {
  title: 'Organisms/CarNotAvailable',
  component: CarNotAvailable,
  args: {
    src: '/images/carUse.svg'
  }
}

export default meta

const Template: Story<CarNotAvailableProps> = args => (
  <CarNotAvailable {...args} />
)

export const Default = Template.bind({})

Default.args = {}
