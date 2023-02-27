import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FormDateReservation } from './index'
import { FormReservationProps } from './formdatereservation.interface'

const meta: Meta = {
  title: 'Organisms/FormDateReservation',
  component: FormDateReservation,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormReservationProps> = args => (
  <FormDateReservation {...args} />
)

export const FormReservationDate = Template.bind({})

FormReservationDate.args = {}
