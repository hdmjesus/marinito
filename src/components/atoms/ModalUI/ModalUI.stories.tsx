import React from 'react'
import { Meta, Story } from '@storybook/react'

import { ModalUI } from './index'
import NonSSRWrapper from '@/layout/NonSSRWrapper'
import { ModalUIProps } from './modalUI.interface'

const meta: Meta = {
  title: 'Atoms/ModalUI',
  component: ModalUI
}

export default meta

const Template: Story<ModalUIProps> = args => (
  <NonSSRWrapper>
    <ModalUI {...args}></ModalUI>
  </NonSSRWrapper>
)

export const Modal = Template.bind({})

Modal.args = {}
