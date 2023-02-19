import React from 'react'
import { Meta, Story } from '@storybook/react'
import { MdSearch } from 'react-icons/md'

import { InputUI } from './index'
import { InputUIProps } from './input.interface'

const meta: Meta = {
  title: 'Atoms/InputUI',
  component: InputUI,
  args: {}
}

export default meta

const Template: Story<InputUIProps> = args => <InputUI {...args} />

export const Input = Template.bind({})

Input.args = {
  label: 'Email',
  size: 'large',
  hiddenLabel: true,
  placeholder: 'Email',
  type: 'text',
  border: true,
  iconStart: <MdSearch size={20} color='#434343' />
}
