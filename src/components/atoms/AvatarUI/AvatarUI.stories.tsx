import React from 'react'
import { MdSearch } from 'react-icons/md'

import { AvatarProps, AvatarUI } from './index'
import { Meta, Story } from '@storybook/react'

const meta: Meta = {
  title: 'Atoms/AvatarUI',
  component: AvatarUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<AvatarProps> = args => <AvatarUI {...args} />

export const AvatarSmall = Template.bind({})

AvatarSmall.args = {
  size: { xs: 50 }
}
export const AvatarLarge = Template.bind({})

AvatarLarge.args = {
  size: { md: 150 }
}
