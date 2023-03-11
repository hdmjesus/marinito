import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HeaderAuth, HeaderAuthProps } from '.'

const meta: Meta = {
  title: 'Molecules/HeaderAuth',
  component: HeaderAuth,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<HeaderAuthProps> = args => <HeaderAuth {...args} />

export const FormRegisterDefault = Template.bind({})

FormRegisterDefault.args = {}
