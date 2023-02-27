import React from 'react'
import { Meta, Story } from '@storybook/react'
import { FormLogin, FormLoginProps } from '.'

const meta: Meta = {
  title: 'Molecules/FormLogin',
  component: FormLogin,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<FormLoginProps> = args => <FormLogin {...args} />

export const FormLoginDefault = Template.bind({})

FormLoginDefault.args = {}
