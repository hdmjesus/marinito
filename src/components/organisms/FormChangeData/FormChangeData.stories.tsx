import { Meta, Story } from '@storybook/react'

import { FormChangeData } from '.'
import { FormChangeDataProps } from './formChangeData.interface'

const meta: Meta = {
  title: 'Organisms/FormChangeData',
  component: FormChangeData
}

export default meta

export const Template: Story<FormChangeDataProps> = args => (
  <FormChangeData {...args} />
)

export const FormDefault = Template.bind({})

FormDefault.args = {}
