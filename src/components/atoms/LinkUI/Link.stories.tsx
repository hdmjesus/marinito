import React from 'react'
import { Meta, Story } from '@storybook/react'

import { LinkUIProps } from './link.interface'
import { LinkUI } from './index'

const meta: Meta = {
  title: 'Atoms/LinkUI',
  component: LinkUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<LinkUIProps> = args => <LinkUI {...args}></LinkUI>

export const LinkDefault = Template.bind({})

LinkDefault.args = {
  children: 'Link Header',
  target: '_blank',
  href: 'https://www.google.com'
}

export const LinkAlternative = Template.bind({})

LinkAlternative.args = {
  children: 'Link alternative',
  target: '_blank',
  href: 'https://www.google.com',
  $textColor: theme => theme.palette.primary.main
}
