import React from 'react'
import { Meta, Story } from '@storybook/react'

import { TextUI } from './index'
import { TextProps } from './text.interface'

const meta: Meta = {
  title: 'Atoms/TextUI',
  component: TextUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<TextProps> = args => <TextUI {...args} />

export const TextPrimary = Template.bind({})

TextPrimary.args = { text: 'Texto Primario' }

export const TextSecondary = Template.bind({})

TextSecondary.args = {
  text: 'Texto secundario',
  $color: theme => theme.palette.text.secondary.main
}
