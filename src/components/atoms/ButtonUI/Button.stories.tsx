import React from 'react'
import { ButtonUIProps } from './buttonui.interface'

import { ButtonUI } from './index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = {
  title: 'Atoms/ButtonUI',
  component: ButtonUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<ButtonUIProps> = args => <ButtonUI {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Default Button'
}

export const Secondary = Template.bind({})

Secondary.args = {
  color: 'secondary',
  label: 'secondary Button'
}

export const PrimaryLinearColor = Template.bind({})

PrimaryLinearColor.args = {
  label: 'Linear gradient Button',
  bgLinear: 'bgLinearPrimary'
}

export const SecondaryLinearColor = Template.bind({})

SecondaryLinearColor.args = {
  label: 'Linear gradient Button',
  bgLinear: 'bgLinearSecondary'
}
export const CancelReservation = Template.bind({})

CancelReservation.args = {
  label: 'Cancelar reserva',
  color: 'error'
}
