import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FormLocationReservation, FormLocationReservationProps } from './index'

const meta: Meta = {
  title: 'Organisms/FormLocationReservation',
  component: FormLocationReservation,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormLocationReservationProps> = args => (
  <FormLocationReservation {...args} />
)

export const FormReservationLocation = Template.bind({})

FormReservationLocation.args = {}
