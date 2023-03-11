import { LinkUI } from '@/components/atoms/LinkUI'
import { TextUI } from '@/components/atoms/TextUI'
import { Logo } from '@/icons/Logo'
import React from 'react'
import styled from 'styled-components'

export type HeaderAuthProps = {}

export const HeaderAuth = ({ ...props }) => {
  return (
    <HeaderAuthComponent>
      <LogoWrapper>
        <Logo iconSize={100} />
        <LinkUI href='/'>Home</LinkUI>
      </LogoWrapper>

      <TextUI
        fontWeight={700}
        fontSize={{ xs: 17, md: 20 }}
        text='Seguridad y responsabilidad,
Renta con nosotros.'
      />

      <TextUI
        fontWeight={700}
        fontSize={{ xs: 17, md: 20 }}
        text='Marinito Renta Car'
        sx={{ marginTop: '20px' }}
        $color={theme => theme.palette.secondary.main}
      />
    </HeaderAuthComponent>
  )
}

export const HeaderAuthComponent = styled.div`
  padding: 20px;
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`
