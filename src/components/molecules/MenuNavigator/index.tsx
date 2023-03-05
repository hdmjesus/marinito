import React from 'react'

import { CardUI } from '@/components/atoms/CardUI'
import { LinkUI } from '@/components/atoms/LinkUI'
import { TextUI } from '@/components/atoms/TextUI'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { ParagraphUI } from '@/components/atoms/ParagraphUI'
import { MenuNavigatorProps } from './menuNavigator.interface'
import { Icon, NavigartorWrapper } from './menuNavigator.styles'

export const MenuNavigator: React.FC<MenuNavigatorProps> = ({ ...props }) => {
  return (
    <NavigartorWrapper>
      <LinkUI href={'/'}>
        <CardUI
          shape='rounded'
          bgColor={theme => theme.palette.primary.dark}
          padding='medium'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <ParagraphUI sx={{ alignItems: 'center' }}>
            <Icon>{props.iconMenu}</Icon>
            <TextUI
              tag='span'
              text={props.contentMenu}
              fontWeight={700}
              fontSize={{ xs: 15 }}
            />
          </ParagraphUI>
          <Icon>
            <MdOutlineArrowForwardIos color='#fff' size={25} />
          </Icon>
        </CardUI>
      </LinkUI>
    </NavigartorWrapper>
  )
}
