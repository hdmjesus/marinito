import { LinkUI } from '@/components/atoms/LinkUI'
import { Logo } from '@/icons/Logo'
import React from 'react'

import { BsSearch } from 'react-icons/bs'
import { HeaderWrapper, NavWrapper } from './header.styles'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <HeaderWrapper>
      <Logo iconSize={50} stroke='#fff' />
      <NavWrapper>
        <LinkUI href='/autenticacion' fontSize={{ xs: 12, md: 15 }}>
          Iniciar
        </LinkUI>
        <BsSearch size={20} color='#ffff' />
      </NavWrapper>
    </HeaderWrapper>
  )
}
