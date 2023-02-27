import React from 'react'
import { Meta, Story } from '@storybook/react'
import { FormRegister, FormRegisterProps } from '.'

const meta: Meta = {
  title: 'Molecules/FormRegister',
  component: FormRegister,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormRegisterProps> = args => <FormRegister {...args} />

export const FormRegisterDefault = Template.bind({})

FormRegisterDefault.args = {}
