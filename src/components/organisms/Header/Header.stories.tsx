import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Header, HeaderProps } from './index'

const meta: Meta = {
  title: 'Organisms/Header',
  component: Header,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const HeaderLayout = Template.bind({})

HeaderLayout.args = {}
