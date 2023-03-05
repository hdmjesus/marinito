import { Meta, Story } from '@storybook/react'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

import { MenuNavigator } from '.'
import { MenuNavigatorProps } from './menuNavigator.interface'

const meta: Meta = {
  title: 'Molecules/MenuNavigator',
  component: MenuNavigator
}

export default meta

const Template: Story<MenuNavigatorProps> = args => <MenuNavigator {...args} />

export const MenuNavigatorDefault = Template.bind({})

MenuNavigatorDefault.args = {
  iconMenu: <MdOutlinePhoneAndroid color='#fff' size={20} />,
  contentMenu: 'Datos'
}
