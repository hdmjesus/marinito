import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FormLocationReservation, FormLocationReservationProps } from './index'

const meta: Meta = {
  title: 'Organisms/FormDateReservation',
  component: FormLocationReservation,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormLocationReservationProps> = args => (
  <FormLocationReservation {...args} />
)

export const FormReservationDate = Template.bind({})

FormReservationDate.args = {}
