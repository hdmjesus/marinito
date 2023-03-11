import React from 'react'
import styled from 'styled-components'

import { AuthForm } from '@/containers/Auth/AuthForm'
import { HeaderAuth } from '@/components/molecules/HeaderAuth'

export const AuthView = ({ ...props }) => {
  return (
    <ViewWrapper>
      <HeaderAuth />
      <Center>
        <AuthForm />
      </Center>
    </ViewWrapper>
  )
}

const ViewWrapper = styled.div`
  height: 100vh;
`
const Center = styled.div`
  width: fit-content;
  margin: 0 auto;
`
