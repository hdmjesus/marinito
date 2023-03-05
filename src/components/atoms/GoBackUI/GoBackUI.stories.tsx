import React from 'react'
import { Meta, Story } from '@storybook/react'

import { GoBackUI, GoBackUIProps } from './index'

const meta: Meta = {
  title: 'Atoms/GoBackUI',
  component: GoBackUI,
  args: {}
}

export default meta

const Template: Story<GoBackUIProps> = args => <GoBackUI {...args} />

export const GoBackDefault = Template.bind({})

GoBackDefault.args = {
  nameSection: 'Perfil'
}
