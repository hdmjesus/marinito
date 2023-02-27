import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FormRecoveryProps, FormRecovery } from './index'

const meta: Meta = {
  title: 'Molecules/FormRecovery',
  component: FormRecovery,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormRecoveryProps> = args => <FormRecovery {...args} />

export const FormRecoveryDefault = Template.bind({})

FormRecoveryDefault.args = {}
