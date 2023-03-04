import { Meta, Story } from '@storybook/react'
import { PreOrder, PreOrderProps } from '.'

const meta: Meta = {
  title: 'Molecules/PreOrder',
  component: PreOrder
}

export default meta

const Template: Story<PreOrderProps> = args => <PreOrder {...args} />

export const Default = Template.bind({})

Default.args = {}
