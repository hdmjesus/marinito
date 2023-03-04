import { Meta, Story } from '@storybook/react'

import { ProfileInfo } from '.'
import { ProfileInfoProps } from './profileInfo.interface'

const meta: Meta = {
  title: 'Organisms/ProfileInfo',
  args: {}
}

export default meta

const Template: Story<ProfileInfoProps> = args => <ProfileInfo {...args} />

export const ProfileInfoDefault = Template.bind({})

ProfileInfoDefault.args = {}
