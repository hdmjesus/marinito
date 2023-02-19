import React from 'react'
import { Meta, Story } from '@storybook/react'
import { MdOutlinePlayCircleOutline } from 'react-icons/md'

import { BadgeUI } from './index'
import { BadgeProps } from './badge.interface'

const meta: Meta = {
  title: 'Atoms/BadgeUI',
  component: BadgeUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<BadgeProps> = args => <BadgeUI {...args} />
export const Badge = Template.bind({})
Badge.args = {
  size: 'small',
  fontWeight: 300,
  text: '2022',
  $color: theme => theme.palette.text.primary
}

export const BadgeOutlineWithIcon = Template.bind({})

BadgeOutlineWithIcon.args = {
  size: 'small',
  fontWeight: 300,
  text: 'Disponible',
  fontSize: { xs: 12 },
  $color: theme => theme.palette.text.primary,
  startIcon: <MdOutlinePlayCircleOutline color='#000' />
}
