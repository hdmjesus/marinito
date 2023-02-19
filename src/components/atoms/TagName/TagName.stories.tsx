import React from 'react'
import { Meta, Story } from '@storybook/react'

import { TagProps } from './tagname.interface'
import { TagName } from './index'

const meta: Meta = {
  title: 'Atoms/TagName',
  component: TagName,
  args: {
    // label: 'Default Value'
  }
}

export default meta

const Template: Story<TagProps> = args => <TagName {...args} />

export const TagDefault = Template.bind({})

TagDefault.args = {
  text: 'Todos',
  size: 'medium',
  fontSize: { xs: 14 }
}
