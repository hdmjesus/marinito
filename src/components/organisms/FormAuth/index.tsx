import React, { useState } from 'react'
import styled from 'styled-components'

import { ParagraphUI } from '@/components/atoms/ParagraphUI'
import { TextUI } from '@/components/atoms/TextUI'
import { LinkOffUI } from '@/components/atoms/LinkOffUI'
import { ButtonUI } from '@/components/atoms/ButtonUI'

import { FormRecovery } from '@/components/molecules/FormRecovery'
import { FormRegister } from '@/components/molecules/FormRegister'
import { FormLogin } from '@/components/molecules/FormLogin'

export interface FormAuthProps {}

export const FormAuth: React.FC<FormAuthProps> = ({
  ...props
}): React.ReactElement => {
  const [form, setForm] = useState('login')

  return (
    <FormAuthWrapper>
      <FormContent>
        {form === 'login' && <FormLogin />}
        {form === 'recovery' && <FormRecovery />}
        {form === 'register' && <FormRegister />}
        <ActionWrapper>
          {form !== 'recovery' ? (
            <ParagraphUI sx={{ marginBottom: '10px' }}>
              <TextUI
                text='Haz olvidado tu contraseña?'
                fontSize={{ xs: 12 }}
              />
              <LinkOffUI
                onClick={() => setForm('recovery')}
                fontSize={{ xs: 12 }}
                $textColor={theme => theme.palette.secondary.main}
              >
                Recuperar
              </LinkOffUI>
            </ParagraphUI>
          ) : (
            <ParagraphUI sx={{ marginBottom: '10px' }}>
              <TextUI text='Ya me acorde de mi cuenta' fontSize={{ xs: 12 }} />
              <LinkOffUI
                onClick={() => setForm('login')}
                fontSize={{ xs: 12 }}
                $textColor={theme => theme.palette.secondary.main}
              >
                Iniciar sessión
              </LinkOffUI>
            </ParagraphUI>
          )}
          {form !== 'register' && (
            <ParagraphUI>
              <TextUI text='Aún no tiene cuenta' fontSize={{ xs: 12 }} />
              <LinkOffUI
                onClick={() => setForm('register')}
                fontSize={{ xs: 12 }}
                $textColor={theme => theme.palette.secondary.main}
              >
                registrese
              </LinkOffUI>
            </ParagraphUI>
          )}
        </ActionWrapper>
      </FormContent>

      <ButtonUI
        fullWidth
        shape='pill'
        bgLinear='bgLinearSecondary'
        label={
          form === 'recovery'
            ? 'Recuperar'
            : form === 'register'
            ? 'Registrar'
            : 'Iniciar sesión'
        }
        onClick={() => {}}
      />
    </FormAuthWrapper>
  )
}

const FormAuthWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 280px;
  gap: 20px;
`

const ActionWrapper = styled.div`
  padding: 0 10px;
`
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
