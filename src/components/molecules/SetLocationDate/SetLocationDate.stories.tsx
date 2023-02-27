import { Meta, Story } from '@storybook/react'
import { SetLocationDate, setLocationProps } from '.'

const meta: Meta = {
  title: 'Molecules/SetLocationDate',
  component: SetLocationDate
}

export default meta

const Template: Story<setLocationProps> = args => <SetLocationDate {...args} />

export const SetLocationDateDefault = Template.bind({})

SetLocationDateDefault.args = {}
