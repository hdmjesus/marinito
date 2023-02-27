import React from 'react'
import { Meta, Story } from '@storybook/react'

import { FormAuth, FormAuthProps } from './index'

const meta: Meta = {
  title: 'Organisms/FormAuth',
  component: FormAuth,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormAuthProps> = args => <FormAuth {...args} />

export const FormLogin = Template.bind({})

FormLogin.args = {}
