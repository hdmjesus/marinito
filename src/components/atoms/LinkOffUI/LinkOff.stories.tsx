import React from 'react'
import { Meta, Story } from '@storybook/react'

import { LinkOffUI } from './index'
import { LinkOffProps } from './linkoff.interface'

const meta: Meta = {
  title: 'Atoms/LinkOffUI',
  component: LinkOffUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<LinkOffProps> = args => <LinkOffUI {...args}></LinkOffUI>

export const LinkOffDefault = Template.bind({})

LinkOffDefault.args = {
  children: 'Link Header'
}

export const LinkOffAlternative = Template.bind({})

LinkOffAlternative.args = {
  children: 'Link alternative',
  $textColor: theme => theme.palette.primary.main
}
