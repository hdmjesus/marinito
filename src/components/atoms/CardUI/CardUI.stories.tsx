import React from 'react'
import { Meta, Story } from '@storybook/react'

import { CardUIProps } from './card.interface'
import { CardUI } from './index'

const meta: Meta = {
  title: 'Atoms/CardUI',
  component: CardUI,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<CardUIProps> = args => <CardUI {...args} />

export const Card = Template.bind({})

Card.args = {
  children: 'Conteúdo',
  padding: 'medium',
  shape: 'rounded',
  shadown: 'large',
  maxWidth: '400px'
}
